import{aK as fe,aa as pe,ab as ye,l as ge,e as ae,m as be,W as ve,u as me}from"./vue-chunks-4Zb-T7Ga.js";import{p as h}from"./index-rIQ0jc2Y.js";var ce={exports:{}};(function(u,U){(function(T,I){u.exports=I(fe)})(pe,function(T){return function(){var I={789:function(f){f.exports=T}},Q={};function N(f){var k=Q[f];if(k!==void 0)return k.exports;var b=Q[f]={exports:{}};return I[f](b,b.exports,N),b.exports}N.d=function(f,k){for(var b in k)N.o(k,b)&&!N.o(f,b)&&Object.defineProperty(f,b,{enumerable:!0,get:k[b]})},N.o=function(f,k){return Object.prototype.hasOwnProperty.call(f,k)},N.r=function(f){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})};var K={};return function(){function f(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}function k(e,t){if(e){if(typeof e=="string")return f(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set"?Array.from(e):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?f(e,t):void 0}}function b(e){return function(t){if(Array.isArray(t))return f(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||k(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function v(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}N.r(K),N.d(K,{default:function(){return se}});var r=N(789),$=(0,r.defineComponent)({props:{data:{required:!0,type:String},onClick:Function},render:function(){var e=this.data,t=this.onClick;return(0,r.createVNode)("span",{class:"vjs-tree-brackets",onClick:t},[e])}}),ie=(0,r.defineComponent)({emits:["change","update:modelValue"],props:{checked:{type:Boolean,default:!1},isMultiple:Boolean,onChange:Function},setup:function(e,t){var o=t.emit;return{uiType:(0,r.computed)(function(){return e.isMultiple?"checkbox":"radio"}),model:(0,r.computed)({get:function(){return e.checked},set:function(a){return o("update:modelValue",a)}})}},render:function(){var e=this.uiType,t=this.model,o=this.$emit;return(0,r.createVNode)("label",{class:["vjs-check-controller",t?"is-checked":""],onClick:function(a){return a.stopPropagation()}},[(0,r.createVNode)("span",{class:"vjs-check-controller-inner is-".concat(e)},null),(0,r.createVNode)("input",{checked:t,class:"vjs-check-controller-original is-".concat(e),type:e,onChange:function(){return o("change",t)}},null)])}}),ue=(0,r.defineComponent)({props:{nodeType:{required:!0,type:String},onClick:Function},render:function(){var e=this.nodeType,t=this.onClick,o=e==="objectStart"||e==="arrayStart";return o||e==="objectCollapsed"||e==="arrayCollapsed"?(0,r.createVNode)("span",{class:"vjs-carets vjs-carets-".concat(o?"open":"close"),onClick:t},[(0,r.createVNode)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},[(0,r.createVNode)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"},null)])]):null}});function Y(e){return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(e)}function G(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function D(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"root",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0,y=a||{},C=y.key,V=y.index,p=y.type,O=p===void 0?"content":p,m=y.showComma,L=m!==void 0&&m,P=y.length,E=P===void 0?1:P,A=G(e);if(A==="array"){var H=Z(e.map(function(S,d,n){return D(S,"".concat(t,"[").concat(d,"]"),o+1,{index:d,showComma:d!==n.length-1,length:E,type:O})}));return[D("[",t,o,{showComma:!1,key:C,length:e.length,type:"arrayStart"})[0]].concat(H,D("]",t,o,{showComma:L,length:e.length,type:"arrayEnd"})[0])}if(A==="object"){var B=Object.keys(e),M=Z(B.map(function(S,d,n){return D(e[S],/^[a-zA-Z_]\w*$/.test(S)?"".concat(t,".").concat(S):"".concat(t,'["').concat(S,'"]'),o+1,{key:S,showComma:d!==n.length-1,length:E,type:O})}));return[D("{",t,o,{showComma:!1,key:C,index:V,length:B.length,type:"objectStart"})[0]].concat(M,D("}",t,o,{showComma:L,length:B.length,type:"objectEnd"})[0])}return[{content:e,level:o,key:C,index:V,path:t,showComma:L,length:E,type:O}]}function Z(e){if(typeof Array.prototype.flat=="function")return e.flat();for(var t=b(e),o=[];t.length;){var a=t.shift();Array.isArray(a)?t.unshift.apply(t,b(a)):o.push(a)}return o}function z(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new WeakMap;if(e==null)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if(Y(e)!=="object")return e;if(t.get(e))return t.get(e);if(Array.isArray(e)){var o=e.map(function(C){return z(C,t)});return t.set(e,o),o}var a={};for(var y in e)a[y]=z(e[y],t);return t.set(e,a),a}function X(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(y){return Object.getOwnPropertyDescriptor(e,y).enumerable})),o.push.apply(o,a)}return o}function _(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?X(Object(o),!0).forEach(function(a){v(e,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):X(Object(o)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))})}return e}var ee={showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},renderNodeKey:Function,renderNodeValue:Function,selectableType:String,showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},nodeSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},showKeyValueSpace:{type:Boolean,default:!0},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"},onNodeClick:{type:Function},onBracketsClick:{type:Function},onIconClick:{type:Function},onValueChange:{type:Function}},de=(0,r.defineComponent)({name:"TreeNode",props:_(_({},ee),{},{node:{type:Object,required:!0},collapsed:Boolean,checked:Boolean,style:Object,onSelectedChange:{type:Function}}),emits:["nodeClick","bracketsClick","iconClick","selectedChange","valueChange"],setup:function(e,t){var o=t.emit,a=(0,r.computed)(function(){return G(e.node.content)}),y=(0,r.computed)(function(){return"vjs-value vjs-value-".concat(a.value)}),C=(0,r.computed)(function(){return e.showDoubleQuotes?'"'.concat(e.node.key,'"'):e.node.key}),V=(0,r.computed)(function(){return e.selectableType==="multiple"}),p=(0,r.computed)(function(){return e.selectableType==="single"}),O=(0,r.computed)(function(){return e.nodeSelectable(e.node)&&(V.value||p.value)}),m=(0,r.reactive)({editing:!1}),L=function(d){var n,l,c=(l=(n=d.target)===null||n===void 0?void 0:n.value)==="null"?null:l==="undefined"?void 0:l==="true"||l!=="false"&&(l[0]+l[l.length-1]==='""'||l[0]+l[l.length-1]==="''"?l.slice(1,-1):typeof Number(l)=="number"&&!isNaN(Number(l))||l==="NaN"?Number(l):l);o("valueChange",c,e.node.path)},P=(0,r.computed)(function(){var d,n=(d=e.node)===null||d===void 0?void 0:d.content;return n===null?n="null":n===void 0&&(n="undefined"),a.value==="string"?'"'.concat(n,'"'):n+""}),E=function(){var d=e.renderNodeValue;return d?d({node:e.node,defaultValue:P.value}):P.value},A=function(){o("bracketsClick",!e.collapsed,e.node.path)},H=function(){o("iconClick",!e.collapsed,e.node.path)},B=function(){o("selectedChange",e.node)},M=function(){o("nodeClick",e.node),O.value&&e.selectOnClickNode&&o("selectedChange",e.node)},S=function(d){if(e.editable&&!m.editing){m.editing=!0;var n=function l(c){var i;c.target!==d.target&&((i=c.target)===null||i===void 0?void 0:i.parentElement)!==d.target&&(m.editing=!1,document.removeEventListener("click",l))};document.removeEventListener("click",n),document.addEventListener("click",n)}};return function(){var d,n=e.node;return(0,r.createVNode)("div",{class:{"vjs-tree-node":!0,"has-selector":e.showSelectController,"has-carets":e.showIcon,"is-highlight":e.highlightSelectedNode&&e.checked},onClick:M,style:e.style},[e.showLineNumber&&(0,r.createVNode)("span",{class:"vjs-node-index"},[n.id+1]),e.showSelectController&&O.value&&n.type!=="objectEnd"&&n.type!=="arrayEnd"&&(0,r.createVNode)(ie,{isMultiple:V.value,checked:e.checked,onChange:B},null),(0,r.createVNode)("div",{class:"vjs-indent"},[Array.from(Array(n.level)).map(function(l,c){return(0,r.createVNode)("div",{key:c,class:{"vjs-indent-unit":!0,"has-line":e.showLine}},null)}),e.showIcon&&(0,r.createVNode)(ue,{nodeType:n.type,onClick:H},null)]),n.key&&(0,r.createVNode)("span",{class:"vjs-key"},[(d=e.renderNodeKey,d?d({node:e.node,defaultKey:C.value||""}):C.value),(0,r.createVNode)("span",{class:"vjs-colon"},[":".concat(e.showKeyValueSpace?" ":"")])]),(0,r.createVNode)("span",null,[n.type!=="content"&&n.content?(0,r.createVNode)($,{data:n.content.toString(),onClick:A},null):(0,r.createVNode)("span",{class:y.value,onClick:!e.editable||e.editableTrigger&&e.editableTrigger!=="click"?void 0:S,onDblclick:e.editable&&e.editableTrigger==="dblclick"?S:void 0},[e.editable&&m.editing?(0,r.createVNode)("input",{value:P.value,onChange:L,style:{padding:"3px 8px",border:"1px solid #eee",boxShadow:"none",boxSizing:"border-box",borderRadius:5,fontFamily:"inherit"}},null):E()]),n.showComma&&(0,r.createVNode)("span",null,[","]),e.showLength&&e.collapsed&&(0,r.createVNode)("span",{class:"vjs-comment"},[(0,r.createTextVNode)(" // "),n.length,(0,r.createTextVNode)(" items ")])])])}}});function te(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(y){return Object.getOwnPropertyDescriptor(e,y).enumerable})),o.push.apply(o,a)}return o}function w(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?te(Object(o),!0).forEach(function(a){v(e,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):te(Object(o)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))})}return e}var se=(0,r.defineComponent)({name:"Tree",props:w(w({},ee),{},{data:{type:[String,Number,Boolean,Array,Object],default:null},collapsedNodeLength:{type:Number,default:1/0},deep:{type:Number,default:1/0},pathCollapsible:{type:Function,default:function(){return!1}},rootPath:{type:String,default:"root"},virtual:{type:Boolean,default:!1},height:{type:Number,default:400},itemHeight:{type:Number,default:20},selectedValue:{type:[String,Array],default:function(){return""}},collapsedOnClickBrackets:{type:Boolean,default:!0},style:Object,onSelectedChange:{type:Function}}),slots:["renderNodeKey","renderNodeValue"],emits:["nodeClick","bracketsClick","iconClick","selectedChange","update:selectedValue","update:data"],setup:function(e,t){var o=t.emit,a=t.slots,y=(0,r.ref)(),C=(0,r.computed)(function(){return D(e.data,e.rootPath)}),V=function(n,l){return C.value.reduce(function(c,i){var s,g=i.level>=n||i.length>=l,j=(s=e.pathCollapsible)===null||s===void 0?void 0:s.call(e,i);return i.type!=="objectStart"&&i.type!=="arrayStart"||!g&&!j?c:w(w({},c),{},v({},i.path,1))},{})},p=(0,r.reactive)({translateY:0,visibleData:null,hiddenPaths:V(e.deep,e.collapsedNodeLength)}),O=(0,r.computed)(function(){for(var n=null,l=[],c=C.value.length,i=0;i<c;i++){var s=w(w({},C.value[i]),{},{id:i}),g=p.hiddenPaths[s.path];if(n&&n.path===s.path){var j=n.type==="objectStart",J=w(w(w({},s),n),{},{showComma:s.showComma,content:j?"{...}":"[...]",type:j?"objectCollapsed":"arrayCollapsed"});n=null,l.push(J)}else{if(g&&!n){n=s;continue}if(n)continue;l.push(s)}}return l}),m=(0,r.computed)(function(){var n=e.selectedValue;return n&&e.selectableType==="multiple"&&Array.isArray(n)?n:[n]}),L=(0,r.computed)(function(){return!e.selectableType||e.selectOnClickNode||e.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}),P=function(){var n=O.value;if(e.virtual){var l,c=e.height/e.itemHeight,i=((l=y.value)===null||l===void 0?void 0:l.scrollTop)||0,s=Math.floor(i/e.itemHeight),g=s<0?0:s+c>n.length?n.length-c:s;g<0&&(g=0);var j=g+c;p.translateY=g*e.itemHeight,p.visibleData=n.filter(function(J,q){return q>=g&&q<j})}else p.visibleData=n},E=function(){P()},A=function(n){var l,c,i=n.path,s=e.selectableType;if(s==="multiple"){var g=m.value.findIndex(function(x){return x===i}),j=b(m.value);g!==-1?j.splice(g,1):j.push(i),o("update:selectedValue",j),o("selectedChange",j,b(m.value))}else if(s==="single"&&m.value[0]!==i){var J=(l=m.value,c=1,function(x){if(Array.isArray(x))return x}(l)||function(x,ne){var F=x==null?null:typeof Symbol!="undefined"&&x[Symbol.iterator]||x["@@iterator"];if(F!=null){var oe,re,R=[],W=!0,le=!1;try{for(F=F.call(x);!(W=(oe=F.next()).done)&&(R.push(oe.value),!ne||R.length!==ne);W=!0);}catch(he){le=!0,re=he}finally{try{W||F.return==null||F.return()}finally{if(le)throw re}}return R}}(l,c)||k(l,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())[0],q=i;o("update:selectedValue",q),o("selectedChange",q,J)}},H=function(n){o("nodeClick",n)},B=function(n,l){if(n)p.hiddenPaths=w(w({},p.hiddenPaths),{},v({},l,1));else{var c=w({},p.hiddenPaths);delete c[l],p.hiddenPaths=c}},M=function(n,l){e.collapsedOnClickBrackets&&B(n,l),o("bracketsClick",n)},S=function(n,l){B(n,l),o("iconClick",n)},d=function(n,l){var c=z(e.data),i=e.rootPath;new Function("data","val","data".concat(l.slice(i.length),"=val"))(c,n),o("update:data",c)};return(0,r.watchEffect)(function(){L.value&&function(n){throw new Error("[VueJSONPretty] ".concat(n))}(L.value)}),(0,r.watchEffect)(function(){O.value&&P()}),(0,r.watch)(function(){return e.deep},function(n){n&&(p.hiddenPaths=V(n,e.collapsedNodeLength))}),(0,r.watch)(function(){return e.collapsedNodeLength},function(n){n&&(p.hiddenPaths=V(e.deep,n))}),function(){var n,l,c=(n=e.renderNodeKey)!==null&&n!==void 0?n:a.renderNodeKey,i=(l=e.renderNodeValue)!==null&&l!==void 0?l:a.renderNodeValue,s=p.visibleData&&p.visibleData.map(function(g){return(0,r.createVNode)(de,{key:g.id,node:g,collapsed:!!p.hiddenPaths[g.path],showDoubleQuotes:e.showDoubleQuotes,showLength:e.showLength,checked:m.value.includes(g.path),selectableType:e.selectableType,showLine:e.showLine,showLineNumber:e.showLineNumber,showSelectController:e.showSelectController,selectOnClickNode:e.selectOnClickNode,nodeSelectable:e.nodeSelectable,highlightSelectedNode:e.highlightSelectedNode,editable:e.editable,editableTrigger:e.editableTrigger,showIcon:e.showIcon,showKeyValueSpace:e.showKeyValueSpace,renderNodeKey:c,renderNodeValue:i,onNodeClick:H,onBracketsClick:M,onIconClick:S,onSelectedChange:A,onValueChange:d,style:e.itemHeight&&e.itemHeight!==20?{lineHeight:"".concat(e.itemHeight,"px")}:{}},null)});return(0,r.createVNode)("div",{ref:y,class:{"vjs-tree":!0,"is-virtual":e.virtual},onScroll:e.virtual?E:void 0,style:e.showLineNumber?w({paddingLeft:"".concat(12*Number(C.value.length.toString().length),"px")},e.style):e.style},[e.virtual?(0,r.createVNode)("div",{class:"vjs-tree-list",style:{height:"".concat(e.height,"px")}},[(0,r.createVNode)("div",{class:"vjs-tree-list-holder",style:{height:"".concat(O.value.length*e.itemHeight,"px")}},[(0,r.createVNode)("div",{class:"vjs-tree-list-holder-inner",style:{transform:"translateY(".concat(p.translateY,"px)")}},[s])])]):s])}}})}(),K}()})})(ce);var ke=ce.exports;const we=ye(ke),Se=ge({__name:"JsonEditor",props:{modelValue:{type:Object,default:()=>({})},deep:h.number.def(5),showLength:h.bool.def(!0),showLineNumbers:h.bool.def(!0),showLineNumber:h.bool.def(!0),showIcon:h.bool.def(!0),showDoubleQuotes:h.bool.def(!0),virtual:h.bool.def(!1),height:h.number.def(400),itemHeight:h.number.def(20),rootPath:h.string.def("root"),nodeSelectable:h.func.def(),selectableType:h.oneOf(["multiple","single"]).def(),showSelectController:h.bool.def(!1),selectOnClickNode:h.bool.def(!0),highlightSelectedNode:h.bool.def(!0),collapsedOnClickBrackets:h.bool.def(!0),renderNodeKey:h.func.def(),renderNodeValue:h.func.def(),editable:h.bool.def(!0),editableTrigger:h.oneOf(["click","dblclick"]).def("click")},emits:["update:modelValue","node-click","brackets-click","icon-click","selected-value"],setup(u,{emit:U}){const T=U,I=u,Q=ae(()=>I.modelValue),N=ae({get:()=>Q.value,set:v=>{T("update:modelValue",v)}}),K=v=>{T("node-click",v)},f=v=>{T("brackets-click",v)},k=v=>{T("icon-click",v)},b=(v,r)=>{T("selected-value",v,r)};return(v,r)=>(be(),ve(me(we),{data:N.value,"onUpdate:data":r[0]||(r[0]=$=>N.value=$),deep:u.deep,"show-length":u.showLength,"show-line-numbers":u.showLineNumbers,"show-line-number":u.showLineNumber,"show-icon":u.showIcon,"show-double-quotes":u.showDoubleQuotes,virtual:u.virtual,height:u.height,"item-height":u.itemHeight,"root-path":u.rootPath,"node-selectable":u.nodeSelectable,"selectable-type":u.selectableType,"show-select-controller":u.showSelectController,"select-on-click-node":u.selectOnClickNode,"highlight-selected-node":u.highlightSelectedNode,"collapsed-on-click-brackets":u.collapsedOnClickBrackets,"render-node-key":u.renderNodeKey,"render-node-value":u.renderNodeValue,editable:u.editable,"editable-trigger":u.editableTrigger,onNodeClick:K,onBracketsClick:f,onIconClick:k,onSelectedChange:b},null,8,["data","deep","show-length","show-line-numbers","show-line-number","show-icon","show-double-quotes","virtual","height","item-height","root-path","node-selectable","selectable-type","show-select-controller","select-on-click-node","highlight-selected-node","collapsed-on-click-brackets","render-node-key","render-node-value","editable","editable-trigger"]))}});export{Se as _};
