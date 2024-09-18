(function(){"use strict";var e={2709:function(e,t,n){var o=n(5130),r=n(6768);const i={id:"app"};function a(e,t,n,o,a,u){const c=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(c)])}var u={name:"App"},c=n(1241);const f=(0,c.A)(u,[["render",a]]);var s=f,l=(n(5524),n(5790)),d=(0,l.$N)();async function m(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var p=n(973),h=n(5129);const b=(0,p.aE)({history:(0,p.LA)(),routes:[{meta:{title:"Home",requiresAuth:!0},path:"/",component:()=>Promise.all([n.e(915),n.e(951),n.e(972)]).then(n.bind(n,5972)),children:[{name:"internamiento",path:"internamiento",component:()=>Promise.all([n.e(915),n.e(689),n.e(951),n.e(49),n.e(717)]).then(n.bind(n,2717))},{name:"doctor",path:"doctor",component:()=>Promise.all([n.e(915),n.e(689),n.e(951),n.e(49),n.e(346)]).then(n.bind(n,3346))},{name:"paciente",path:"paciente",component:()=>Promise.all([n.e(915),n.e(689),n.e(951),n.e(49),n.e(523)]).then(n.bind(n,5523))},{name:"altas",path:"altas",component:()=>Promise.all([n.e(915),n.e(689),n.e(951),n.e(49),n.e(318)]).then(n.bind(n,2318))},{name:"visitas",path:"visitas",component:()=>Promise.all([n.e(915),n.e(689),n.e(951),n.e(49),n.e(440)]).then(n.bind(n,440))}]},{meta:{title:"Login"},path:"/login",name:"login",component:()=>Promise.all([n.e(915),n.e(689),n.e(19)]).then(n.bind(n,152))},{path:"/:pathMatch(.*)*",redirect:"/login"}]});b.beforeEach(((e,t,n)=>{const o=e.matched.some((e=>e.meta.requiresAuth));o&&!h.A.state.isAuthenticated?n({name:"login"}):"login"===e.name&&h.A.state.isAuthenticated?"usuario"===h.A.state.role||"Doctor"===h.A.state.role?n({name:"internamiento"}):n():"/"===e.path&&h.A.state.isAuthenticated&&("usuario"===h.A.state.role||"Doctor"===h.A.state.role)?n({name:"internamiento"}):n()}));var g=b;m(),h.A.dispatch("initializeStateFromLocalStorage"),(0,o.Ef)(s).use(d).use(g).use(h.A).mount("#app")},5129:function(e,t,n){var o=n(782);const r="DJsdfg-2352LLDSF-dfglñdskfgiu38r_[22334ews34>YUVASZghsvdV";t.A=(0,o.y$)({state:{isAuthenticated:!1,role:"",nombre_usuario:"",token:""},getters:{},mutations:{setIsAuthenticated(e,t){e.isAuthenticated=t,localStorage.setItem(r,JSON.stringify(e))},setUsername(e,t){e.nombre_usuario=t,localStorage.setItem(r,JSON.stringify(e))},setToken(e,t){e.token=t,localStorage.setItem(r,JSON.stringify(e))},setRole(e,t){e.role=t,localStorage.setItem(r,JSON.stringify(e))},initializeStateFromLocalStorage(e){const t=localStorage.getItem(r);t&&Object.assign(e,JSON.parse(t))}},actions:{initializeStateFromLocalStorage({commit:e}){e("initializeStateFromLocalStorage")}}})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var f=r();void 0!==f&&(t=f)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&o;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return o[e]}}));return a["default"]=function(){return o},n.d(i,a),i}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(53===e?"webfontloader":e)+"."+{19:"b84f29ad",49:"5c4981fc",53:"39c946f5",318:"6b8c1303",346:"87b2e64d",440:"894f1971",523:"dbe598a5",689:"53061da9",717:"c5988cc6",915:"24740d36",951:"dc9da4e1",972:"b104efeb"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{19:"0ca6ec94",49:"f56a267c",318:"fb84426b",346:"9f61d510",440:"14252457",523:"8d813ab2",689:"132ee031",717:"268d363f",915:"07381db3",951:"fd15d197",972:"b9c52c8c"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend-ebox-platform:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var u=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var o=n&&n.type,u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=u,a.parentNode&&a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=u,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(t(a,u))return r();e(o,u,null,r,i)}))},r={524:0};n.f.miniCss=function(e,t){var n={19:1,49:1,318:1,346:1,440:1,523:1,689:1,717:1,915:1,951:1,972:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],c=o[2],f=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var s=c(n)}for(t&&t(o);f<a.length;f++)i=a[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunkfrontend_ebox_platform"]=self["webpackChunkfrontend_ebox_platform"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(2709)}));o=n.O(o)})();
//# sourceMappingURL=app.6c2aa7e4.js.map