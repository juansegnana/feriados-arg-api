(this["webpackJsonpferiados-api"]=this["webpackJsonpferiados-api"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(1),s=a.n(c),n=a(3),o=a.n(n),i=function(){return Object(r.jsx)("footer",{className:"text-muted pt-4",children:Object(r.jsxs)("p",{children:["En progreso. Usando React y API de ",Object(r.jsx)("a",{href:"https://nolaborables.com.ar/",target:"_blank",rel:"noopener noreferrer",children:" NoLaborables"}),".",Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"mailto:segnanajuan@gmail.com",className:"text-decoration-none",children:"Juan Segnana"})]})})},d=function(e){return{dia:e.getDate(),mes:e.getMonth()+1,mesNombre:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][e.getMonth()],"a\xf1o":e.getFullYear()}},l=a(4),j=(a(11),a(5)),b=function(e){var t=e.motivo,a=e.tipo,c=e.info,s=e.mes,n=e.dia;return Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("div",{className:"card h-100",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsxs)("h5",{className:"card-title",children:[" ",t," "]}),Object(r.jsxs)("p",{className:"card-text",children:["Tipo: ",a," ",Object(r.jsx)("br",{}),Object(r.jsx)("a",{className:"btn btn-primary mt-2",href:c,target:"_blank",rel:"noopener noreferrer",children:"M\xe1s info"})]}),Object(r.jsx)("p",{className:"card-text",children:Object(r.jsxs)("small",{className:"text-muted",children:[" Fecha: ",n,"/",s," "]})})]})})})},m=(a(12),function(e){var t=e.a\u00f1o,a=e.datos;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h3",{children:[" Listado completo de feriados ",t]}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"row row-cols-2 row-cols-md-3 g-4 text-center",children:a.map((function(e,t){return Object(r.jsx)(b,Object(j.a)({},e),"id_".concat(t))}))})]})}),h=function(){var e,t,a,s=d(new Date),n=s.dia,o=s.mes,i=s.mesNombre,j=s.a\u00f1o,b=function(e){var t=Object(c.useRef)(!0),a=Object(c.useState)({data:null,loading:!0,error:null}),r=Object(l.a)(a,2),s=r[0],n=r[1];return Object(c.useEffect)((function(){return function(){t.current=!1}}),[]),Object(c.useEffect)((function(){n({data:null,loading:!0,error:"useEffect"}),fetch(e).then((function(e){return e.json()})).then((function(e){t.current&&n({loading:!1,error:null,data:e})}))}),[e]),s}("https://nolaborables.com.ar/api/v2/feriados/".concat(j)),h=b.loading,u=b.data;if(u){(e=u.find((function(e){return e.mes===o&&e.dia>n||e.mes>o||e.mes===o&&e.dia===n})))||((e=u[0]).a\u00f1o=j+1),a=new Date(e.a\u00f1o?e.a\u00f1o:j,e.mes-1,e.dia);var x=new Date(j,o-1,n);t=parseInt((a-x)/864e5,10),a=d(a)}var f="";switch(t){case 1:f="Falta ".concat(t," d\xeda.");break;case 0:f="Buen feriado!";break;default:f="Faltan ".concat(t," d\xedas.")}return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Buscador de feriados"}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"card text-center",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:" Hoy es "}),Object(r.jsxs)("p",{className:"card-text",children:[" ",n," de ",i," del ",j," "]})]})}),h?Object(r.jsx)("div",{className:"alert alert-info text-center",children:"Cargando..."}):Object(r.jsxs)("div",{className:"card text-center",children:[Object(r.jsx)("div",{className:"card-header",children:"Pr\xf3ximo feriado"}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:e.motivo}),Object(r.jsxs)("p",{className:"card-text",children:["Tipo de feriado: ",e.tipo,".",Object(r.jsx)("br",{}),"Fecha: ",a.dia,"/",a.mes,"/",a.a\u00f1o]}),Object(r.jsx)("a",{className:"btn btn-primary",href:e.info,target:"_blank",rel:"noopener noreferrer",children:"M\xe1s info"})]}),Object(r.jsx)("div",{className:"card-footer text-muted",children:f})]}),!h&&Object(r.jsx)(m,{"a\xf1o":j,datos:u})]})};o.a.render(Object(r.jsxs)(s.a.StrictMode,{children:[Object(r.jsx)(h,{}),Object(r.jsx)(i,{})]}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6350ed41.chunk.js.map