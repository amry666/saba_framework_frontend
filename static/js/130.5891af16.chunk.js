(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[130,84,85,86,154,170],{1263:function(e,t,a){!function(e){"use strict";var t="undefined"!==typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},a={weekdays:{shorthand:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],longhand:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],longhand:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},firstDayOfWeek:1,ordinal:function(){return""},time_24hr:!0,rangeSeparator:" - "};t.l10ns.id=a;var n=t.l10ns;e.Indonesian=a,e.default=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)},759:function(e,t,a){"use strict";a.r(t);var n=a(15),c=a(9),s=a(6),o=a(4),r=a(7),l=a.n(r),i=a(2),d=a(81),u=a(42),m=a(370),g=a(11),b=a(360),p=(a(189),a(16)),j=a(169),f=a.n(j),h=a(170),O=a.n(h),x=a(84),v=a.n(x),w=a(240),y=a(64),N=a(756),S=a(34),D=a(25),C=a(5),k=a(36),T=(a(94),a(106),a(43)),_=a.n(T),L=a(49),A=a.n(L),B=a(87),F=a(95),M=a.n(F),R=a(147),P=a(47),Y=a(1294),J=a.n(Y),H=a(1295),q=a.n(H),I=a(0),E=A()(_.a),G=Object(i.forwardRef)((function(e,t){return Object(I.jsx)("div",{className:"form-check",children:Object(I.jsx)(C.B,Object(o.a)({type:"checkbox",ref:t},e))})})),Q=function(e){e.store;var t=e.toggleSidebar,a=e.handlePerPage,n=e.rowsPerPage,c=e.handleFilter,s=e.searchTerm,o=e.selectedRow,r=e.handleDeleteSelected,l=Object(d.a)().t,m=Object(i.useContext)(u.a);Object(p.b)(),Object(p.c)((function(e){return e.invoices})),Object(g.q)();return Object(I.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(I.jsxs)(C.U,{children:[Object(I.jsx)(C.t,{xl:"4",className:"d-flex align-items-center p-0",children:Object(I.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(I.jsx)("label",{htmlFor:"rows-per-page",children:l("Show")}),Object(I.jsxs)(C.B,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:a,style:{width:"5rem"},children:[Object(I.jsx)("option",{value:"10",children:"10"}),Object(I.jsx)("option",{value:"25",children:"25"}),Object(I.jsx)("option",{value:"50",children:"50"})]}),Object(I.jsx)("label",{htmlFor:"rows-per-page",children:l("Entries")})]})}),Object(I.jsxs)(C.t,{xl:"8",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[(null===o||void 0===o?void 0:o.length)>0&&m.can("delete",sessionStorage.getItem("current_page_perm"))?Object(I.jsx)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:Object(I.jsxs)(C.i,{className:"delete-users",color:"danger",onClick:r,children:[l("Delete")," ",o.length," ",l("Selected ".concat(b.pageTitle))]})}):null,Object(I.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(I.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[l("Search"),":"]}),Object(I.jsx)(C.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:s,onChange:function(e){return c(e.target.value)}})]}),Object(I.jsx)("div",{className:"d-flex align-items-center table-header-actions",children:m.can("post",sessionStorage.getItem("current_page_perm"))?Object(I.jsxs)(C.i,{className:"add-new-user",color:"primary",onClick:t,children:[l("Add New")," ",l(b.pageTitle)]}):null})]})]})})};t.default=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e[b.storeName]})),a=Object(d.a)().t,r=(Object(i.useContext)(u.a),Object(i.useContext)(S.a).colors),j=Object(i.useState)("desc"),h=Object(s.a)(j,2),x=h[0],T=h[1],_=Object(i.useState)(""),L=Object(s.a)(_,2),A=L[0],F=L[1],Y=Object(i.useState)(1),H=Object(s.a)(Y,2),W=H[0],Z=H[1],z=Object(i.useState)("id"),V=Object(s.a)(z,2),K=V[0],U=V[1],X=Object(i.useState)(10),$=Object(s.a)(X,2),ee=$[0],te=$[1],ae=Object(i.useState)([]),ne=Object(s.a)(ae,2),ce=ne[0],se=ne[1],oe=Object(i.useState)(!1),re=Object(s.a)(oe,2),le=re[0],ie=re[1],de=Object(i.useState)(!1),ue=Object(s.a)(de,2),me=ue[0],ge=ue[1],be=Object(i.useState)(!1),pe=Object(s.a)(be,2),je=pe[0],fe=pe[1],he=Object(i.useState)("Please Wait"),Oe=Object(s.a)(he,2),xe=(Oe[0],Oe[1]),ve=Object(i.useState)(!1),we=Object(s.a)(ve,2),ye=we[0],Ne=we[1],Se=Object(i.useState)(null),De=Object(s.a)(Se,2),Ce=De[0],ke=De[1],Te=function(t){ke("edit"),b.detailFromGrid?(xe("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(b.pageTitle))),fe(!0),e(Object(b.setDataById)(t)).then((function(){fe(!1),Ne(!0)}))):(xe("".concat(a("Loading")," ").concat(a("Detail")," ").concat(a("Data")," ").concat(a(b.pageTitle))),fe(!0),e(Object(b.getDataById)(t.id)).then((function(e){"rejected"===e.meta.requestStatus?(fe(!1),D.b.error(e.payload.message,{style:{padding:"16px",color:r.danger.main,border:"1px solid ".concat(r.danger.main)},iconTheme:{primary:r.danger.main}})):(fe(!1),Ne(!0))})))},_e=function(){ge(!me),Ne(!ye),Object(g.G)()},Le=function(){ke("add"),ge(!me),Ne(!ye),Object(g.z)(_e)},Ae=function(){var t=Object(c.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You won't be able to revert")," ").concat(a(b.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(a(b.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:t.sent.value&&(xe("".concat(a("Deleting")," Data ").concat(a(b.pageTitle))),fe(!0),e(Object(b.deleteData)(n)).then((function(e){"fulfilled"===e.meta.requestStatus?(fe(!1),D.b.success("".concat(a("Successfully deleted")," ").concat(a(b.pageTitle)),{style:{padding:"16px",color:r.success.main,border:"1px solid ".concat(r.success.main)},iconTheme:{primary:r.success.main}})):"rejected"===e.meta.requestStatus&&(fe(!1),D.b.error(e.payload.message,{style:{padding:"16px",color:r.danger.main,border:"1px solid ".concat(r.danger.main)},iconTheme:{primary:r.danger.main}}))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Be=function(){var t=Object(c.a)(l.a.mark((function t(){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=ce.length,t.next=3,E.fire({title:"".concat(a("Are you sure?")),text:"".concat(a("You will delete")," ").concat(n," ").concat(a("selected data. Deleted data cannot be recovered"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(a("Yes, Delete")," ").concat(n," ").concat(a(b.pageTitle),"!"),cancelButtonText:"".concat(a("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 3:t.sent.value&&(xe("".concat(a("Deleting")," ").concat(n," Data ").concat(a(b.pageTitle))),fe(!0),c=ce.map((function(e){return e.id})),e(Object(b.deleteSelectedRowData)({id:c})).then((function(e){"fulfilled"===e.meta.requestStatus?(se([]),ie(!le),fe(!1),D.b.success("".concat(a("Successfully deleted")," ").concat(n," ").concat(a(b.pageTitle)),{style:{padding:"16px",color:r.success.main,border:"1px solid ".concat(r.success.main)},iconTheme:{primary:r.success.main}})):"rejected"===e.meta.requestStatus&&(fe(!1),D.b.error(e.payload.message,{style:{padding:"16px",color:r.danger.main,border:"1px solid ".concat(r.danger.main)},iconTheme:{primary:r.danger.main}}))})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Fe=Object(i.useCallback)(v()((function(t){e(Object(b.getDataList)({sort_dir:x,search:t,sort:K,page:W,length:ee}))}),500),[]),Me=Object(i.useCallback)((function(e){se(e.selectedRows)}),[]),Re={python:"https://logos-download.com/wp-content/uploads/2016/10/Python_logo_wordmark.png",javascript:"https://javascriptsu.files.wordpress.com/2020/12/js.jpg",react:"https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",angular:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgREvN-e1uVZXVDc2w_zLeey0Li4buQ26gF0ZmCYxaBMoybo4uQTncS3Z5WxHRyZNfA&usqp=CAU",flask:"https://miro.medium.com/max/1079/1*nvtdCw77Al6LgV8wt_ma6Q.png"},Pe=[{name:a("App Name"),sortField:"name",center:!1,sortable:!0,selector:function(e){return e.name},cell:function(e){var t,a;return Object(I.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[null!==(t=e.logo)&&void 0!==t&&t.appLogo?Object(I.jsx)(k.a,{className:"me-1",img:null===e||void 0===e||null===(a=e.logo)||void 0===a?void 0:a.appLogo,width:"32",height:"32",imgHeight:"25",imgWidth:"30",color:"light-primary"}):e.is_uploading?Object(I.jsx)(N.a,{size:"sm",color:"primary"}):Object(I.jsx)(k.a,{initials:!0,className:"me-1",color:"light-primary",content:e.name||"John Doe"}),Object(I.jsxs)("div",{className:"d-flex flex-column",children:[Object(I.jsx)("span",{className:"fw-bolder",children:e.name}),Object(I.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.code})]})]})}},{name:a("App Type"),center:!1,sortable:!1,selector:function(e){return e.info.appType},cell:function(e){var t,a;return Object(I.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:["service"===(null===e||void 0===e||null===(t=e.info)||void 0===t?void 0:t.appType)?Object(I.jsx)(J.a,{className:"me-1",sixe:32}):Object(I.jsx)(q.a,{className:"me-1",sixe:32}),Object(I.jsx)("div",{className:"d-flex flex-column",children:Object(I.jsx)("span",{className:"fw-bolder",children:null===e||void 0===e||null===(a=e.info)||void 0===a?void 0:a.appType})})]})}},{name:a("Framework"),center:!1,sortable:!1,selector:function(e){return e.info.programming_language.main_language},cell:function(e){var t,a,n,c,s,o,r,l;return Object(I.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[Re[null===e||void 0===e||null===(t=e.info)||void 0===t||null===(a=t.programming_language)||void 0===a?void 0:a.main_language]&&Object(I.jsx)("img",{className:"me-1",src:Re[null===e||void 0===e||null===(n=e.info)||void 0===n||null===(c=n.programming_language)||void 0===c?void 0:c.main_language],height:"18"}),Re[null===e||void 0===e||null===(s=e.info)||void 0===s||null===(o=s.programming_language)||void 0===o?void 0:o.framework]&&Object(I.jsx)("img",{className:"me-1",src:Re[null===e||void 0===e||null===(r=e.info)||void 0===r||null===(l=r.programming_language)||void 0===l?void 0:l.framework],height:"18"})]})}}].concat(Object(n.a)(t.dynamicColumns.map((function(e){return{name:e.columnName,sortField:e.fieldName,center:!1,sortable:!0,selector:function(t){return t[e.fieldName]},cell:function(t){return function(e,t){var a=e[t.fieldName],n=t.dataFormat;if(n&&n.includes(":")){var c=n.split(":"),s=c[0],o=c[1],r=e[t.fieldName];return"date"===s&&(r=M()(a).format("DD MMM YYYY"),o&&(r=M()(a).format(o))),"datetime"===s&&(r=M()(a).format("DD MMM YYYY HH:mm"),o&&(r=M()(a).format(o))),r}return e[t.fieldName]}(t,e)}}}))),[{name:a("Actions"),center:!0,width:"140px",cell:function(e){return Object(I.jsx)(R.a,{row:e,handleDelete:Ae,handleEdit:Te,storeName:b.storeName})}}]),Ye=Object(i.useMemo)((function(){return t.isLoading?Pe.map((function(e){return Object(o.a)(Object(o.a)({name:a(e.name)},e),{},{sortable:!1,cell:function(t){return Object(I.jsx)(B.a,{sx:{bgcolor:r.dark.light},animation:"wave",className:"Actions"===e.name?"ms-2":"",width:"Actions"===e.name?10:"100%",height:40})}})})):Pe.map((function(e){return Object(o.a)({name:a(e.name)},e)}))}),[t.isLoading,Pe]);return Object(i.useEffect)((function(){(0===t.data.length||!t.isLoading&&b.getAlwaysGrid)&&(xe("".concat(a("Loading Data")," ").concat(a(b.pageTitle))),e(Object(b.getDataList)({sort_dir:x,sort:K,search:A,page:W,length:ee})))}),[e,t.data.length,x,K,W]),Object(I.jsxs)(i.Fragment,{children:[Object(I.jsx)(y.a,{blocking:je,loader:Object(I.jsx)(P.b,{}),children:Object(I.jsx)(C.l,{className:"overflow-hidden",children:Object(I.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(I.jsx)(O.a,{noHeader:!0,subHeader:!0,sortServer:!0,responsive:!0,pagination:!0,paginationServer:!0,paginationTotalRows:t.total,paginationComponent:function(){var a=Number(Math.ceil(t.total/ee));return Object(I.jsx)(f.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==W?W-1:0,onPageChange:function(t){return function(t){e(Object(b.getDataList)({sort_dir:x,sort:K,search:A,length:ee,page:t.selected+1})),Z(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRows:!0,onSelectedRowsChange:Me,selectableRowsHighlight:!0,clearSelectedRows:le,selectableRowsComponent:G,noDataComponent:Object(I.jsx)(P.c,{}),style:{"min-height":"400px"},highlightOnHover:!0,pointerOnHover:!0,columns:Ye,onSort:function(t,a){T(a),U(t.sortField),e(Object(b.getDataList)({sort_dir:x,sort:K,search:A,page:W,length:ee}))},sortIcon:Object(I.jsx)(w.a,{}),className:"react-dataTable",data:function(){var e={search:A},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.isLoading?Array(10).fill({}):t.data.length>0?t.data:0===t.data.length&&a?[]:void 0}(),subHeaderComponent:Object(I.jsx)(Q,{store:t,searchTerm:A,rowsPerPage:ee,handleFilter:function(e){F(e),Fe(e)},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(b.getDataList)({sort_dir:x,sort:K,search:A,length:a,page:W})),te(a)},toggleSidebar:Le,selectedRow:ce,handleDeleteSelected:Be})})})})}),ye&&Object(I.jsx)(m.default,{formState:Ce,show:ye,setShow:Le,detailPage:!1,setFormState:ke})]})}}}]);
//# sourceMappingURL=130.5891af16.chunk.js.map