(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[155],{759:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a(9),s=a(6),l=a(4),i=a(7),r=a.n(i),o=a(2),d=a(85),m=a(42),u=a(371),b=a(13),j=a(369),p=a(360),g=a(190),h=a(16),f=a(170),O=a.n(f),x=a(171),v=a.n(x),N=a(82),w=a.n(N),y=a(457),_=a(453),S=a(546),C=a(549),D=a(545),T=a(214),k=a(63),Y=(a(481),a(34)),L=a(24),P=a(5),B=(a(94),a(105),a(43)),F=a.n(B),A=a(49),I=a.n(A),E=a(86),H=a(106),M=a.n(H),R=a(147),q=a(47),U=a(37),W=a(0),K=I()(F.a),G=Object(o.forwardRef)((function(e,t){return Object(W.jsx)("div",{className:"form-check",children:Object(W.jsx)(P.B,Object(l.a)({type:"checkbox",ref:t},e))})})),J=function(e){e.store;var t=e.toggleSidebar,a=e.handlePerPage,n=e.rowsPerPage,c=e.handleFilter,s=e.searchTerm,l=e.selectedRow,i=e.handleDeleteSelected,r=Object(d.a)().t,u=Object(o.useContext)(m.a),p=Object(h.b)(),f=(Object(h.c)((function(e){return e.invoices})),Object(b.q)());return Object(W.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(W.jsxs)(P.S,{children:[Object(W.jsx)(P.t,{xl:"4",className:"d-flex align-items-center p-0",children:Object(W.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(W.jsx)("label",{htmlFor:"rows-per-page",children:r("Show")}),Object(W.jsxs)(P.B,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem"},children:[Object(W.jsx)("option",{value:"10",children:"10"}),Object(W.jsx)("option",{value:"25",children:"25"}),Object(W.jsx)("option",{value:"50",children:"50"})]}),Object(W.jsx)("label",{htmlFor:"rows-per-page",children:r("Entries")})]})}),Object(W.jsxs)(P.t,{xl:"8",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[(null===l||void 0===l?void 0:l.length)>0&&u.can("delete",sessionStorage.getItem("current_page_perm"))?Object(W.jsx)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:Object(W.jsxs)(P.i,{className:"delete-users",color:"danger",onClick:i,children:[r("Delete")," ",l.length," ",r("Selected ".concat(j.pageTitle))]})}):null,Object(W.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(W.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[r("Search"),":"]}),Object(W.jsx)(P.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:s,onChange:function(e){return c(e.target.value)}})]}),Object(W.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(W.jsxs)(P.Y,{className:"me-1",children:[Object(W.jsxs)(P.x,{color:"secondary",caret:!0,outline:!0,children:[Object(W.jsx)(y.a,{className:"font-small-4 me-50"}),Object(W.jsx)("span",{className:"align-middle",children:r("Export")})]}),Object(W.jsxs)(P.w,{children:[Object(W.jsxs)(P.v,{className:"w-100",onClick:function(){return p(Object(g.getInvoice)({rpt_name:"sample",output_type:"pdf",dataYear:f.dataYear,print:!0,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(W.jsx)(_.a,{className:"font-small-4 me-50"}),Object(W.jsx)("span",{className:"align-middle",children:r("Print")})]}),Object(W.jsxs)(P.v,{className:"w-100",onClick:function(){return p(Object(g.getInvoice)({rpt_name:"sample",output_type:"pdf",dataYear:f.dataYear,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(W.jsx)(S.a,{className:"font-small-4 me-50"}),Object(W.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(W.jsxs)(P.v,{className:"w-100",onClick:function(){return p(Object(g.getInvoice)({rpt_name:"sample",output_type:"xls",dataYear:f.dataYear,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(W.jsx)(C.a,{className:"font-small-4 me-50"}),Object(W.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(W.jsxs)(P.v,{className:"w-100",onClick:function(){return p(Object(g.getInvoice)({rpt_name:"sample",output_type:"csv",dataYear:f.dataYear,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(W.jsx)(D.a,{className:"font-small-4 me-50"}),Object(W.jsx)("span",{className:"align-middle",children:"CSV"})]})]})]}),u.can("post",sessionStorage.getItem("current_page_perm"))?Object(W.jsxs)(P.i,{className:"add-new-user",color:"primary",onClick:t,children:[r("Add New")," ",r(j.pageTitle)]}):null]})]})]})})};t.default=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e[j.storeName]})),a=Object(h.c)((function(e){return e.apps_app})),i=Object(d.a)().t,g=(Object(o.useContext)(m.a),Object(o.useContext)(Y.a).colors),f=Object(o.useState)("desc"),x=Object(s.a)(f,2),N=x[0],y=x[1],_=Object(o.useState)(""),S=Object(s.a)(_,2),C=S[0],D=S[1],B=Object(o.useState)(1),F=Object(s.a)(B,2),A=F[0],I=F[1],H=Object(o.useState)("id"),z=Object(s.a)(H,2),V=z[0],Q=z[1],X=Object(o.useState)(10),Z=Object(s.a)(X,2),$=Z[0],ee=Z[1],te=Object(o.useState)([]),ae=Object(s.a)(te,2),ne=ae[0],ce=ae[1],se=Object(o.useState)(!1),le=Object(s.a)(se,2),ie=le[0],re=le[1],oe=Object(o.useState)(!1),de=Object(s.a)(oe,2),me=de[0],ue=de[1],be=Object(o.useState)(!1),je=Object(s.a)(be,2),pe=je[0],ge=je[1],he=Object(o.useState)("Please Wait"),fe=Object(s.a)(he,2),Oe=(fe[0],fe[1]),xe=Object(o.useState)(!1),ve=Object(s.a)(xe,2),Ne=ve[0],we=ve[1],ye=Object(o.useState)(null),_e=Object(s.a)(ye,2),Se=_e[0],Ce=_e[1],De=function(t){Ce("edit"),j.detailFromGrid?(Oe("".concat(i("Loading")," ").concat(i("Detail")," ").concat(i("Data")," ").concat(i(j.pageTitle))),ge(!0),e(Object(j.setDataById)(t)).then((function(){0!==a.data.length||a.isLoading?(ge(!1),we(!0)):e(Object(p.getDataList)({})).then((function(e){ge(!1),we(!0)}))}))):(Oe("".concat(i("Loading")," ").concat(i("Detail")," ").concat(i("Data")," ").concat(i(j.pageTitle))),ge(!0),e(Object(j.getDataById)(t.id)).then((function(e){"rejected"===e.meta.requestStatus?(ge(!1),L.b.error(e.payload.message,{style:{padding:"16px",color:g.danger.main,border:"1px solid ".concat(g.danger.main)},iconTheme:{primary:g.danger.main}})):(ge(!1),we(!0))})))},Te=function(){ue(!me),we(!Ne),Object(b.G)()},ke=function(){Ce("add"),ue(!me),we(!Ne),Object(b.z)(Te)},Ye=function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.fire({title:"".concat(i("Are you sure?")),text:"".concat(i("You won't be able to revert")," ").concat(i(j.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(i("Yes, Delete")," ").concat(i(j.pageTitle),"!"),cancelButtonText:"".concat(i("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:t.sent.value&&(Oe("".concat(i("Deleting")," Data ").concat(i(j.pageTitle))),ge(!0),e(Object(j.deleteData)(a)).then((function(e){"fulfilled"===e.meta.requestStatus?(ge(!1),L.b.success("".concat(i("Successfully deleted")," ").concat(i(j.pageTitle)),{style:{padding:"16px",color:g.success.main,border:"1px solid ".concat(g.success.main)},iconTheme:{primary:g.success.main}})):"rejected"===e.meta.requestStatus&&(ge(!1),L.b.error(e.payload.message,{style:{padding:"16px",color:g.danger.main,border:"1px solid ".concat(g.danger.main)},iconTheme:{primary:g.danger.main}}))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Le=function(){var t=Object(c.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=ne.length,t.next=3,K.fire({title:"".concat(i("Are you sure?")),text:"".concat(i("You will delete")," ").concat(a," ").concat(i("selected data. Deleted data cannot be recovered"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(i("Yes, Delete")," ").concat(a," ").concat(i(j.pageTitle),"!"),cancelButtonText:"".concat(i("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 3:t.sent.value&&(Oe("".concat(i("Deleting")," ").concat(a," Data ").concat(i(j.pageTitle))),ge(!0),n=ne.map((function(e){return e.id})),e(Object(j.deleteSelectedRowData)({id:n})).then((function(e){"fulfilled"===e.meta.requestStatus?(ce([]),re(!ie),ge(!1),L.b.success("".concat(i("Successfully deleted")," ").concat(a," ").concat(i(j.pageTitle)),{style:{padding:"16px",color:g.success.main,border:"1px solid ".concat(g.success.main)},iconTheme:{primary:g.success.main}})):"rejected"===e.meta.requestStatus&&(ge(!1),L.b.error(e.payload.message,{style:{padding:"16px",color:g.danger.main,border:"1px solid ".concat(g.danger.main)},iconTheme:{primary:g.danger.main}}))})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Pe=Object(o.useCallback)(w()((function(t){e(Object(j.getDataList)({sort_dir:N,search:t,sort:V,page:A,length:$}))}),500),[]),Be=Object(o.useCallback)((function(e){ce(e.selectedRows)}),[]),Fe=[].concat(Object(n.a)(t.dynamicColumns.map((function(e){return{name:e.columnName,sortField:e.fieldName,center:!1,sortable:!0,selector:function(t){return t[e.fieldName]},cell:function(t){return function(e,t){var a=e[t.fieldName],n=t.dataFormat;if(n&&n.includes(":")){var c=n.split(":"),s=c[0],l=c[1],i=e[t.fieldName];return"date"===s&&(i=M()(a).format("DD MMM YYYY"),l&&(i=M()(a).format(l))),"datetime"===s&&(i=M()(a).format("DD MMM YYYY HH:mm"),l&&(i=M()(a).format(l))),i}return e[t.fieldName]}(t,e)}}}))),[{name:i("Domain"),center:!1,sortable:!1,selector:function(e){return e.domain},cell:function(e){return Object(W.jsx)("a",{target:"_blank",href:e.domain,title:e.domain,children:e.domain})}},{name:i("App"),center:!1,sortable:!1,selector:function(e){return null===e||void 0===e?void 0:e.app_logo},cell:function(e){var t;return Object(W.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[null!==e&&void 0!==e&&e.app_logo?Object(W.jsx)(U.a,{className:"me-1",img:null===e||void 0===e?void 0:e.app_logo,width:"32",height:"32",imgHeight:"25",imgWidth:"30",color:"light-primary"}):Object(W.jsx)(U.a,{initials:!0,className:"me-1",content:null!==(t=null===e||void 0===e?void 0:e.app_name)&&void 0!==t?t:""}),Object(W.jsx)("div",{className:"d-flex flex-column",children:Object(W.jsx)("span",{className:"fw-bolder",children:e.app_name})})]})}},{name:i("Unit"),center:!1,sortable:!1,selector:function(e){return null===e||void 0===e?void 0:e.unit_logo},cell:function(e){var t;return Object(W.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[null!==e&&void 0!==e&&e.unit_logo?Object(W.jsx)(U.a,{className:"me-1",img:null===e||void 0===e?void 0:e.unit_logo,width:"32",height:"32",imgHeight:"30",imgWidth:"30",color:"light-primary"}):Object(W.jsx)(U.a,{color:"light-primary",initials:!0,className:"me-1",content:null!==(t=null===e||void 0===e?void 0:e.unit_name)&&void 0!==t?t:""}),Object(W.jsx)("div",{className:"d-flex flex-column",children:Object(W.jsx)("span",{className:"fw-bolder",children:null===e||void 0===e?void 0:e.unit_name})})]})}},{name:i("App Alias"),sortField:"attributes",center:!1,sortable:!1,selector:function(e){var t;return null===(t=e.attributes)||void 0===t?void 0:t.app_name_alias},cell:function(e){var t,a,n,c,s;return Object(W.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[null!==(t=e.attributes)&&void 0!==t&&t.app_logo?Object(W.jsx)(U.a,{className:"me-1",img:null===e||void 0===e?void 0:e.app_logo,width:"32",height:"32",imgHeight:"30",imgWidth:"30",color:"light-primary"}):(null===e||void 0===e||null===(a=e.attributes)||void 0===a?void 0:a.app_logo)&&Object(W.jsx)(U.a,{initials:!0,className:"me-1",width:"32",height:"32",imgHeight:"30",imgWidth:"30",color:"light-primary",content:null!==(n=null===e||void 0===e||null===(c=e.attributes)||void 0===c?void 0:c.app_name_alias)&&void 0!==n?n:""}),Object(W.jsx)("div",{className:"d-flex flex-column",children:Object(W.jsx)("span",{className:"fw-bolder",children:null===(s=e.attributes)||void 0===s?void 0:s.app_name_alias})})]})}},{name:i("Description"),sortField:"description",center:!1,sortable:!1,selector:function(e){var t;return null===(t=e.attributes)||void 0===t?void 0:t.app_name_alias},cell:function(e){return e.description}},{name:i("Actions"),center:!0,width:"140px",cell:function(e){return Object(W.jsx)(R.a,{row:e,handleDelete:Ye,handleEdit:De})}}]),Ae=Object(o.useMemo)((function(){return t.isLoading?Fe.map((function(e){return Object(l.a)(Object(l.a)({name:i(e.name)},e),{},{sortable:!1,cell:function(t){return"Actions"===e.name?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(E.a,{sx:{bgcolor:g.dark.light},animation:"wave",className:"ms-2 me-1",width:30,height:40}),Object(W.jsx)(E.a,{sx:{bgcolor:g.dark.light},animation:"wave",width:30,height:40})]}):Object(W.jsx)(E.a,{sx:{bgcolor:g.dark.light},animation:"wave",width:"100%",height:40})}})})):Fe.map((function(e){return Object(l.a)({name:i(e.name)},e)}))}),[t.isLoading,Fe]);return Object(o.useEffect)((function(){(0===t.data.length||!t.isLoading&&j.getAlwaysGrid)&&(Oe("".concat(i("Loading Data")," ").concat(i(j.pageTitle))),e(Object(j.getDataList)({sort_dir:N,sort:V,search:C,page:A,length:$})))}),[e,t.data.length,N,V,A]),Object(W.jsxs)(o.Fragment,{children:[Object(W.jsx)(k.a,{blocking:pe,loader:Object(W.jsx)(q.b,{}),children:Object(W.jsx)(P.l,{className:"overflow-hidden",children:Object(W.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(W.jsx)(v.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,pagination:!0,paginationServer:!0,paginationTotalRows:t.total,paginationComponent:function(){var a=Number(Math.ceil(t.total/$));return Object(W.jsx)(O.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==A?A-1:0,onPageChange:function(t){return function(t){e(Object(j.getDataList)({sort_dir:N,sort:V,search:C,length:$,page:t.selected+1})),I(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRows:!0,onSelectedRowsChange:Be,selectableRowsHighlight:!0,clearSelectedRows:ie,selectableRowsComponent:G,noDataComponent:Object(W.jsx)(q.c,{}),style:{"min-height":"400px"},highlightOnHover:!0,pointerOnHover:!0,columns:Ae,onSort:function(t,a){y(a),Q(t.sortField),e(Object(j.getDataList)({sort_dir:N,sort:V,search:C,page:A,length:$}))},sortIcon:Object(W.jsx)(T.a,{}),className:"react-dataTable",data:function(){var e={search:C},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.isLoading?Array(10).fill({}):t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),subHeaderComponent:Object(W.jsx)(J,{store:t,searchTerm:C,rowsPerPage:$,handleFilter:function(e){D(e),Pe(e)},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(j.getDataList)({sort_dir:N,sort:V,search:C,length:a,page:A})),ee(a)},toggleSidebar:ke,selectedRow:ne,handleDeleteSelected:Le})})})})}),Ne&&Object(W.jsx)(u.default,{formState:Se,show:Ne,setShow:ke,detailPage:!1,setFormState:Ce})]})}}}]);
//# sourceMappingURL=155.0a703eec.chunk.js.map