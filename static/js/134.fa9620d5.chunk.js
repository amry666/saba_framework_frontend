(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[134,80],{364:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a(6),s=a(2),r=a(33),i=a(25),l=(a(168),a(5)),o=a(81),d=a(64),u=a(754),b=(a(102),a(34)),j=(a(12),a(136),a(145),a(1261),a(46)),m=a(167),g=a(16),p=a(0);t.default=function(e){var t,a,O,f,h=e.show,x=e.setShow,v=e.detailPage,y=e.formState,S=e.setFormState,N=e.currentData,D=void 0===N?null:N,T=Object(o.a)().t,w=Object(r.g)().id,C=Object(g.b)(),k=Object(g.c)((function(e){return e[m.storeName]})),_=Object(s.useContext)(b.a).colors,L=Object(s.useState)(null),B=Object(n.a)(L,2),F=(B[0],B[1],Object(s.useState)("Please Wait")),E=Object(n.a)(F,2),q=E[0],I=E[1],z=Object(j.e)({}),A=z.control,J=z.setError,P=z.handleSubmit,G=z.formState.errors,R=function(){return Object(p.jsxs)(s.Fragment,{children:[Object(p.jsx)(u.a,{}),Object(p.jsxs)(l.r,{className:"mb-0 mt-1",children:[T(q),"..."]})]})};function U(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}var W=function(){C(Object(m.resetSelectedData)())};return Object(p.jsx)(l.G,{isOpen:h,toggle:function(){W(),x(!h)},className:"modal-dialog-centered modal-lg",children:Object(p.jsxs)(d.a,{blocking:k.isLoadingAddEdit||k.isLoadingDetail,loader:Object(p.jsx)(R,{}),children:[Object(p.jsx)(l.J,{className:"bg-transparent",toggle:function(){W(),x(!h)}}),Object(p.jsxs)(l.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(p.jsxs)("div",{className:"text-center mb-2",children:[Object(p.jsxs)("h2",{className:"mb-1",children:[T("edit"===y?"Edit":"Add")," ",T(m.pageTitle)]}),"edit"!==y?Object(p.jsxs)("p",{children:["Setelah menambahkan data ",T("Unit")," baru, maka pastikan logout dulu akun anda."]}):null]}),Object(p.jsx)(l.y,{onSubmit:P("edit"===y?function(e){if(function(e){if("edit"===y){var t=Object(c.a)({},U(k.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(U(t))!==JSON.stringify(U(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))I("".concat(T("Updating")," ").concat(T(m.pageTitle)," ").concat(T("Detail")," Data")),C(Object(m.putData)(e)).then((function(e){if("fulfilled"===e.meta.requestStatus)x(!h),i.b.success("".concat(T("Successfully Updated")," ").concat(T(m.pageTitle)),{style:{padding:"16px",color:_.success.main,border:"1px solid ".concat(_.success.main)},iconTheme:{primary:_.success.main}}),v&&C(Object(m.getDataById)(w));else if("rejected"===e.meta.requestStatus){var t;i.b.error(null===(t=e.payload)||void 0===t?void 0:t.message,{style:{padding:"16px",color:_.danger.main,border:"1px solid ".concat(_.danger.main)},iconTheme:{primary:_.danger.main}})}}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&J(t,{type:"manual"})}else Object(i.b)("".concat(T("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))I("".concat(T("Creating a New ".concat(m.pageTitle)))),e.depth=D.depth+1,e.parent_id=D.id,C(Object(m.postData)(e)).then((function(e){console.log(e),"fulfilled"===e.meta.requestStatus?(x(!h),i.b.success("".concat(T("Successfully Created")," ").concat(T(m.pageTitle)),{style:{padding:"16px",color:_.success.main,border:"1px solid ".concat(_.success.main)},iconTheme:{primary:_.success.main}}),v&&C(Object(m.getDataById)(w))):"rejected"===e.meta.requestStatus&&i.b.error(e.payload.message,{style:{padding:"16px",color:_.danger.main,border:"1px solid ".concat(_.danger.main)},iconTheme:{primary:_.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&J(t,{type:"manual"})}}),children:Object(p.jsxs)(l.U,{className:"gy-1 pt-75",children:[Object(p.jsxs)(l.t,{md:12,xs:12,children:[Object(p.jsxs)(l.E,{className:"form-label",for:"name",children:[T("Name"),Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(j.a,{defaultValue:null!==(t=null===(a=k.selectedData)||void 0===a?void 0:a.name)&&void 0!==t?t:"",control:A,id:"name",name:"name",render:function(e){var t=e.field;return Object(p.jsx)(l.B,Object(c.a)(Object(c.a)({},t),{},{className:G.name?"form-control is-invalid":"form-control",id:"name",invalid:G.name&&!0}))}})]}),Object(p.jsxs)(l.t,{md:12,xs:12,children:[Object(p.jsxs)(l.E,{className:"form-label",for:"description",children:[T("Code"),Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(j.a,{defaultValue:null!==(O=null===(f=k.selectedData)||void 0===f?void 0:f.code)&&void 0!==O?O:"",control:A,id:"code",name:"code",render:function(e){var t=e.field;return Object(p.jsx)(l.B,Object(c.a)(Object(c.a)({},t),{},{className:G.code?"form-control is-invalid":"form-control",id:"code",invalid:G.code&&!0}))}})]}),Object(p.jsxs)(l.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(p.jsx)(l.i,{type:"submit",className:"me-1",color:"primary",children:T("Submit")}),Object(p.jsx)(l.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){W(),S("add"),x(!1)},children:T("Cancel")})]})]})})]})]})})}},771:function(e,t,a){"use strict";a.r(t);var c=a(9),n=a(6),s=a(7),r=a.n(s),i=a(2),l=a(81),o=a(42),d=a(364),u=a(12),b=a(167),j=a(16),m=a(243),g=a(318),p=a(322),O=a(64),f=(a(754),a(34)),h=a(25),x=a(5),v=a(43),y=a.n(v),S=a(49),N=a.n(S),D=(a(94),a(105),a(264)),T=a(47),w=(a(36),a(0)),C=N()(y.a);t.default=function(e){var t=Object(j.b)(),a=Object(j.c)((function(e){return e[b.storeName]})),s=Object(l.a)().t,v=Object(i.useState)(!1),y=Object(n.a)(v,2),S=y[0],N=y[1],k=Object(i.useContext)(o.a),_=Object(i.useState)(!1),L=Object(n.a)(_,2),B=(L[0],L[1]),F=Object(i.useState)("Please Wait"),E=Object(n.a)(F,2),q=(E[0],E[1]),I=Object(i.useState)(!1),z=Object(n.a)(I,2),A=z[0],J=z[1],P=Object(i.useState)(null),G=Object(n.a)(P,2),R=G[0],U=G[1],W=Object(i.useState)(null),Y=Object(n.a)(W,2),Q=Y[0],V=Y[1],H=Object(i.useState)(0),M=Object(n.a)(H,2),K=M[0],X=M[1],Z=Object(i.useState)(null),$=Object(n.a)(Z,2),ee=($[0],$[1]),te=Object(i.useContext)(f.a).colors,ae=function(){var e=Object(c.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.fire({title:"".concat(s("Are you sure?")),text:"".concat(s("You won't be able to revert")," ").concat(s(b.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(s("Yes, Delete")," ").concat(s(b.pageTitle),"!"),cancelButtonText:"".concat(s("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:e.sent.value&&(q("".concat(s("Deleting")," Data ").concat(s(b.pageTitle))),B(!0),t(Object(b.deleteData)(a)).then((function(e){"fulfilled"===e.meta.requestStatus?(B(!1),h.b.success("".concat(s("Successfully deleted")," ").concat(s(b.pageTitle)),{style:{padding:"16px",color:te.success.main,border:"1px solid ".concat(te.success.main)},iconTheme:{primary:te.success.main}})):"rejected"===e.meta.requestStatus&&(B(!1),h.b.error(e.payload.message,{style:{padding:"16px",color:te.danger.main,border:"1px solid ".concat(te.danger.main)},iconTheme:{primary:te.danger.main}}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;V(e),U("add"),N(!S),J(!A),Object(u.z)(ne)},ne=function(){N(!S),J(!A),Object(u.G)()};return Object(i.useEffect)((function(){(0===a.dataNested.length&&!a.isLoadingNested||b.getAlwaysGrid)&&(q("".concat(s("Loading Data")," ").concat(s(b.pageTitle))),t(Object(b.getDataList)({})))}),[t,a.dataNested.length>0]),Object(w.jsxs)(i.Fragment,{children:[Object(w.jsx)(O.a,{blocking:a.isLoadingNested,loader:Object(w.jsx)(T.b,{}),children:Object(w.jsx)(x.l,{className:"overflow-hidden",children:Object(w.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(w.jsx)("div",{style:{height:1e3,marginLeft:20,marginRight:20,marginTop:40},children:Object(w.jsx)(D.a,{treeData:a.dataNested,onChange:function(e){t(Object(b.setDataListNested)(e))},canDrag:!1,searchMethod:function(e){var t=e.node,a=e.searchQuery;return a&&t.name.toLowerCase().indexOf(a.toLowerCase())>-1},searchQuery:e.searchString,searchFocusOffset:K,searchFinishCallback:function(e){ee(e.length),X(e.length>0?K%e.length:0)},maxDepth:10,generateNodeProps:function(e){var a,c,n=e.node;e.path;return{style:{fontSize:n.is_app_header?"16px":"14px",fontWeight:n.is_app_header?"bold":"normal"},title:Object(w.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[(null===n||void 0===n||null===(a=n.attributes)||void 0===a?void 0:a.logo)&&Object(w.jsx)("img",{className:"me-1",src:n.attributes.logo,height:"25"}),Object(w.jsx)("div",{className:"d-flex flex-column",children:Object(w.jsx)("span",{className:"fw-bolder",children:n.name})})]}),buttons:[k.can("post",sessionStorage.getItem("current_page_perm"))?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(x.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-primary",id:"btn-add-child",onClick:function(e){ce(n)},children:Object(w.jsx)(m.a,{size:16})}),Object(w.jsx)(x.cb,{placement:"left",target:"btn-add-child",children:s("Add Child")})]}):null,!k.can("update",sessionStorage.getItem("current_page_perm"))||n.is_app_header||n.disableEdit?null:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(x.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-info",id:"btn-edit",onClick:function(e){var a;e.preventDefault(),a=n,U("edit"),b.detailFromGrid?(q("".concat(s("Loading")," ").concat(s("Detail")," ").concat(s("Data")," ").concat(s(b.pageTitle))),B(!0),t(Object(b.setDataById)(a)).then((function(){B(!1),J(!0)}))):(q("".concat(s("Loading")," ").concat(s("Detail")," ").concat(s("Data")," ").concat(s(b.pageTitle))),B(!0),t(Object(b.getDataById)(a.id)).then((function(e){"rejected"===e.meta.requestStatus?(B(!1),h.b.error(e.payload.message,{style:{padding:"16px",color:te.danger.main,border:"1px solid ".concat(te.danger.main)},iconTheme:{primary:te.danger.main}})):(B(!1),J(!0))})))},children:Object(w.jsx)(g.a,{size:16})}),Object(w.jsx)(x.cb,{placement:"left",target:"btn-edit",children:s("Edit")})]}),k.can("delete",sessionStorage.getItem("current_page_perm"))&&!n.disableDelete&&0===(null===n||void 0===n||null===(c=n.children)||void 0===c?void 0:c.length)?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(x.i.Ripple,{id:"btn-delete",className:"btn-icon rounded-circle",color:"flat-danger",onClick:function(e){e.preventDefault(),ae(n.id)},children:Object(w.jsx)(p.a,{size:16})}),Object(w.jsx)(x.cb,{placement:"left",target:"btn-delete",children:s("Delete")})]}):null]}}})})})})}),A&&Object(w.jsx)(d.default,{formState:R,show:A,setShow:ce,detailPage:!1,setFormState:U,currentData:Q})]})}}}]);
//# sourceMappingURL=134.fa9620d5.chunk.js.map