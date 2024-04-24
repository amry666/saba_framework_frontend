(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[80],{360:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a(6),s=a(2),r=a(33),i=a(24),l=(a(169),a(5)),o=a(78),d=a(63),u=a(256),m=(a(114),a(34)),b=(a(13),a(135),a(145),a(1255),a(46)),j=a(168),f=a(16),O=a(0);t.default=function(e){var t,a,p,g,x=e.show,h=e.setShow,v=e.detailPage,y=e.formState,N=e.setFormState,S=e.currentData,D=void 0===S?null:S,k=Object(o.a)().t,T=Object(r.g)().id,w=Object(f.b)(),C=Object(f.c)((function(e){return e[j.storeName]})),E=Object(s.useContext)(m.a).colors,J=Object(s.useState)(null),q=Object(n.a)(J,2),B=(q[0],q[1],Object(s.useState)("Please Wait")),U=Object(n.a)(B,2),A=U[0],F=U[1],I=Object(b.e)({}),L=I.control,P=I.setError,V=I.handleSubmit,G=I.formState.errors,H=function(){return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(u.a,{}),Object(O.jsxs)(l.r,{className:"mb-0 mt-1",children:[k(A),"..."]})]})};function W(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}var Y=function(){w(Object(j.resetSelectedData)())};return Object(O.jsx)(l.G,{isOpen:x,toggle:function(){Y(),h(!x)},className:"modal-dialog-centered modal-lg",children:Object(O.jsxs)(d.a,{blocking:C.isLoadingAddEdit||C.isLoadingDetail,loader:Object(O.jsx)(H,{}),children:[Object(O.jsx)(l.J,{className:"bg-transparent",toggle:function(){Y(),h(!x)}}),Object(O.jsxs)(l.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(O.jsxs)("div",{className:"text-center mb-2",children:[Object(O.jsxs)("h2",{className:"mb-1",children:[k("edit"===y?"Edit":"Add")," ",k(j.pageTitle)]}),"edit"!==y?Object(O.jsxs)("p",{children:["Setelah menambahkan data ",k("Unit")," baru, maka pastikan logout dulu akun anda."]}):null]}),Object(O.jsx)(l.y,{onSubmit:V("edit"===y?function(e){if(function(e){if("edit"===y){var t=Object(c.a)({},W(C.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(W(t))!==JSON.stringify(W(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))F("".concat(k("Updating")," ").concat(k(j.pageTitle)," ").concat(k("Detail")," Data")),w(Object(j.putData)(e)).then((function(e){if("fulfilled"===e.meta.requestStatus)h(!x),i.b.success("".concat(k("Successfully Updated")," ").concat(k(j.pageTitle)),{style:{padding:"16px",color:E.success.main,border:"1px solid ".concat(E.success.main)},iconTheme:{primary:E.success.main}}),v&&w(Object(j.getDataById)(T));else if("rejected"===e.meta.requestStatus){var t;i.b.error(null===(t=e.payload)||void 0===t?void 0:t.message,{style:{padding:"16px",color:E.danger.main,border:"1px solid ".concat(E.danger.main)},iconTheme:{primary:E.danger.main}})}}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&P(t,{type:"manual"})}else Object(i.b)("".concat(k("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))F("".concat(k("Creating a New ".concat(j.pageTitle)))),e.depth=D.depth+1,e.parent_id=D.id,w(Object(j.postData)(e)).then((function(e){console.log(e),"fulfilled"===e.meta.requestStatus?(h(!x),i.b.success("".concat(k("Successfully Created")," ").concat(k(j.pageTitle)),{style:{padding:"16px",color:E.success.main,border:"1px solid ".concat(E.success.main)},iconTheme:{primary:E.success.main}}),v&&w(Object(j.getDataById)(T))):"rejected"===e.meta.requestStatus&&i.b.error(e.payload.message,{style:{padding:"16px",color:E.danger.main,border:"1px solid ".concat(E.danger.main)},iconTheme:{primary:E.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&P(t,{type:"manual"})}}),children:Object(O.jsxs)(l.S,{className:"gy-1 pt-75",children:[Object(O.jsxs)(l.t,{md:12,xs:12,children:[Object(O.jsxs)(l.E,{className:"form-label",for:"name",children:[k("Name"),Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)(b.a,{defaultValue:null!==(t=null===(a=C.selectedData)||void 0===a?void 0:a.name)&&void 0!==t?t:"",control:L,id:"name",name:"name",render:function(e){var t=e.field;return Object(O.jsx)(l.B,Object(c.a)(Object(c.a)({},t),{},{className:G.name?"form-control is-invalid":"form-control",id:"name",invalid:G.name&&!0}))}})]}),Object(O.jsxs)(l.t,{md:12,xs:12,children:[Object(O.jsxs)(l.E,{className:"form-label",for:"description",children:[k("Code"),Object(O.jsx)("span",{className:"text-danger",children:"*"})]}),Object(O.jsx)(b.a,{defaultValue:null!==(p=null===(g=C.selectedData)||void 0===g?void 0:g.code)&&void 0!==p?p:"",control:L,id:"code",name:"code",render:function(e){var t=e.field;return Object(O.jsx)(l.B,Object(c.a)(Object(c.a)({},t),{},{className:G.code?"form-control is-invalid":"form-control",id:"code",invalid:G.code&&!0}))}})]}),Object(O.jsxs)(l.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(O.jsx)(l.i,{type:"submit",className:"me-1",color:"primary",children:k("Submit")}),Object(O.jsx)(l.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){Y(),N("add"),h(!1)},children:k("Cancel")})]})]})})]})]})})}}}]);
//# sourceMappingURL=80.67362cc5.chunk.js.map