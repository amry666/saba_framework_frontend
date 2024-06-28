(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[73,23],{362:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"storeName",(function(){return u})),a.d(t,"endpointName",(function(){return l})),a.d(t,"serverSideGrid",(function(){return p})),a.d(t,"detailFromGrid",(function(){return f})),a.d(t,"getAlwaysGrid",(function(){return m})),a.d(t,"getApiAfterPut",(function(){return b})),a.d(t,"getApiAfterPost",(function(){return j})),a.d(t,"getApiAfterDelete",(function(){return g})),a.d(t,"getApiSummaryData",(function(){return v})),a.d(t,"detailPage",(function(){return y})),a.d(t,"deleteSelection",(function(){return h})),a.d(t,"disabledAction",(function(){return O})),a.d(t,"isManyToManyGrid",(function(){return x})),a.d(t,"storeToRefreshAfterAll",(function(){return D})),a.d(t,"isTreeLayout",(function(){return S})),a.d(t,"dynamicColumns",(function(){return N})),a.d(t,"dynamicColumnsFilter",(function(){return L})),a.d(t,"dynamicForm",(function(){return w})),a.d(t,"extraCrud",(function(){return A})),a.d(t,"getSummaryData",(function(){return C})),a.d(t,"getDataList",(function(){return k})),a.d(t,"setDataList",(function(){return _})),a.d(t,"getDataById",(function(){return E})),a.d(t,"resetSelectedData",(function(){return M})),a.d(t,"postData",(function(){return F})),a.d(t,"putData",(function(){return V})),a.d(t,"deleteData",(function(){return T})),a.d(t,"deleteSelectedRowData",(function(){return I})),a.d(t,"setDataById",(function(){return G})),a.d(t,"StoreSlice",(function(){return W}));var n=a(9),r=a(7),c=a.n(r),i=a(18),d=a(57),s=a(44).a.ssoAxiosInterceptor,o="Endpoint",u="apps_endpoint",l="api/endpoint",p=!0,f=!0,m=!1,b=!0,j=!0,g=!0,v=!1,y=!0,h=!1,O=[],x=!0,D=[],S=!1,N=[{columnName:"Url",fieldName:"url_path",minWidth:"350px"}],L=[{filterLabel:"App",fieldName:"id_app"}],w=[{fieldName:"url_path",fieldLabel:"Url",type:"text",required:!0},{fieldName:"id_app",fieldLabel:"App",type:"dropdown",required:!0,datafromStore:"app"}],A=[],C=Object(i.b)("".concat(l,"/getSummaryData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,s.get("/".concat(l,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k=Object(i.b)("".concat(l,"/getDataList"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,s.get("/".concat(l),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),_=Object(i.b)("".concat(l,"/setDataList"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(i.b)("".concat(l,"/getDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,s.get("/".concat(l,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),M=Object(i.b)("".concat(l,"/resetSelectedData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F=Object(i.b)("".concat(l,"/postData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,e.prev=1,e.next=4,s.post("/".concat(l),t);case 4:return o=e.sent,n(M({})),j&&n(k(r()[u].params)),n(Object(d.resetData)({})),e.abrupt("return",o.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",i(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),V=Object(i.b)("".concat(l,"/putData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,o,p,f,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,i=a.getState,o=a.rejectWithValue,p=null!==(n=t.id)&&void 0!==n?n:i()[u].selectedData.id,(f=t.notReload)&&delete t.notReload,e.prev=4,e.next=7,s.put("/".concat(l,"/").concat(p),t);case 7:if(m=e.sent,r(M({})),!b||f){e.next=13;break}return e.next=12,r(k(i()[u].params));case 12:v&&r(C({}));case 13:return r(Object(d.resetData)({})),e.abrupt("return",m.data);case 17:return e.prev=17,e.t0=e.catch(4),e.abrupt("return",o(e.t0.response.data));case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t,a){return e.apply(this,arguments)}}()),T=Object(i.b)("".concat(l,"/deleteData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,e.prev=1,e.next=4,s.delete("/".concat(l,"/").concat(t));case 4:if(o=e.sent,!g){e.next=9;break}return e.next=8,n(k(r()[u].params));case 8:v&&n(C({}));case 9:return n(Object(d.resetData)({})),e.abrupt("return",o.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",i(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),I=Object(i.b)("".concat(l,"/deleteSelectedRowData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,i=a.rejectWithValue,e.prev=1,e.next=4,s.delete("/".concat(l),{data:t});case 4:if(o=e.sent,!g){e.next=9;break}return e.next=8,n(k(r()[u].params));case 8:v&&n(C({}));case 9:return n(Object(d.resetData)({})),e.abrupt("return",o.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",i(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),G=Object(i.b)("".concat(l,"/setDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),W=Object(i.c)({name:u,initialState:{pageTitle:o,dynamicColumns:N,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(C.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(C.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(C.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(k.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(k.fulfilled,(function(e,t){e.data=t.payload.data,e.params=t.payload.params,e.total=t.payload.total,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:e.title}})),e.status="succeeded",e.isLoading=!1})).addCase(k.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(V.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(V.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(V.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(F.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(F.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(F.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(T.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(T.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(T.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(I.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(I.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(I.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(E.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(E.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(M.rejected,(function(e){e.selectedData=null})).addCase(_.rejected,(function(e,t){e.data=t.payload})).addCase(G.rejected,(function(e,t){e.selectedData=t.payload}))}});t.default=W.reducer},365:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(4),c=a(6),i=a(2),d=a(33),s=a(25),o=(a(168),a(5)),u=a(81),l=a(64),p=a(755),f=(a(102),a(34)),m=a(11),b=(a(137),a(145),a(1262),a(46)),j=a(362),g=a(16),v=a(0);t.default=function(e){var t=e.show,y=e.setShow,h=e.detailPage,O=e.formState,x=e.setFormState,D=e.currentData,S=void 0===D?null:D,N=Object(u.a)().t,L=Object(d.g)().id,w=Object(g.b)(),A=Object(g.c)((function(e){return e[j.storeName]})),C=Object(i.useContext)(f.a).colors,k=Object(i.useState)("Please Wait"),_=Object(c.a)(k,2),E=_[0],M=_[1],F=Object(g.c)((function(e){return e})),V=Object(i.useState)({}),T=Object(c.a)(V,2),I=T[0],G=T[1],W=Object(i.useState)({}),B=Object(c.a)(W,2),q=B[0],R=(B[1],Object(i.useState)({})),J=Object(c.a)(R,2),P=J[0],U=J[1],z=Object(b.e)({}),H=(z.control,z.setError),Y=z.handleSubmit,K=(z.formState.errors,function(){return Object(v.jsxs)(i.Fragment,{children:[Object(v.jsx)(p.a,{}),Object(v.jsxs)(o.r,{className:"mb-0 mt-1",children:[N(E),"..."]})]})}),Q=function(){w(Object(j.resetSelectedData)())},X=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(a)if(q[t]){var c=q[t].indexOf(e);-1!==c?q[t].splice(c,1):q[t].push(e)}else q[t]=[e];else q[t]=e;U(Object(r.a)(Object(r.a)({},P),{},Object(n.a)({},t,!1)))};return Object(i.useEffect)((function(){for(var e={},t=j.dynamicForm,n=function(n){var r=t[n].fieldName,c=t[n].fieldLabel,d=t[n].fieldName.replaceAll("id_","");if(q[r]=null,P[r]=!1,"dropdown"===t[n].type||"table"===t[n].type){var s,u,l,p,f,m=Object(i.lazy)((function(){return a(1266)("./".concat(d))}));e["".concat(d,"_comp")]=Object(v.jsxs)(i.Fragment,{children:[Object(v.jsx)(o.E,{className:"form-label",for:r,children:N(null!==c&&void 0!==c?c:"")}),Object(v.jsx)(m,{lookupMode:!0,lookupMode_fieldName:r,lookupMode_dropdown:"dropdown"===t[n].type,lookupMode_isMulti:null!==(s=t[n].isMultiSelection)&&void 0!==s&&s,lookupMode_onChange:X,lookupMode_defaultValue:null!==(u=t[n])&&void 0!==u&&u.isM2MDefValFromGrid?F[j.storeName].data.map((function(e){return e[r]})):null!==(l=F[j.storeName])&&void 0!==l&&l.selectedData?F[j.storeName].selectedData[r]:"",lookupMode_isM2MDefValFromGrid:null!==(p=null===(f=t[n])||void 0===f?void 0:f.isM2MDefValFromGrid)&&void 0!==p&&p},"dynInput_".concat(r))]})}else{var b,g;e["".concat(d,"_comp")]=Object(v.jsxs)(i.Fragment,{children:[Object(v.jsx)(o.E,{className:"form-label",for:r,children:N(null!==c&&void 0!==c?c:"")}),Object(v.jsx)(o.B,{defaultValue:null!==(b=t[n])&&void 0!==b&&b.isM2MDefValFromGrid?F[j.storeName].data.map((function(e){return e[r]})):null!==(g=F[j.storeName])&&void 0!==g&&g.selectedData?F[j.storeName].selectedData[r]:"",onChange:function(e){var a;return X(e.target.value,r,null!==(a=t[n].isMultiSelection)&&void 0!==a&&a)},id:"dynInput_".concat(r)},"dynInput_".concat(r))]})}},r=0;r<t.length;r++)n(r);G(e)}),[]),Object(v.jsx)(o.G,{isOpen:t,toggle:function(){Q(),y(!t)},className:"modal-dialog-centered modal-lg",children:Object(v.jsxs)(l.a,{blocking:A.isLoadingAddEdit||A.isLoadingDetail,loader:Object(v.jsx)(K,{}),children:[Object(v.jsx)(o.J,{className:"bg-transparent",toggle:function(){Q(),y(!t)}}),Object(v.jsxs)(o.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(v.jsxs)("div",{className:"text-center mb-2",children:[Object(v.jsxs)("h2",{className:"mb-1",children:[N("edit"===O?"Edit":"Add Sub")," ",N(j.pageTitle)]}),Object(v.jsxs)("p",{className:"mb-1",children:[N("Child for ")," ",S?N(S.title):""]})]}),Object(v.jsx)(o.y,{onSubmit:Y("edit"===O?function(){if(function(e){if("edit"===O){var t=Object(r.a)({},Object(m.I)(F[j.storeName].selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(Object(m.I)(t))!==JSON.stringify(Object(m.I)(e))}return!0}(q))if(Object.values(data).every((function(e){return null!==e&&""!==e})))M("".concat(N("Updating")," ").concat(N(j.pageTitle)," ").concat(N("Detail")," Data")),w(Object(j.putData)(data)).then((function(e){"fulfilled"===e.meta.requestStatus?(y(!t),s.b.success("".concat(N("Successfully Updated")," ").concat(N(j.pageTitle)),{style:{padding:"16px",color:C.success.main,border:"1px solid ".concat(C.success.main)},iconTheme:{primary:C.success.main}}),h&&w(Object(j.getDataById)(L))):"rejected"===e.meta.requestStatus&&s.b.error(e.payload.message,{style:{padding:"16px",color:C.danger.main,border:"1px solid ".concat(C.danger.main)},iconTheme:{primary:C.danger.main}})}));else for(var e in data){var a;0===(null===(a=data[e])||void 0===a?void 0:a.length)&&H(e,{type:"manual"})}else Object(s.b)("".concat(N("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(){if(Object.values(q).every((function(e){return null!==e&&""!==e})))M("".concat(N("Creating a New ".concat(j.pageTitle)))),w(Object(j.postData)(q)).then((function(e){"fulfilled"===e.meta.requestStatus?(y(!t),s.b.success("".concat(N("Successfully Created")," ").concat(N(j.pageTitle)),{style:{padding:"16px",color:C.success.main,border:"1px solid ".concat(C.success.main)},iconTheme:{primary:C.success.main}}),h&&w(Object(j.getDataById)(L))):"rejected"===e.meta.requestStatus&&s.b.error(e.payload.message,{style:{padding:"16px",color:C.danger.main,border:"1px solid ".concat(C.danger.main)},iconTheme:{primary:C.danger.main}})}));else{var e=Object.assign({},P);for(var a in q){var n;null!==q[a]&&0!==(null===(n=q[a])||void 0===n?void 0:n.length)||(e[a]=!0)}U(e)}}),children:Object(v.jsxs)(o.U,{className:"gy-1 pt-75",children:[j.dynamicForm.map((function(e,t){var a,n,r=e.fieldName.replaceAll("id_","");return["dropdown","table"].includes(e.type)?"table"===e.type?Object(v.jsx)(o.t,{md:12,xs:12,children:Object(v.jsx)(i.Suspense,{fallback:Object(v.jsx)("div",{children:"Loading..."}),children:Object(v.jsxs)("div",{className:P[e.fieldName]?"dynamicForm_input dynamicForm_input_invalid":"dynamicForm_input",children:[I["".concat(r,"_comp")],(null===e||void 0===e?void 0:e.isM2MDefValFromGrid)&&q[e.fieldName]&&Object(v.jsxs)("div",{style:{textAlign:"right"},className:"text-primary",children:[null===(a=q[e.fieldName])||void 0===a?void 0:a.length," ",N(e.fieldLabel)," ",N("Selected")]})]})})},r):Object(v.jsx)(o.t,{md:12,xs:12,children:Object(v.jsx)(i.Suspense,{fallback:Object(v.jsx)("div",{children:"Loading..."}),children:Object(v.jsxs)("div",{className:P[e.fieldName]?"dynamicForm_input_invalid":"",children:[I["".concat(r,"_comp")],(null===e||void 0===e?void 0:e.isM2MDefValFromGrid)&&q[e.fieldName]&&Object(v.jsxs)("div",{style:{textAlign:"right"},className:"text-primary",children:[null===(n=q[e.fieldName])||void 0===n?void 0:n.length," ",N(e.fieldLabel)," ",N("Selected")]})]})})},r):Object(v.jsx)(o.t,{md:12,xs:12,children:Object(v.jsx)("div",{className:P[e.fieldName]?"dynamicForm_input_invalid":"",children:I["".concat(r,"_comp")]})},r)})),Object(v.jsxs)(o.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(v.jsx)(o.i,{type:"submit",className:"me-1",color:"primary",children:N("Submit")}),Object(v.jsx)(o.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){Q(),x("add"),y(!1)},children:N("Cancel")})]})]})})]})]})})}}}]);
//# sourceMappingURL=73.237e8527.chunk.js.map