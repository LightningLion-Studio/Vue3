import{E as k}from"./md-editor-v3.es.2c78ebd2.js";/* empty css              */import{s as h,n as y,e as D}from"./Follow.cf4c9e47.js";import{H as E}from"./Header.6b2e330c.js";import{l as x,bx as C,n as N,m as u,r as c,o as V,e as L,d as o,w as m,h as v,b as A,V as U,bw as f}from"./index.c4c905fa.js";import"./vue.runtime.esm-bundler.16a336ba.js";const q=["revoke","next","-","bold","underline","italic","image","-","strikeThrough","title","sub","sup","quote","unorderedList","orderedList","-","codeRow","code","link","table","=","pageFullscreen","fullscreen","preview","htmlPreview","catalog"];function z(){document.getElementsByClassName("md-editor-toolbar-item")[5].addEventListener("click",()=>{document.querySelector(".md-dropdown").classList.remove("md-dropdown-hidden")}),document.getElementsByClassName("md-editor-toolbar-item")[16].addEventListener("click",()=>{document.querySelector(".md-dropdown").classList.remove("md-dropdown-hidden")})}const I={class:"newdraft"},T={class:"container padding"},G=x({__name:"NewDraft",setup(H){const _=h.parse("token"),a=C();N(()=>{z()});const l=u(""),r=u(""),p=u(""),g=u(q),s=u(!1),w=async()=>{if(s.value=!0,f(r.value)){a.error("\u8BF7\u586B\u5199\u6807\u9898"),s.value=!1;return}else if(f(l.value)){a.warning("\u8BF7\u586B\u5199\u5185\u5BB9"),s.value=!1;return}const e=await y(r.value,l.value,"open","",p.value,"");e.data.code===201&&(p.value=e.data.data.insertId),e.data.code==200||e.data.code==201?a.success(e.data.message):a.error(e.data.message),s.value=!1},B=(e,t)=>{let d=new FormData;d.append("avatar",e[0]),D.post("/apis/user/upload?cookie="+_.token,d,{headers:{"Content-Type":"multipart/form-data"}}).then(n=>{a.success(n.data.message),t(["//"+n.data.data])}).catch(n=>{a.error("\u4E0A\u4F20\u5931\u8D25")})};return(e,t)=>{const d=c("n-input"),n=c("n-select"),b=c("n-button"),F=c("n-space");return V(),L("div",I,[o(E,null,{default:m(()=>[v("\u7F16\u8F91\u8349\u7A3F")]),_:1}),A("div",T,[o(F,{vertical:""},{default:m(()=>[o(d,{size:"large",value:r.value,"onUpdate:value":t[0]||(t[0]=i=>r.value=i),placeholder:"\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898 \u5FC5\u586B"},null,8,["value"]),o(U(k),{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=i=>l.value=i),onOnUploadImg:B,theme:"dark",toolbars:g.value},null,8,["modelValue","toolbars"]),o(n,{disabled:"",size:"large",placeholder:"\u5206\u7C7B\u529F\u80FD\u6B63\u5728\u5F00\u53D1\u4E2D"}),o(b,{loading:s.value,block:"",type:"primary",size:"large",onClick:w},{default:m(()=>[v(" \u4FDD\u5B58\u8349\u7A3F ")]),_:1},8,["loading"])]),_:1})])])}}});export{G as default};
