import{_ as h,r as o,o as _,c as l,w as n,p as b,a as A,b as t,d as a,e as x,f as C,F as H,g as F,h as v,t as f}from"./index.c4c905fa.js";import{_ as G,G as I}from"./Common.7f3dd86e.js";import{G as D}from"./Follow.cf4c9e47.js";import{_ as j}from"./Carder.vue_vue_type_style_index_0_lang.2ea715cb.js";import{B as E}from"./BottomBar.7aee3709.js";import"./vue.runtime.esm-bundler.16a336ba.js";const W="/assets/swiper.73f8eaf4.jpeg";const P={},$=e=>(b("data-v-ec4b27d8"),e=e(),A(),e),N=$(()=>t("img",{class:"carousel-img",src:W},null,-1)),V=$(()=>t("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"},null,-1)),q=$(()=>t("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"},null,-1));function L(e,s){const u=o("n-carousel");return _(),l(u,{autoplay:"",class:"container"},{default:n(()=>[N,V,q]),_:1})}const M=h(P,[["render",L],["__scopeId","data-v-ec4b27d8"]]),R={methods:{to(e){this.$router.push(e)}}},T="/assets/new.8311c3fd.png",z="/assets/book.c2d6b079.png",J="/assets/music.418c29ab.jpeg";const p=e=>(b("data-v-22e59934"),e=e(),A(),e),K=p(()=>t("img",{src:G},null,-1)),O=p(()=>t("div",{class:"right"},[t("div",{class:"title"},"\u8155\u4E0AB\u7AD9"),t("div",{class:"desc"},"For Apple Watch")],-1)),Q=[K,O],U=p(()=>t("div",{class:"item"},[t("img",{src:T}),t("div",{class:"right"},[t("div",{class:"title"},"\u8155\u4E0ARSS"),t("div",{class:"desc"},"For Apple Watch")])],-1)),X=p(()=>t("div",{class:"item"},[t("img",{src:z}),t("div",{class:"right"},[t("div",{class:"title"},"\u8155\u4E0A\u5C0F\u8BF4"),t("div",{class:"desc"},"For Apple Watch")])],-1)),Y=p(()=>t("div",{class:"item"},[t("img",{src:J}),t("div",{class:"right"},[t("div",{class:"title"},"\u8155\u4E0A\u97F3\u4E50"),t("div",{class:"desc"},"For Apple Watch")])],-1));function Z(e,s,u,y,i,m){const c=o("n-gi"),d=o("n-grid");return _(),l(d,{class:"app-gird","x-gap":"12","y-gap":"12",cols:2},{default:n(()=>[a(c,null,{default:n(()=>[t("div",{class:"item",onClick:s[0]||(s[0]=r=>m.to("/apps/bilibili"))},Q)]),_:1}),a(c,null,{default:n(()=>[U]),_:1}),a(c,null,{default:n(()=>[X]),_:1}),a(c,null,{default:n(()=>[Y]),_:1})]),_:1})}const ee=h(R,[["render",Z],["__scopeId","data-v-22e59934"]]),te={components:{Carder:j},data(){return{list:[],load:!0,show:!1}},async mounted(){const e=await D();for(let s=0;s<e.data.data.length;s++)e.data.data[s].data=e.data.data[s].data.replace(/\s*/g,""),e.data.data[s].poster?e.data.data[s].type="poster":e.data.data[s].type="";this.list=e.data.data,this.load=!1,this.show=!0},methods:{go(e){this.$router.push("/post/"+e)}}};const se={class:"home-post"};function oe(e,s,u,y,i,m){const c=o("n-skeleton"),d=o("Carder");return _(),x("div",se,[i.load?(_(),l(c,{key:0,text:"",repeat:4})):C("",!0),(_(!0),x(H,null,F(i.list,(r,g)=>(_(),l(d,{key:g,title:r.title,cover:r.poster,type:r.type,onClick:w=>e.$router.push("/post/"+r.id)},{default:n(()=>[v(f(r.data),1)]),_:2},1032,["title","cover","type","onClick"]))),128))])}const ae=h(te,[["render",oe],["__scopeId","data-v-7c53436d"]]);const ne={components:{BottomBar:E,HomeSwiper:M,HomePost:ae,AppGird:ee},data(){return{data:"\u516C\u544A\u52A0\u8F7D\u4E2D..."}},async mounted(){const e=await I();this.data=e.data.data},methods:{parseWeek(){const e=new Date().getDay();if(e===0)return"\u661F\u671F\u4E00";if(e===1)return"\u661F\u671F\u4E8C";if(e===2)return"\u661F\u671F\u4E09";if(e===3)return"\u661F\u671F\u56DB";if(e===4)return"\u661F\u671F\u4E94";if(e===5)return"\u661F\u671F\u516D";if(e===6)return"\u661F\u671F\u65E5"}}},ce={class:"padding"};function re(e,s,u,y,i,m){const c=o("BottomBar"),d=o("n-text"),r=o("n-h1"),g=o("HomeSwiper"),w=o("n-alert"),k=o("AppGird"),B=o("HomePost"),S=o("n-config-provider");return _(),l(S,{theme:void 0,class:"home"},{default:n(()=>[a(c,{on:0}),t("div",ce,[a(d,{depth:"3",class:"day"},{default:n(()=>[v(f(new Date().getMonth())+"\u6708"+f(new Date().getDate())+"\u65E5 "+f(m.parseWeek()),1)]),_:1}),a(r,{class:"h1"},{default:n(()=>[v(" \u5FC3\u7535\u793E\u533A ")]),_:1}),a(g),a(w,{bordered:!1,type:"info",title:i.data,class:"post"},null,8,["title"]),a(k,{class:"post"}),a(B,{class:"post"})])]),_:1})}const me=h(ne,[["render",re],["__scopeId","data-v-9b5f295e"]]);export{me as default};
