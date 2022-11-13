import{L,s as V,C,S as k,R}from"./User.56922a9e.js";import{ab as B,o as p,e as g,b as _,_ as y,r as l,d as t,w as a,g as w,bw as v,t as b,F as S,aI as T,p as z,a as $}from"./index.18224459.js";const A={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},K=_("path",{d:"M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z",fill:"currentColor"},null,-1),U=[K],I=B({name:"KeyboardArrowLeftRound",render:function(e,m){return p(),g("svg",A,U)}}),M={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},j=_("path",{d:"M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z",fill:"currentColor"},null,-1),q=[j],H=B({name:"KeyboardArrowRightSharp",render:function(e,m){return p(),g("svg",M,q)}});const N={data(){return{name:"",pass:"",loading:!1}},methods:{async loginAction(){this.loading=!0;const s=await L(this.name,this.pass);s.data.code!==200?this.$message.error(s.data.message):(this.$message.success(s.data.message),V.json("token",s.data.data),location.href="/user"),this.loading=!1}},components:{KeyboardArrowRightSharp:H}},F={class:"login-part"},D={class:"action"};function E(s,e,m,x,n,r){const i=l("n-input"),u=l("n-form-item-row"),d=l("n-form"),c=l("n-button"),o=l("KeyboardArrowRightSharp"),f=l("n-icon");return p(),g("div",F,[t(d,null,{default:a(()=>[t(u,{label:"\u7528\u6237\u540D"},{default:a(()=>[t(i,{size:"large",value:n.name,"onUpdate:value":e[0]||(e[0]=h=>n.name=h),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["value"])]),_:1}),t(u,{label:"\u5BC6\u7801"},{default:a(()=>[t(i,{type:"password",size:"large",value:n.pass,"onUpdate:value":e[1]||(e[1]=h=>n.pass=h),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["value"])]),_:1})]),_:1}),_("div",D,[t(c,{size:"large",quaternary:"",type:"info"},{default:a(()=>[w("\u5FD8\u8BB0\u5BC6\u7801\uFF1F")]),_:1}),t(c,{loading:n.loading,onClick:e[2]||(e[2]=h=>r.loginAction()),type:"primary",size:"large",circle:""},{icon:a(()=>[t(f,null,{default:a(()=>[t(o)]),_:1})]),_:1},8,["loading"])])])}const G=y(N,[["render",E],["__scopeId","data-v-7b66381c"]]);const J={data(){return{nameLoading:!1,nameStatus:"",nametip:"",mail:"",password:"",registerButton:!0,registerButtonText:"\u8BF7\u586B\u5199\u4E0A\u9762\u7684\u6240\u6709\u9009\u9879",sendMailButtonText:"\u53D1\u9001\u9A8C\u8BC1\u7801",passwordStatus:"",allValue:{username:"",email:"",code:"",password:"",passwordRetry:""}}},methods:{async change(){this.nameLoading=!0;const s=await C(this.allValue.username);if(console.log(s),this.nameLoading=!1,this.nametip=s.data.message,s.data.code==200){if(v(this.allValue.email)){this.registerButtonText="\u8BF7\u586B\u5199\u90AE\u7BB1",this.registerButton=!0;return}if(v(this.allValue.code)){this.registerButtonText="\u8BF7\u586B\u5199\u9A8C\u8BC1\u7801",this.registerButton=!0;return}if(this.passwordChecker())this.registerButtonText="\u6CE8\u518C";else{this.registerButtonText="\u8BF7\u786E\u4FDD\u5BC6\u7801\u6B63\u786E";return}this.registerButton=!1,this.registerButtonText="\u6CE8\u518C",this.nameStatus=""}else this.nameStatus="error",this.registerButton=!0,this.$message.error(s.data.message),this.registerButtonText=s.data.message},passwordChecker(){return this.allValue.password!==this.allValue.passwordRetry||v(this.allValue.password)?!1:!v(this.allValue.passwordRetry)},async send(){this.sendMailButtonText="\u6B63\u5728\u53D1\u9001";const s=await k(this.allValue.email);this.$message.success(s.data.message),this.sendMailButtonText="\u91CD\u65B0\u53D1\u9001"},async action(){let s=await R({username:this.allValue.username,password:this.allValue.password,email:this.allValue.email,code:this.allValue.code});this.$message.warning(s.data.message),s.data.code==200&&(V.json("token",s.data.token),this.$router.push("/user"))}}};function O(s,e,m,x,n,r){const i=l("n-input"),u=l("n-form-item-row"),d=l("n-button"),c=l("n-form");return p(),g(S,null,[t(c,{id:"register"},{default:a(()=>[t(u,{label:"\u7528\u6237\u540D"},{default:a(()=>[t(i,{loading:n.nameLoading,value:n.allValue.username,"onUpdate:value":e[0]||(e[0]=o=>n.allValue.username=o),status:n.nameStatus,onChange:r.change,placeholder:"\u4E2D\u6587\u53EF\u7528\uFF0Cemoji\u4E0D\u53EF\u7528",size:"large"},null,8,["loading","value","status","onChange"])]),_:1}),t(u,{label:"\u90AE\u7BB1"},{default:a(()=>[t(i,{value:n.allValue.email,"onUpdate:value":e[1]||(e[1]=o=>n.allValue.email=o),onChange:r.change,size:"large",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},null,8,["value","onChange"])]),_:1}),t(u,{label:"\u9A8C\u8BC1\u7801"},{default:a(()=>[t(i,{onChange:r.change,size:"large",class:"code-input",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u9A8C\u8BC1\u7801",maxlength:6,value:n.allValue.code,"onUpdate:value":e[3]||(e[3]=o=>n.allValue.code=o)},{suffix:a(()=>[t(d,{onClick:e[2]||(e[2]=o=>r.send()),quaternary:""},{default:a(()=>[w(b(n.sendMailButtonText),1)]),_:1})]),_:1},8,["onChange","value"])]),_:1}),t(u,{label:"\u5BC6\u7801"},{default:a(()=>[t(i,{value:n.allValue.password,"onUpdate:value":e[4]||(e[4]=o=>n.allValue.password=o),onChange:e[5]||(e[5]=o=>r.change()),size:"large",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:"password"},null,8,["value"])]),_:1}),t(u,{label:"\u91CD\u590D\u5BC6\u7801"},{default:a(()=>[t(i,{value:n.allValue.passwordRetry,"onUpdate:value":e[6]||(e[6]=o=>n.allValue.passwordRetry=o),onChange:e[7]||(e[7]=o=>r.change()),size:"large",placeholder:"\u8BF7\u91CD\u65B0\u8F93\u5165\u5BC6\u7801",status:n.passwordStatus,type:"password"},null,8,["value","status"])]),_:1})]),_:1}),t(d,{size:"large",onClick:e[8]||(e[8]=o=>r.action()),disabled:n.registerButton,status:n.passwordStatus,type:"primary",block:""},{default:a(()=>[w(b(n.registerButtonText),1)]),_:1},8,["disabled","status"])],64)}const P=y(J,[["render",O]]);const Q={methods:{back(){this.$router.go(-1)}},components:{KeyboardArrowLeftRound:I}},W={class:"header"},X={class:"text"};function Y(s,e,m,x,n,r){const i=l("KeyboardArrowLeftRound"),u=l("n-icon");return p(),g("div",W,[_("div",{class:"left",onClick:e[0]||(e[0]=d=>r.back())},[t(u,{size:"35"},{default:a(()=>[t(i)]),_:1})]),_("div",X,[T(s.$slots,"default",{},void 0,!0)])])}const Z=y(Q,[["render",Y],["__scopeId","data-v-a5de88e3"]]),ee="/assets/logo.226542b1.png";const te={data(){return{value:"signin",title:"\u767B\u5F55"}},methods:{changeTitle(s){s==="signin"?this.title="\u6CE8\u518C":this.title="\u767B\u5F55"}},components:{Login:G,Header:Z,Register:P}},se=s=>(z("data-v-da9fdf6c"),s=s(),$(),s),ne={class:"login"},ae=se(()=>_("div",{class:"logo"},[_("img",{src:ee})],-1)),oe={class:"container"};function le(s,e,m,x,n,r){const i=l("Header"),u=l("Login",!0),d=l("n-tab-pane"),c=l("Register"),o=l("n-tabs");return p(),g("div",ne,[t(i,null,{default:a(()=>[w(b(n.title),1)]),_:1}),ae,_("div",oe,[t(o,{"justify-content":"space-evenly","default-value":"signin","onUpdate:value":[e[0]||(e[0]=f=>r.changeTitle(n.value)),e[1]||(e[1]=f=>n.value=f)],size:"large",value:n.value,animated:""},{default:a(()=>[t(d,{name:"signin",tab:"\u767B\u5F55",class:"log"},{default:a(()=>[t(u)]),_:1}),t(d,{name:"signup",tab:"\u6CE8\u518C"},{default:a(()=>[t(c)]),_:1})]),_:1},8,["value"])])])}const ue=y(te,[["render",le],["__scopeId","data-v-da9fdf6c"]]);export{ue as default};
