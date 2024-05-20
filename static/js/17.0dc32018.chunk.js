(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[17,80,133,134,152],{1211:function(e,t,a){},364:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(6),s=a(2),r=a(34),i=a(25),l=(a(168),a(5)),o=a(81),d=a(64),u=a(753),m=(a(102),a(33)),b=(a(13),a(136),a(145),a(1260),a(46)),j=a(167),g=a(16),p=a(0);t.default=function(e){var t,a,h,O,f=e.show,x=e.setShow,v=e.detailPage,y=e.formState,N=e.setFormState,S=e.currentData,w=void 0===S?null:S,D=Object(o.a)().t,C=Object(r.g)().id,T=Object(g.b)(),_=Object(g.c)((function(e){return e[j.storeName]})),k=Object(s.useContext)(m.a).colors,L=Object(s.useState)(null),B=Object(c.a)(L,2),Y=(B[0],B[1],Object(s.useState)("Please Wait")),F=Object(c.a)(Y,2),I=F[0],P=F[1],E=Object(b.e)({}),A=E.control,R=E.setError,q=E.handleSubmit,M=E.formState.errors,U=function(){return Object(p.jsxs)(s.Fragment,{children:[Object(p.jsx)(u.a,{}),Object(p.jsxs)(l.r,{className:"mb-0 mt-1",children:[D(I),"..."]})]})};function H(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}var z=function(){T(Object(j.resetSelectedData)())};return Object(p.jsx)(l.G,{isOpen:f,toggle:function(){z(),x(!f)},className:"modal-dialog-centered modal-lg",children:Object(p.jsxs)(d.a,{blocking:_.isLoadingAddEdit||_.isLoadingDetail,loader:Object(p.jsx)(U,{}),children:[Object(p.jsx)(l.J,{className:"bg-transparent",toggle:function(){z(),x(!f)}}),Object(p.jsxs)(l.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(p.jsxs)("div",{className:"text-center mb-2",children:[Object(p.jsxs)("h2",{className:"mb-1",children:[D("edit"===y?"Edit":"Add")," ",D(j.pageTitle)]}),"edit"!==y?Object(p.jsxs)("p",{children:["Setelah menambahkan data ",D("Unit")," baru, maka pastikan logout dulu akun anda."]}):null]}),Object(p.jsx)(l.y,{onSubmit:q("edit"===y?function(e){if(function(e){if("edit"===y){var t=Object(n.a)({},H(_.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(H(t))!==JSON.stringify(H(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))P("".concat(D("Updating")," ").concat(D(j.pageTitle)," ").concat(D("Detail")," Data")),T(Object(j.putData)(e)).then((function(e){if("fulfilled"===e.meta.requestStatus)x(!f),i.b.success("".concat(D("Successfully Updated")," ").concat(D(j.pageTitle)),{style:{padding:"16px",color:k.success.main,border:"1px solid ".concat(k.success.main)},iconTheme:{primary:k.success.main}}),v&&T(Object(j.getDataById)(C));else if("rejected"===e.meta.requestStatus){var t;i.b.error(null===(t=e.payload)||void 0===t?void 0:t.message,{style:{padding:"16px",color:k.danger.main,border:"1px solid ".concat(k.danger.main)},iconTheme:{primary:k.danger.main}})}}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&R(t,{type:"manual"})}else Object(i.b)("".concat(D("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))P("".concat(D("Creating a New ".concat(j.pageTitle)))),e.depth=w.depth+1,e.parent_id=w.id,T(Object(j.postData)(e)).then((function(e){console.log(e),"fulfilled"===e.meta.requestStatus?(x(!f),i.b.success("".concat(D("Successfully Created")," ").concat(D(j.pageTitle)),{style:{padding:"16px",color:k.success.main,border:"1px solid ".concat(k.success.main)},iconTheme:{primary:k.success.main}}),v&&T(Object(j.getDataById)(C))):"rejected"===e.meta.requestStatus&&i.b.error(e.payload.message,{style:{padding:"16px",color:k.danger.main,border:"1px solid ".concat(k.danger.main)},iconTheme:{primary:k.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&R(t,{type:"manual"})}}),children:Object(p.jsxs)(l.U,{className:"gy-1 pt-75",children:[Object(p.jsxs)(l.t,{md:12,xs:12,children:[Object(p.jsxs)(l.E,{className:"form-label",for:"name",children:[D("Name"),Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(b.a,{defaultValue:null!==(t=null===(a=_.selectedData)||void 0===a?void 0:a.name)&&void 0!==t?t:"",control:A,id:"name",name:"name",render:function(e){var t=e.field;return Object(p.jsx)(l.B,Object(n.a)(Object(n.a)({},t),{},{className:M.name?"form-control is-invalid":"form-control",id:"name",invalid:M.name&&!0}))}})]}),Object(p.jsxs)(l.t,{md:12,xs:12,children:[Object(p.jsxs)(l.E,{className:"form-label",for:"description",children:[D("Code"),Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(b.a,{defaultValue:null!==(h=null===(O=_.selectedData)||void 0===O?void 0:O.code)&&void 0!==h?h:"",control:A,id:"code",name:"code",render:function(e){var t=e.field;return Object(p.jsx)(l.B,Object(n.a)(Object(n.a)({},t),{},{className:M.code?"form-control is-invalid":"form-control",id:"code",invalid:M.code&&!0}))}})]}),Object(p.jsxs)(l.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(p.jsx)(l.i,{type:"submit",className:"me-1",color:"primary",children:D("Submit")}),Object(p.jsx)(l.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){z(),N("add"),x(!1)},children:D("Cancel")})]})]})})]})]})})}},388:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(2),s=a(16),r=a(81),i=(a(769),a(5)),l=a(190),o=a(1202),d=(a(1211),a(262)),u=a(770),m=a(167),b=a(87),j=a(0);t.default=function(){var e,t,a=Object(r.a)().t,g=Object(s.b)(),p=Object(s.c)((function(e){return e[m.storeName]})),h=Object(c.useState)(""),O=Object(n.a)(h,2),f=O[0],x=O[1];Object(c.useEffect)((function(){var e;m.getApiSummaryData&&(0===(null===(e=p.dataSummary)||void 0===e?void 0:e.length)||!p.isLoadingSummary&&m.getAlwaysGrid)&&g(Object(m.getSummaryData)({}))}),[g,null===(e=p.dataSummary)||void 0===e?void 0:e.length]);var v=["primary","success","warning","danger","info","secondary"];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"content-header row",children:[Object(j.jsx)(d.a,{title:a("Instance & Corporate"),data:[{title:a("App Setting")},{title:a("Instance")}]}),Object(j.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(j.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(j.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(j.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[a("Search"),":"]}),Object(j.jsx)(i.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:f,onChange:function(e){return t=e.target.value,void x(t);var t}})]})})})]}),Object(j.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(j.jsx)("div",{className:"breadcrumb-right dropdown"})}),Object(j.jsxs)("div",{className:"app-user-list",children:[m.getApiSummaryData&&Object(j.jsx)(i.U,{children:null===(t=p.dataSummary)||void 0===t?void 0:t.map((function(e,t){var n;return Object(j.jsx)(i.t,{children:Object(j.jsx)(l.a,{color:v[t],statTitle:"".concat(a(e.title)),icon:e.icon?Object(j.jsx)(o.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:e.icon}):Object(j.jsx)(o.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:"lightbulb"}),renderStats:p.isLoadingSummary?Object(j.jsx)(b.a,{sx:{bgcolor:"#eef2f8"},animation:"wave",height:25,width:40,className:"fw-bolder mb-75"}):Object(j.jsx)("h3",{className:"fw-bolder mb-75",children:null!==(n=e.count_format)&&void 0!==n?n:e.count})})})}))}),Object(j.jsx)(u.default,{searchString:f})]})]})}},769:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a(9),s=a(6),r=a(4),i=a(7),l=a.n(i),o=a(2),d=a(81),u=a(42),m=a(364),b=a(13),j=a(167),g=a(189),p=a(16),h=a(169),O=a.n(h),f=a(170),x=a.n(f),v=a(84),y=a.n(v),N=a(458),S=a(454),w=a(544),D=a(547),C=a(543),T=a(216),_=a(64),k=(a(753),a(33)),L=a(25),B=a(5),Y=(a(94),a(105),a(43)),F=a.n(Y),I=a(49),P=a.n(I),E=a(87),A=a(95),R=a.n(A),q=a(147),M=a(47),U=a(0),H=P()(F.a),z=Object(o.forwardRef)((function(e,t){return Object(U.jsx)("div",{className:"form-check",children:Object(U.jsx)(B.B,Object(r.a)({type:"checkbox",ref:t},e))})})),G=function(e){e.store;var t=e.toggleSidebar,a=e.handlePerPage,n=e.rowsPerPage,c=e.handleFilter,s=e.searchTerm,r=e.selectedRow,i=e.handleDeleteSelected,l=Object(d.a)().t,m=Object(o.useContext)(u.a),h=Object(p.b)(),O=(Object(p.c)((function(e){return e.invoices})),Object(b.q)());return Object(U.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(U.jsxs)(B.U,{children:[Object(U.jsx)(B.t,{xl:"4",className:"d-flex align-items-center p-0",children:Object(U.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(U.jsx)("label",{htmlFor:"rows-per-page",children:l("Show")}),Object(U.jsxs)(B.B,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem"},children:[Object(U.jsx)("option",{value:"10",children:"10"}),Object(U.jsx)("option",{value:"25",children:"25"}),Object(U.jsx)("option",{value:"50",children:"50"})]}),Object(U.jsx)("label",{htmlFor:"rows-per-page",children:l("Entries")})]})}),Object(U.jsxs)(B.t,{xl:"8",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[(null===r||void 0===r?void 0:r.length)>0&&m.can("delete",sessionStorage.getItem("current_page_perm"))?Object(U.jsx)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:Object(U.jsxs)(B.i,{className:"delete-users",color:"danger",onClick:i,children:[l("Delete")," ",r.length," ",l("Selected ".concat(j.pageTitle))]})}):null,Object(U.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(U.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[l("Search"),":"]}),Object(U.jsx)(B.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:s,onChange:function(e){return c(e.target.value)}})]}),Object(U.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(U.jsxs)(B.ab,{className:"me-1",children:[Object(U.jsxs)(B.x,{color:"secondary",caret:!0,outline:!0,children:[Object(U.jsx)(N.a,{className:"font-small-4 me-50"}),Object(U.jsx)("span",{className:"align-middle",children:l("Export")})]}),Object(U.jsxs)(B.w,{children:[Object(U.jsxs)(B.v,{className:"w-100",onClick:function(){return h(Object(g.getInvoice)({rpt_name:"sample",output_type:"pdf",dataYear:O.dataYear,print:!0,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(U.jsx)(S.a,{className:"font-small-4 me-50"}),Object(U.jsx)("span",{className:"align-middle",children:l("Print")})]}),Object(U.jsxs)(B.v,{className:"w-100",onClick:function(){return h(Object(g.getInvoice)({rpt_name:"sample",output_type:"pdf",dataYear:O.dataYear,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(U.jsx)(w.a,{className:"font-small-4 me-50"}),Object(U.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(U.jsxs)(B.v,{className:"w-100",onClick:function(){return h(Object(g.getInvoice)({rpt_name:"sample",output_type:"xls",dataYear:O.dataYear,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(U.jsx)(D.a,{className:"font-small-4 me-50"}),Object(U.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(U.jsxs)(B.v,{className:"w-100",onClick:function(){return h(Object(g.getInvoice)({rpt_name:"sample",output_type:"csv",dataYear:O.dataYear,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(U.jsx)(C.a,{className:"font-small-4 me-50"}),Object(U.jsx)("span",{className:"align-middle",children:"CSV"})]})]})]}),m.can("post",sessionStorage.getItem("current_page_perm"))?Object(U.jsxs)(B.i,{className:"add-new-user",color:"primary",onClick:t,children:[l("Add New")," ",l(j.pageTitle)]}):null]})]})]})})};t.default=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e[j.storeName]})),a=Object(d.a)().t,i=(Object(o.useContext)(u.a),Object(o.useContext)(k.a).colors),g=Object(o.useState)("desc"),h=Object(s.a)(g,2),f=h[0],v=h[1],N=Object(o.useState)(""),S=Object(s.a)(N,2),w=S[0],D=S[1],C=Object(o.useState)(1),Y=Object(s.a)(C,2),F=Y[0],I=Y[1],P=Object(o.useState)("id"),A=Object(s.a)(P,2),J=A[0],K=A[1],W=Object(o.useState)(10),V=Object(s.a)(W,2),Q=V[0],X=V[1],Z=Object(o.useState)([]),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=Object(o.useState)(!1),ne=Object(s.a)(ae,2),ce=ne[0],se=ne[1],re=Object(o.useState)(!1),ie=Object(s.a)(re,2),le=ie[0],oe=ie[1],de=Object(o.useState)(!1),ue=Object(s.a)(de,2),me=ue[0],be=ue[1],je=Object(o.useState)("Please Wait"),ge=Object(s.a)(je,2),pe=(ge[0],ge[1]),he=Object(o.useState)(!1),Oe=Object(s.a)(he,2),fe=Oe[0],xe=Oe[1],ve=Object(o.useState)(null),ye=Object(s.a)(ve,2),Ne=ye[0],Se=ye[1],we=function(t){Se("edit"),j.detailFromGrid?(pe("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(j.pageTitle))),be(!0),e(Object(j.setDataById)(t)).then((function(){be(!1),xe(!0)}))):(pe("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(j.pageTitle))),be(!0),e(Object(j.getDataById)(t.id)).then((function(e){"rejected"===e.meta.requestStatus?(be(!1),L.b.error(e.payload.message,{style:{padding:"16px",color:i.danger.main,border:"1px solid ".concat(i.danger.main)},iconTheme:{primary:i.danger.main}})):(be(!1),xe(!0))})))},De=function(){oe(!le),xe(!fe),Object(b.G)()},Ce=function(){Se("add"),oe(!le),xe(!fe),Object(b.z)(De)},Te=function(){var t=Object(c.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You won't be able to revert")," ").concat(a(j.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(a(j.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:t.sent.value&&(pe("".concat(a("Deleting")," Data ").concat(a(j.pageTitle))),be(!0),e(Object(j.deleteData)(n)).then((function(e){"fulfilled"===e.meta.requestStatus?(be(!1),L.b.success("".concat(a("Successfully deleted")," ").concat(a(j.pageTitle)),{style:{padding:"16px",color:i.success.main,border:"1px solid ".concat(i.success.main)},iconTheme:{primary:i.success.main}})):"rejected"===e.meta.requestStatus&&(be(!1),L.b.error(e.payload.message,{style:{padding:"16px",color:i.danger.main,border:"1px solid ".concat(i.danger.main)},iconTheme:{primary:i.danger.main}}))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_e=function(){var t=Object(c.a)(l.a.mark((function t(){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=ee.length,t.next=3,H.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You will delete")," ").concat(n," ").concat(a("selected data. Deleted data cannot be recovered"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(n," ").concat(a(j.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 3:t.sent.value&&(pe("".concat(a("Deleting")," ").concat(n," Data ").concat(a(j.pageTitle))),be(!0),c=ee.map((function(e){return e.id})),e(Object(j.deleteSelectedRowData)({id:c})).then((function(e){"fulfilled"===e.meta.requestStatus?(te([]),se(!ce),be(!1),L.b.success("".concat(a("Successfully deleted")," ").concat(n," ").concat(a(j.pageTitle)),{style:{padding:"16px",color:i.success.main,border:"1px solid ".concat(i.success.main)},iconTheme:{primary:i.success.main}})):"rejected"===e.meta.requestStatus&&(be(!1),L.b.error(e.payload.message,{style:{padding:"16px",color:i.danger.main,border:"1px solid ".concat(i.danger.main)},iconTheme:{primary:i.danger.main}}))})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ke=Object(o.useCallback)(y()((function(t){e(Object(j.getDataList)({sort_dir:f,search:t,sort:J,page:F,length:Q}))}),500),[]),Le=Object(o.useCallback)((function(e){te(e.selectedRows)}),[]),Be=[].concat(Object(n.a)(j.dynamicColumns.map((function(e){return{name:e.columnName,sortField:e.fieldName,center:!1,sortable:!0,selector:function(t){return t[e.fieldName]},cell:function(t){return function(e,t){var a=e[t.fieldName],n=t.dataFormat;if(n&&n.includes(":")){var c=n.split(":"),s=c[0],r=c[1],i=e[t.fieldName];return"date"===s&&(i=R()(a).format("DD MMM YYYY"),r&&(i=R()(a).format(r))),"datetime"===s&&(i=R()(a).format("DD MMM YYYY HH:mm"),r&&(i=R()(a).format(r))),i}return e[t.fieldName]}(t,e)}}}))),[{name:a("Actions"),center:!0,width:"140px",cell:function(e){return Object(U.jsx)(q.a,{row:e,handleDelete:Te,handleEdit:we})}}]),Ye=Object(o.useMemo)((function(){return t.isLoading?Be.map((function(e){return Object(r.a)(Object(r.a)({name:a(e.name)},e),{},{sortable:!1,cell:function(t){return Object(U.jsx)(E.a,{sx:{bgcolor:i.dark.light},animation:"wave",className:"Actions"===e.name?"ms-2":"",width:"Actions"===e.name?10:"100%",height:40})}})})):Be.map((function(e){return Object(r.a)({name:a(e.name)},e)}))}),[t.isLoading,Be]);return Object(o.useEffect)((function(){(0===t.data.length||!t.isLoading&&j.getAlwaysGrid)&&(pe("".concat(a("Loading Data")," ").concat(a(j.pageTitle))),e(Object(j.getDataList)({sort_dir:f,sort:J,search:w,page:F,length:Q})))}),[e,t.data.length,f,J,F]),Object(U.jsxs)(o.Fragment,{children:[Object(U.jsx)(_.a,{blocking:me,loader:Object(U.jsx)(M.b,{}),children:Object(U.jsx)(B.l,{className:"overflow-hidden",children:Object(U.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(U.jsx)(x.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,pagination:!0,paginationServer:!0,paginationTotalRows:t.total,paginationComponent:function(){var a=Number(Math.ceil(t.total/Q));return Object(U.jsx)(O.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==F?F-1:0,onPageChange:function(t){return function(t){e(Object(j.getDataList)({sort_dir:f,sort:J,search:w,length:Q,page:t.selected+1})),I(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRows:!0,onSelectedRowsChange:Le,selectableRowsHighlight:!0,clearSelectedRows:ce,selectableRowsComponent:z,noDataComponent:Object(U.jsx)(M.c,{}),style:{"min-height":"400px"},highlightOnHover:!0,pointerOnHover:!0,columns:Ye,onSort:function(t,a){v(a),K(t.sortField),e(Object(j.getDataList)({sort_dir:f,sort:J,search:w,page:F,length:Q}))},sortIcon:Object(U.jsx)(T.a,{}),className:"react-dataTable",data:function(){var e={search:w},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.isLoading?Array(10).fill({}):t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),subHeaderComponent:Object(U.jsx)(G,{store:t,searchTerm:w,rowsPerPage:Q,handleFilter:function(e){D(e),ke(e)},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(j.getDataList)({sort_dir:f,sort:J,search:w,length:a,page:F})),X(a)},toggleSidebar:Ce,selectedRow:ee,handleDeleteSelected:_e})})})})}),fe&&Object(U.jsx)(m.default,{formState:Ne,show:fe,setShow:Ce,detailPage:!1,setFormState:Se})]})}},770:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(6),s=a(7),r=a.n(s),i=a(2),l=a(81),o=a(42),d=a(364),u=a(13),m=a(167),b=a(16),j=a(242),g=a(318),p=a(322),h=a(64),O=(a(753),a(33)),f=a(25),x=a(5),v=a(43),y=a.n(v),N=a(49),S=a.n(N),w=(a(94),a(105),a(263)),D=a(47),C=(a(36),a(0)),T=S()(y.a);t.default=function(e){var t=Object(b.b)(),a=Object(b.c)((function(e){return e[m.storeName]})),s=Object(l.a)().t,v=Object(i.useState)(!1),y=Object(c.a)(v,2),N=y[0],S=y[1],_=Object(i.useContext)(o.a),k=Object(i.useState)(!1),L=Object(c.a)(k,2),B=(L[0],L[1]),Y=Object(i.useState)("Please Wait"),F=Object(c.a)(Y,2),I=(F[0],F[1]),P=Object(i.useState)(!1),E=Object(c.a)(P,2),A=E[0],R=E[1],q=Object(i.useState)(null),M=Object(c.a)(q,2),U=M[0],H=M[1],z=Object(i.useState)(null),G=Object(c.a)(z,2),J=G[0],K=G[1],W=Object(i.useState)(0),V=Object(c.a)(W,2),Q=V[0],X=V[1],Z=Object(i.useState)(null),$=Object(c.a)(Z,2),ee=($[0],$[1]),te=Object(i.useContext)(O.a).colors,ae=function(){var e=Object(n.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.fire({title:"".concat(s("Are you sure?")),text:"".concat(s("You won't be able to revert")," ").concat(s(m.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(s("Yes, Delete")," ").concat(s(m.pageTitle),"!"),cancelButtonText:"".concat(s("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:e.sent.value&&(I("".concat(s("Deleting")," Data ").concat(s(m.pageTitle))),B(!0),t(Object(m.deleteData)(a)).then((function(e){"fulfilled"===e.meta.requestStatus?(B(!1),f.b.success("".concat(s("Successfully deleted")," ").concat(s(m.pageTitle)),{style:{padding:"16px",color:te.success.main,border:"1px solid ".concat(te.success.main)},iconTheme:{primary:te.success.main}})):"rejected"===e.meta.requestStatus&&(B(!1),f.b.error(e.payload.message,{style:{padding:"16px",color:te.danger.main,border:"1px solid ".concat(te.danger.main)},iconTheme:{primary:te.danger.main}}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;K(e),H("add"),S(!N),R(!A),Object(u.z)(ce)},ce=function(){S(!N),R(!A),Object(u.G)()};return Object(i.useEffect)((function(){(0===a.dataNested.length&&!a.isLoadingNested||m.getAlwaysGrid)&&(I("".concat(s("Loading Data")," ").concat(s(m.pageTitle))),t(Object(m.getDataList)({})))}),[t,a.dataNested.length>0]),Object(C.jsxs)(i.Fragment,{children:[Object(C.jsx)(h.a,{blocking:a.isLoadingNested,loader:Object(C.jsx)(D.b,{}),children:Object(C.jsx)(x.l,{className:"overflow-hidden",children:Object(C.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(C.jsx)("div",{style:{height:1e3,marginLeft:20,marginRight:20,marginTop:40},children:Object(C.jsx)(w.a,{treeData:a.dataNested,onChange:function(e){t(Object(m.setDataListNested)(e))},canDrag:!1,searchMethod:function(e){var t=e.node,a=e.searchQuery;return a&&t.name.toLowerCase().indexOf(a.toLowerCase())>-1},searchQuery:e.searchString,searchFocusOffset:Q,searchFinishCallback:function(e){ee(e.length),X(e.length>0?Q%e.length:0)},maxDepth:10,generateNodeProps:function(e){var a,n,c=e.node;e.path;return{style:{fontSize:c.is_app_header?"16px":"14px",fontWeight:c.is_app_header?"bold":"normal"},title:Object(C.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[(null===c||void 0===c||null===(a=c.attributes)||void 0===a?void 0:a.logo)&&Object(C.jsx)("img",{className:"me-1",src:c.attributes.logo,height:"25"}),Object(C.jsx)("div",{className:"d-flex flex-column",children:Object(C.jsx)("span",{className:"fw-bolder",children:c.name})})]}),buttons:[_.can("post",sessionStorage.getItem("current_page_perm"))?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(x.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-primary",id:"btn-add-child",onClick:function(e){ne(c)},children:Object(C.jsx)(j.a,{size:16})}),Object(C.jsx)(x.cb,{placement:"left",target:"btn-add-child",children:s("Add Child")})]}):null,!_.can("update",sessionStorage.getItem("current_page_perm"))||c.is_app_header||c.disableEdit?null:Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(x.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-info",id:"btn-edit",onClick:function(e){var a;e.preventDefault(),a=c,H("edit"),m.detailFromGrid?(I("".concat(s("Loading")," ").concat(s("Detail")," ").concat(s("Data")," ").concat(s(m.pageTitle))),B(!0),t(Object(m.setDataById)(a)).then((function(){B(!1),R(!0)}))):(I("".concat(s("Loading")," ").concat(s("Detail")," ").concat(s("Data")," ").concat(s(m.pageTitle))),B(!0),t(Object(m.getDataById)(a.id)).then((function(e){"rejected"===e.meta.requestStatus?(B(!1),f.b.error(e.payload.message,{style:{padding:"16px",color:te.danger.main,border:"1px solid ".concat(te.danger.main)},iconTheme:{primary:te.danger.main}})):(B(!1),R(!0))})))},children:Object(C.jsx)(g.a,{size:16})}),Object(C.jsx)(x.cb,{placement:"left",target:"btn-edit",children:s("Edit")})]}),_.can("delete",sessionStorage.getItem("current_page_perm"))&&!c.disableDelete&&0===(null===c||void 0===c||null===(n=c.children)||void 0===n?void 0:n.length)?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(x.i.Ripple,{id:"btn-delete",className:"btn-icon rounded-circle",color:"flat-danger",onClick:function(e){e.preventDefault(),ae(c.id)},children:Object(C.jsx)(p.a,{size:16})}),Object(C.jsx)(x.cb,{placement:"left",target:"btn-delete",children:s("Delete")})]}):null]}}})})})})}),A&&Object(C.jsx)(d.default,{formState:U,show:A,setShow:ne,detailPage:!1,setFormState:H,currentData:J})]})}}}]);
//# sourceMappingURL=17.0dc32018.chunk.js.map