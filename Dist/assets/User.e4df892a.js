import{a as n,s}from"./vue.runtime.esm-bundler.8a91a57a.js";import{i as o,j as u,k as i}from"./index.6ed0c819.js";const{message:c}=o(["message"],{configProviderProps:{theme:u}}),r=n.create({baseURL:"/apis",timeout:1e5,auth:{username:"APP ID",password:"APP Secret"}});r.interceptors.request.use(e=>e,e=>Promise.reject(e));r.interceptors.response.use(e=>(e.data.message=="\u60A8\u672A\u767B\u5F55 \u8BF7\u5148\u767B\u5F55"&&(c.error(e.data.message),i.push("/")),e),e=>Promise.reject(e));JSON.parse(localStorage.getItem("token"));async function l(e,a,t){return await r({method:"get",url:"/post",params:{order:e,limit:a,offset:t}})}async function d(e){return await r({method:"get",url:"/post/single",params:{id:e}})}s.parse("token");async function w(e,a,t){return await r({method:"get",url:"/topic",params:{order:e,limit:a,offset:t}})}const m=s.parse("token");async function f(e,a){return await r({method:"get",params:{username:e,password:a},url:"/newuser/login"})}async function h(){return await r.get("/user",{params:{cookie:m.token}})}async function k(e){return await r({method:"get",url:"/newuser/checkname",params:{username:e}})}async function P(e){return await r({method:"get",url:"/newuser/sendmail",params:{email:e}})}async function y(e){return await r({method:"get",url:"/newuser/register",params:{username:e.username,password:e.password,email:e.email,code:e.code}})}export{k as C,l as G,f as L,y as R,P as S,h as U,w as a,d as b,r};