import{p as r,b as w,F as q}from"./index-rIQ0jc2Y.js";import{l as v,J as E,H as N,d as B,e as M,b as R,u as c,m as $,p as z,U as H,L as J}from"./vue-chunks-4Zb-T7Ga.js";const U=v({__name:"CountTo",props:{startVal:r.number.def(0),endVal:r.number.def(2021),duration:r.number.def(3e3),autoplay:r.bool.def(!0),decimals:r.number.validate(o=>o>=0).def(0),decimal:r.string.def("."),separator:r.string.def(","),prefix:r.string.def(""),suffix:r.string.def(""),useEasing:r.bool.def(!0),easingFn:{type:Function,default(o,p,m,d){return m*(-Math.pow(2,-10*o/d)+1)*1024/1023+p}}},emits:["mounted","callback"],setup(o,{expose:p,emit:m}){const{getPrefixCls:d}=w(),y=d("count-to"),t=o,b=m,V=l=>{const{decimals:n,decimal:i,separator:e,suffix:s,prefix:h}=t;l=Number(l).toFixed(n),l+="";const x=l.split(".");let u=x[0];const k=x.length>1?i+x[1]:"",S=/(\d+)(\d{3})/;if(e&&!q(e))for(;S.test(u);)u=u.replace(S,"$1"+e+"$2");return h+u+k+s},a=E({localStartVal:t.startVal,displayValue:V(t.startVal),printVal:null,paused:!1,localDuration:t.duration,startTime:null,timestamp:null,remaining:null,rAF:null}),A=N(a,"displayValue");B(()=>{t.autoplay&&g(),b("mounted")});const f=M(()=>t.startVal>t.endVal);R([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&g()});const g=()=>{const{startVal:l,duration:n}=t;a.localStartVal=l,a.startTime=null,a.localDuration=n,a.paused=!1,a.rAF=requestAnimationFrame(F)},T=()=>{a.paused?(_(),a.paused=!1):(D(),a.paused=!0)},D=()=>{cancelAnimationFrame(a.rAF)},_=()=>{a.startTime=null,a.localDuration=+a.remaining,a.localStartVal=+a.printVal,requestAnimationFrame(F)},C=()=>{a.startTime=null,cancelAnimationFrame(a.rAF),a.displayValue=V(t.startVal)},F=l=>{const{useEasing:n,easingFn:i,endVal:e}=t;a.startTime||(a.startTime=l),a.timestamp=l;const s=l-a.startTime;a.remaining=a.localDuration-s,n?c(f)?a.printVal=a.localStartVal-i(s,0,a.localStartVal-e,a.localDuration):a.printVal=i(s,a.localStartVal,e-a.localStartVal,a.localDuration):c(f)?a.printVal=a.localStartVal-(a.localStartVal-e)*(s/a.localDuration):a.printVal=a.localStartVal+(e-a.localStartVal)*(s/a.localDuration),c(f)?a.printVal=a.printVal<e?e:a.printVal:a.printVal=a.printVal>e?e:a.printVal,a.displayValue=V(a.printVal),s<a.localDuration?a.rAF=requestAnimationFrame(F):b("callback")};return p({pauseResume:T,reset:C,start:g,pause:D}),(l,n)=>($(),z("span",{class:J(c(y))},H(A.value),3))}});export{U as _};
