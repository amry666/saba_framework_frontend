(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[154],{759:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a(9),s=a(6),o=a(4),l=a(7),r=a.n(l),i=a(2),d=a(81),m=a(42),u=a(371),g=a(11),b=a(361),j=(a(189),a(16)),p=a(169),f=a.n(p),h=a(170),x=a.n(h),O=a(84),v=a.n(O),w=a(240),y=a(65),N=a(756),S=a(34),C=a(25),T=a(5),D=a(36),k=(a(94),a(106),a(43)),_=a.n(k),L=a(49),B=a.n(L),A=a(87),F=a(95),R=a.n(F),P=a(147),Y=a(47),H=a(1294),M=a.n(H),q=a(1295),I=a.n(q),E=a(0),G=B()(_.a),Q=Object(i.forwardRef)((function(e,t){return Object(E.jsx)("div",{className:"form-check",children:Object(E.jsx)(T.B,Object(o.a)({type:"checkbox",ref:t},e))})})),Z=function(e){e.store;var t=e.toggleSidebar,a=e.handlePerPage,n=e.rowsPerPage,c=e.handleFilter,s=e.searchTerm,o=e.selectedRow,l=e.handleDeleteSelected,r=Object(d.a)().t,u=Object(i.useContext)(m.a);Object(j.b)(),Object(j.c)((function(e){return e.invoices})),Object(g.q)();return Object(E.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(E.jsxs)(T.U,{children:[Object(E.jsx)(T.t,{xl:"4",className:"d-flex align-items-center p-0",children:Object(E.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(E.jsx)("label",{htmlFor:"rows-per-page",children:r("Show")}),Object(E.jsxs)(T.B,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem"},children:[Object(E.jsx)("option",{value:"10",children:"10"}),Object(E.jsx)("option",{value:"25",children:"25"}),Object(E.jsx)("option",{value:"50",children:"50"})]}),Object(E.jsx)("label",{htmlFor:"rows-per-page",children:r("Entries")})]})}),Object(E.jsxs)(T.t,{xl:"8",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[(null===o||void 0===o?void 0:o.length)>0&&u.can("delete",sessionStorage.getItem("current_page_perm"))?Object(E.jsx)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:Object(E.jsxs)(T.i,{className:"delete-users",color:"danger",onClick:l,children:[r("Delete")," ",o.length," ",r("Selected ".concat(b.pageTitle))]})}):null,Object(E.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(E.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[r("Search"),":"]}),Object(E.jsx)(T.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:s,onChange:function(e){return c(e.target.value)}})]}),Object(E.jsx)("div",{className:"d-flex align-items-center table-header-actions",children:u.can("post",sessionStorage.getItem("current_page_perm"))?Object(E.jsxs)(T.i,{className:"add-new-user",color:"primary",onClick:t,children:[r("Add New")," ",r(b.pageTitle)]}):null})]})]})})};t.default=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e[b.storeName]})),a=Object(d.a)().t,l=(Object(i.useContext)(m.a),Object(i.useContext)(S.a).colors),p=Object(i.useState)("desc"),h=Object(s.a)(p,2),O=h[0],k=h[1],_=Object(i.useState)(""),L=Object(s.a)(_,2),B=L[0],F=L[1],H=Object(i.useState)(1),q=Object(s.a)(H,2),z=q[0],J=q[1],V=Object(i.useState)("id"),W=Object(s.a)(V,2),U=W[0],X=W[1],K=Object(i.useState)(10),$=Object(s.a)(K,2),ee=$[0],te=$[1],ae=Object(i.useState)([]),ne=Object(s.a)(ae,2),ce=ne[0],se=ne[1],oe=Object(i.useState)(!1),le=Object(s.a)(oe,2),re=le[0],ie=le[1],de=Object(i.useState)(!1),me=Object(s.a)(de,2),ue=me[0],ge=me[1],be=Object(i.useState)(!1),je=Object(s.a)(be,2),pe=je[0],fe=je[1],he=Object(i.useState)("Please Wait"),xe=Object(s.a)(he,2),Oe=(xe[0],xe[1]),ve=Object(i.useState)(!1),we=Object(s.a)(ve,2),ye=we[0],Ne=we[1],Se=Object(i.useState)(null),Ce=Object(s.a)(Se,2),Te=Ce[0],De=Ce[1],ke=function(t){De("edit"),b.detailFromGrid?(Oe("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(b.pageTitle))),fe(!0),e(Object(b.setDataById)(t)).then((function(){fe(!1),Ne(!0)}))):(Oe("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(b.pageTitle))),fe(!0),e(Object(b.getDataById)(t.id)).then((function(e){"rejected"===e.meta.requestStatus?(fe(!1),C.b.error(e.payload.message,{style:{padding:"16px",color:l.danger.main,border:"1px solid ".concat(l.danger.main)},iconTheme:{primary:l.danger.main}})):(fe(!1),Ne(!0))})))},_e=function(){ge(!ue),Ne(!ye),Object(g.G)()},Le=function(){De("add"),ge(!ue),Ne(!ye),Object(g.z)(_e)},Be=function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You won't be able to revert")," ").concat(a(b.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(a(b.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:t.sent.value&&(Oe("".concat(a("Deleting")," Data ").concat(a(b.pageTitle))),fe(!0),e(Object(b.deleteData)(n)).then((function(e){"fulfilled"===e.meta.requestStatus?(fe(!1),C.b.success("".concat(a("Successfully deleted")," ").concat(a(b.pageTitle)),{style:{padding:"16px",color:l.success.main,border:"1px solid ".concat(l.success.main)},iconTheme:{primary:l.success.main}})):"rejected"===e.meta.requestStatus&&(fe(!1),C.b.error(e.payload.message,{style:{padding:"16px",color:l.danger.main,border:"1px solid ".concat(l.danger.main)},iconTheme:{primary:l.danger.main}}))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ae=function(){var t=Object(c.a)(r.a.mark((function t(){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=ce.length,t.next=3,G.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You will delete")," ").concat(n," ").concat(a("selected data. Deleted data cannot be recovered"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(n," ").concat(a(b.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 3:t.sent.value&&(Oe("".concat(a("Deleting")," ").concat(n," Data ").concat(a(b.pageTitle))),fe(!0),c=ce.map((function(e){return e.id})),e(Object(b.deleteSelectedRowData)({id:c})).then((function(e){"fulfilled"===e.meta.requestStatus?(se([]),ie(!re),fe(!1),C.b.success("".concat(a("Successfully deleted")," ").concat(n," ").concat(a(b.pageTitle)),{style:{padding:"16px",color:l.success.main,border:"1px solid ".concat(l.success.main)},iconTheme:{primary:l.success.main}})):"rejected"===e.meta.requestStatus&&(fe(!1),C.b.error(e.payload.message,{style:{padding:"16px",color:l.danger.main,border:"1px solid ".concat(l.danger.main)},iconTheme:{primary:l.danger.main}}))})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Fe=Object(i.useCallback)(v()((function(t){e(Object(b.getDataList)({sort_dir:O,search:t,sort:U,page:z,length:ee}))}),500),[]),Re=Object(i.useCallback)((function(e){se(e.selectedRows)}),[]),Pe={python:"https://logos-download.com/wp-content/uploads/2016/10/Python_logo_wordmark.png",javascript:"https://javascriptsu.files.wordpress.com/2020/12/js.jpg",react:"https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",angular:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgREvN-e1uVZXVDc2w_zLeey0Li4buQ26gF0ZmCYxaBMoybo4uQTncS3Z5WxHRyZNfA&usqp=CAU",flask:"https://miro.medium.com/max/1079/1*nvtdCw77Al6LgV8wt_ma6Q.png"},Ye=[{name:a("App Name"),sortField:"name",center:!1,sortable:!0,selector:function(e){return e.name},cell:function(e){var t,a;return Object(E.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[null!==(t=e.logo)&&void 0!==t&&t.appLogo?Object(E.jsx)(D.a,{className:"me-1",img:null===e||void 0===e||null===(a=e.logo)||void 0===a?void 0:a.appLogo,width:"32",height:"32",imgHeight:"25",imgWidth:"30",color:"light-primary"}):e.is_uploading?Object(E.jsx)(N.a,{size:"sm",color:"primary"}):Object(E.jsx)(D.a,{initials:!0,className:"me-1",color:"light-primary",content:e.name||"John Doe"}),Object(E.jsxs)("div",{className:"d-flex flex-column",children:[Object(E.jsx)("span",{className:"fw-bolder",children:e.name}),Object(E.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.code})]})]})}},{name:a("App Type"),center:!1,sortable:!1,selector:function(e){return e.info.appType},cell:function(e){var t,a;return Object(E.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:["service"===(null===e||void 0===e||null===(t=e.info)||void 0===t?void 0:t.appType)?Object(E.jsx)(M.a,{className:"me-1",sixe:32}):Object(E.jsx)(I.a,{className:"me-1",sixe:32}),Object(E.jsx)("div",{className:"d-flex flex-column",children:Object(E.jsx)("span",{className:"fw-bolder",children:null===e||void 0===e||null===(a=e.info)||void 0===a?void 0:a.appType})})]})}},{name:a("Framework"),center:!1,sortable:!1,selector:function(e){return e.info.programming_language.main_language},cell:function(e){var t,a,n,c,s,o,l,r;return Object(E.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[Pe[null===e||void 0===e||null===(t=e.info)||void 0===t||null===(a=t.programming_language)||void 0===a?void 0:a.main_language]&&Object(E.jsx)("img",{className:"me-1",src:Pe[null===e||void 0===e||null===(n=e.info)||void 0===n||null===(c=n.programming_language)||void 0===c?void 0:c.main_language],height:"18"}),Pe[null===e||void 0===e||null===(s=e.info)||void 0===s||null===(o=s.programming_language)||void 0===o?void 0:o.framework]&&Object(E.jsx)("img",{className:"me-1",src:Pe[null===e||void 0===e||null===(l=e.info)||void 0===l||null===(r=l.programming_language)||void 0===r?void 0:r.framework],height:"18"})]})}}].concat(Object(n.a)(t.dynamicColumns.map((function(e){return{name:e.columnName,sortField:e.fieldName,center:!1,sortable:!0,selector:function(t){return t[e.fieldName]},cell:function(t){return function(e,t){var a=e[t.fieldName],n=t.dataFormat;if(n&&n.includes(":")){var c=n.split(":"),s=c[0],o=c[1],l=e[t.fieldName];return"date"===s&&(l=R()(a).format("DD MMM YYYY"),o&&(l=R()(a).format(o))),"datetime"===s&&(l=R()(a).format("DD MMM YYYY HH:mm"),o&&(l=R()(a).format(o))),l}return e[t.fieldName]}(t,e)}}}))),[{name:a("Actions"),center:!0,width:"140px",cell:function(e){return Object(E.jsx)(P.a,{row:e,handleDelete:Be,handleEdit:ke,storeName:b.storeName})}}]),He=Object(i.useMemo)((function(){return t.isLoading?Ye.map((function(e){return Object(o.a)(Object(o.a)({name:a(e.name)},e),{},{sortable:!1,cell:function(t){return Object(E.jsx)(A.a,{sx:{bgcolor:l.dark.light},animation:"wave",className:"Actions"===e.name?"ms-2":"",width:"Actions"===e.name?10:"100%",height:40})}})})):Ye.map((function(e){return Object(o.a)({name:a(e.name)},e)}))}),[t.isLoading,Ye]);return Object(i.useEffect)((function(){(0===t.data.length||!t.isLoading&&b.getAlwaysGrid)&&(Oe("".concat(a("Loading Data")," ").concat(a(b.pageTitle))),e(Object(b.getDataList)({sort_dir:O,sort:U,search:B,page:z,length:ee})))}),[e,t.data.length,O,U,z]),Object(E.jsxs)(i.Fragment,{children:[Object(E.jsx)(y.a,{blocking:pe,loader:Object(E.jsx)(Y.b,{}),children:Object(E.jsx)(T.l,{className:"overflow-hidden",children:Object(E.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(E.jsx)(x.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,pagination:!0,paginationServer:!0,paginationTotalRows:t.total,paginationComponent:function(){var a=Number(Math.ceil(t.total/ee));return Object(E.jsx)(f.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==z?z-1:0,onPageChange:function(t){return function(t){e(Object(b.getDataList)({sort_dir:O,sort:U,search:B,length:ee,page:t.selected+1})),J(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRows:!0,onSelectedRowsChange:Re,selectableRowsHighlight:!0,clearSelectedRows:re,selectableRowsComponent:Q,noDataComponent:Object(E.jsx)(Y.c,{}),style:{"min-height":"400px"},highlightOnHover:!0,pointerOnHover:!0,columns:He,onSort:function(t,a){k(a),X(t.sortField),e(Object(b.getDataList)({sort_dir:O,sort:U,search:B,page:z,length:ee}))},sortIcon:Object(E.jsx)(w.a,{}),className:"react-dataTable",data:function(){var e={search:B},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.isLoading?Array(10).fill({}):t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),subHeaderComponent:Object(E.jsx)(Z,{store:t,searchTerm:B,rowsPerPage:ee,handleFilter:function(e){F(e),Fe(e)},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(b.getDataList)({sort_dir:O,sort:U,search:B,length:a,page:z})),te(a)},toggleSidebar:Le,selectedRow:ce,handleDeleteSelected:Ae})})})})}),ye&&Object(E.jsx)(u.default,{formState:Te,show:ye,setShow:Le,detailPage:!1,setFormState:De})]})}}}]);
//# sourceMappingURL=154.5aea825e.chunk.js.map