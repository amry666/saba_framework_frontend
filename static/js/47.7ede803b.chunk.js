(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[47,60,84,85,86,135,153,155,171],{1243:function(e,t,a){},1303:function(e,t,a){!function(e){"use strict";var t="undefined"!==typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},a={weekdays:{shorthand:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],longhand:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],longhand:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},firstDayOfWeek:1,ordinal:function(){return""},time_24hr:!0,rangeSeparator:" - "};t.l10ns.id=a;var n=t.l10ns;e.Indonesian=a,e.default=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)},391:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(16),i=a(80),s=a(775),l=a(5),r=a(192),o=a(1235),d=(a(1243),a(376)),m=a(87),u=a(0);t.default=function(){var e,t,a=Object(i.a)().t,b=Object(c.b)(),j=Object(c.c)((function(e){return e[d.storeName]}));Object(n.useEffect)((function(){var e;d.getApiSummaryData&&(0===(null===(e=j.dataSummary)||void 0===e?void 0:e.length)||!j.isLoadingSummary&&d.getAlwaysGrid)&&b(Object(d.getSummaryData)({}))}),[b,null===(e=j.dataSummary)||void 0===e?void 0:e.length]);var p=["primary","success","warning","danger","info","secondary"];return Object(u.jsxs)("div",{className:"app-user-list",children:[d.getApiSummaryData&&Object(u.jsx)(l.U,{children:null===(t=j.dataSummary)||void 0===t?void 0:t.map((function(e,t){var n;return Object(u.jsx)(l.t,{children:Object(u.jsx)(r.a,{color:p[t],statTitle:"".concat(a(e.title)),icon:e.icon?Object(u.jsx)(o.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:e.icon}):Object(u.jsx)(o.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:"lightbulb"}),renderStats:j.isLoadingSummary?Object(u.jsx)(m.a,{sx:{bgcolor:"#eef2f8"},animation:"wave",height:25,width:40,className:"fw-bolder mb-75"}):Object(u.jsx)("h3",{className:"fw-bolder mb-75",children:null!==(n=e.count_format)&&void 0!==n?n:e.count})})})}))}),Object(u.jsx)(s.default,{})]})}},775:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a(10),i=a(6),s=a(4),l=a(7),r=a.n(l),o=a(2),d=a(80),m=a(42),u=a(378),b=a(11),j=a(376),p=a(367),g=a(191),h=a(16),f=a(171),O=a.n(f),x=a(172),v=a.n(x),w=a(84),N=a.n(w),y=a(467),S=a(463),_=a(557),D=a(560),C=a(556),k=a(247),T=a(64),L=(a(769),a(35)),Y=a(25),A=a(5),M=(a(93),a(106),a(44)),P=a.n(M),F=a(49),B=a.n(F),I=a(87),E=a(94),R=a.n(E),H=a(148),J=a(47),U=a(36),K=a(0),W=B()(P.a),q=Object(o.forwardRef)((function(e,t){return Object(K.jsx)("div",{className:"form-check",children:Object(K.jsx)(A.B,Object(s.a)({type:"checkbox",ref:t},e))})})),G=function(e){e.store;var t=e.toggleSidebar,a=e.handlePerPage,n=e.rowsPerPage,c=e.handleFilter,i=e.searchTerm,s=e.selectedRow,l=e.handleDeleteSelected,r=Object(d.a)().t,u=Object(o.useContext)(m.a),p=Object(h.b)(),f=(Object(h.c)((function(e){return e.invoices})),Object(b.v)());return Object(K.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(K.jsxs)(A.U,{children:[Object(K.jsx)(A.t,{xl:"4",className:"d-flex align-items-center p-0",children:Object(K.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(K.jsx)("label",{htmlFor:"rows-per-page",children:r("Show")}),Object(K.jsxs)(A.B,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem"},children:[Object(K.jsx)("option",{value:"10",children:"10"}),Object(K.jsx)("option",{value:"25",children:"25"}),Object(K.jsx)("option",{value:"50",children:"50"})]}),Object(K.jsx)("label",{htmlFor:"rows-per-page",children:r("Entries")})]})}),Object(K.jsxs)(A.t,{xl:"8",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[(null===s||void 0===s?void 0:s.length)>0&&u.can("delete",sessionStorage.getItem("current_page_perm"))?Object(K.jsx)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:Object(K.jsxs)(A.i,{className:"delete-users",color:"danger",onClick:l,children:[r("Delete")," ",s.length," ",r("Selected ".concat(j.pageTitle))]})}):null,Object(K.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(K.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[r("Search"),":"]}),Object(K.jsx)(A.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:i,onChange:function(e){return c(e.target.value)}})]}),Object(K.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(K.jsxs)(A.bb,{className:"me-1",children:[Object(K.jsxs)(A.x,{color:"secondary",caret:!0,outline:!0,children:[Object(K.jsx)(y.a,{className:"font-small-4 me-50"}),Object(K.jsx)("span",{className:"align-middle",children:r("Export")})]}),Object(K.jsxs)(A.w,{children:[Object(K.jsxs)(A.v,{className:"w-100",onClick:function(){return p(Object(g.getInvoice)({rpt_name:"sample",output_type:"pdf",dataYear:f.dataYear,print:!0,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(K.jsx)(S.a,{className:"font-small-4 me-50"}),Object(K.jsx)("span",{className:"align-middle",children:r("Print")})]}),Object(K.jsxs)(A.v,{className:"w-100",onClick:function(){return p(Object(g.getInvoice)({rpt_name:"sample",output_type:"pdf",dataYear:f.dataYear,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(K.jsx)(_.a,{className:"font-small-4 me-50"}),Object(K.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(K.jsxs)(A.v,{className:"w-100",onClick:function(){return p(Object(g.getInvoice)({rpt_name:"sample",output_type:"xls",dataYear:f.dataYear,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(K.jsx)(D.a,{className:"font-small-4 me-50"}),Object(K.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(K.jsxs)(A.v,{className:"w-100",onClick:function(){return p(Object(g.getInvoice)({rpt_name:"sample",output_type:"csv",dataYear:f.dataYear,as_attachment:!0,par_UNITKEY:139,par_SAMPLE:"ahh...ini adalah sample parameter"}))},children:[Object(K.jsx)(C.a,{className:"font-small-4 me-50"}),Object(K.jsx)("span",{className:"align-middle",children:"CSV"})]})]})]}),u.can("post",sessionStorage.getItem("current_page_perm"))?Object(K.jsxs)(A.i,{className:"add-new-user",color:"primary",onClick:t,children:[r("Add New")," ",r(j.pageTitle)]}):null]})]})]})})};t.default=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e[j.storeName]})),a=Object(h.c)((function(e){return e.apps_app})),l=Object(d.a)().t,g=(Object(o.useContext)(m.a),Object(o.useContext)(L.a).colors),f=Object(o.useState)("desc"),x=Object(i.a)(f,2),w=x[0],y=x[1],S=Object(o.useState)(""),_=Object(i.a)(S,2),D=_[0],C=_[1],M=Object(o.useState)(1),P=Object(i.a)(M,2),F=P[0],B=P[1],E=Object(o.useState)("id"),z=Object(i.a)(E,2),V=z[0],Q=z[1],X=Object(o.useState)(10),Z=Object(i.a)(X,2),$=Z[0],ee=Z[1],te=Object(o.useState)([]),ae=Object(i.a)(te,2),ne=ae[0],ce=ae[1],ie=Object(o.useState)(!1),se=Object(i.a)(ie,2),le=se[0],re=se[1],oe=Object(o.useState)(!1),de=Object(i.a)(oe,2),me=de[0],ue=de[1],be=Object(o.useState)(!1),je=Object(i.a)(be,2),pe=je[0],ge=je[1],he=Object(o.useState)("Please Wait"),fe=Object(i.a)(he,2),Oe=(fe[0],fe[1]),xe=Object(o.useState)(!1),ve=Object(i.a)(xe,2),we=ve[0],Ne=ve[1],ye=Object(o.useState)(null),Se=Object(i.a)(ye,2),_e=Se[0],De=Se[1],Ce=function(t){De("edit"),j.detailFromGrid?(Oe("".concat(l("Loading")," ").concat(l("Detail")," ").concat(l("Data")," ").concat(l(j.pageTitle))),ge(!0),e(Object(j.setDataById)(t)).then((function(){0!==a.data.length||a.isLoading?(ge(!1),Ne(!0)):e(Object(p.getDataList)({})).then((function(e){ge(!1),Ne(!0)}))}))):(Oe("".concat(l("Loading")," ").concat(l("Detail")," ").concat(l("Data")," ").concat(l(j.pageTitle))),ge(!0),e(Object(j.getDataById)(t.id)).then((function(e){"rejected"===e.meta.requestStatus?(ge(!1),Y.b.error(e.payload.message,{style:{padding:"16px",color:g.danger.main,border:"1px solid ".concat(g.danger.main)},iconTheme:{primary:g.danger.main}})):(ge(!1),Ne(!0))})))},ke=function(){ue(!me),Ne(!we),Object(b.M)()},Te=function(){De("add"),ue(!me),Ne(!we),Object(b.F)(ke)},Le=function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.fire({title:"".concat(l("Are you sure?")),text:"".concat(l("You won't be able to revert")," ").concat(l(j.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(l("Yes, Delete")," ").concat(l(j.pageTitle),"!"),cancelButtonText:"".concat(l("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:t.sent.value&&(Oe("".concat(l("Deleting")," Data ").concat(l(j.pageTitle))),ge(!0),e(Object(j.deleteData)(a)).then((function(e){"fulfilled"===e.meta.requestStatus?(ge(!1),Y.b.success("".concat(l("Successfully deleted")," ").concat(l(j.pageTitle)),{style:{padding:"16px",color:g.success.main,border:"1px solid ".concat(g.success.main)},iconTheme:{primary:g.success.main}})):"rejected"===e.meta.requestStatus&&(ge(!1),Y.b.error(e.payload.message,{style:{padding:"16px",color:g.danger.main,border:"1px solid ".concat(g.danger.main)},iconTheme:{primary:g.danger.main}}))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ye=function(){var t=Object(c.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=ne.length,t.next=3,W.fire({title:"".concat(l("Are you sure?")),text:"".concat(l("You will delete")," ").concat(a," ").concat(l("selected data. Deleted data cannot be recovered"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(l("Yes, Delete")," ").concat(a," ").concat(l(j.pageTitle),"!"),cancelButtonText:"".concat(l("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 3:t.sent.value&&(Oe("".concat(l("Deleting")," ").concat(a," Data ").concat(l(j.pageTitle))),ge(!0),n=ne.map((function(e){return e.id})),e(Object(j.deleteSelectedRowData)({id:n})).then((function(e){"fulfilled"===e.meta.requestStatus?(ce([]),re(!le),ge(!1),Y.b.success("".concat(l("Successfully deleted")," ").concat(a," ").concat(l(j.pageTitle)),{style:{padding:"16px",color:g.success.main,border:"1px solid ".concat(g.success.main)},iconTheme:{primary:g.success.main}})):"rejected"===e.meta.requestStatus&&(ge(!1),Y.b.error(e.payload.message,{style:{padding:"16px",color:g.danger.main,border:"1px solid ".concat(g.danger.main)},iconTheme:{primary:g.danger.main}}))})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ae=Object(o.useCallback)(N()((function(t){e(Object(j.getDataList)({sort_dir:w,search:t,sort:V,page:F,length:$}))}),500),[]),Me=Object(o.useCallback)((function(e){ce(e.selectedRows)}),[]),Pe=[].concat(Object(n.a)(t.dynamicColumns.map((function(e){return{name:e.columnName,sortField:e.fieldName,center:!1,sortable:!0,selector:function(t){return t[e.fieldName]},cell:function(t){return function(e,t){var a=e[t.fieldName],n=t.dataFormat;if(n&&n.includes(":")){var c=n.split(":"),i=c[0],s=c[1],l=e[t.fieldName];return"date"===i&&(l=R()(a).format("DD MMM YYYY"),s&&(l=R()(a).format(s))),"datetime"===i&&(l=R()(a).format("DD MMM YYYY HH:mm"),s&&(l=R()(a).format(s))),l}return e[t.fieldName]}(t,e)}}}))),[{name:l("Domain"),center:!1,sortable:!1,selector:function(e){return e.domain},cell:function(e){return Object(K.jsx)("a",{target:"_blank",href:e.domain,title:e.domain,children:e.domain})}},{name:l("App"),center:!1,sortable:!1,selector:function(e){return null===e||void 0===e?void 0:e.app_logo},cell:function(e){var t;return Object(K.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[null!==e&&void 0!==e&&e.app_logo?Object(K.jsx)(U.a,{className:"me-1",img:null===e||void 0===e?void 0:e.app_logo,width:"32",height:"32",imgHeight:"25",imgWidth:"30",color:"light-primary"}):Object(K.jsx)(U.a,{initials:!0,className:"me-1",content:null!==(t=null===e||void 0===e?void 0:e.app_name)&&void 0!==t?t:""}),Object(K.jsx)("div",{className:"d-flex flex-column",children:Object(K.jsx)("span",{className:"fw-bolder",children:e.app_name})})]})}},{name:l("Unit"),center:!1,sortable:!1,selector:function(e){return null===e||void 0===e?void 0:e.unit_logo},cell:function(e){var t;return Object(K.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[null!==e&&void 0!==e&&e.unit_logo?Object(K.jsx)(U.a,{className:"me-1",img:null===e||void 0===e?void 0:e.unit_logo,width:"32",height:"32",imgHeight:"30",imgWidth:"30",color:"light-primary"}):Object(K.jsx)(U.a,{color:"light-primary",initials:!0,className:"me-1",content:null!==(t=null===e||void 0===e?void 0:e.unit_name)&&void 0!==t?t:""}),Object(K.jsx)("div",{className:"d-flex flex-column",children:Object(K.jsx)("span",{className:"fw-bolder",children:null===e||void 0===e?void 0:e.unit_name})})]})}},{name:l("App Alias"),sortField:"attributes",center:!1,sortable:!1,selector:function(e){var t;return null===(t=e.attributes)||void 0===t?void 0:t.app_name_alias},cell:function(e){var t,a,n,c,i;return Object(K.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[null!==(t=e.attributes)&&void 0!==t&&t.app_logo?Object(K.jsx)(U.a,{className:"me-1",img:null===e||void 0===e?void 0:e.app_logo,width:"32",height:"32",imgHeight:"30",imgWidth:"30",color:"light-primary"}):(null===e||void 0===e||null===(a=e.attributes)||void 0===a?void 0:a.app_logo)&&Object(K.jsx)(U.a,{initials:!0,className:"me-1",width:"32",height:"32",imgHeight:"30",imgWidth:"30",color:"light-primary",content:null!==(n=null===e||void 0===e||null===(c=e.attributes)||void 0===c?void 0:c.app_name_alias)&&void 0!==n?n:""}),Object(K.jsx)("div",{className:"d-flex flex-column",children:Object(K.jsx)("span",{className:"fw-bolder",children:null===(i=e.attributes)||void 0===i?void 0:i.app_name_alias})})]})}},{name:l("Description"),sortField:"description",center:!1,sortable:!1,selector:function(e){var t;return null===(t=e.attributes)||void 0===t?void 0:t.app_name_alias},cell:function(e){return e.description}},{name:l("Actions"),center:!0,width:"140px",cell:function(e){return Object(K.jsx)(H.a,{row:e,handleDelete:Le,handleEdit:Ce})}}]),Fe=Object(o.useMemo)((function(){return t.isLoading?Pe.map((function(e){return Object(s.a)(Object(s.a)({name:l(e.name)},e),{},{sortable:!1,cell:function(t){return"Actions"===e.name?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(I.a,{sx:{bgcolor:g.dark.light},animation:"wave",className:"ms-2 me-1",width:30,height:40}),Object(K.jsx)(I.a,{sx:{bgcolor:g.dark.light},animation:"wave",width:30,height:40})]}):Object(K.jsx)(I.a,{sx:{bgcolor:g.dark.light},animation:"wave",width:"100%",height:40})}})})):Pe.map((function(e){return Object(s.a)({name:l(e.name)},e)}))}),[t.isLoading,Pe]);return Object(o.useEffect)((function(){(0===t.data.length||!t.isLoading&&j.getAlwaysGrid)&&(Oe("".concat(l("Loading Data")," ").concat(l(j.pageTitle))),e(Object(j.getDataList)({sort_dir:w,sort:V,search:D,page:F,length:$})))}),[e,t.data.length,w,V,F]),Object(K.jsxs)(o.Fragment,{children:[Object(K.jsx)(T.a,{blocking:pe,loader:Object(K.jsx)(J.b,{}),children:Object(K.jsx)(A.l,{className:"overflow-hidden",children:Object(K.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(K.jsx)(v.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,pagination:!0,paginationServer:!0,paginationTotalRows:t.total,paginationComponent:function(){var a=Number(Math.ceil(t.total/$));return Object(K.jsx)(O.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==F?F-1:0,onPageChange:function(t){return function(t){e(Object(j.getDataList)({sort_dir:w,sort:V,search:D,length:$,page:t.selected+1})),B(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRows:!0,onSelectedRowsChange:Me,selectableRowsHighlight:!0,clearSelectedRows:le,selectableRowsComponent:q,noDataComponent:Object(K.jsx)(J.c,{}),style:{"min-height":"400px"},highlightOnHover:!0,pointerOnHover:!0,columns:Fe,onSort:function(t,a){y(a),Q(t.sortField),e(Object(j.getDataList)({sort_dir:w,sort:V,search:D,page:F,length:$}))},sortIcon:Object(K.jsx)(k.a,{}),className:"react-dataTable",data:function(){var e={search:D},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.isLoading?Array(10).fill({}):t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),subHeaderComponent:Object(K.jsx)(G,{store:t,searchTerm:D,rowsPerPage:$,handleFilter:function(e){C(e),Ae(e)},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(j.getDataList)({sort_dir:w,sort:V,search:D,length:a,page:F})),ee(a)},toggleSidebar:Te,selectedRow:ne,handleDeleteSelected:Ye})})})})}),we&&Object(K.jsx)(u.default,{formState:_e,show:we,setShow:Te,detailPage:!1,setFormState:De})]})}}}]);