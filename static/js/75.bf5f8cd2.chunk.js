(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[75,80,84,85,86,170],{1260:function(e,t,a){!function(e){"use strict";var t="undefined"!==typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},a={weekdays:{shorthand:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],longhand:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],longhand:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},firstDayOfWeek:1,ordinal:function(){return""},time_24hr:!0,rangeSeparator:" - "};t.l10ns.id=a;var n=t.l10ns;e.Indonesian=a,e.default=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)},364:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(6),r=a(2),s=a(34),i=a(25),l=(a(168),a(5)),o=a(81),d=a(64),u=a(753),m=(a(102),a(33)),b=(a(13),a(136),a(145),a(1260),a(46)),j=a(167),f=a(16),p=a(0);t.default=function(e){var t,a,O,g,h=e.show,x=e.setShow,v=e.detailPage,y=e.formState,S=e.setFormState,N=e.currentData,k=void 0===N?null:N,D=Object(o.a)().t,w=Object(s.g)().id,J=Object(f.b)(),T=Object(f.c)((function(e){return e[j.storeName]})),M=Object(r.useContext)(m.a).colors,A=Object(r.useState)(null),C=Object(c.a)(A,2),E=(C[0],C[1],Object(r.useState)("Please Wait")),q=Object(c.a)(E,2),B=q[0],F=q[1],U=Object(b.e)({}),_=U.control,I=U.setError,P=U.handleSubmit,K=U.formState.errors,L=function(){return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(u.a,{}),Object(p.jsxs)(l.r,{className:"mb-0 mt-1",children:[D(B),"..."]})]})};function R(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}var V=function(){J(Object(j.resetSelectedData)())};return Object(p.jsx)(l.G,{isOpen:h,toggle:function(){V(),x(!h)},className:"modal-dialog-centered modal-lg",children:Object(p.jsxs)(d.a,{blocking:T.isLoadingAddEdit||T.isLoadingDetail,loader:Object(p.jsx)(L,{}),children:[Object(p.jsx)(l.J,{className:"bg-transparent",toggle:function(){V(),x(!h)}}),Object(p.jsxs)(l.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(p.jsxs)("div",{className:"text-center mb-2",children:[Object(p.jsxs)("h2",{className:"mb-1",children:[D("edit"===y?"Edit":"Add")," ",D(j.pageTitle)]}),"edit"!==y?Object(p.jsxs)("p",{children:["Setelah menambahkan data ",D("Unit")," baru, maka pastikan logout dulu akun anda."]}):null]}),Object(p.jsx)(l.y,{onSubmit:P("edit"===y?function(e){if(function(e){if("edit"===y){var t=Object(n.a)({},R(T.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(R(t))!==JSON.stringify(R(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))F("".concat(D("Updating")," ").concat(D(j.pageTitle)," ").concat(D("Detail")," Data")),J(Object(j.putData)(e)).then((function(e){if("fulfilled"===e.meta.requestStatus)x(!h),i.b.success("".concat(D("Successfully Updated")," ").concat(D(j.pageTitle)),{style:{padding:"16px",color:M.success.main,border:"1px solid ".concat(M.success.main)},iconTheme:{primary:M.success.main}}),v&&J(Object(j.getDataById)(w));else if("rejected"===e.meta.requestStatus){var t;i.b.error(null===(t=e.payload)||void 0===t?void 0:t.message,{style:{padding:"16px",color:M.danger.main,border:"1px solid ".concat(M.danger.main)},iconTheme:{primary:M.danger.main}})}}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&I(t,{type:"manual"})}else Object(i.b)("".concat(D("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))F("".concat(D("Creating a New ".concat(j.pageTitle)))),e.depth=k.depth+1,e.parent_id=k.id,J(Object(j.postData)(e)).then((function(e){console.log(e),"fulfilled"===e.meta.requestStatus?(x(!h),i.b.success("".concat(D("Successfully Created")," ").concat(D(j.pageTitle)),{style:{padding:"16px",color:M.success.main,border:"1px solid ".concat(M.success.main)},iconTheme:{primary:M.success.main}}),v&&J(Object(j.getDataById)(w))):"rejected"===e.meta.requestStatus&&i.b.error(e.payload.message,{style:{padding:"16px",color:M.danger.main,border:"1px solid ".concat(M.danger.main)},iconTheme:{primary:M.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&I(t,{type:"manual"})}}),children:Object(p.jsxs)(l.U,{className:"gy-1 pt-75",children:[Object(p.jsxs)(l.t,{md:12,xs:12,children:[Object(p.jsxs)(l.E,{className:"form-label",for:"name",children:[D("Name"),Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(b.a,{defaultValue:null!==(t=null===(a=T.selectedData)||void 0===a?void 0:a.name)&&void 0!==t?t:"",control:_,id:"name",name:"name",render:function(e){var t=e.field;return Object(p.jsx)(l.B,Object(n.a)(Object(n.a)({},t),{},{className:K.name?"form-control is-invalid":"form-control",id:"name",invalid:K.name&&!0}))}})]}),Object(p.jsxs)(l.t,{md:12,xs:12,children:[Object(p.jsxs)(l.E,{className:"form-label",for:"description",children:[D("Code"),Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(b.a,{defaultValue:null!==(O=null===(g=T.selectedData)||void 0===g?void 0:g.code)&&void 0!==O?O:"",control:_,id:"code",name:"code",render:function(e){var t=e.field;return Object(p.jsx)(l.B,Object(n.a)(Object(n.a)({},t),{},{className:K.code?"form-control is-invalid":"form-control",id:"code",invalid:K.code&&!0}))}})]}),Object(p.jsxs)(l.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(p.jsx)(l.i,{type:"submit",className:"me-1",color:"primary",children:D("Submit")}),Object(p.jsx)(l.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){V(),S("add"),x(!1)},children:D("Cancel")})]})]})})]})]})})}}}]);
//# sourceMappingURL=75.bf5f8cd2.chunk.js.map