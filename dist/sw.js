if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>n(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(r.map((e=>u[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/arrow-ec95ba9c.png",revision:null},{url:"assets/circle-d1e63d6a.png",revision:null},{url:"assets/heptagon-0dd875fb.png",revision:null},{url:"assets/hexagon-8fed782a.png",revision:null},{url:"assets/index-1d3c73a3.css",revision:null},{url:"assets/index-df2c2383.js",revision:null},{url:"assets/octagon-7f7a9668.png",revision:null},{url:"assets/pentagon-708aaa6c.png",revision:null},{url:"assets/star-4-036550a2.png",revision:null},{url:"assets/star-5-f8281e7c.png",revision:null},{url:"assets/star-6-9390f25f.png",revision:null},{url:"assets/triangle-d19bfe5d.png",revision:null},{url:"index.html",revision:"607af65fdeca64a046e41deff04924a4"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"1c91c8e24990ab0755a6fd0934858f76"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
