if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),o={module:{uri:n},exports:u,require:t};e[n]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/Add.377b988e.js",revision:null},{url:"assets/Apps.520077c7.css",revision:null},{url:"assets/Apps.5b4b25cf.js",revision:null},{url:"assets/bilibili.ae784eb9.js",revision:null},{url:"assets/BottomBar.212bbcd8.css",revision:null},{url:"assets/BottomBar.585f0f4e.js",revision:null},{url:"assets/Carder.3f98fab9.css",revision:null},{url:"assets/Carder.vue_vue_type_style_index_0_lang.76c68993.js",revision:null},{url:"assets/Center.0da260e1.css",revision:null},{url:"assets/Center.58631cd8.js",revision:null},{url:"assets/Discover.88b93abb.js",revision:null},{url:"assets/Header.16372c8c.js",revision:null},{url:"assets/Header.5a463d60.css",revision:null},{url:"assets/Home.3c457ab4.js",revision:null},{url:"assets/Home.924e4c7f.css",revision:null},{url:"assets/index.99e3e9a8.css",revision:null},{url:"assets/index.fe06fcdc.js",revision:null},{url:"assets/Login.4d896e42.css",revision:null},{url:"assets/Login.63db9714.js",revision:null},{url:"assets/md-editor-v3.es.a51f2482.js",revision:null},{url:"assets/NewDraft.c938b968.css",revision:null},{url:"assets/NewDraft.c974ff41.js",revision:null},{url:"assets/SinglePost.07d9d954.js",revision:null},{url:"assets/SinglePost.dc596318.css",revision:null},{url:"assets/SingleTopic.119fc04e.css",revision:null},{url:"assets/SingleTopic.4632b38d.js",revision:null},{url:"assets/style.527119c5.css",revision:null},{url:"assets/User.fa097d9f.js",revision:null},{url:"assets/vue.runtime.esm-bundler.c3adb743.js",revision:null},{url:"index.html",revision:"092bc1b766fef781a33ea4a96688b2f4"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"style.css",revision:"6a667925226db70575557b44cfcbadf8"},{url:"manifest.webmanifest",revision:"5c9c13780f0ea763a56e5aee0b3527b6"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
