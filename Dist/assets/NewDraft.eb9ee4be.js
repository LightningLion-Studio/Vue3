import{E as k}from"./style.1274129d.js";import{s as h,n as y,d as D}from"./vue.runtime.esm-bundler.0c81efa8.js";import{H as E}from"./Header.54ce275a.js";import{ab as x,bx as C,az as N,B as u,r as c,o as L,e as V,d as o,w as m,h as v,b as z,M as A,bw as f}from"./index.99b4b42d.js";const U=["revoke","next","-","bold","underline","italic","image","-","strikeThrough","title","sub","sup","quote","unorderedList","orderedList","-","codeRow","code","link","table","=","pageFullscreen","fullscreen","preview","htmlPreview","catalog"];function q(){document.getElementsByClassName("md-editor-toolbar-item")[5].addEventListener("click",()=>{document.querySelector(".md-dropdown").classList.remove("md-dropdown-hidden")}),document.getElementsByClassName("md-editor-toolbar-item")[16].addEventListener("click",()=>{document.querySelector(".md-dropdown").classList.remove("md-dropdown-hidden")})}const I={class:"newdraft"},M={class:"container padding"},R=x({__name:"NewDraft",setup(T){const _=h.parse("token"),a=C();N(()=>{q()});const l=u(""),r=u(""),p=u(""),g=u(U),s=u(!1),B=async()=>{if(s.value=!0,f(r.value)){a.error("\u8BF7\u586B\u5199\u6807\u9898"),s.value=!1;return}else if(f(l.value)){a.warning("\u8BF7\u586B\u5199\u5185\u5BB9"),s.value=!1;return}const e=await y(r.value,l.value,"open","",p.value,"");e.data.code===201&&(p.value=e.data.data.insertId),e.data.code==200||e.data.code==201?a.success(e.data.message):a.error(e.data.message),s.value=!1},b=(e,t)=>{let d=new FormData;d.append("avatar",e[0]),D.post("/apis/user/upload?cookie="+_.token,d,{headers:{"Content-Type":"multipart/form-data"}}).then(n=>{a.success(n.data.message),t(["//"+n.data.data])}).catch(n=>{a.error("\u4E0A\u4F20\u5931\u8D25")})};return(e,t)=>{const d=c("n-input"),n=c("n-select"),w=c("n-button"),F=c("n-space");return L(),V("div",I,[o(E,null,{default:m(()=>[v("\u7F16\u8F91\u8349\u7A3F")]),_:1}),z("div",M,[o(F,{vertical:""},{default:m(()=>[o(d,{size:"large",value:r.value,"onUpdate:value":t[0]||(t[0]=i=>r.value=i),placeholder:"\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898 \u5FC5\u586B"},null,8,["value"]),o(A(k),{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=i=>l.value=i),onOnUploadImg:b,theme:"dark",toolbars:g.value},null,8,["modelValue","toolbars"]),o(n,{disabled:"",size:"large",placeholder:"\u5206\u7C7B\u529F\u80FD\u6B63\u5728\u5F00\u53D1\u4E2D"}),o(w,{loading:s.value,block:"",type:"primary",size:"large",onClick:B},{default:m(()=>[v(" \u4FDD\u5B58\u8349\u7A3F ")]),_:1},8,["loading"])]),_:1})])])}}});export{R as default};
