var be=Object.defineProperty,Me=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var I=Math.pow,V=(r,e,t)=>e in r?be(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,E=(r,e)=>{for(var t in e||(e={}))xe.call(e,t)&&V(r,t,e[t]);if(Y)for(var t of Y(e))ke.call(e,t)&&V(r,t,e[t]);return r},T=(r,e)=>Me(r,ye(e));import{p as q,b as Ee,_ as Se}from"./index-1MmxpX7P.js";import{A as ve,l as Ae,b as F,a as H,e as we,m as B,p as Z,O as Te,G as De,u as A,L as _,q as Ie,X as Ce}from"./vue-chunks-4Zb-T7Ga.js";import{x as Re}from"./element-plus-JcYBt7P_.js";const Pe=()=>({configGlobal:ve("configGlobal",{})}),U=(r,e)=>r.push.apply(r,e),C=r=>r.sort((e,t)=>e.i-t.i||e.j-t.j),X=r=>{const e={};let t=1;return r.forEach(s=>{e[s]=t,t+=1}),e};var Le={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const K=2050,J=1e3,je=Le,_e=10,Ne=1e4,re=10,ie=50,ae=20,oe=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,Oe=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,Ue=/^[A-Z\xbf-\xdf]+$/,ce=/^[^a-z\xdf-\xff]+$/,Ge=/^[a-z\xdf-\xff]+$/,We=/^[^A-Z\xbf-\xdf]+$/,ze=/[a-z\xdf-\xff]/,$e=/[A-Z\xbf-\xdf]/,Ye=/[^A-Za-z\xbf-\xdf]/gi,Ve=/^\d+$/,W=new Date().getFullYear(),qe={recentYear:/19\d\d|200\d|201\d|202\d/g},le=[" ",",",";",":","|","/","\\","_",".","-"],Fe=le.length;class He{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return C(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let i=n+5;i<=n+9&&!(i>=e.length);i+=1){const a=e.slice(n,+i+1||9e9),o=s.exec(a);if(o!=null){const c=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);c!=null&&t.push({pattern:"date",token:a,i:n,j:i,separator:o[2],year:c.year,month:c.month,day:c.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=i=>Math.abs(i.year-W);for(let i=0;i<=Math.abs(e.length-4);i+=1)for(let a=i+3;a<=i+7&&!(a>=e.length);a+=1){const o=e.slice(i,+a+1||9e9);if(s.exec(o)){const c=[],l=o.length;if(je[l].forEach(([f,p])=>{const m=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,f),10),parseInt(o.slice(f,p),10),parseInt(o.slice(p),10)]);m!=null&&c.push(m)}),c.length>0){let f=c[0],p=n(c[0]);c.slice(1).forEach(m=>{const d=n(m);d<p&&(f=m,p=d)}),t.push({pattern:"date",token:o,i,j:a,separator:"",year:f.year,month:f.month,day:f.day})}}}return t}filterNoise(e){return e.filter(t=>{let s=!1;const n=e.length;for(let i=0;i<n;i+=1){const a=e[i];if(t!==a&&a.i<=t.i&&a.j>=t.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let i=0,a=e.length;i<a;i+=1){const o=e[i];if(o>99&&o<J||o>K)return null;o>31&&(s+=1),o>12&&(t+=1),o<=0&&(n+=1)}return s>=2||t===3||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[i,a]=t[n];if(J<=i&&i<=K){const o=this.mapIntegersToDayMonth(a);return o!=null?{year:i,month:o.month,day:o.day}:null}}for(let n=0;n<s;n+=1){const[i,a]=t[n],o=this.mapIntegersToDayMonth(a);if(o!=null)return{year:this.twoToFourDigitYear(i),month:o.month,day:o.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const n=t[s],i=n[0],a=n[1];if(i>=1&&i<=31&&a>=1&&a<=12)return{day:i,month:a}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const w=new Uint32Array(65536),Be=(r,e)=>{const t=r.length,s=e.length,n=1<<t-1;let i=-1,a=0,o=t,c=t;for(;c--;)w[r.charCodeAt(c)]|=1<<c;for(c=0;c<s;c++){let l=w[e.charCodeAt(c)];const h=l|a;l|=(l&i)+i^i,a|=~(l|i),i&=l,a&n&&o++,i&n&&o--,a=a<<1|1,i=i<<1|~(h|a),a&=h}for(c=t;c--;)w[r.charCodeAt(c)]=0;return o},Ze=(r,e)=>{const t=e.length,s=r.length,n=[],i=[],a=Math.ceil(t/32),o=Math.ceil(s/32);for(let d=0;d<a;d++)i[d]=-1,n[d]=0;let c=0;for(;c<o-1;c++){let d=0,b=-1;const S=c*32,y=Math.min(32,s)+S;for(let g=S;g<y;g++)w[r.charCodeAt(g)]|=1<<g;for(let g=0;g<t;g++){const k=w[e.charCodeAt(g)],x=i[g/32|0]>>>g&1,v=n[g/32|0]>>>g&1,z=k|d,$=((k|v)&b)+b^b|k|v;let R=d|~($|b),L=b&$;R>>>31^x&&(i[g/32|0]^=1<<g),L>>>31^v&&(n[g/32|0]^=1<<g),R=R<<1|x,L=L<<1|v,b=L|~(z|R),d=R&z}for(let g=S;g<y;g++)w[r.charCodeAt(g)]=0}let l=0,h=-1;const f=c*32,p=Math.min(32,s-f)+f;for(let d=f;d<p;d++)w[r.charCodeAt(d)]|=1<<d;let m=s;for(let d=0;d<t;d++){const b=w[e.charCodeAt(d)],S=i[d/32|0]>>>d&1,y=n[d/32|0]>>>d&1,g=b|l,k=((b|y)&h)+h^h|b|y;let x=l|~(k|h),v=h&k;m+=x>>>s-1&1,m-=v>>>s-1&1,x>>>31^S&&(i[d/32|0]^=1<<d),v>>>31^y&&(n[d/32|0]^=1<<d),x=x<<1|S,v=v<<1|y,h=v|~(g|x),l=x&g}for(let d=f;d<p;d++)w[r.charCodeAt(d)]=0;return m},Xe=(r,e)=>{if(r.length<e.length){const t=e;e=r,r=t}return e.length===0?r.length:r.length<=32?Be(r,e):Ze(r,e)},Ke=(r,e,t)=>{const s=r.length<=e.length,n=r.length<=t;return s||n?Math.ceil(r.length/4):t},Je=(r,e,t)=>{let s=0;const n=Object.keys(e).find(i=>{const a=Ke(r,i,t);if(Math.abs(r.length-i.length)>a)return!1;const o=Xe(r,i),c=o<=a;return c&&(s=o),c});return n?{levenshteinDistance:s,levenshteinDistanceEntry:n}:{}};var Q={a:["4","@"],b:["8"],c:["(","{","[","<"],d:["6","|)"],e:["3"],f:["#"],g:["6","9","&"],h:["#","|-|"],i:["1","!","|"],k:["<","|<"],l:["!","1","|","7"],m:["^^","nn","2n","/\\\\/\\\\"],n:["//"],o:["0","()"],q:["9"],u:["|_|"],s:["$","5"],t:["+","7"],v:["<",">","/"],w:["^/","uu","vv","2u","2v","\\\\/\\\\/"],x:["%","><"],z:["2"]},N={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class P{constructor(e=[]){this.parents=e,this.children=new Map}addSub(e,...t){const s=e.charAt(0);this.children.has(s)||this.children.set(s,new P([...this.parents,s]));let n=this.children.get(s);for(let i=1;i<e.length;i+=1){const a=e.charAt(i);n.hasChild(a)||n.addChild(a),n=n.getChild(a)}return n.subs=(n.subs||[]).concat(t),this}getChild(e){return this.children.get(e)}isTerminal(){return!!this.subs}addChild(e){this.hasChild(e)||this.children.set(e,new P([...this.parents,e]))}hasChild(e){return this.children.has(e)}}var ee=(r,e)=>(Object.entries(r).forEach(([t,s])=>{s.forEach(n=>{e.addSub(n,t)})}),e);class Qe{constructor(){this.matchers={},this.l33tTable=Q,this.trieNodeRoot=ee(Q,new P),this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=N,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=100,this.maxLength=256,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable,this.trieNodeRoot=ee(e.l33tTable,new P)),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),e.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=e.useLevenshteinDistance),e.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=e.levenshteinThreshold),e.l33tMaxSubstitutions!==void 0&&(this.l33tMaxSubstitutions=e.l33tMaxSubstitutions),e.maxLength!==void 0&&(this.maxLength=e.maxLength)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(N).forEach(s=>{if(s in e){const n=s;Object.keys(N[n]).forEach(i=>{i in e[n]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={},t={};Object.keys(this.dictionary).forEach(s=>{e[s]=X(this.dictionary[s]),t[s]=this.getRankedDictionariesMaxWordSize(this.dictionary[s])}),this.rankedDictionaries=e,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(e){const t=e.map(s=>typeof s!="string"?s.toString().length:s.length);return t.length===0?0:t.reduce((s,n)=>Math.max(s,n),-1/0)}buildSanitizedRankedDictionary(e){const t=[];return e.forEach(s=>{const n=typeof s;(n==="string"||n==="number"||n==="boolean")&&t.push(s.toString().toLowerCase())}),X(t)}extendUserInputsDictionary(e){this.dictionary.userInputs||(this.dictionary.userInputs=[]);const t=[...this.dictionary.userInputs,...e];this.rankedDictionaries.userInputs=this.buildSanitizedRankedDictionary(t),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize(t)}addMatcher(e,t){this.matchers[e]?console.info(`Matcher ${e} already exists`):this.matchers[e]=t}}const u=new Qe;class et{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(s=>T(E({},s),{token:s.token.split("").reverse().join(""),reversed:!0,i:e.length-1-s.j,j:e.length-1-s.i}))}}class tt{constructor({substr:e,limit:t,trieRoot:s}){this.buffer=[],this.finalPasswords=[],this.substr=e,this.limit=t,this.trieRoot=s}getAllPossibleSubsAtIndex(e){const t=[];let s=this.trieRoot;for(let n=e;n<this.substr.length;n+=1){const i=this.substr.charAt(n);if(s=s.getChild(i),!s)break;t.push(s)}return t}helper({onlyFullSub:e,isFullSub:t,index:s,subIndex:n,changes:i,lastSubLetter:a,consecutiveSubCount:o}){if(this.finalPasswords.length>=this.limit)return;if(s===this.substr.length){e===t&&this.finalPasswords.push({password:this.buffer.join(""),changes:i});return}const c=[...this.getAllPossibleSubsAtIndex(s)];let l=!1;for(let h=s+c.length-1;h>=s;h-=1){const f=c[h-s];if(f.isTerminal()){if(a===f.parents.join("")&&o>=3)continue;l=!0;const p=f.subs;for(const m of p){this.buffer.push(m);const d=i.concat({i:n,letter:m,substitution:f.parents.join("")});if(this.helper({onlyFullSub:e,isFullSub:t,index:h+1,subIndex:n+m.length,changes:d,lastSubLetter:f.parents.join(""),consecutiveSubCount:a===f.parents.join("")?o+1:1}),this.buffer.pop(),this.finalPasswords.length>=this.limit)return}}}if(!e||!l){const h=this.substr.charAt(s);this.buffer.push(h),this.helper({onlyFullSub:e,isFullSub:t&&!l,index:s+1,subIndex:n+1,changes:i,lastSubLetter:a,consecutiveSubCount:o}),this.buffer.pop()}}getAll(){return this.helper({onlyFullSub:!0,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.helper({onlyFullSub:!1,isFullSub:!0,index:0,subIndex:0,changes:[],lastSubLetter:void 0,consecutiveSubCount:0}),this.finalPasswords}}const st=(r,e,t)=>new tt({substr:r,limit:e,trieRoot:t}).getAll(),nt=(r,e,t)=>{const n=r.changes.filter(l=>l.i<e).reduce((l,h)=>l-h.letter.length+h.substitution.length,e),i=r.changes.filter(l=>l.i>=e&&l.i<=t),a=i.reduce((l,h)=>l-h.letter.length+h.substitution.length,t-e+n),o=[],c=[];return i.forEach(l=>{o.findIndex(f=>f.letter===l.letter&&f.substitution===l.substitution)<0&&(o.push({letter:l.letter,substitution:l.substitution}),c.push(`${l.substitution} -> ${l.letter}`))}),{i:n,j:a,subs:o,subDisplay:c.join(", ")}};class rt{constructor(e){this.defaultMatch=e}isAlreadyIncluded(e,t){return e.some(s=>Object.entries(s).every(([n,i])=>n==="subs"||i===t[n]))}match({password:e}){const t=[],s=st(e,u.l33tMaxSubstitutions,u.trieNodeRoot);let n=!1,i=!0;return s.forEach(a=>{if(n)return;const o=this.defaultMatch({password:a.password,useLevenshtein:i});i=!1,o.forEach(c=>{n||(n=c.i===0&&c.j===e.length-1);const l=nt(a,c.i,c.j),h=e.slice(l.i,+l.j+1||9e9),f=E(T(E({},c),{l33t:!0,token:h}),l),p=this.isAlreadyIncluded(t,f);h.toLowerCase()!==c.matchedWord&&!p&&t.push(f)})}),t.filter(a=>a.token.length>1)}}class it{constructor(){this.l33t=new rt(this.defaultMatch),this.reverse=new et(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return C(t)}defaultMatch({password:e,useLevenshtein:t=!0}){const s=[],n=e.length,i=e.toLowerCase();return Object.keys(u.rankedDictionaries).forEach(a=>{const o=u.rankedDictionaries[a],c=u.rankedDictionariesMaxWordSize[a],l=Math.min(c,n);for(let h=0;h<n;h+=1){const f=Math.min(h+l,n);for(let p=h;p<f;p+=1){const m=i.slice(h,+p+1||9e9),d=m in o;let b={};const S=h===0&&p===n-1;u.useLevenshteinDistance&&S&&!d&&t&&(b=Je(m,o,u.levenshteinThreshold));const y=Object.keys(b).length!==0;if(d||y){const g=y?b.levenshteinDistanceEntry:m,k=o[g];s.push(E({pattern:"dictionary",i:h,j:p,token:e.slice(h,+p+1||9e9),matchedWord:m,rank:k,dictionaryName:a,reversed:!1,l33t:!1},b))}}}}),s}}class at{match({password:e,regexes:t=qe}){const s=[];return Object.keys(t).forEach(n=>{const i=t[n];i.lastIndex=0;let a;for(;a=i.exec(e);)if(a){const o=a[0];s.push({pattern:"regex",token:o,i:a.index,j:a.index+a[0].length-1,regexName:n,regexMatch:a})}}),C(s)}}var D={nCk(r,e){let t=r;if(e>t)return 0;if(e===0)return 1;let s=1;for(let n=1;n<=e;n+=1)s*=t,s/=n,t-=1;return s},log10(r){return r===0?0:Math.log(r)/Math.log(10)},log2(r){return Math.log(r)/Math.log(2)},factorial(r){let e=1;for(let t=2;t<=r;t+=1)e*=t;return e}},ot=({token:r})=>{let e=I(_e,r.length);e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return r.length===1?t=re+1:t=ie+1,Math.max(e,t)},ct=({year:r,separator:e})=>{let s=Math.max(Math.abs(r-W),ae)*365;return e&&(s*=4),s};const lt=r=>{const e=r.split(""),t=e.filter(a=>a.match($e)).length,s=e.filter(a=>a.match(ze)).length;let n=0;const i=Math.min(t,s);for(let a=1;a<=i;a+=1)n+=D.nCk(t+s,a);return n};var ht=r=>{const e=r.replace(Ye,"");if(e.match(We)||e.toLowerCase()===e)return 1;const t=[oe,Oe,ce],s=t.length;for(let n=0;n<s;n+=1){const i=t[n];if(e.match(i))return 2}return lt(e)};const te=(r,e)=>{let t=0,s=r.indexOf(e);for(;s>=0;)t+=1,s=r.indexOf(e,s+e.length);return t},ut=({sub:r,token:e})=>{const t=e.toLowerCase(),s=te(t,r.substitution),n=te(t,r.letter);return{subbedCount:s,unsubbedCount:n}};var dt=({l33t:r,subs:e,token:t})=>{if(!r)return 1;let s=1;return e.forEach(n=>{const{subbedCount:i,unsubbedCount:a}=ut({sub:n,token:t});if(i===0||a===0)s*=2;else{const o=Math.min(a,i);let c=0;for(let l=1;l<=o;l+=1)c+=D.nCk(a+i,l);s*=c}}),s},ft=({rank:r,reversed:e,l33t:t,subs:s,token:n,dictionaryName:i})=>{const a=r,o=ht(n),c=dt({l33t:t,subs:s,token:n}),l=e&&2||1;let h;return i==="diceware"?h=I(6,5)/2:h=a*o*c*l,{baseGuesses:a,uppercaseVariations:o,l33tVariations:c,calculation:h}},gt=({regexName:r,regexMatch:e,token:t})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(r in s)return I(s[r],t.length);switch(r){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-W),ae)}return 0},pt=({baseGuesses:r,repeatCount:e})=>r*e,mt=({token:r,ascending:e})=>{const t=r.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(t)?s=4:t.match(/\d/)?s=10:s=26,e||(s*=2),s*r.length};const bt=r=>{let e=0;return Object.keys(r).forEach(t=>{const s=r[t];e+=s.filter(n=>!!n).length}),e/=Object.entries(r).length,e},Mt=({token:r,graph:e,turns:t})=>{const s=Object.keys(u.graphs[e]).length,n=bt(u.graphs[e]);let i=0;const a=r.length;for(let o=2;o<=a;o+=1){const c=Math.min(t,o-1);for(let l=1;l<=c;l+=1)i+=D.nCk(o-1,l-1)*s*I(n,l)}return i};var yt=({graph:r,token:e,shiftedCount:t,turns:s})=>{let n=Mt({token:e,graph:r,turns:s});if(t){const i=e.length-t;if(t===0||i===0)n*=2;else{let a=0;for(let o=1;o<=Math.min(t,i);o+=1)a+=D.nCk(t+i,o);n*=a}}return Math.round(n)},xt=()=>Fe;const kt=(r,e)=>{let t=1;return r.token.length<e.length&&(r.token.length===1?t=re:t=ie),t},se={bruteforce:ot,date:ct,dictionary:ft,regex:gt,repeat:pt,sequence:mt,spatial:yt,separator:xt},Et=(r,e)=>se[r]?se[r](e):u.matchers[r]&&"scoring"in u.matchers[r]?u.matchers[r].scoring(e):0;var St=(r,e)=>{const t={};if("guesses"in r&&r.guesses!=null)return r;const s=kt(r,e),n=Et(r.pattern,r);let i=0;typeof n=="number"?i=n:r.pattern==="dictionary"&&(i=n.calculation,t.baseGuesses=n.baseGuesses,t.uppercaseVariations=n.uppercaseVariations,t.l33tVariations=n.l33tVariations);const a=Math.max(i,s);return T(E(E({},r),t),{guesses:a,guessesLog10:D.log10(a)})};const M={password:"",optimal:{},excludeAdditive:!1,separatorRegex:void 0,fillArray(r,e){const t=[];for(let s=0;s<r;s+=1){let n=[];e==="object"&&(n={}),t.push(n)}return t},makeBruteforceMatch(r,e){return{pattern:"bruteforce",token:this.password.slice(r,+e+1||9e9),i:r,j:e}},update(r,e){const t=r.j,s=St(r,this.password);let n=s.guesses;e>1&&(n*=this.optimal.pi[s.i-1][e-1]);let i=D.factorial(e)*n;this.excludeAdditive||(i+=I(Ne,e-1));let a=!1;Object.keys(this.optimal.g[t]).forEach(o=>{const c=this.optimal.g[t][o];parseInt(o,10)<=e&&c<=i&&(a=!0)}),a||(this.optimal.g[t][e]=i,this.optimal.m[t][e]=s,this.optimal.pi[t][e]=n)},bruteforceUpdate(r){let e=this.makeBruteforceMatch(0,r);this.update(e,1);for(let t=1;t<=r;t+=1){e=this.makeBruteforceMatch(t,r);const s=this.optimal.m[t-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(e,parseInt(n,10)+1)})}},unwind(r){const e=[];let t=r-1,s=0,n=1/0;const i=this.optimal.g[t];for(i&&Object.keys(i).forEach(a=>{const o=i[a];o<n&&(s=parseInt(a,10),n=o)});t>=0;){const a=this.optimal.m[t][s];e.unshift(a),t=a.i-1,s-=1}return e}};var G={mostGuessableMatchSequence(r,e,t=!1){M.password=r,M.excludeAdditive=t;const s=r.length;let n=M.fillArray(s,"array");e.forEach(c=>{n[c.j].push(c)}),n=n.map(c=>c.sort((l,h)=>l.i-h.i)),M.optimal={m:M.fillArray(s,"object"),pi:M.fillArray(s,"object"),g:M.fillArray(s,"object")};for(let c=0;c<s;c+=1)n[c].forEach(l=>{l.i>0?Object.keys(M.optimal.m[l.i-1]).forEach(h=>{M.update(l,parseInt(h,10)+1)}):M.update(l,1)}),M.bruteforceUpdate(c);const i=M.unwind(s),a=i.length,o=this.getGuesses(r,a);return{password:r,guesses:o,guessesLog10:D.log10(o),sequence:i}},getGuesses(r,e){const t=r.length;let s=0;return r.length===0?s=1:s=M.optimal.g[t-1][e],s}};class vt{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const a=this.getGreedyMatch(e,n),o=this.getLazyMatch(e,n);if(a==null)break;const{match:c,baseToken:l}=this.setMatchToken(a,o);if(c){const h=c.index+c[0].length-1,f=this.getBaseGuesses(l,t);s.push(this.normalizeMatch(l,h,c,f)),n=h+1}}return s.some(a=>a instanceof Promise)?Promise.all(s):s}normalizeMatch(e,t,s,n){const i={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then(a=>T(E({},i),{baseGuesses:a})):T(E({},i),{baseGuesses:n})}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,i="";if(t&&e[0].length>t[0].length){n=e;const a=s.exec(n[0]);a&&(i=a[1])}else n=t,n&&(i=n[1]);return{match:n,baseToken:i}}getBaseGuesses(e,t){const s=t.match(e);return s instanceof Promise?s.then(i=>G.mostGuessableMatchSequence(e,i).guesses):G.mostGuessableMatchSequence(e,s).guesses}}class At{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let s=0,n=null;const i=e.length;for(let a=1;a<i;a+=1){const o=e.charCodeAt(a)-e.charCodeAt(a-1);if(n==null&&(n=o),o!==n){const c=a-1;this.update({i:s,j:c,delta:n,password:e,result:t}),s=c,n=o}}return this.update({i:s,j:i-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:i}){if(t-e>1||Math.abs(s)===1){const a=Math.abs(s);if(a>0&&a<=this.MAX_DELTA){const o=n.slice(e,+t+1||9e9),{sequenceName:c,sequenceSpace:l}=this.getSequence(o);return i.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:c,sequenceSpace:l,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return Ge.test(e)?(t="lower",s=26):Ue.test(e)?(t="upper",s=26):Ve.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class wt{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(u.graphs).forEach(s=>{const n=u.graphs[s];U(t,this.helper(e,n,s))}),C(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const i=[];let a=0;const o=e.length;for(;a<o-1;){let c=a+1,l=null,h=0;for(n=this.checkIfShifted(s,e,a);;){const f=e.charAt(c-1),p=t[f]||[];let m=!1,d=-1,b=-1;if(c<o){const S=e.charAt(c),y=p.length;for(let g=0;g<y;g+=1){const k=p[g];if(b+=1,k){const x=k.indexOf(S);if(x!==-1){m=!0,d=b,x===1&&(n+=1),l!==d&&(h+=1,l=d);break}}}}if(m)c+=1;else{c-a>2&&i.push({pattern:"spatial",i:a,j:c-1,token:e.slice(a,c),graph:s,turns:h,shiftedCount:n}),a=c;break}}}return i}}const Tt=new RegExp(`[${le.join("")}]`);class j{static getMostUsedSeparatorChar(e){const t=[...e.split("").filter(n=>Tt.test(n)).reduce((n,i)=>{const a=n.get(i);return a?n.set(i,a+1):n.set(i,1),n},new Map).entries()].sort(([n,i],[a,o])=>o-i);if(!t.length)return;const s=t[0];if(!(s[1]<2))return s[0]}static getSeparatorRegex(e){return new RegExp(`([^${e}
])(${e})(?!${e})`,"g")}match({password:e}){const t=[];if(e.length===0)return t;const s=j.getMostUsedSeparatorChar(e);if(s===void 0)return t;const n=j.getSeparatorRegex(s);for(const i of e.matchAll(n)){if(i.index===void 0)continue;const a=i.index+1;t.push({pattern:"separator",token:s,i:a,j:a})}return t}}class Dt{constructor(){this.matchers={date:He,dictionary:it,regex:at,repeat:vt,sequence:At,spatial:wt,separator:j}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(u.matchers)].forEach(i=>{if(!this.matchers[i]&&!u.matchers[i])return;const a=this.matchers[i]?this.matchers[i]:u.matchers[i].Matching,c=new a().match({password:e,omniMatch:this});c instanceof Promise?(c.then(l=>{U(t,l)}),s.push(c)):U(t,c)}),s.length>0?new Promise((i,a)=>{Promise.all(s).then(()=>{i(C(t))}).catch(o=>{a(o)})}):C(t)}}const he=1,ue=he*60,de=ue*60,fe=de*24,ge=fe*31,pe=ge*12,It=pe*100,O={second:he,minute:ue,hour:de,day:fe,month:ge,year:pe,century:It};class Ct{translate(e,t){let s=e;t!==void 0&&t!==1&&(s+="s");const{timeEstimation:n}=u.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(n=>{const i=t[n];s[n]=this.displayTime(i)}),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1005?0:e<1000005?1:e<100000005?2:e<1e10+5?3:4}displayTime(e){let t="centuries",s;const n=Object.keys(O),i=n.findIndex(a=>e<O[a]);return i>-1&&(t=n[i-1],i!==0?s=Math.round(e/O[t]):t="ltSecond"),this.translate(t,s)}}var Rt=()=>null,Pt=()=>({warning:u.translations.warnings.dates,suggestions:[u.translations.suggestions.dates]});const Lt=(r,e)=>{let t=null;return e&&!r.l33t&&!r.reversed?r.rank<=10?t=u.translations.warnings.topTen:r.rank<=100?t=u.translations.warnings.topHundred:t=u.translations.warnings.common:r.guessesLog10<=4&&(t=u.translations.warnings.similarToCommon),t},jt=(r,e)=>{let t=null;return e&&(t=u.translations.warnings.wordByItself),t},_t=(r,e)=>e?u.translations.warnings.namesByThemselves:u.translations.warnings.commonNames,Nt=(r,e)=>{let t=null;const s=r.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?t=Lt(r,e):s.includes("wikipedia")?t=jt(r,e):n?t=_t(r,e):s==="userInputs"&&(t=u.translations.warnings.userInputs),t};var Ot=(r,e)=>{const t=Nt(r,e),s=[],n=r.token;return n.match(oe)?s.push(u.translations.suggestions.capitalization):n.match(ce)&&n.toLowerCase()!==n&&s.push(u.translations.suggestions.allUppercase),r.reversed&&r.token.length>=4&&s.push(u.translations.suggestions.reverseWords),r.l33t&&s.push(u.translations.suggestions.l33t),{warning:t,suggestions:s}},Ut=r=>r.regexName==="recentYear"?{warning:u.translations.warnings.recentYears,suggestions:[u.translations.suggestions.recentYears,u.translations.suggestions.associatedYears]}:{warning:null,suggestions:[]},Gt=r=>{let e=u.translations.warnings.extendedRepeat;return r.baseToken.length===1&&(e=u.translations.warnings.simpleRepeat),{warning:e,suggestions:[u.translations.suggestions.repeated]}},Wt=()=>({warning:u.translations.warnings.sequences,suggestions:[u.translations.suggestions.sequences]}),zt=r=>{let e=u.translations.warnings.keyPattern;return r.turns===1&&(e=u.translations.warnings.straightRow),{warning:e,suggestions:[u.translations.suggestions.longerKeyboardPattern]}},$t=()=>null;const ne={warning:null,suggestions:[]};class Yt{constructor(){this.matchers={bruteforce:Rt,date:Pt,dictionary:Ot,regex:Ut,repeat:Gt,sequence:Wt,spatial:zt,separator:$t},this.defaultFeedback={warning:null,suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(u.translations.suggestions.useWords,u.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return ne;const s=u.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let i=this.getMatchFeedback(n,t.length===1);return i!=null?i.suggestions.unshift(s):i={warning:null,suggestions:[s]},i}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(n=>{n.token.length>t.token.length&&(t=n)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):u.matchers[e.pattern]&&"feedback"in u.matchers[e.pattern]?u.matchers[e.pattern].feedback(e,t):ne}}const me=()=>new Date().getTime(),Vt=(r,e,t)=>{const s=new Yt,n=new Ct,i=G.mostGuessableMatchSequence(e,r),a=me()-t,o=n.estimateAttackTimes(i.guesses);return T(E(E({calcTime:a},i),o),{feedback:s.getFeedback(o.score,i.sequence)})},qt=(r,e)=>(e&&u.extendUserInputsDictionary(e),new Dt().match(r)),Ft=(r,e)=>{const t=me(),s=qt(r,e);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return Vt(s,r,t)},Ht=["data-score"],Bt=Ae({__name:"InputPassword",props:{strength:q.bool.def(!1),modelValue:q.string.def("")},emits:["update:modelValue"],setup(r,{emit:e}){const{getPrefixCls:t}=Ee(),s=t("input-password"),n=r;F(()=>n.modelValue,h=>{h!==A(c)&&(c.value=h)});const{configGlobal:i}=Pe(),a=e,o=H("password"),c=H(n.modelValue);F(()=>c.value,h=>{a("update:modelValue",h)});const l=we(()=>{const h=A(c),f=Ft(A(c));return h?f.score:-1});return(h,f)=>{var p;return B(),Z("div",{class:_([A(s),`${A(s)}--${(p=A(i))==null?void 0:p.size}`])},[Te(A(Re),De(h.$attrs,{modelValue:c.value,"onUpdate:modelValue":f[0]||(f[0]=m=>c.value=m),showPassword:"",type:o.value}),null,16,["modelValue","type"]),r.strength?(B(),Z("div",{key:0,class:_([`${A(s)}__bar`,"relative h-6px mt-10px mb-6px mr-auto ml-auto"])},[Ie("div",{class:_(`${A(s)}__bar--fill`),"data-score":l.value},null,10,Ht)],2)):Ce("",!0)],2)}}}),Qt=Se(Bt,[["__scopeId","data-v-9a70e90f"]]);export{Qt as I};
