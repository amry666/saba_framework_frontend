(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[22],{361:function(t,e,a){"use strict";a.r(e),a.d(e,"pageTitle",(function(){return o})),a.d(e,"storeName",(function(){return l})),a.d(e,"endpointName",(function(){return p})),a.d(e,"serverSideGrid",(function(){return f})),a.d(e,"detailFromGrid",(function(){return m})),a.d(e,"getAlwaysGrid",(function(){return v})),a.d(e,"getApiAfterPut",(function(){return b})),a.d(e,"getApiAfterPost",(function(){return g})),a.d(e,"getApiAfterDelete",(function(){return D})),a.d(e,"getApiSummaryData",(function(){return y})),a.d(e,"detailPage",(function(){return h})),a.d(e,"dynamicColumns",(function(){return j})),a.d(e,"dynamicForm",(function(){return C})),a.d(e,"getSummaryData",(function(){return w})),a.d(e,"getDataList",(function(){return O})),a.d(e,"getDataById",(function(){return L})),a.d(e,"resetSelectedData",(function(){return x})),a.d(e,"postData",(function(){return A})),a.d(e,"putData",(function(){return S})),a.d(e,"deleteData",(function(){return k})),a.d(e,"deleteSelectedRowData",(function(){return E})),a.d(e,"setDataById",(function(){return V})),a.d(e,"pushCurrentdata",(function(){return W})),a.d(e,"putCurrentdata",(function(){return I})),a.d(e,"updateCurrentdata",(function(){return B})),a.d(e,"StoreSlice",(function(){return G}));var r=a(9),n=a(7),u=a.n(n),d=a(18),c=a(70),i=a(57),s=a(44).a.ssoAxiosInterceptor,o="App",l="apps_app",p="api/app",f=!0,m=!0,v=!1,b=!1,g=!1,D=!0,y=!0,h=!0,j=[],C=[],w=Object(d.b)("".concat(p,"/getSummaryData"),function(){var t=Object(r.a)(u.a.mark((function t(e){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object.keys(e).forEach((function(t){null!==e[t]&&""!==e[t]||delete e[t]})),t.next=3,s.get("/".concat(p,"/summary"),{params:e});case 3:return a=t.sent,t.abrupt("return",{params:e,data:a.data.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),O=Object(d.b)("".concat(p,"/getDataList"),function(){var t=Object(r.a)(u.a.mark((function t(e){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object.keys(e).forEach((function(t){null!==e[t]&&""!==e[t]||delete e[t]})),t.next=3,s.get("/".concat(p),{params:e});case 3:return a=t.sent,t.abrupt("return",{params:e,data:a.data.data,total:a.data.total});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),L=Object(d.b)("".concat(p,"/getDataById"),function(){var t=Object(r.a)(u.a.mark((function t(e,a){var r,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.rejectWithValue,t.prev=1,t.next=4,s.get("/".concat(p,"/").concat(e));case 4:return n=t.sent,t.abrupt("return",n.data.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.response.data));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,a){return t.apply(this,arguments)}}()),x=Object(d.b)("".concat(p,"/resetSelectedData"),function(){var t=Object(r.a)(u.a.mark((function t(e){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.rejectWithValue,t.abrupt("return",a({}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),A=Object(d.b)("".concat(p,"/postData"),function(){var t=Object(r.a)(u.a.mark((function t(e,a){var r,n,d,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.dispatch,n=a.getState,d=a.rejectWithValue,t.prev=1,t.next=4,s.post("/".concat(p),e);case 4:return c=t.sent,r(x({})),r(g?O(n()[l].params):W(c.data)),r(Object(i.resetData)({})),t.abrupt("return",c.data);case 11:return t.prev=11,t.t0=t.catch(1),console.error(t.t0),t.abrupt("return",d(t.t0.response.data));case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()),S=Object(d.b)("".concat(p,"/putData"),function(){var t=Object(r.a)(u.a.mark((function t(e,a){var r,n,d,c,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.dispatch,n=a.getState,d=a.rejectWithValue,c=n()[l].selectedData.id,t.prev=2,t.next=5,s.put("/".concat(p,"/").concat(c),e);case 5:return o=t.sent,r(x({})),b?(r(O(n()[l].params)),y&&r(w({}))):r(I(o.data)),r(Object(i.resetData)({})),t.abrupt("return",o.data);case 12:return t.prev=12,t.t0=t.catch(2),t.abrupt("return",d(t.t0.response.data));case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e,a){return t.apply(this,arguments)}}()),k=Object(d.b)("".concat(p,"/deleteData"),function(){var t=Object(r.a)(u.a.mark((function t(e,a){var r,n,d,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.dispatch,n=a.getState,d=a.rejectWithValue,t.prev=1,t.next=4,s.delete("/".concat(p,"/").concat(e));case 4:if(c=t.sent,!D){t.next=9;break}return t.next=8,r(O(n()[l].params));case 8:y&&r(w({}));case 9:return r(Object(i.resetData)({})),t.abrupt("return",c.data);case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",d(t.t0.response.data));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),E=Object(d.b)("".concat(p,"/deleteSelectedRowData"),function(){var t=Object(r.a)(u.a.mark((function t(e,a){var r,n,d,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.dispatch,n=a.getState,d=a.rejectWithValue,t.prev=1,t.next=4,s.delete("/".concat(p),{data:e});case 4:if(c=t.sent,!D){t.next=9;break}return t.next=8,r(O(n()[l].params));case 8:y&&r(w({}));case 9:return r(Object(i.resetData)({})),t.abrupt("return",c.data);case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",d(t.t0.response.data));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),V=Object(d.b)("".concat(p,"/setDataById"),function(){var t=Object(r.a)(u.a.mark((function t(e,a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.rejectWithValue,t.abrupt("return",r(e));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),W=Object(d.b)("".concat(p,"/pushCurrentdata"),function(){var t=Object(r.a)(u.a.mark((function t(e,a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.rejectWithValue,t.prev=1,t.abrupt("return",e);case 5:return t.prev=5,t.t0=t.catch(1),t.abrupt("return",r(t.t0.response.data));case 8:case"end":return t.stop()}}),t,null,[[1,5]])})));return function(e,a){return t.apply(this,arguments)}}()),I=Object(d.b)("".concat(p,"/putCurrentdata"),function(){var t=Object(r.a)(u.a.mark((function t(e,a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.rejectWithValue,t.prev=1,t.abrupt("return",e);case 5:return t.prev=5,t.t0=t.catch(1),t.abrupt("return",r(t.t0.response.data));case 8:case"end":return t.stop()}}),t,null,[[1,5]])})));return function(e,a){return t.apply(this,arguments)}}()),B=Object(d.b)("".concat(p,"/updateCurrentdata"),function(){var t=Object(r.a)(u.a.mark((function t(e,a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.rejectWithValue,t.prev=1,t.abrupt("return",e);case 5:return t.prev=5,t.t0=t.catch(1),t.abrupt("return",r(t.t0.response.data));case 8:case"end":return t.stop()}}),t,null,[[1,5]])})));return function(e,a){return t.apply(this,arguments)}}()),G=Object(d.c)({name:l,initialState:{dynamicColumns:j,pageTitle:o,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(t){t.addCase(w.pending,(function(t){t.statusSummary="loading",t.isLoadingSummary=!0})).addCase(w.fulfilled,(function(t,e){t.statusSummary="succeeded",t.isLoadingSummary=!1,t.dataSummary=e.payload.data})).addCase(w.rejected,(function(t,e){t.statusSummary="failed",t.isLoadingSummary=!1,t.errorSummary=e.error.message})).addCase(O.pending,(function(t){t.status="loading",t.isLoading=!0})).addCase(O.fulfilled,(function(t,e){t.status="succeeded",t.isLoading=!1,e.payload.data.length>0&&(t.data=e.payload.data,t.dataDropdown=e.payload.data.map((function(t){return{value:t.id,label:"".concat(t.name)}}))),t.params=e.payload.params,t.total=e.payload.total})).addCase(O.rejected,(function(t,e){var a;t.status="failed",t.isLoading=!1,t.error=null===(a=e.error.payload)||void 0===a?void 0:a.message})).addCase(S.pending,(function(t){t.statusAddEdit="loading",t.isLoadingAddEdit=!0})).addCase(S.fulfilled,(function(t){t.statusAddEdit="succeeded",t.isLoadingAddEdit=!1})).addCase(S.rejected,(function(t,e){var a;t.statusAddEdit="failed",t.isLoadingAddEdit=!1,t.errorAddEdit=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(t){t.statusAddEdit="loading",t.isLoadingAddEdit=!0})).addCase(A.fulfilled,(function(t){t.statusAddEdit="succeeded",t.isLoadingAddEdit=!1})).addCase(A.rejected,(function(t,e){var a;t.statusAddEdit="failed",t.isLoadingAddEdit=!1,t.errorAddEdit=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(k.pending,(function(t){t.statusDelete="loading",t.isLoadingDelete=!0})).addCase(k.fulfilled,(function(t){t.statusDelete="succeeded",t.isLoadingDelete=!1})).addCase(k.rejected,(function(t,e){var a;t.statusDelete="failed",t.isLoadingDelete=!1,t.errorDelete=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(t){t.statusDelete="loading",t.isLoadingDelete=!0})).addCase(E.fulfilled,(function(t){t.statusDelete="succeeded",t.isLoadingDelete=!1})).addCase(E.rejected,(function(t,e){var a;t.statusDelete="failed",t.isLoadingDelete=!1,t.errorDelete=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(L.pending,(function(t){t.statusDetail="loading",t.isLoadingDetail=!0})).addCase(L.fulfilled,(function(t,e){t.statusDetail="succeeded",t.isLoadingDetail=!1,t.selectedData=e.payload})).addCase(L.rejected,(function(t,e){var a;t.statusDetail="failed",t.isLoadingDetail=!1,t.selectedData=null,t.errorDetail=null===(a=e.payload)||void 0===a?void 0:a.message})).addCase(x.rejected,(function(t){t.selectedData=null})).addCase(V.rejected,(function(t,e){t.selectedData=e.payload})).addCase(W.fulfilled,(function(t,e){t.data.unshift(e.payload.data)})).addCase(I.fulfilled,(function(t,e){var a=Object(c.a)(t).data.findIndex((function(t){return t.id===parseInt(e.payload.data.id)}));-1!==a&&(t.data[a]=e.payload.data)})).addCase(B.fulfilled,(function(t,e){var a=Object(c.a)(t).data.findIndex((function(t){return t.id===parseInt(e.payload.id)}));-1!==a&&(t.data[a].logo.appLogo=e.payload.file)}))}});e.default=G.reducer}}]);
//# sourceMappingURL=22.ee32c723.chunk.js.map