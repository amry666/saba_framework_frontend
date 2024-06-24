(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[133,80],{364:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(6),s=a(2),r=a(34),l=a(25),i=(a(168),a(5)),o=a(81),d=a(64),m=a(754),u=(a(102),a(33)),b=(a(12),a(136),a(145),a(1261),a(46)),j=a(167),p=a(16),g=a(0);t.default=function(e){var t,a,O,h,f=e.show,x=e.setShow,v=e.detailPage,N=e.formState,y=e.setFormState,S=e.currentData,w=void 0===S?null:S,D=Object(o.a)().t,C=Object(r.g)().id,T=Object(p.b)(),k=Object(p.c)((function(e){return e[j.storeName]})),_=Object(s.useContext)(u.a).colors,Y=Object(s.useState)(null),L=Object(c.a)(Y,2),P=(L[0],L[1],Object(s.useState)("Please Wait")),B=Object(c.a)(P,2),E=B[0],I=B[1],A=Object(b.e)({}),F=A.control,M=A.setError,R=A.handleSubmit,q=A.formState.errors,H=function(){return Object(g.jsxs)(s.Fragment,{children:[Object(g.jsx)(m.a,{}),Object(g.jsxs)(i.r,{className:"mb-0 mt-1",children:[D(E),"..."]})]})};function U(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}var J=function(){T(Object(j.resetSelectedData)())};return Object(g.jsx)(i.G,{isOpen:f,toggle:function(){J(),x(!f)},className:"modal-dialog-centered modal-lg",children:Object(g.jsxs)(d.a,{blocking:k.isLoadingAddEdit||k.isLoadingDetail,loader:Object(g.jsx)(H,{}),children:[Object(g.jsx)(i.J,{className:"bg-transparent",toggle:function(){J(),x(!f)}}),Object(g.jsxs)(i.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(g.jsxs)("div",{className:"text-center mb-2",children:[Object(g.jsxs)("h2",{className:"mb-1",children:[D("edit"===N?"Edit":"Add")," ",D(j.pageTitle)]}),"edit"!==N?Object(g.jsxs)("p",{children:["Setelah menambahkan data ",D("Unit")," baru, maka pastikan logout dulu akun anda."]}):null]}),Object(g.jsx)(i.y,{onSubmit:R("edit"===N?function(e){if(function(e){if("edit"===N){var t=Object(n.a)({},U(k.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(U(t))!==JSON.stringify(U(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))I("".concat(D("Updating")," ").concat(D(j.pageTitle)," ").concat(D("Detail")," Data")),T(Object(j.putData)(e)).then((function(e){if("fulfilled"===e.meta.requestStatus)x(!f),l.b.success("".concat(D("Successfully Updated")," ").concat(D(j.pageTitle)),{style:{padding:"16px",color:_.success.main,border:"1px solid ".concat(_.success.main)},iconTheme:{primary:_.success.main}}),v&&T(Object(j.getDataById)(C));else if("rejected"===e.meta.requestStatus){var t;l.b.error(null===(t=e.payload)||void 0===t?void 0:t.message,{style:{padding:"16px",color:_.danger.main,border:"1px solid ".concat(_.danger.main)},iconTheme:{primary:_.danger.main}})}}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&M(t,{type:"manual"})}else Object(l.b)("".concat(D("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))I("".concat(D("Creating a New ".concat(j.pageTitle)))),e.depth=w.depth+1,e.parent_id=w.id,T(Object(j.postData)(e)).then((function(e){console.log(e),"fulfilled"===e.meta.requestStatus?(x(!f),l.b.success("".concat(D("Successfully Created")," ").concat(D(j.pageTitle)),{style:{padding:"16px",color:_.success.main,border:"1px solid ".concat(_.success.main)},iconTheme:{primary:_.success.main}}),v&&T(Object(j.getDataById)(C))):"rejected"===e.meta.requestStatus&&l.b.error(e.payload.message,{style:{padding:"16px",color:_.danger.main,border:"1px solid ".concat(_.danger.main)},iconTheme:{primary:_.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&M(t,{type:"manual"})}}),children:Object(g.jsxs)(i.U,{className:"gy-1 pt-75",children:[Object(g.jsxs)(i.t,{md:12,xs:12,children:[Object(g.jsxs)(i.E,{className:"form-label",for:"name",children:[D("Name"),Object(g.jsx)("span",{className:"text-danger",children:"*"})]}),Object(g.jsx)(b.a,{defaultValue:null!==(t=null===(a=k.selectedData)||void 0===a?void 0:a.name)&&void 0!==t?t:"",control:F,id:"name",name:"name",render:function(e){var t=e.field;return Object(g.jsx)(i.B,Object(n.a)(Object(n.a)({},t),{},{className:q.name?"form-control is-invalid":"form-control",id:"name",invalid:q.name&&!0}))}})]}),Object(g.jsxs)(i.t,{md:12,xs:12,children:[Object(g.jsxs)(i.E,{className:"form-label",for:"description",children:[D("Code"),Object(g.jsx)("span",{className:"text-danger",children:"*"})]}),Object(g.jsx)(b.a,{defaultValue:null!==(O=null===(h=k.selectedData)||void 0===h?void 0:h.code)&&void 0!==O?O:"",control:F,id:"code",name:"code",render:function(e){var t=e.field;return Object(g.jsx)(i.B,Object(n.a)(Object(n.a)({},t),{},{className:q.code?"form-control is-invalid":"form-control",id:"code",invalid:q.code&&!0}))}})]}),Object(g.jsxs)(i.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(g.jsx)(i.i,{type:"submit",className:"me-1",color:"primary",children:D("Submit")}),Object(g.jsx)(i.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){J(),y("add"),x(!1)},children:D("Cancel")})]})]})})]})]})})}},770:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a(9),s=a(6),r=a(4),l=a(7),i=a.n(l),o=a(2),d=a(81),m=a(42),u=a(364),b=a(12),j=a(167),p=a(189),g=a(16),O=a(169),h=a.n(O),f=a(170),x=a.n(f),v=a(84),N=a.n(v),y=a(459),S=a(455),w=a(545),D=a(548),C=a(544),T=a(240),k=a(64),_=(a(754),a(33)),Y=a(25),L=a(5),P=(a(94),a(105),a(43)),B=a.n(P),E=a(49),I=a.n(E),A=a(87),F=a(95),M=a.n(F),R=a(147),q=a(47),H=a(0),U=I()(B.a),J=Object(o.forwardRef)((function(e,t){return Object(H.jsx)("div",{className:"form-check",children:Object(H.jsx)(L.B,Object(r.a)({type:"checkbox",ref:t},e))})})),G=function(e){e.store;var t=e.toggleSidebar,a=e.handlePerPage,n=e.rowsPerPage,c=e.handleFilter,s=e.searchTerm,r=e.selectedRow,l=e.handleDeleteSelected,i=Object(d.a)().t,u=Object(o.useContext)(m.a),O=Object(g.b)(),h=(Object(g.c)((function(e){return e.invoices})),Object(b.q)());return Object(H.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(H.jsxs)(L.U,{children:[Object(H.jsx)(L.t,{xl:"4",className:"d-flex align-items-center p-0",children:Object(H.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(H.jsx)("label",{htmlFor:"rows-per-page",children:i("Show")}),Object(H.jsxs)(L.B,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem"},children:[Object(H.jsx)("option",{value:"10",children:"10"}),Object(H.jsx)("option",{value:"25",children:"25"}),Object(H.jsx)("option",{value:"50",children:"50"})]}),Object(H.jsx)("label",{htmlFor:"rows-per-page",children:i("Entries")})]})}),Object(H.jsxs)(L.t,{xl:"8",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[(null===r||void 0===r?void 0:r.length)>0&&u.can("delete",sessionStorage.getItem("current_page_perm"))?Object(H.jsx)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:Object(H.jsxs)(L.i,{className:"delete-users",color:"danger",onClick:l,children:[i("Delete")," ",r.length," ",i("Selected ".concat(j.pageTitle))]})}):null,Object(H.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(H.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[i("Search"),":"]}),Object(H.jsx)(L.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:s,onChange:function(e){return c(e.target.value)}})]}),Object(H.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(H.jsxs)(L.ab,{className:"me-1",children:[Object(H.jsxs)(L.x,{color:"secondary",caret:!0,outline:!0,children:[Object(H.jsx)(y.a,{className:"font-small-4 me-50"}),Object(H.jsx)("span",{className:"align-middle",children:i("Export")})]}),Object(H.jsxs)(L.w,{children:[Object(H.jsxs)(L.v,{className:"w-100",onClick:function(){return O(Object(p.getInvoice)({rpt_name:"sample",output_type:"pdf",dataYear:h.dataYear,print:!0,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(H.jsx)(S.a,{className:"font-small-4 me-50"}),Object(H.jsx)("span",{className:"align-middle",children:i("Print")})]}),Object(H.jsxs)(L.v,{className:"w-100",onClick:function(){return O(Object(p.getInvoice)({rpt_name:"sample",output_type:"pdf",dataYear:h.dataYear,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(H.jsx)(w.a,{className:"font-small-4 me-50"}),Object(H.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(H.jsxs)(L.v,{className:"w-100",onClick:function(){return O(Object(p.getInvoice)({rpt_name:"sample",output_type:"xls",dataYear:h.dataYear,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(H.jsx)(D.a,{className:"font-small-4 me-50"}),Object(H.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(H.jsxs)(L.v,{className:"w-100",onClick:function(){return O(Object(p.getInvoice)({rpt_name:"sample",output_type:"csv",dataYear:h.dataYear,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(H.jsx)(C.a,{className:"font-small-4 me-50"}),Object(H.jsx)("span",{className:"align-middle",children:"CSV"})]})]})]}),u.can("post",sessionStorage.getItem("current_page_perm"))?Object(H.jsxs)(L.i,{className:"add-new-user",color:"primary",onClick:t,children:[i("Add New")," ",i(j.pageTitle)]}):null]})]})]})})};t.default=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e[j.storeName]})),a=Object(d.a)().t,l=(Object(o.useContext)(m.a),Object(o.useContext)(_.a).colors),p=Object(o.useState)("desc"),O=Object(s.a)(p,2),f=O[0],v=O[1],y=Object(o.useState)(""),S=Object(s.a)(y,2),w=S[0],D=S[1],C=Object(o.useState)(1),P=Object(s.a)(C,2),B=P[0],E=P[1],I=Object(o.useState)("id"),F=Object(s.a)(I,2),K=F[0],V=F[1],W=Object(o.useState)(10),z=Object(s.a)(W,2),Q=z[0],X=z[1],Z=Object(o.useState)([]),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=Object(o.useState)(!1),ne=Object(s.a)(ae,2),ce=ne[0],se=ne[1],re=Object(o.useState)(!1),le=Object(s.a)(re,2),ie=le[0],oe=le[1],de=Object(o.useState)(!1),me=Object(s.a)(de,2),ue=me[0],be=me[1],je=Object(o.useState)("Please Wait"),pe=Object(s.a)(je,2),ge=(pe[0],pe[1]),Oe=Object(o.useState)(!1),he=Object(s.a)(Oe,2),fe=he[0],xe=he[1],ve=Object(o.useState)(null),Ne=Object(s.a)(ve,2),ye=Ne[0],Se=Ne[1],we=function(t){Se("edit"),j.detailFromGrid?(ge("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(j.pageTitle))),be(!0),e(Object(j.setDataById)(t)).then((function(){be(!1),xe(!0)}))):(ge("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(j.pageTitle))),be(!0),e(Object(j.getDataById)(t.id)).then((function(e){"rejected"===e.meta.requestStatus?(be(!1),Y.b.error(e.payload.message,{style:{padding:"16px",color:l.danger.main,border:"1px solid ".concat(l.danger.main)},iconTheme:{primary:l.danger.main}})):(be(!1),xe(!0))})))},De=function(){oe(!ie),xe(!fe),Object(b.G)()},Ce=function(){Se("add"),oe(!ie),xe(!fe),Object(b.z)(De)},Te=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You won't be able to revert")," ").concat(a(j.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(a(j.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:t.sent.value&&(ge("".concat(a("Deleting")," Data ").concat(a(j.pageTitle))),be(!0),e(Object(j.deleteData)(n)).then((function(e){"fulfilled"===e.meta.requestStatus?(be(!1),Y.b.success("".concat(a("Successfully deleted")," ").concat(a(j.pageTitle)),{style:{padding:"16px",color:l.success.main,border:"1px solid ".concat(l.success.main)},iconTheme:{primary:l.success.main}})):"rejected"===e.meta.requestStatus&&(be(!1),Y.b.error(e.payload.message,{style:{padding:"16px",color:l.danger.main,border:"1px solid ".concat(l.danger.main)},iconTheme:{primary:l.danger.main}}))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ke=function(){var t=Object(c.a)(i.a.mark((function t(){var n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=ee.length,t.next=3,U.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You will delete")," ").concat(n," ").concat(a("selected data. Deleted data cannot be recovered"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(n," ").concat(a(j.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 3:t.sent.value&&(ge("".concat(a("Deleting")," ").concat(n," Data ").concat(a(j.pageTitle))),be(!0),c=ee.map((function(e){return e.id})),e(Object(j.deleteSelectedRowData)({id:c})).then((function(e){"fulfilled"===e.meta.requestStatus?(te([]),se(!ce),be(!1),Y.b.success("".concat(a("Successfully deleted")," ").concat(n," ").concat(a(j.pageTitle)),{style:{padding:"16px",color:l.success.main,border:"1px solid ".concat(l.success.main)},iconTheme:{primary:l.success.main}})):"rejected"===e.meta.requestStatus&&(be(!1),Y.b.error(e.payload.message,{style:{padding:"16px",color:l.danger.main,border:"1px solid ".concat(l.danger.main)},iconTheme:{primary:l.danger.main}}))})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_e=Object(o.useCallback)(N()((function(t){e(Object(j.getDataList)({sort_dir:f,search:t,sort:K,page:B,length:Q}))}),500),[]),Ye=Object(o.useCallback)((function(e){te(e.selectedRows)}),[]),Le=[].concat(Object(n.a)(j.dynamicColumns.map((function(e){return{name:e.columnName,sortField:e.fieldName,center:!1,sortable:!0,selector:function(t){return t[e.fieldName]},cell:function(t){return function(e,t){var a=e[t.fieldName],n=t.dataFormat;if(n&&n.includes(":")){var c=n.split(":"),s=c[0],r=c[1],l=e[t.fieldName];return"date"===s&&(l=M()(a).format("DD MMM YYYY"),r&&(l=M()(a).format(r))),"datetime"===s&&(l=M()(a).format("DD MMM YYYY HH:mm"),r&&(l=M()(a).format(r))),l}return e[t.fieldName]}(t,e)}}}))),[{name:a("Actions"),center:!0,width:"140px",cell:function(e){return Object(H.jsx)(R.a,{row:e,handleDelete:Te,handleEdit:we})}}]),Pe=Object(o.useMemo)((function(){return t.isLoading?Le.map((function(e){return Object(r.a)(Object(r.a)({name:a(e.name)},e),{},{sortable:!1,cell:function(t){return Object(H.jsx)(A.a,{sx:{bgcolor:l.dark.light},animation:"wave",className:"Actions"===e.name?"ms-2":"",width:"Actions"===e.name?10:"100%",height:40})}})})):Le.map((function(e){return Object(r.a)({name:a(e.name)},e)}))}),[t.isLoading,Le]);return Object(o.useEffect)((function(){(0===t.data.length||!t.isLoading&&j.getAlwaysGrid)&&(ge("".concat(a("Loading Data")," ").concat(a(j.pageTitle))),e(Object(j.getDataList)({sort_dir:f,sort:K,search:w,page:B,length:Q})))}),[e,t.data.length,f,K,B]),Object(H.jsxs)(o.Fragment,{children:[Object(H.jsx)(k.a,{blocking:ue,loader:Object(H.jsx)(q.b,{}),children:Object(H.jsx)(L.l,{className:"overflow-hidden",children:Object(H.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(H.jsx)(x.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,pagination:!0,paginationServer:!0,paginationTotalRows:t.total,paginationComponent:function(){var a=Number(Math.ceil(t.total/Q));return Object(H.jsx)(h.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==B?B-1:0,onPageChange:function(t){return function(t){e(Object(j.getDataList)({sort_dir:f,sort:K,search:w,length:Q,page:t.selected+1})),E(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRows:!0,onSelectedRowsChange:Ye,selectableRowsHighlight:!0,clearSelectedRows:ce,selectableRowsComponent:J,noDataComponent:Object(H.jsx)(q.c,{}),style:{"min-height":"400px"},highlightOnHover:!0,pointerOnHover:!0,columns:Pe,onSort:function(t,a){v(a),V(t.sortField),e(Object(j.getDataList)({sort_dir:f,sort:K,search:w,page:B,length:Q}))},sortIcon:Object(H.jsx)(T.a,{}),className:"react-dataTable",data:function(){var e={search:w},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.isLoading?Array(10).fill({}):t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),subHeaderComponent:Object(H.jsx)(G,{store:t,searchTerm:w,rowsPerPage:Q,handleFilter:function(e){D(e),_e(e)},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(j.getDataList)({sort_dir:f,sort:K,search:w,length:a,page:B})),X(a)},toggleSidebar:Ce,selectedRow:ee,handleDeleteSelected:ke})})})})}),fe&&Object(H.jsx)(u.default,{formState:ye,show:fe,setShow:Ce,detailPage:!1,setFormState:Se})]})}}}]);
//# sourceMappingURL=133.777feb00.chunk.js.map