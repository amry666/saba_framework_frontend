(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[132,24],{359:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return u})),a.d(t,"storeName",(function(){return o})),a.d(t,"endpointName",(function(){return l})),a.d(t,"serverSideGrid",(function(){return p})),a.d(t,"detailFromGrid",(function(){return f})),a.d(t,"getAlwaysGrid",(function(){return m})),a.d(t,"getApiAfterPut",(function(){return b})),a.d(t,"getApiAfterPost",(function(){return j})),a.d(t,"getApiAfterDelete",(function(){return v})),a.d(t,"getApiSummaryData",(function(){return g})),a.d(t,"detailPage",(function(){return D})),a.d(t,"deleteSelection",(function(){return O})),a.d(t,"dynamicColumns",(function(){return h})),a.d(t,"dynamicColumnsFilter",(function(){return y})),a.d(t,"dynamicForm",(function(){return x})),a.d(t,"extraCrud",(function(){return S})),a.d(t,"getSummaryData",(function(){return L})),a.d(t,"getDataList",(function(){return C})),a.d(t,"getDataById",(function(){return A})),a.d(t,"resetSelectedData",(function(){return w})),a.d(t,"postData",(function(){return E})),a.d(t,"putData",(function(){return k})),a.d(t,"deleteData",(function(){return N})),a.d(t,"deleteSelectedRowData",(function(){return V})),a.d(t,"setDataById",(function(){return W})),a.d(t,"StoreSlice",(function(){return B}));var r=a(9),n=a(7),d=a.n(n),c=a(18),i=a(56),s=a(44).a.ssoAxiosInterceptor,u="Permission",o="apps_permission",l="api/permission",p=!0,f=!0,m=!1,b=!0,j=!0,v=!0,g=!1,D=!0,O=!1,h=[],y=[{filterLabel:"Role",fieldName:"id_role"}],x=[],S=[{crudName:"permission_menu",crudLabel:"Permission to Menu"},{crudName:"permission_endpoint",crudLabel:"Permission to Endpoint"}],L=Object(c.b)("".concat(l,"/getSummaryData"),function(){var e=Object(r.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,s.get("/".concat(l,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(c.b)("".concat(l,"/getDataList"),function(){var e=Object(r.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,s.get("/".concat(l),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(c.b)("".concat(l,"/getDataById"),function(){var e=Object(r.a)(d.a.mark((function e(t,a){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.rejectWithValue,e.prev=1,e.next=4,s.get("/".concat(l,"/").concat(t));case 4:return n=e.sent,e.abrupt("return",n.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),w=Object(c.b)("".concat(l,"/resetSelectedData"),function(){var e=Object(r.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=Object(c.b)("".concat(l,"/postData"),function(){var e=Object(r.a)(d.a.mark((function e(t,a){var r,n,c,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,s.post("/".concat(l),t);case 4:return u=e.sent,r(w({})),j&&r(C(n()[o].params)),r(Object(i.resetData)({})),e.abrupt("return",u.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(c.b)("".concat(l,"/putData"),function(){var e=Object(r.a)(d.a.mark((function e(t,a){var r,n,c,u,p;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=a.rejectWithValue,u=n()[o].selectedData.id,e.prev=2,e.next=5,s.put("/".concat(l,"/").concat(u),t);case 5:return p=e.sent,r(w({})),b&&(r(C(n()[o].params)),g&&r(L({}))),r(Object(i.resetData)({})),e.abrupt("return",p.data);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",c(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(c.b)("".concat(l,"/deleteData"),function(){var e=Object(r.a)(d.a.mark((function e(t,a){var r,n,c,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,s.delete("/".concat(l,"/").concat(t));case 4:if(u=e.sent,!v){e.next=9;break}return e.next=8,r(C(n()[o].params));case 8:g&&r(L({}));case 9:return r(Object(i.resetData)({})),e.abrupt("return",u.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),V=Object(c.b)("".concat(l,"/deleteSelectedRowData"),function(){var e=Object(r.a)(d.a.mark((function e(t,a){var r,n,c,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,s.delete("/".concat(l),{data:t});case 4:if(u=e.sent,!v){e.next=9;break}return e.next=8,r(C(n()[o].params));case 8:g&&r(L({}));case 9:return r(Object(i.resetData)({})),e.abrupt("return",u.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),W=Object(c.b)("".concat(l,"/setDataById"),function(){var e=Object(r.a)(d.a.mark((function e(t,a){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.rejectWithValue,e.abrupt("return",r(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),B=Object(c.c)({name:o,initialState:{dynamicColumns:h,pageTitle:u,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(L.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(L.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(L.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(C.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(C.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:e.title,post:!1,put:!1,delete:!1,get:!1}}))),e.params=t.payload.params,e.total=t.payload.total})).addCase(C.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(k.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(k.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(k.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(E.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(E.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(N.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(N.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(N.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(V.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(V.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(V.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(A.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(A.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(w.rejected,(function(e){e.selectedData=null})).addCase(W.rejected,(function(e,t){e.selectedData=t.payload}))}});t.default=B.reducer},754:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(6),d=a(2),c=a(33),i=(a(169),a(5)),s=a(85),u=(a(63),a(481),a(104),a(34)),o=(a(13),a(135),a(145),a(1258),a(46)),l=a(359),p=a(16),f=a(0);t.default=function(e){var t,a,m,b,j,v,g=e.formState,D=e.updateDataToApi,O=e.postDataToApi,h=e.handleReset,y=Object(s.a)().t,x=(Object(c.g)().id,Object(p.b)(),Object(p.c)((function(e){return e[l.storeName]}))),S=(Object(d.useContext)(u.a).colors,Object(d.useState)("Please Wait")),L=Object(n.a)(S,2),C=(L[0],L[1],Object(o.e)({})),A=C.control,w=(C.setError,C.handleSubmit),E=C.formState.errors;return Object(f.jsx)(i.y,{onSubmit:w("edit"===g?D:O),children:Object(f.jsxs)(i.S,{className:"gy-1 pt-75",children:[Object(f.jsxs)(i.t,{md:12,xs:12,children:[Object(f.jsxs)(i.E,{className:"form-label",for:"title",children:[y("Title"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(o.a,{defaultValue:null!==(t=null===(a=x.selectedData)||void 0===a?void 0:a.title)&&void 0!==t?t:"",control:A,id:"title",name:"title",render:function(e){var t=e.field;return Object(f.jsx)(i.B,Object(r.a)(Object(r.a)({},t),{},{className:E.title?"form-control is-invalid":"form-control",id:"title",invalid:E.title&&!0}))}})]}),Object(f.jsxs)(i.t,{md:12,xs:12,children:[Object(f.jsxs)(i.E,{className:"form-label",for:"description",children:[y("Description"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(o.a,{defaultValue:null!==(m=null===(b=x.selectedData)||void 0===b?void 0:b.description)&&void 0!==m?m:"",control:A,id:"description",name:"description",render:function(e){var t=e.field;return Object(f.jsx)(i.B,Object(r.a)(Object(r.a)({},t),{},{className:E.description?"form-control is-invalid":"form-control",id:"description",invalid:E.description&&!0}))}})]}),Object(f.jsxs)(i.t,{md:12,xs:12,children:[Object(f.jsxs)(i.E,{className:"form-label",for:"subject",children:[y("Subject"),Object(f.jsx)("span",{className:"text-danger",children:"*"})]}),Object(f.jsx)(o.a,{defaultValue:null!==(j=null===(v=x.selectedData)||void 0===v?void 0:v.subject)&&void 0!==j?j:"",control:A,id:"subject",name:"subject",render:function(e){var t=e.field;return Object(f.jsx)(i.B,Object(r.a)(Object(r.a)({},t),{},{className:E.subject?"form-control is-invalid":"form-control",id:"subject",invalid:E.subject&&!0}))}})]}),Object(f.jsxs)(i.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(f.jsx)(i.i,{type:"submit",className:"me-1",color:"primary",children:y("Submit")}),Object(f.jsx)(i.i,{type:"reset",color:"secondary",outline:!0,onClick:h,children:y("Cancel")})]})]})})}}}]);
//# sourceMappingURL=132.e69f8fa7.chunk.js.map