import{r as M}from"./User.a1ed6ab6.js";import{_ as N}from"./bilibili.ae784eb9.js";import{_ as V,r as n,o as a,e as l,d as o,w as e,f as L,g as i,t as f,b as r,F as C,h as D,p as P,a as j,c as B}from"./index.d5118f1d.js";async function q(t){return await M({method:"get",url:"/app",params:{name:t}})}function g(t){navigator.clipboard.writeText("LightningLion").then(t()).catch(u=>{alert("\u9519\u8BEF\uFF0C\u8BF7\u81EA\u884C\u590D\u5236\u53E3\u4EE4\uFF0C\u5426\u5219\u65E0\u6CD5\u4E0B\u8F7D\u8155\u4E0AB\u7AD9\uFF01"+u)})}function y(t){location.href=t}const G=/ipad|iPhone/i.test(window.navigator.userAgent),R={data(){return{data:{title:"\u52A0\u8F7D\u4E2D"},showModal:!1,method1:[],type:"\u52A0\u8F7D\u4E2D"}},methods:{re(){g(()=>{try{y("watchrss://")}catch{this.$message.error("\u6253\u5F00\u5931\u8D25")}})},async activitive(){const t=()=>{this.showModal=!0,y("watchrss://")};g(()=>{G?t():this.$dialog.warning({title:"\u8B66\u544A",content:"\u68C0\u6D4B\u5230\u4F3C\u4E4E\u662F\u975EiPhone\uFF0C\u53EF\u80FD\u4F1A\u65E0\u6CD5\u6FC0\u6D3B",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:t})})}},async mounted(){if(this.$route.params.e=="bilibili"){this.type="bilibili",document.title="\u8155\u4E0AB\u7AD9";const t=await q("bilibili");this.data=t.data.data,this.method1=t.data.data.methods}}};const E=t=>(P("data-v-0ad50fe5"),t=t(),j(),t),U={id:"apps",class:"apps"},H={key:0,class:"padding bilibili"},J=E(()=>r("div",{class:"logo-container"},[r("img",{class:"logo",src:N})],-1)),K=["href"],O=E(()=>r("div",{class:"tip"},"\u6B63\u5728\u8DF3\u8F6C\u5230App\uFF0C\u8BF7\u786E\u4FDD\u60A8\u5DF2\u7ECF\u6210\u529F\u5B89\u88C5\u8155\u4E0ARSS...",-1));function Q(t,u,W,X,s,_){const v=n("n-h1"),d=n("n-button"),m=n("n-space"),A=n("n-spin"),w=n("n-card"),b=n("n-modal"),k=n("n-h2"),x=n("n-icon"),S=n("n-step"),I=n("n-steps"),T=n("n-collapse-item"),z=n("n-collapse");return a(),l("div",U,[s.type==="bilibili"?(a(),l("div",H,[J,o(v,{class:"title"},{default:e(()=>[i(f(s.data.title),1)]),_:1}),o(m,{justify:"center"},{default:e(()=>[r("a",{href:s.data.link,target:"_blank"},[o(d,{type:"primary",round:"",size:"large"},{default:e(()=>[i(" \u7ACB\u5373\u4E0B\u8F7D ")]),_:1})],8,K),o(d,{onClick:u[0]||(u[0]=c=>_.activitive()),secondary:"",round:"",size:"large"},{default:e(()=>[i(" \u6FC0\u6D3BApp ")]),_:1})]),_:1}),o(b,{show:s.showModal,"onUpdate:show":u[1]||(u[1]=c=>s.showModal=c)},{default:e(()=>[o(w,{style:{width:"600px"},bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:e(()=>[o(m,{justify:"center"},{default:e(()=>[o(A,{size:"large"}),O,o(d,{onClick:_.re,text:"",type:"primary"},{default:e(()=>[i(" \u5982\u679C\u6CA1\u6709\u8DF3\u8F6C\u8BF7\u70B9\u51FB\u8FD9\u91CC ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["show"]),o(k,null,{default:e(()=>[i("\u6FC0\u6D3B\u65B9\u6CD5")]),_:1}),o(z,{"default-expanded-names":[1],accordion:""},{default:e(()=>[(a(!0),l(C,null,D(s.method1,(c,p)=>(a(),B(T,{key:p,title:"\u65B9\u6CD5"+(p+1),name:p+1},{default:e(()=>[o(I,{vertical:""},{default:e(()=>[(a(!0),l(C,null,D(c,(h,F)=>(a(),B(S,{key:F,title:h.title,description:h.text},{icon:e(()=>[o(x,{class:"step-icon"},{default:e(()=>[i(f(F+1),1)]),_:2},1024)]),_:2},1032,["title","description"]))),128))]),_:2},1024)]),_:2},1032,["title","name"]))),128))]),_:1})])):L("",!0)])}const tt=V(R,[["render",Q],["__scopeId","data-v-0ad50fe5"]]);export{tt as default};
