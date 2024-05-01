(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[6,22,26],{360:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"storeName",(function(){return l})),a.d(t,"endpointName",(function(){return p})),a.d(t,"serverSideGrid",(function(){return f})),a.d(t,"detailFromGrid",(function(){return m})),a.d(t,"getAlwaysGrid",(function(){return b})),a.d(t,"getApiAfterPut",(function(){return g})),a.d(t,"getApiAfterPost",(function(){return v})),a.d(t,"getApiAfterDelete",(function(){return j})),a.d(t,"getApiSummaryData",(function(){return y})),a.d(t,"detailPage",(function(){return D})),a.d(t,"dynamicColumns",(function(){return h})),a.d(t,"dynamicForm",(function(){return O})),a.d(t,"getSummaryData",(function(){return x})),a.d(t,"getDataList",(function(){return S})),a.d(t,"getDataById",(function(){return C})),a.d(t,"resetSelectedData",(function(){return L})),a.d(t,"postData",(function(){return w})),a.d(t,"putData",(function(){return A})),a.d(t,"deleteData",(function(){return k})),a.d(t,"deleteSelectedRowData",(function(){return E})),a.d(t,"setDataById",(function(){return N})),a.d(t,"pushCurrentdata",(function(){return M})),a.d(t,"putCurrentdata",(function(){return _})),a.d(t,"updateCurrentdata",(function(){return V})),a.d(t,"StoreSlice",(function(){return I}));var n=a(9),r=a(7),d=a.n(r),c=a(18),i=a(70),u=a(56),s=a(44).a.ssoAxiosInterceptor,o="App",l="apps_app",p="api/app",f=!0,m=!0,b=!1,g=!1,v=!1,j=!0,y=!0,D=!0,h=[],O=[],x=Object(c.b)("".concat(p,"/getSummaryData"),function(){var e=Object(n.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,s.get("/".concat(p,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(c.b)("".concat(p,"/getDataList"),function(){var e=Object(n.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,s.get("/".concat(p),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(c.b)("".concat(p,"/getDataById"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,s.get("/".concat(p,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(c.b)("".concat(p,"/resetSelectedData"),function(){var e=Object(n.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(c.b)("".concat(p,"/postData"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,s.post("/".concat(p),t);case 4:return i=e.sent,n(L({})),n(v?S(r()[l].params):M(i.data)),n(Object(u.resetData)({})),e.abrupt("return",i.data);case 11:return e.prev=11,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",c(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(c.b)("".concat(p,"/putData"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r,c,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,c=a.rejectWithValue,i=r()[l].selectedData.id,e.prev=2,e.next=5,s.put("/".concat(p,"/").concat(i),t);case 5:return o=e.sent,n(L({})),g?(n(S(r()[l].params)),y&&n(x({}))):n(_(o.data)),n(Object(u.resetData)({})),e.abrupt("return",o.data);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",c(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(c.b)("".concat(p,"/deleteData"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,s.delete("/".concat(p,"/").concat(t));case 4:if(i=e.sent,!j){e.next=9;break}return e.next=8,n(S(r()[l].params));case 8:y&&n(x({}));case 9:return n(Object(u.resetData)({})),e.abrupt("return",i.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(c.b)("".concat(p,"/deleteSelectedRowData"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,s.delete("/".concat(p),{data:t});case 4:if(i=e.sent,!j){e.next=9;break}return e.next=8,n(S(r()[l].params));case 8:y&&n(x({}));case 9:return n(Object(u.resetData)({})),e.abrupt("return",i.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(c.b)("".concat(p,"/setDataById"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),M=Object(c.b)("".concat(p,"/pushCurrentdata"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t,a){return e.apply(this,arguments)}}()),_=Object(c.b)("".concat(p,"/putCurrentdata"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t,a){return e.apply(this,arguments)}}()),V=Object(c.b)("".concat(p,"/updateCurrentdata"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t,a){return e.apply(this,arguments)}}()),I=Object(c.c)({name:l,initialState:{dynamicColumns:h,pageTitle:o,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(x.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(x.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(x.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(S.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(S.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:"".concat(e.name)}}))),e.params=t.payload.params,e.total=t.payload.total})).addCase(S.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(A.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(A.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(w.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(w.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(w.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(k.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(k.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(k.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(E.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(E.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(C.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(C.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(C.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(L.rejected,(function(e){e.selectedData=null})).addCase(N.rejected,(function(e,t){e.selectedData=t.payload})).addCase(M.fulfilled,(function(e,t){e.data.unshift(t.payload.data)})).addCase(_.fulfilled,(function(e,t){var a=Object(i.a)(e).data.findIndex((function(e){return e.id===parseInt(t.payload.data.id)}));-1!==a&&(e.data[a]=t.payload.data)})).addCase(V.fulfilled,(function(e,t){var a=Object(i.a)(e).data.findIndex((function(e){return e.id===parseInt(t.payload.id)}));-1!==a&&(e.data[a].logo.appLogo=t.payload.file)}))}});t.default=I.reducer},367:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return s})),a.d(t,"storeName",(function(){return o})),a.d(t,"endpointName",(function(){return l})),a.d(t,"serverSideGrid",(function(){return p})),a.d(t,"detailFromGrid",(function(){return f})),a.d(t,"getAlwaysGrid",(function(){return m})),a.d(t,"getApiAfterPut",(function(){return b})),a.d(t,"getApiAfterPost",(function(){return g})),a.d(t,"getApiAfterDelete",(function(){return v})),a.d(t,"getApiSummaryData",(function(){return j})),a.d(t,"detailPage",(function(){return y})),a.d(t,"disabledAction",(function(){return D})),a.d(t,"isManyToManyGrid",(function(){return h})),a.d(t,"storeToRefreshAfterAll",(function(){return O})),a.d(t,"dynamicColumns",(function(){return x})),a.d(t,"dynamicColumnsFilter",(function(){return S})),a.d(t,"dynamicForm",(function(){return C})),a.d(t,"getSummaryData",(function(){return L})),a.d(t,"getDataList",(function(){return w})),a.d(t,"getDataById",(function(){return A})),a.d(t,"resetSelectedData",(function(){return k})),a.d(t,"postData",(function(){return E})),a.d(t,"putData",(function(){return N})),a.d(t,"deleteData",(function(){return M})),a.d(t,"deleteSelectedRowData",(function(){return _})),a.d(t,"setDataById",(function(){return V})),a.d(t,"StoreSlice",(function(){return I}));var n=a(9),r=a(7),d=a.n(r),c=a(18),i=a(56),u=a(44).a.ssoAxiosInterceptor,s="Menu Permission",o="apps_permission_menu",l="api/permission_menu",p=!0,f=!0,m=!1,b=!0,g=!0,v=!0,j=!1,y=!1,D=["update"],h=!0,O=["apps_permission"],x=[{columnName:"Menu",fieldName:"menu_title"},{columnName:"App",fieldName:"app_name"}],S=[{filterLabel:"App",fieldName:"id_app"}],C=[{fieldName:"id_menu",fieldLabel:"Menu",type:"table",isM2MDefValFromGrid:!0,isMultiSelection:!0,required:!0},{fieldName:"id_permission",fieldLabel:"Permission",type:"dropdown",required:!0}],L=Object(c.b)("".concat(l,"/getSummaryData"),function(){var e=Object(n.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,u.get("/".concat(l,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(c.b)("".concat(l,"/getDataList"),function(){var e=Object(n.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]&&t[e]||delete t[e]})),e.next=3,u.get("/".concat(l),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A=Object(c.b)("".concat(l,"/getDataById"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,u.get("/".concat(l,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(c.b)("".concat(l,"/resetSelectedData"),function(){var e=Object(n.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=Object(c.b)("".concat(l,"/postData"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,u.post("/".concat(l),t);case 4:return s=e.sent,n(k({})),g&&(n(w(r()[o].params)),null!==O&&console.log(r()[O])),n(Object(i.resetData)({})),e.abrupt("return",s.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(c.b)("".concat(l,"/putData"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r,c,s,p;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,c=a.rejectWithValue,s=r()[o].selectedData.id,e.prev=2,e.next=5,u.put("/".concat(l,"/").concat(s),t);case 5:return p=e.sent,n(k({})),b&&(n(w(r()[o].params)),j&&n(L({}))),n(Object(i.resetData)({})),e.abrupt("return",p.data);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",c(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()),M=Object(c.b)("".concat(l,"/deleteData"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,u.delete("/".concat(l,"/").concat(t));case 4:if(s=e.sent,!v){e.next=9;break}return e.next=8,n(w(r()[o].params));case 8:j&&n(L({}));case 9:return n(Object(i.resetData)({})),e.abrupt("return",s.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),_=Object(c.b)("".concat(l,"/deleteSelectedRowData"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n,r,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,u.delete("/".concat(l),{data:t});case 4:if(s=e.sent,!v){e.next=9;break}return e.next=8,n(w(r()[o].params));case 8:j&&n(L({}));case 9:return n(Object(i.resetData)({})),e.abrupt("return",s.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),V=Object(c.b)("".concat(l,"/setDataById"),function(){var e=Object(n.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),I=Object(c.c)({name:o,initialState:{dynamicColumns:x,pageTitle:s,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(L.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(L.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(L.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(w.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(w.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,e.data=t.payload.data,e.params=t.payload.params,e.total=t.payload.total})).addCase(w.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(N.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(N.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(N.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(E.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(E.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(M.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(M.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(M.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(_.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(_.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(_.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(A.fulfilled,(function(e,t){e.selectedData=t.payload,e.statusDetail="succeeded",e.isLoadingDetail=!1})).addCase(A.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(k.rejected,(function(e){e.selectedData=null})).addCase(V.rejected,(function(e,t){e.selectedData=t.payload}))}});t.default=I.reducer},382:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(4),d=a(6),c=a(2),i=a(33),u=a(24),s=(a(169),a(5)),o=a(85),l=a(63),p=(a(481),a(104),a(34)),f=a(13),m=(a(135),a(145),a(1258),a(46)),b=a(367),g=a(47),v=(a(360),a(16)),j=(a(12),a(0));t.default=function(e){var t=e.show,y=e.setShow,D=e.detailPage,h=e.formState,O=e.setFormState,x=Object(o.a)().t,S=Object(i.g)().id,C=Object(c.useContext)(p.a).colors,L=Object(c.useState)("Please Wait"),w=Object(d.a)(L,2),A=(w[0],w[1]),k=Object(v.b)(),E=Object(v.c)((function(e){return e})),N=Object(c.useState)({}),M=Object(d.a)(N,2),_=M[0],V=M[1],I=Object(c.useState)({}),W=Object(d.a)(I,2),F=W[0],T=(W[1],Object(c.useState)({})),G=Object(d.a)(T,2),B=G[0],P=G[1],R=Object(m.e)({}),q=(R.control,R.setError),J=R.handleSubmit,U=(R.formState.errors,function(){k(Object(b.resetSelectedData)())}),z=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(a)if(F[t]){var d=F[t].indexOf(e);-1!==d?F[t].splice(d,1):F[t].push(e)}else F[t]=[e];else F[t]=e;P(Object(r.a)(Object(r.a)({},B),{},Object(n.a)({},t,!1)))};return Object(c.useEffect)((function(){for(var e={},t=b.dynamicForm.filter((function(e){return"dropdown"===e.type||"table"===e.type})),n=function(n){var r,d,i,u,s,o=t[n].fieldName,l=t[n].fieldName.replaceAll("id_","");F[o]=null,B[o]=!1;var p=Object(c.lazy)((function(){return a(1262)("./".concat(l))}));e["".concat(l,"_comp")]=Object(j.jsx)(p,{lookupMode:!0,lookupMode_fieldName:o,lookupMode_dropdown:"dropdown"===t[n].type,lookupMode_isMulti:null!==(r=t[n].isMultiSelection)&&void 0!==r&&r,lookupMode_onChange:z,lookupMode_defaultValue:null!==(d=t[n])&&void 0!==d&&d.isM2MDefValFromGrid?E[b.storeName].data.map((function(e){return e[o]})):null!==(i=E[b.storeName])&&void 0!==i&&i.selectedData?E[b.storeName].selectedData[o]:"",lookupMode_isM2MDefValFromGrid:null!==(u=null===(s=t[n])||void 0===s?void 0:s.isM2MDefValFromGrid)&&void 0!==u&&u})},r=0;r<t.length;r++)n(r);V(e)}),[]),Object(j.jsx)(s.G,{isOpen:t,toggle:function(){U(),y(!t)},className:"modal-dialog-centered modal-lg",children:Object(j.jsxs)(l.a,{blocking:E[b.storeName].isLoadingAddEdit||E[b.storeName].isLoadingDetail,loader:Object(j.jsx)(g.b,{}),children:[Object(j.jsx)(s.J,{className:"bg-transparent",toggle:function(){U(),y(!t)}}),Object(j.jsxs)(s.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(j.jsx)("div",{className:"text-center mb-2",children:Object(j.jsxs)("h2",{className:"mb-1",children:[x("edit"===h?"Edit":"Add")," ",x(b.pageTitle)]})}),Object(j.jsx)(s.y,{onSubmit:J("edit"===h?function(){if(function(e){if("edit"===h){var t=Object(r.a)({},Object(f.I)(E[b.storeName].selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(Object(f.I)(t))!==JSON.stringify(Object(f.I)(e))}return!0}(F))if(Object.values(data).every((function(e){return null!==e&&""!==e})))A("".concat(x("Updating")," ").concat(x(b.pageTitle)," ").concat(x("Detail")," Data")),k(Object(b.putData)(data)).then((function(e){"fulfilled"===e.meta.requestStatus?(y(!t),u.b.success("".concat(x("Successfully Updated")," ").concat(x(b.pageTitle)),{style:{padding:"16px",color:C.success.main,border:"1px solid ".concat(C.success.main)},iconTheme:{primary:C.success.main}}),D&&k(Object(b.getDataById)(S))):"rejected"===e.meta.requestStatus&&u.b.error(e.payload.message,{style:{padding:"16px",color:C.danger.main,border:"1px solid ".concat(C.danger.main)},iconTheme:{primary:C.danger.main}})}));else for(var e in data){var a;0===(null===(a=data[e])||void 0===a?void 0:a.length)&&q(e,{type:"manual"})}else Object(u.b)("".concat(x("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(){if(Object.values(F).every((function(e){return null!==e&&""!==e})))A("".concat(x("Creating a New ".concat(b.pageTitle)))),k(Object(b.postData)(F)).then((function(e){"fulfilled"===e.meta.requestStatus?(y(!t),u.b.success("".concat(x("Successfully Created")," ").concat(x(b.pageTitle)),{style:{padding:"16px",color:C.success.main,border:"1px solid ".concat(C.success.main)},iconTheme:{primary:C.success.main}}),D&&k(Object(b.getDataById)(S))):"rejected"===e.meta.requestStatus&&u.b.error(e.payload.message,{style:{padding:"16px",color:C.danger.main,border:"1px solid ".concat(C.danger.main)},iconTheme:{primary:C.danger.main}})}));else{var e=Object.assign({},B);for(var a in F){var n;null!==F[a]&&0!==(null===(n=F[a])||void 0===n?void 0:n.length)||(e[a]=!0)}P(e)}}),children:Object(j.jsxs)(s.S,{className:"gy-1 pt-75",children:[b.dynamicForm.map((function(e,t){if(["dropdown","table"].includes(e.type)){var a,n,r=e.fieldName.replaceAll("id_","");return Object(j.jsxs)(s.t,{md:12,xs:12,children:[Object(j.jsx)(s.E,{className:"form-label",for:e.fieldName,children:x(null!==(a=e.fieldLabel)&&void 0!==a?a:"")}),Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)("div",{children:"Loading..."}),children:Object(j.jsxs)("div",{className:B[e.fieldName]?"dynamicForm_input dynamicForm_input_invalid":"dynamicForm_input",children:[_["".concat(r,"_comp")],(null===e||void 0===e?void 0:e.isM2MDefValFromGrid)&&F[e.fieldName]&&Object(j.jsxs)("div",{style:{textAlign:"right"},className:"text-primary",children:[null===(n=F[e.fieldName])||void 0===n?void 0:n.length," ",x(e.fieldLabel)," ",x("Selected")]})]})})]},r)}})),Object(j.jsxs)(s.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(j.jsx)(s.i,{type:"submit",className:"me-1",color:"primary",children:x("Submit")}),Object(j.jsx)(s.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){U(),O("add"),y(!1)},children:x("Cancel")})]})]})})]})]})})}}}]);
//# sourceMappingURL=6.d07b5eb8.chunk.js.map