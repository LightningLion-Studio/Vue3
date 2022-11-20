import{r as F}from"./vue.runtime.esm-bundler.5de54e07.js";import{L as S,C as k,S as A,R as E}from"./User.9d3da538.js";import{s as b}from"./Storage.c824edcd.js";import{_ as w,r as l,o as C,e as y,d as s,w as n,b as f,g as h,bw as _,t as B,F as L,p as R,a as T}from"./index.9f7642cf.js";import{H as D}from"./Header.aa256351.js";var V={};Object.defineProperty(V,"__esModule",{value:!0});const m=F,z={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},U=(0,m.createElementVNode)("path",{d:"M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z",fill:"currentColor"},null,-1),M=[U];var j=V.default=(0,m.defineComponent)({name:"KeyboardArrowRightSharp",render:function(e,v){return(0,m.openBlock)(),(0,m.createElementBlock)("svg",z,M)}});const q={data(){return{name:"",pass:"",loading:!1}},methods:{async loginAction(){this.loading=!0;const a=await S(this.name,this.pass);a.data.code!==200?this.$message.error(a.data.message):(this.$message.success(a.data.message),b.json("token",a.data.data),location.href="/user"),this.loading=!1}},components:{KeyboardArrowRightSharp:j}},I={class:"login-part"},K={class:"action"};function N(a,e,v,x,t,u){const r=l("n-input"),i=l("n-form-item-row"),d=l("n-form"),p=l("n-button"),o=l("KeyboardArrowRightSharp"),c=l("n-icon");return C(),y("div",I,[s(d,null,{default:n(()=>[s(i,{label:"\u7528\u6237\u540D"},{default:n(()=>[s(r,{size:"large",value:t.name,"onUpdate:value":e[0]||(e[0]=g=>t.name=g),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["value"])]),_:1}),s(i,{label:"\u5BC6\u7801"},{default:n(()=>[s(r,{type:"password",size:"large",value:t.pass,"onUpdate:value":e[1]||(e[1]=g=>t.pass=g),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["value"])]),_:1})]),_:1}),f("div",K,[s(p,{size:"large",quaternary:"",type:"info"},{default:n(()=>[h("\u5FD8\u8BB0\u5BC6\u7801\uFF1F")]),_:1}),s(p,{loading:t.loading,onClick:e[2]||(e[2]=g=>u.loginAction()),type:"primary",size:"large",circle:""},{icon:n(()=>[s(c,null,{default:n(()=>[s(o)]),_:1})]),_:1},8,["loading"])])])}const H=w(q,[["render",N],["__scopeId","data-v-8cec861f"]]),$={data(){return{nameLoading:!1,nameStatus:"",nametip:"",mail:"",password:"",registerButton:!0,registerButtonText:"\u8BF7\u586B\u5199\u4E0A\u9762\u7684\u6240\u6709\u9009\u9879",sendMailButtonText:"\u53D1\u9001\u9A8C\u8BC1\u7801",passwordStatus:"",allValue:{username:"",email:"",code:"",password:"",passwordRetry:""}}},methods:{async change(){this.nameLoading=!0;const a=await k(this.allValue.username);if(console.log(a),this.nameLoading=!1,this.nametip=a.data.message,a.data.code==200){if(_(this.allValue.email)){this.registerButtonText="\u8BF7\u586B\u5199\u90AE\u7BB1",this.registerButton=!0;return}if(_(this.allValue.code)){this.registerButtonText="\u8BF7\u586B\u5199\u9A8C\u8BC1\u7801",this.registerButton=!0;return}if(this.passwordChecker())this.registerButtonText="\u6CE8\u518C";else{this.registerButtonText="\u8BF7\u786E\u4FDD\u5BC6\u7801\u6B63\u786E";return}this.registerButton=!1,this.registerButtonText="\u6CE8\u518C",this.nameStatus=""}else this.nameStatus="error",this.registerButton=!0,this.$message.error(a.data.message),this.registerButtonText=a.data.message},passwordChecker(){return this.allValue.password!==this.allValue.passwordRetry||_(this.allValue.password)?!1:!_(this.allValue.passwordRetry)},async send(){this.sendMailButtonText="\u6B63\u5728\u53D1\u9001";const a=await A(this.allValue.email);this.$message.success(a.data.message),this.sendMailButtonText="\u91CD\u65B0\u53D1\u9001"},async action(){let a=await E({username:this.allValue.username,password:this.allValue.password,email:this.allValue.email,code:this.allValue.code});this.$message.warning(a.data.message),a.data.code==200&&(b.json("token",a.data.token),this.$router.push("/user"))}}};function O(a,e,v,x,t,u){const r=l("n-input"),i=l("n-form-item-row"),d=l("n-button"),p=l("n-form");return C(),y(L,null,[s(p,{id:"register"},{default:n(()=>[s(i,{label:"\u7528\u6237\u540D"},{default:n(()=>[s(r,{loading:t.nameLoading,value:t.allValue.username,"onUpdate:value":e[0]||(e[0]=o=>t.allValue.username=o),status:t.nameStatus,onChange:u.change,placeholder:"\u4E2D\u6587\u53EF\u7528\uFF0Cemoji\u4E0D\u53EF\u7528",size:"large"},null,8,["loading","value","status","onChange"])]),_:1}),s(i,{label:"\u90AE\u7BB1"},{default:n(()=>[s(r,{value:t.allValue.email,"onUpdate:value":e[1]||(e[1]=o=>t.allValue.email=o),onChange:u.change,size:"large",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},null,8,["value","onChange"])]),_:1}),s(i,{label:"\u9A8C\u8BC1\u7801"},{default:n(()=>[s(r,{onChange:u.change,size:"large",class:"code-input",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u9A8C\u8BC1\u7801",maxlength:6,value:t.allValue.code,"onUpdate:value":e[3]||(e[3]=o=>t.allValue.code=o)},{suffix:n(()=>[s(d,{onClick:e[2]||(e[2]=o=>u.send()),quaternary:""},{default:n(()=>[h(B(t.sendMailButtonText),1)]),_:1})]),_:1},8,["onChange","value"])]),_:1}),s(i,{label:"\u5BC6\u7801"},{default:n(()=>[s(r,{value:t.allValue.password,"onUpdate:value":e[4]||(e[4]=o=>t.allValue.password=o),onChange:e[5]||(e[5]=o=>u.change()),size:"large",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:"password"},null,8,["value"])]),_:1}),s(i,{label:"\u91CD\u590D\u5BC6\u7801"},{default:n(()=>[s(r,{value:t.allValue.passwordRetry,"onUpdate:value":e[6]||(e[6]=o=>t.allValue.passwordRetry=o),onChange:e[7]||(e[7]=o=>u.change()),size:"large",placeholder:"\u8BF7\u91CD\u65B0\u8F93\u5165\u5BC6\u7801",status:t.passwordStatus,type:"password"},null,8,["value","status"])]),_:1})]),_:1}),s(d,{size:"large",onClick:e[8]||(e[8]=o=>u.action()),disabled:t.registerButton,status:t.passwordStatus,type:"primary",block:""},{default:n(()=>[h(B(t.registerButtonText),1)]),_:1},8,["disabled","status"])],64)}const P=w($,[["render",O]]),G="/assets/logo.226542b1.png";const J={data(){return{value:"signin",title:"\u767B\u5F55"}},methods:{changeTitle(a){a==="signin"?this.title="\u6CE8\u518C":this.title="\u767B\u5F55"}},components:{Login:H,Header:D,Register:P}},Q=a=>(R("data-v-da9fdf6c"),a=a(),T(),a),W={class:"login"},X=Q(()=>f("div",{class:"logo"},[f("img",{src:G})],-1)),Y={class:"container"};function Z(a,e,v,x,t,u){const r=l("Header"),i=l("Login",!0),d=l("n-tab-pane"),p=l("Register"),o=l("n-tabs");return C(),y("div",W,[s(r,null,{default:n(()=>[h(B(t.title),1)]),_:1}),X,f("div",Y,[s(o,{"justify-content":"space-evenly","default-value":"signin","onUpdate:value":[e[0]||(e[0]=c=>u.changeTitle(t.value)),e[1]||(e[1]=c=>t.value=c)],size:"large",value:t.value,animated:""},{default:n(()=>[s(d,{name:"signin",tab:"\u767B\u5F55",class:"log"},{default:n(()=>[s(i)]),_:1}),s(d,{name:"signup",tab:"\u6CE8\u518C"},{default:n(()=>[s(p)]),_:1})]),_:1},8,["value"])])])}const oe=w(J,[["render",Z],["__scopeId","data-v-da9fdf6c"]]);export{oe as default};
