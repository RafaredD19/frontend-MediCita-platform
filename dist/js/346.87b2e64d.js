"use strict";(self["webpackChunkfrontend_ebox_platform"]=self["webpackChunkfrontend_ebox_platform"]||[]).push([[346],{3346:function(e,l,a){a.r(l),a.d(l,{default:function(){return T}});var t=a(6768),o=a(144),n=a(1189);const u="http://localhost:3000/api";function r(){return n.A.get(`${u}/doctor/list`)}function s(e){return n.A.post(`${u}/doctor/create`,e)}var d=a(2729),i=a(697),c=a(4260),m=a(7511),p=a(4750);const b={class:"table-container"};var f={__name:"DoctorTable",setup(e){const l=(0,o.KR)(""),a=(0,o.KR)(!1),n=(0,o.KR)([{title:"Nombre",align:"start",key:"nombres"},{title:"Apellido",key:"apellidos"},{title:"Especialidad",key:"especialidad"},{title:"Telefono",key:"telefono"}]),u=(0,o.KR)([]),s=async()=>{a.value=!0;try{const e=await r();u.value=e.data.data.map((e=>({nombres:e.nombres,apellidos:e.apellidos,especialidad:e.especialidad,telefono:e.telefono})))}catch(e){console.error("Error fetching internments:",e)}finally{a.value=!1}},f=()=>{a.value=!0,setTimeout((async()=>{await s(),a.value=!1}),500)};return(0,t.sV)((()=>{s()})),(e,o)=>((0,t.uX)(),(0,t.Wv)(d.J,null,{default:(0,t.k6)((()=>[(0,t.bF)(i.O,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",b,[(0,t.bF)(c.Py,{headers:n.value,items:u.value,class:"elevation-1",search:l.value,loading:a.value,"sort-by":[{key:"paciente.nombres",order:"asc"}],"loading-text":"Cargando... Espere por favor"},{top:(0,t.k6)((()=>[(0,t.bF)(m.G,{class:"mx-4",inset:"",vertical:""}),(0,t.bF)(p.W,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e),"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":"",onInput:f},null,8,["modelValue"])])),_:1},8,["headers","items","search","loading"])])])),_:1})])),_:1}))}},v=a(1241);const k=(0,v.A)(f,[["__scopeId","data-v-4b56062f"]]);var _=k,F=a(554),V=a(1606),h=a(3745),y=a(1772),x=a(1560),g=a(9336);const C=(0,t.Lk)("span",{class:"text-h5"},"Crear nuevo Medico",-1);function w(e,l,a,o,n,u){return(0,t.uX)(),(0,t.Wv)(d.J,null,{default:(0,t.k6)((()=>[(0,t.bF)(V.r,null,{default:(0,t.k6)((()=>[C])),_:1}),(0,t.bF)(i.O,null,{default:(0,t.k6)((()=>[(0,t.bF)(x.n,{ref:"form",modelValue:e.valid,"onUpdate:modelValue":l[4]||(l[4]=l=>e.valid=l),"lazy-validation":""},{default:(0,t.k6)((()=>[(0,t.bF)(p.W,{modelValue:o.names,"onUpdate:modelValue":l[0]||(l[0]=e=>o.names=e),label:"Nombre",required:""},null,8,["modelValue"]),(0,t.bF)(p.W,{modelValue:o.lastNames,"onUpdate:modelValue":l[1]||(l[1]=e=>o.lastNames=e),label:"Apellidos",required:""},null,8,["modelValue"]),(0,t.bF)(p.W,{modelValue:o.phone,"onUpdate:modelValue":l[2]||(l[2]=e=>o.phone=e),label:"Telefono",required:""},null,8,["modelValue"]),(0,t.bF)(p.W,{modelValue:o.specialty,"onUpdate:modelValue":l[3]||(l[3]=e=>o.specialty=e),label:"Especialidad",required:""},null,8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),(0,t.bF)(h.S,null,{default:(0,t.k6)((()=>[(0,t.bF)(F.D,{color:"blue",text:"",onClick:l[5]||(l[5]=l=>e.$emit("close"))},{default:(0,t.k6)((()=>[(0,t.eW)("Cancelar")])),_:1}),(0,t.bF)(F.D,{color:"blue",text:"",onClick:o.submitInternamiento},{default:(0,t.k6)((()=>[(0,t.eW)("Guardar")])),_:1},8,["onClick"])])),_:1}),(0,t.bF)(y.p,{modelValue:o.dialogLoader,"onUpdate:modelValue":l[6]||(l[6]=e=>o.dialogLoader=e),scrim:!1,persistent:"",width:"auto"},{default:(0,t.k6)((()=>[(0,t.bF)(d.J,{color:"blue"},{default:(0,t.k6)((()=>[(0,t.bF)(i.O,null,{default:(0,t.k6)((()=>[(0,t.eW)(" Procesando... "),(0,t.bF)(g.Z,{indeterminate:"",color:"white",class:"mb-0"})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var K=a(4874),W=a.n(K),R={setup(e,{emit:l}){const a=(0,o.KR)(""),t=(0,o.KR)(""),n=(0,o.KR)(""),u=(0,o.KR)(""),r=(0,o.KR)(!1),d=async()=>{if(a.value&&t.value&&n.value&&u.value){const o={names:a.value,lastNames:t.value,phone:n.value,specialty:u.value};r.value=!0;try{const e=await s(o);l("close"),r.value=!1,W().fire({icon:"success",title:"Internamiento Creado",text:e.data.message,confirmButtonText:"OK"})}catch(e){l("close"),r.value=!1,W().fire({icon:"error",title:"Error",text:e.response?.data?.message||"Hubo un error al crear el internamiento",confirmButtonText:"OK"})}}else console.log("Formulario incompleto")};return{names:a,lastNames:t,specialty:u,phone:n,dialogLoader:r,submitInternamiento:d}}};const U=(0,v.A)(R,[["render",w]]);var E=U,L=a(6756),A=a(5526);const D={class:"pt-0 mt-0 pb-10 ml-0 mr-0 min-w-max[100%]"},I=(0,t.Lk)("h1",{class:"font-bold lg:text-2xl text-xl text-gray-400"},"MEDICOS",-1);var N={__name:"DoctorView",setup(e){const l=(0,o.KR)(!1),a=()=>{l.value=!0};return(e,o)=>((0,t.uX)(),(0,t.CE)("div",D,[(0,t.bF)(V.r,{class:"d-flex justify-between"},{default:(0,t.k6)((()=>[I,(0,t.bF)(F.D,{color:"primary",class:"white--text",onClick:a,style:{"margin-left":"auto"}},{default:(0,t.k6)((()=>[(0,t.eW)(" Crear + ")])),_:1})])),_:1}),(0,t.bF)(L.L,null,{default:(0,t.k6)((()=>[(0,t.bF)(A.B,{cols:"12"},{default:(0,t.k6)((()=>[(0,t.bF)(_)])),_:1})])),_:1}),(0,t.bF)(y.p,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=e=>l.value=e),"max-width":"500px"},{default:(0,t.k6)((()=>[(0,t.bF)(E,{onClose:o[0]||(o[0]=e=>l.value=!1)})])),_:1},8,["modelValue"])]))}};const O=N;var T=O}}]);
//# sourceMappingURL=346.87b2e64d.js.map