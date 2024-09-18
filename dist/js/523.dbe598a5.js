"use strict";(self["webpackChunkfrontend_ebox_platform"]=self["webpackChunkfrontend_ebox_platform"]||[]).push([[523],{5523:function(e,l,a){a.r(l),a.d(l,{default:function(){return O}});var o=a(6768),t=a(144),n=a(1189);const i="http://localhost:3000/api";function r(){return n.A.get(`${i}/patient/list`)}function d(e){return n.A.post(`${i}/patient/create`,e)}var u=a(2729),c=a(697),s=a(4260),m=a(7511),p=a(4750);const b={class:"table-container"};var v={__name:"PacienteTable",setup(e){const l=(0,t.KR)(""),a=(0,t.KR)(!1),n=(0,t.KR)([{title:"Nombre",align:"start",key:"nombres"},{title:"Apellido",key:"apellidos"},{title:"Dirección",key:"apellidos"},{title:"distrito",key:"distrito"},{title:"provincia",key:"provincia"},{title:"departamento",key:"departamento"},{title:"Fecha de nacimiento",key:"fecha_nacimiento"},{title:"Telefono",key:"telefono"}]),i=(0,t.KR)([]),d=async()=>{a.value=!0;try{const e=await r();i.value=e.data.data.map((e=>({nombres:e.nombres,apellidos:e.apellidos,direccion:e.direccion,distrito:e.distrito,provincia:e.provincia,departamento:e.departamento,codigo_postal:e.codigo_postal,fecha_nacimiento:new Date(e.fecha_nacimiento).toLocaleDateString(),telefono:e.telefono})))}catch(e){console.error("Error fetching internments:",e)}finally{a.value=!1}},v=()=>{a.value=!0,setTimeout((async()=>{await d(),a.value=!1}),500)};return(0,o.sV)((()=>{d()})),(e,t)=>((0,o.uX)(),(0,o.Wv)(u.J,null,{default:(0,o.k6)((()=>[(0,o.bF)(c.O,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",b,[(0,o.bF)(s.Py,{headers:n.value,items:i.value,class:"elevation-1",search:l.value,loading:a.value,"sort-by":[{key:"paciente.nombres",order:"asc"}],"loading-text":"Cargando... Espere por favor"},{top:(0,o.k6)((()=>[(0,o.bF)(m.G,{class:"mx-4",inset:"",vertical:""}),(0,o.bF)(p.W,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":"",onInput:v},null,8,["modelValue"])])),_:1},8,["headers","items","search","loading"])])])),_:1})])),_:1}))}},f=a(1241);const V=(0,f.A)(v,[["__scopeId","data-v-3dd139e5"]]);var _=V,k=a(554),F=a(1606),h=a(3745),g=a(1772),y=a(1560),x=a(9336);const K=(0,o.Lk)("span",{class:"text-h5"},"Crear nuevo Paciente",-1);function W(e,l,a,t,n,i){return(0,o.uX)(),(0,o.Wv)(u.J,null,{default:(0,o.k6)((()=>[(0,o.bF)(F.r,null,{default:(0,o.k6)((()=>[K])),_:1}),(0,o.bF)(c.O,null,{default:(0,o.k6)((()=>[(0,o.bF)(y.n,{ref:"form",modelValue:e.valid,"onUpdate:modelValue":l[9]||(l[9]=l=>e.valid=l),"lazy-validation":""},{default:(0,o.k6)((()=>[(0,o.bF)(p.W,{modelValue:t.nombres,"onUpdate:modelValue":l[0]||(l[0]=e=>t.nombres=e),label:"Nombres",required:""},null,8,["modelValue"]),(0,o.bF)(p.W,{modelValue:t.apellidos,"onUpdate:modelValue":l[1]||(l[1]=e=>t.apellidos=e),label:"Apellidos",required:""},null,8,["modelValue"]),(0,o.bF)(p.W,{modelValue:t.direccion,"onUpdate:modelValue":l[2]||(l[2]=e=>t.direccion=e),label:"Dirección",required:""},null,8,["modelValue"]),(0,o.bF)(p.W,{modelValue:t.distrito,"onUpdate:modelValue":l[3]||(l[3]=e=>t.distrito=e),label:"Distrito",required:""},null,8,["modelValue"]),(0,o.bF)(p.W,{modelValue:t.provincia,"onUpdate:modelValue":l[4]||(l[4]=e=>t.provincia=e),label:"Provincia",required:""},null,8,["modelValue"]),(0,o.bF)(p.W,{modelValue:t.departamento,"onUpdate:modelValue":l[5]||(l[5]=e=>t.departamento=e),label:"Departamento",required:""},null,8,["modelValue"]),(0,o.bF)(p.W,{modelValue:t.codigo_postal,"onUpdate:modelValue":l[6]||(l[6]=e=>t.codigo_postal=e),label:"Código Postal",required:""},null,8,["modelValue"]),(0,o.bF)(p.W,{modelValue:t.telefono,"onUpdate:modelValue":l[7]||(l[7]=e=>t.telefono=e),label:"Teléfono",required:""},null,8,["modelValue"]),(0,o.bF)(p.W,{modelValue:t.fecha_nacimiento,"onUpdate:modelValue":l[8]||(l[8]=e=>t.fecha_nacimiento=e),label:"Fecha de Nacimiento",required:"",type:"date"},null,8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(h.S,null,{default:(0,o.k6)((()=>[(0,o.bF)(k.D,{color:"blue",text:"",onClick:l[10]||(l[10]=l=>e.$emit("close"))},{default:(0,o.k6)((()=>[(0,o.eW)("Cancelar")])),_:1}),(0,o.bF)(k.D,{color:"blue",text:"",onClick:t.submitPaciente},{default:(0,o.k6)((()=>[(0,o.eW)("Guardar")])),_:1},8,["onClick"])])),_:1}),(0,o.bF)(g.p,{modelValue:t.dialogLoader,"onUpdate:modelValue":l[11]||(l[11]=e=>t.dialogLoader=e),scrim:!1,persistent:"",width:"auto"},{default:(0,o.k6)((()=>[(0,o.bF)(u.J,{color:"blue"},{default:(0,o.k6)((()=>[(0,o.bF)(c.O,null,{default:(0,o.k6)((()=>[(0,o.eW)(" Procesando... "),(0,o.bF)(x.Z,{indeterminate:"",color:"white",class:"mb-0"})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var C=a(4874),R=a.n(C),w={setup(e,{emit:l}){const a=(0,t.KR)(""),o=(0,t.KR)(""),n=(0,t.KR)(""),i=(0,t.KR)(""),r=(0,t.KR)(""),u=(0,t.KR)(""),c=(0,t.KR)(""),s=(0,t.KR)(""),m=(0,t.KR)(""),p=(0,t.KR)(!1),b=async()=>{if(a.value&&o.value&&n.value&&i.value&&r.value&&u.value&&c.value&&s.value&&m.value){const t={nombres:a.value,apellidos:o.value,direccion:n.value,distrito:i.value,provincia:r.value,departamento:u.value,codigo_postal:c.value,telefono:s.value,fecha_nacimiento:m.value};p.value=!0;try{const e=await d(t);l("close"),p.value=!1,R().fire({icon:"success",title:"Paciente Creado",text:e.data.message,confirmButtonText:"OK"})}catch(e){l("close"),p.value=!1,R().fire({icon:"error",title:"Error",text:e.response?.data?.message||"Hubo un error al crear el paciente",confirmButtonText:"OK"})}}else console.log("Formulario incompleto")};return{dialogLoader:p,submitPaciente:b,nombres:a,apellidos:o,direccion:n,distrito:i,provincia:r,departamento:u,codigo_postal:c,telefono:s,fecha_nacimiento:m}}};const U=(0,f.A)(w,[["render",W]]);var P=U,q=a(6756),D=a(5526);const L={class:"pt-0 mt-0 pb-10 ml-0 mr-0 min-w-max[100%]"},A=(0,o.Lk)("h1",{class:"font-bold lg:text-2xl text-xl text-gray-400"},"PACIENTES",-1);var T={__name:"PacientesView",setup(e){const l=(0,t.KR)(!1),a=()=>{l.value=!0};return(e,t)=>((0,o.uX)(),(0,o.CE)("div",L,[(0,o.bF)(F.r,{class:"d-flex justify-between"},{default:(0,o.k6)((()=>[A,(0,o.bF)(k.D,{color:"primary",class:"white--text",onClick:a,style:{"margin-left":"auto"}},{default:(0,o.k6)((()=>[(0,o.eW)(" Crear + ")])),_:1})])),_:1}),(0,o.bF)(q.L,null,{default:(0,o.k6)((()=>[(0,o.bF)(D.B,{cols:"12"},{default:(0,o.k6)((()=>[(0,o.bF)(_)])),_:1})])),_:1}),(0,o.bF)(g.p,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),"max-width":"500px"},{default:(0,o.k6)((()=>[(0,o.bF)(P,{onClose:t[0]||(t[0]=e=>l.value=!1)})])),_:1},8,["modelValue"])]))}};const E=T;var O=E}}]);
//# sourceMappingURL=523.dbe598a5.js.map