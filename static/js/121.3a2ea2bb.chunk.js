(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[121,23,73],{358:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return s})),a.d(t,"storeName",(function(){return l})),a.d(t,"endpointName",(function(){return u})),a.d(t,"serverSideGrid",(function(){return p})),a.d(t,"detailFromGrid",(function(){return f})),a.d(t,"getAlwaysGrid",(function(){return m})),a.d(t,"getApiAfterPut",(function(){return b})),a.d(t,"getApiAfterPost",(function(){return j})),a.d(t,"getApiAfterDelete",(function(){return g})),a.d(t,"getApiSummaryData",(function(){return h})),a.d(t,"detailPage",(function(){return O})),a.d(t,"deleteSelection",(function(){return v})),a.d(t,"disabledAction",(function(){return y})),a.d(t,"isManyToManyGrid",(function(){return x})),a.d(t,"storeToRefreshAfterAll",(function(){return D})),a.d(t,"isTreeLayout",(function(){return S})),a.d(t,"dynamicColumns",(function(){return N})),a.d(t,"dynamicColumnsFilter",(function(){return _})),a.d(t,"dynamicForm",(function(){return k})),a.d(t,"extraCrud",(function(){return C})),a.d(t,"getSummaryData",(function(){return L})),a.d(t,"getDataList",(function(){return w})),a.d(t,"setDataList",(function(){return A})),a.d(t,"getDataById",(function(){return M})),a.d(t,"resetSelectedData",(function(){return T})),a.d(t,"postData",(function(){return E})),a.d(t,"putData",(function(){return F})),a.d(t,"deleteData",(function(){return I})),a.d(t,"deleteSelectedRowData",(function(){return V})),a.d(t,"setDataById",(function(){return B})),a.d(t,"StoreSlice",(function(){return G}));var n=a(9),r=a(7),c=a.n(r),i=a(18),d=a(56),o=a(44).a.ssoAxiosInterceptor,s="Endpoint",l="apps_endpoint",u="api/endpoint",p=!0,f=!0,m=!1,b=!0,j=!0,g=!0,h=!1,O=!0,v=!1,y=[],x=!0,D=[],S=!1,N=[{columnName:"Url",fieldName:"url_path",minWidth:"350px"}],_=[{filterLabel:"App",fieldName:"id_app"}],k=[{fieldName:"url_path",fieldLabel:"Url",type:"text",required:!0},{fieldName:"id_app",fieldLabel:"App",type:"dropdown",required:!0,datafromStore:"app"}],C=[],L=Object(i.b)("".concat(u,"/getSummaryData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,o.get("/".concat(u,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(i.b)("".concat(u,"/getDataList"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,o.get("/".concat(u),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(i.b)("".concat(u,"/setDataList"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),M=Object(i.b)("".concat(u,"/getDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,o.get("/".concat(u,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),T=Object(i.b)("".concat(u,"/resetSelectedData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=Object(i.b)("".concat(u,"/postData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,e.prev=1,e.next=4,o.post("/".concat(u),t);case 4:return s=e.sent,n(T({})),j&&n(w(r()[l].params)),n(Object(d.resetData)({})),e.abrupt("return",s.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",i(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),F=Object(i.b)("".concat(u,"/putData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,s,p,f,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,i=a.getState,s=a.rejectWithValue,p=null!==(n=t.id)&&void 0!==n?n:i()[l].selectedData.id,(f=t.notReload)&&delete t.notReload,e.prev=4,e.next=7,o.put("/".concat(u,"/").concat(p),t);case 7:if(m=e.sent,r(T({})),!b||f){e.next=13;break}return e.next=12,r(w(i()[l].params));case 12:h&&r(L({}));case 13:return r(Object(d.resetData)({})),e.abrupt("return",m.data);case 17:return e.prev=17,e.t0=e.catch(4),e.abrupt("return",s(e.t0.response.data));case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t,a){return e.apply(this,arguments)}}()),I=Object(i.b)("".concat(u,"/deleteData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,e.prev=1,e.next=4,o.delete("/".concat(u,"/").concat(t));case 4:if(s=e.sent,!g){e.next=9;break}return e.next=8,n(w(r()[l].params));case 8:h&&n(L({}));case 9:return n(Object(d.resetData)({})),e.abrupt("return",s.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",i(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),V=Object(i.b)("".concat(u,"/deleteSelectedRowData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,e.prev=1,e.next=4,o.delete("/".concat(u),{data:t});case 4:if(s=e.sent,!g){e.next=9;break}return e.next=8,n(w(r()[l].params));case 8:h&&n(L({}));case 9:return n(Object(d.resetData)({})),e.abrupt("return",s.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",i(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),B=Object(i.b)("".concat(u,"/setDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),G=Object(i.c)({name:l,initialState:{pageTitle:s,dynamicColumns:N,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(L.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(L.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(L.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(w.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(w.fulfilled,(function(e,t){e.data=t.payload.data,e.params=t.payload.params,e.total=t.payload.total,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:e.title}})),e.status="succeeded",e.isLoading=!1})).addCase(w.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(F.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(F.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(F.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(E.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(E.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(I.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(I.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(I.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(V.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(V.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(V.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(M.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(M.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(M.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(T.rejected,(function(e){e.selectedData=null})).addCase(A.rejected,(function(e,t){e.data=t.payload})).addCase(B.rejected,(function(e,t){e.selectedData=t.payload}))}});t.default=G.reducer},361:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(4),c=a(6),i=a(2),d=a(33),o=a(24),s=(a(169),a(5)),l=a(78),u=a(63),p=a(256),f=(a(114),a(34)),m=a(13),b=(a(135),a(145),a(1255),a(46)),j=a(358),g=a(16),h=a(0);t.default=function(e){var t=e.show,O=e.setShow,v=e.detailPage,y=e.formState,x=e.setFormState,D=e.currentData,S=void 0===D?null:D,N=Object(l.a)().t,_=Object(d.g)().id,k=Object(g.b)(),C=Object(g.c)((function(e){return e[j.storeName]})),L=Object(i.useContext)(f.a).colors,w=Object(i.useState)("Please Wait"),A=Object(c.a)(w,2),M=A[0],T=A[1],E=Object(g.c)((function(e){return e})),F=Object(i.useState)({}),I=Object(c.a)(F,2),V=I[0],B=I[1],G=Object(i.useState)({}),W=Object(c.a)(G,2),q=W[0],P=(W[1],Object(i.useState)({})),R=Object(c.a)(P,2),J=R[0],z=R[1],U=Object(b.e)({}),Y=(U.control,U.setError),Z=U.handleSubmit,Q=(U.formState.errors,function(){return Object(h.jsxs)(i.Fragment,{children:[Object(h.jsx)(p.a,{}),Object(h.jsxs)(s.r,{className:"mb-0 mt-1",children:[N(M),"..."]})]})}),H=function(){k(Object(j.resetSelectedData)())},K=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(a)if(q[t]){var c=q[t].indexOf(e);-1!==c?q[t].splice(c,1):q[t].push(e)}else q[t]=[e];else q[t]=e;z(Object(r.a)(Object(r.a)({},J),{},Object(n.a)({},t,!1)))};return Object(i.useEffect)((function(){for(var e={},t=j.dynamicForm,n=function(n){var r=t[n].fieldName,c=t[n].fieldLabel,d=t[n].fieldName.replaceAll("id_","");if(q[r]=null,J[r]=!1,"dropdown"===t[n].type||"table"===t[n].type){var o,l,u,p,f,m=Object(i.lazy)((function(){return a(1259)("./".concat(d))}));e["".concat(d,"_comp")]=Object(h.jsxs)(i.Fragment,{children:[Object(h.jsx)(s.E,{className:"form-label",for:r,children:N(null!==c&&void 0!==c?c:"")}),Object(h.jsx)(m,{lookupMode:!0,lookupMode_fieldName:r,lookupMode_dropdown:"dropdown"===t[n].type,lookupMode_isMulti:null!==(o=t[n].isMultiSelection)&&void 0!==o&&o,lookupMode_onChange:K,lookupMode_defaultValue:null!==(l=t[n])&&void 0!==l&&l.isM2MDefValFromGrid?E[j.storeName].data.map((function(e){return e[r]})):null!==(u=E[j.storeName])&&void 0!==u&&u.selectedData?E[j.storeName].selectedData[r]:"",lookupMode_isM2MDefValFromGrid:null!==(p=null===(f=t[n])||void 0===f?void 0:f.isM2MDefValFromGrid)&&void 0!==p&&p},"dynInput_".concat(r))]})}else{var b,g;e["".concat(d,"_comp")]=Object(h.jsxs)(i.Fragment,{children:[Object(h.jsx)(s.E,{className:"form-label",for:r,children:N(null!==c&&void 0!==c?c:"")}),Object(h.jsx)(s.B,{defaultValue:null!==(b=t[n])&&void 0!==b&&b.isM2MDefValFromGrid?E[j.storeName].data.map((function(e){return e[r]})):null!==(g=E[j.storeName])&&void 0!==g&&g.selectedData?E[j.storeName].selectedData[r]:"",onChange:function(e){var a;return K(e.target.value,r,null!==(a=t[n].isMultiSelection)&&void 0!==a&&a)},id:"dynInput_".concat(r)},"dynInput_".concat(r))]})}},r=0;r<t.length;r++)n(r);B(e)}),[]),Object(h.jsx)(s.G,{isOpen:t,toggle:function(){H(),O(!t)},className:"modal-dialog-centered modal-lg",children:Object(h.jsxs)(u.a,{blocking:C.isLoadingAddEdit||C.isLoadingDetail,loader:Object(h.jsx)(Q,{}),children:[Object(h.jsx)(s.J,{className:"bg-transparent",toggle:function(){H(),O(!t)}}),Object(h.jsxs)(s.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(h.jsxs)("div",{className:"text-center mb-2",children:[Object(h.jsxs)("h2",{className:"mb-1",children:[N("edit"===y?"Edit":"Add Sub")," ",N(j.pageTitle)]}),Object(h.jsxs)("p",{className:"mb-1",children:[N("Child for ")," ",S?N(S.title):""]})]}),Object(h.jsx)(s.y,{onSubmit:Z("edit"===y?function(){if(function(e){if("edit"===y){var t=Object(r.a)({},Object(m.I)(E[j.storeName].selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(Object(m.I)(t))!==JSON.stringify(Object(m.I)(e))}return!0}(q))if(Object.values(data).every((function(e){return null!==e&&""!==e})))T("".concat(N("Updating")," ").concat(N(j.pageTitle)," ").concat(N("Detail")," Data")),k(Object(j.putData)(data)).then((function(e){"fulfilled"===e.meta.requestStatus?(O(!t),o.b.success("".concat(N("Successfully Updated")," ").concat(N(j.pageTitle)),{style:{padding:"16px",color:L.success.main,border:"1px solid ".concat(L.success.main)},iconTheme:{primary:L.success.main}}),v&&k(Object(j.getDataById)(_))):"rejected"===e.meta.requestStatus&&o.b.error(e.payload.message,{style:{padding:"16px",color:L.danger.main,border:"1px solid ".concat(L.danger.main)},iconTheme:{primary:L.danger.main}})}));else for(var e in data){var a;0===(null===(a=data[e])||void 0===a?void 0:a.length)&&Y(e,{type:"manual"})}else Object(o.b)("".concat(N("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(){if(Object.values(q).every((function(e){return null!==e&&""!==e})))T("".concat(N("Creating a New ".concat(j.pageTitle)))),k(Object(j.postData)(q)).then((function(e){"fulfilled"===e.meta.requestStatus?(O(!t),o.b.success("".concat(N("Successfully Created")," ").concat(N(j.pageTitle)),{style:{padding:"16px",color:L.success.main,border:"1px solid ".concat(L.success.main)},iconTheme:{primary:L.success.main}}),v&&k(Object(j.getDataById)(_))):"rejected"===e.meta.requestStatus&&o.b.error(e.payload.message,{style:{padding:"16px",color:L.danger.main,border:"1px solid ".concat(L.danger.main)},iconTheme:{primary:L.danger.main}})}));else{var e=Object.assign({},J);for(var a in q){var n;null!==q[a]&&0!==(null===(n=q[a])||void 0===n?void 0:n.length)||(e[a]=!0)}z(e)}}),children:Object(h.jsxs)(s.S,{className:"gy-1 pt-75",children:[j.dynamicForm.map((function(e,t){var a,n,r=e.fieldName.replaceAll("id_","");return["dropdown","table"].includes(e.type)?"table"===e.type?Object(h.jsx)(s.t,{md:12,xs:12,children:Object(h.jsx)(i.Suspense,{fallback:Object(h.jsx)("div",{children:"Loading..."}),children:Object(h.jsxs)("div",{className:J[e.fieldName]?"dynamicForm_input dynamicForm_input_invalid":"dynamicForm_input",children:[V["".concat(r,"_comp")],(null===e||void 0===e?void 0:e.isM2MDefValFromGrid)&&q[e.fieldName]&&Object(h.jsxs)("div",{style:{textAlign:"right"},className:"text-primary",children:[null===(a=q[e.fieldName])||void 0===a?void 0:a.length," ",N(e.fieldLabel)," ",N("Selected")]})]})})},r):Object(h.jsx)(s.t,{md:12,xs:12,children:Object(h.jsx)(i.Suspense,{fallback:Object(h.jsx)("div",{children:"Loading..."}),children:Object(h.jsxs)("div",{className:J[e.fieldName]?"dynamicForm_input_invalid":"",children:[V["".concat(r,"_comp")],(null===e||void 0===e?void 0:e.isM2MDefValFromGrid)&&q[e.fieldName]&&Object(h.jsxs)("div",{style:{textAlign:"right"},className:"text-primary",children:[null===(n=q[e.fieldName])||void 0===n?void 0:n.length," ",N(e.fieldLabel)," ",N("Selected")]})]})})},r):Object(h.jsx)(s.t,{md:12,xs:12,children:Object(h.jsx)("div",{className:J[e.fieldName]?"dynamicForm_input_invalid":"",children:V["".concat(r,"_comp")]})},r)})),Object(h.jsxs)(s.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(h.jsx)(s.i,{type:"submit",className:"me-1",color:"primary",children:N("Submit")}),Object(h.jsx)(s.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){H(),x("add"),O(!1)},children:N("Cancel")})]})]})})]})]})})}},756:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(6),c=a(7),i=a.n(c),d=a(2),o=a(78),s=a(42),l=a(361),u=a(13),p=a(358),f=(a(190),a(16)),m=(a(170),a(171),a(84),a(241)),b=a(316),j=a(320),g=a(63),h=(a(256),a(34)),O=a(24),v=a(5),y=a(43),x=a.n(y),D=a(49),S=a.n(D),N=(a(94),a(103),a(221)),_=a(47),k=a(0),C=S()(x.a);t.default=function(e){var t=e.searchString,a=e.lookupMode,c=e.lookupMode_fieldName,y=e.lookupMode_defaultValue,x=e.lookupMode_onChange,D=e.lookupMode_isMulti,S=e.lookupMode_isM2MDefValFromGrid,L=Object(f.b)(),w=Object(f.c)((function(e){return e[p.storeName]})),A=Object(o.a)().t,M=Object(d.useState)(!1),T=Object(r.a)(M,2),E=T[0],F=T[1],I=Object(d.useContext)(s.a),V=Object(d.useState)(!1),B=Object(r.a)(V,2),G=(B[0],B[1]),W=Object(d.useState)("Please Wait"),q=Object(r.a)(W,2),P=(q[0],q[1]),R=Object(d.useState)(!1),J=Object(r.a)(R,2),z=J[0],U=J[1],Y=Object(d.useState)(null),Z=Object(r.a)(Y,2),Q=Z[0],H=Z[1],K=Object(d.useState)(null),X=Object(r.a)(K,2),$=X[0],ee=X[1],te=Object(d.useState)(0),ae=Object(r.a)(te,2),ne=ae[0],re=ae[1],ce=Object(d.useState)(null),ie=Object(r.a)(ce,2),de=(ie[0],ie[1]),oe=Object(d.useContext)(h.a).colors,se=function(){var e=Object(n.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.fire({title:"".concat(A("Are you sure?")),text:"".concat(A("You won't be able to revert")," ").concat(A(p.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(A("Yes, Delete")," ").concat(A(p.pageTitle),"!"),cancelButtonText:"".concat(A("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:e.sent.value&&(P("".concat(A("Deleting")," Data ").concat(A(p.pageTitle))),G(!0),L(Object(p.deleteData)(t)).then((function(e){"fulfilled"===e.meta.requestStatus?(G(!1),O.b.success("".concat(A("Successfully deleted")," ").concat(A(p.pageTitle)),{style:{padding:"16px",color:oe.success.main,border:"1px solid ".concat(oe.success.main)},iconTheme:{primary:oe.success.main}})):"rejected"===e.meta.requestStatus&&(G(!1),O.b.error(e.payload.message,{style:{padding:"16px",color:oe.danger.main,border:"1px solid ".concat(oe.danger.main)},iconTheme:{primary:oe.danger.main}}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;ee(e),H("add"),F(!E),U(!z),Object(u.z)(ue)},ue=function(){F(!E),U(!z),Object(u.G)()},pe=function(e){L(Object(p.setDataList)(e))},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];P("".concat(A("Updating")," ").concat(A(p.pageTitle)," Data")),t&&(e.notReload=!0);var a=e.title;L(Object(p.putData)(e,t)).then((function(e){"fulfilled"===e.meta.requestStatus?O.b.success("".concat(A("Successfully Updated")," ").concat(A(p.pageTitle)," ").concat(a),{style:{padding:"16px",color:oe.success.main,border:"1px solid ".concat(oe.success.main)},iconTheme:{primary:oe.success.main}}):"rejected"===e.meta.requestStatus&&O.b.error(e.payload.message,{style:{padding:"16px",color:oe.danger.main,border:"1px solid ".concat(oe.danger.main)},iconTheme:{primary:oe.danger.main}})}))},me=function(e,t){var a=JSON.parse(JSON.stringify(t));a.forEach((function t(a){e.includes(a.id)&&(a.checked=!0,a.hidden=!0),Array.isArray(a.children)&&a.children.forEach(t)})),L(Object(p.setDataList)(a))};return Object(d.useEffect)((function(){(0===w.data.length||!w.isLoading&&p.getAlwaysGrid)&&(P("".concat(A("Loading Data")," ").concat(A(p.pageTitle))),L(Object(p.getDataList)({})).then((function(e){a&&S&&me(y,e.payload.data)}))),w.data.length>0&&S&&a&&me(y,w.data)}),[L,w.data.length]),Object(k.jsxs)(d.Fragment,{children:[Object(k.jsx)(g.a,{blocking:w.isLoading,loader:Object(k.jsx)(_.b,{}),children:Object(k.jsx)(v.l,{className:"overflow-hidden",children:Object(k.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(k.jsx)("div",{style:{height:a?350:800,margin:a?10:20},children:Object(k.jsx)(N.a,{treeData:w.data,onChange:pe,onMoveNode:a?null:function(e){e.treeData;var t=e.node,a=e.nextParentNode,n=(e.prevPath,e.prevTreeIndex,e.nextPath,e.nextTreeIndex,{id:t.id,title:t.title,parent_id:a.is_app_header?null:a.id});fe(n,!0)},canDrag:!a&&function(e){return!e.node.is_app_header},searchMethod:function(e){var t=e.node,a=e.searchQuery;return a&&t.title.toLowerCase().indexOf(a.toLowerCase())>-1},searchQuery:t,searchFocusOffset:ne,searchFinishCallback:function(e){de(e.length),re(e.length>0?ne%e.length:0)},maxDepth:4,generateNodeProps:function(e){var t=e.node;e.path;return{style:{fontSize:t.is_app_header?"16px":"14px",fontWeight:t.is_app_header?"bold":"normal"},title:t.icon?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{style:{paddingLeft:t.is_app_header?0:10,fontWeight:t.is_app_header?"bold":400},children:t.title})}):Object(k.jsx)("div",{style:{fontWeight:t.is_app_header?"bold":400},children:t.title}),buttons:[I.can("post",sessionStorage.getItem("current_page_perm"))&&!a?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-primary",id:"btn-edit",onClick:function(e){le(t)},children:Object(k.jsx)(m.a,{size:16})}),Object(k.jsx)(v.Z,{placement:"left",target:"btn-edit",children:A("Add Child")})]}):null,!I.can("update",sessionStorage.getItem("current_page_perm"))||a||t.is_app_header?null:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-info",id:"btn-edit",onClick:function(e){var a;e.preventDefault(),a=t,H("edit"),p.detailFromGrid?(P("".concat(A("Loading")," ").concat(A("Detail")," ").concat(A("Data")," ").concat(A(p.pageTitle))),G(!0),L(Object(p.setDataById)(a)).then((function(){G(!1),U(!0)}))):(P("".concat(A("Loading")," ").concat(A("Detail")," ").concat(A("Data")," ").concat(A(p.pageTitle))),G(!0),L(Object(p.getDataById)(a.id)).then((function(e){"rejected"===e.meta.requestStatus?(G(!1),O.b.error(e.payload.message,{style:{padding:"16px",color:oe.danger.main,border:"1px solid ".concat(oe.danger.main)},iconTheme:{primary:oe.danger.main}})):(G(!1),U(!0))})))},children:Object(k.jsx)(b.a,{size:16})}),Object(k.jsx)(v.Z,{placement:"left",target:"btn-edit",children:A("Edit")})]}),!I.can("delete",sessionStorage.getItem("current_page_perm"))||a||t.is_app_header?null:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.i.Ripple,{id:"btn-delete",className:"btn-icon rounded-circle",color:"flat-danger",onClick:function(e){e.preventDefault(),se(t.id)},children:Object(k.jsx)(j.a,{size:16})}),Object(k.jsx)(v.Z,{placement:"left",target:"btn-delete",children:A("Delete")})]}),a&&!t.is_app_header?Object(k.jsx)("div",{className:t.hidden?"form-check form-check-secondary":"form-check form-check-primary",children:Object(k.jsx)(v.B,{disabled:t.hidden,defaultChecked:t.checked,onChange:function(e){return function(e,t,a,n){var r=JSON.parse(JSON.stringify(w.data));return r.forEach((function a(n){n.id===t&&(n.checked=e.target.checked),Array.isArray(n.children)&&n.children.forEach(a)})),pe(r),x(t,a,n)}(e,t.id,c,D)},type:"checkbox",id:"checkbox-".concat(t.id)})}):null]}}})})})})}),z&&Object(k.jsx)(l.default,{formState:Q,show:z,setShow:le,detailPage:!1,setFormState:H,currentData:$})]})}}}]);
//# sourceMappingURL=121.3a2ea2bb.chunk.js.map