(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[59,21,27,68],{357:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"storeName",(function(){return l})),a.d(t,"endpointName",(function(){return p})),a.d(t,"serverSideGrid",(function(){return f})),a.d(t,"detailFromGrid",(function(){return m})),a.d(t,"getAlwaysGrid",(function(){return g})),a.d(t,"getApiAfterPut",(function(){return b})),a.d(t,"getApiAfterPost",(function(){return j})),a.d(t,"getApiAfterDelete",(function(){return h})),a.d(t,"getApiSummaryData",(function(){return v})),a.d(t,"detailPage",(function(){return x})),a.d(t,"getSummaryData",(function(){return y})),a.d(t,"getDataList",(function(){return O})),a.d(t,"getDataById",(function(){return D})),a.d(t,"resetSelectedData",(function(){return C})),a.d(t,"postData",(function(){return w})),a.d(t,"putData",(function(){return S})),a.d(t,"deleteData",(function(){return L})),a.d(t,"deleteSelectedRowData",(function(){return A})),a.d(t,"setDataById",(function(){return E})),a.d(t,"resetData",(function(){return N})),a.d(t,"StoreSlice",(function(){return k}));var r=a(9),n=a(7),s=a.n(n),c=a(18),i=a(44),d=a(56),u=i.a.ssoAxiosInterceptor,o="Role",l="apps_role",p="api/role",f=!1,m=!1,g=!1,b=!0,j=!0,h=!0,v=!0,x=!0,y=Object(c.b)("".concat(p,"/getSummaryData"),function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,u.get("/".concat(p,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(c.b)("".concat(p,"/getDataList"),function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,u.get("/".concat(p),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=Object(c.b)("".concat(p,"/getDataById"),function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.rejectWithValue,e.prev=1,e.next=4,u.get("/".concat(p,"/").concat(t));case 4:return n=e.sent,e.abrupt("return",n.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),C=Object(c.b)("".concat(p,"/resetSelectedData"),function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(c.b)("".concat(p,"/postData"),function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,u.post("/".concat(p),t);case 4:return i=e.sent,r(C({})),j&&r(O(n()[l].params)),r(Object(d.resetData)({})),e.abrupt("return",i.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),S=Object(c.b)("".concat(p,"/putData"),function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,c,i,o,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,c=a.getState,i=a.rejectWithValue,o=null!==(r=t.id)&&void 0!==r?r:c()[l].selectedData.id,t.name=c()[l].selectedData.name,e.prev=3,e.next=6,u.put("/".concat(p,"/").concat(o),t);case 6:return f=e.sent,n(C({})),b&&(n(O(c()[l].params)),v&&n(y({}))),n(Object(d.resetData)({})),e.abrupt("return",f.data);case 13:return e.prev=13,e.t0=e.catch(3),e.abrupt("return",i(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(c.b)("".concat(p,"/deleteData"),function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,u.delete("/".concat(p,"/").concat(t));case 4:if(i=e.sent,!h){e.next=9;break}return e.next=8,r(O(n()[l].params));case 8:v&&r(y({}));case 9:return r(Object(d.resetData)({})),e.abrupt("return",i.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(c.b)("".concat(p,"/deleteSelectedRowData"),function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,u.delete("/".concat(p),{data:t});case 4:if(i=e.sent,!h){e.next=9;break}return e.next=8,r(O(n()[l].params));case 8:v&&r(y({}));case 9:return r(Object(d.resetData)({})),e.abrupt("return",i.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(c.b)("".concat(p,"/setDataById"),function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.rejectWithValue,e.abrupt("return",r(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(c.b)("".concat(p,"/resetData"),function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k=Object(c.c)({name:l,initialState:{pageTitle:o,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(y.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(y.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(y.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(O.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(O.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:"".concat(e.name)}})),e.selectedData={value:t.payload.data[0].id,label:"".concat(t.payload.data[0].name)}),e.params=t.payload.params,e.total=t.payload.total})).addCase(O.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(S.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(S.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(S.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(w.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(w.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(w.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(L.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(L.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(L.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(A.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(A.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(D.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(D.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(D.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(C.rejected,(function(e){e.selectedData=null})).addCase(E.rejected,(function(e,t){e.selectedData=t.payload})).addCase(N.rejected,(function(e){e.data=[],e.dataSummary=[]}))}});t.default=k.reducer},359:function(e,t,a){"use strict";a.r(t),a.d(t,"getSummaryData",(function(){return u})),a.d(t,"getData",(function(){return o})),a.d(t,"getUser",(function(){return l})),a.d(t,"addUser",(function(){return p})),a.d(t,"updateUser",(function(){return f})),a.d(t,"deleteUser",(function(){return m})),a.d(t,"getDataEmployee",(function(){return g})),a.d(t,"appUsersSlice",(function(){return b}));var r=a(9),n=a(7),s=a.n(n),c=a(18),i=a(44),d=a(357),u=Object(c.b)("appUsers/getSummaryData",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,i.a.ssoAxiosInterceptor.get("/api/user/summary",{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o=Object(c.b)("appUsers/getData",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,i.a.ssoAxiosInterceptor.get("/api/user",{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,totalPages:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l=Object(c.b)("appUsers/getUser",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.ssoAxiosInterceptor.get("/api/user/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(c.b)("appUsers/addUser",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,i.a.ssoAxiosInterceptor.post("/api/user",t);case 4:return e.sent,e.next=7,r(o(n().users.params));case 7:return r(Object(d.resetData)({})),e.abrupt("return",t);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),f=Object(c.b)("appUsers/updateUser",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,c,p,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=a.rejectWithValue,p=t.id,delete t.id,e.prev=3,e.next=6,i.a.ssoAxiosInterceptor.put("/api/user/".concat(p),t);case 6:return f=e.sent,r(l(p)),r(o(n().users.params)),r(u({})),r(Object(d.resetData)({})),e.abrupt("return",f.data);case 14:return e.prev=14,e.t0=e.catch(3),e.abrupt("return",c(e.t0.response.data.errors));case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t,a){return e.apply(this,arguments)}}()),m=Object(c.b)("appUsers/deleteUser",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=a.rejectWithValue,e.prev=1,e.next=4,i.a.ssoAxiosInterceptor.delete("/api/user/".concat(t));case 4:return l=e.sent,e.next=7,r(o(n().users.params));case 7:return r(u({})),r(Object(d.resetData)({})),e.abrupt("return",l.data);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}()),g=Object(c.b)("appUsers/getDataEmployee",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,i.a.hrAxiosInterceptor.get("/Employee",{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,totalPages:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(c.c)({name:"appUsers",initialState:{crudTitle:"User",statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},status_employee:0,isLoading_employee:!1,error_employee:0,data_employee:[],total_employee:1,params_employee:{},statusDetail:0,isLoadingDetail:!1,errorDetail:0,selectedUser:null,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(u.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(u.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(u.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(o.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(o.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,e.data=t.payload.data,e.params=t.payload.params,e.total=t.payload.totalPages})).addCase(o.rejected,(function(e,t){e.status="failed",e.isLoading=!1,e.error=t.error.message})).addCase(g.pending,(function(e){e.status_employee="loading",e.isLoading_employee=!0})).addCase(g.fulfilled,(function(e,t){e.status_employee="succeeded",e.isLoading_employee=!1,e.data_employee=t.payload.data,e.params_employee=t.payload.params,e.total_employee=t.payload.totalPages})).addCase(g.rejected,(function(e,t){e.status_employee="failed",e.isLoading_employee=!1,e.error_employee=t.error.message})).addCase(f.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(f.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(f.rejected,(function(e,t){e.statusAddEdit="failed",e.isLoadingAddEdit=!1,"object"===typeof t.payload?e.errorAddEdit=JSON.stringify(t.payload):e.errorAddEdit=t.payload.message})).addCase(p.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(p.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(p.rejected,(function(e,t){console.log(t),t.payload.errors?e.errorAddEdit=Object.values(t.payload.errors):t.payload.error_reason&&(e.errorAddEdit=t.payload.message),e.statusAddEdit="failed",e.isLoadingAddEdit=!1})).addCase(m.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(m.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(m.rejected,(function(e,t){e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=t.payload.message})).addCase(l.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0,e.selectedUser=null})).addCase(l.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedUser=t.payload})).addCase(l.rejected,(function(e,t){e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedUser=null,e.errorDetail=t.error.message}))}});t.default=b.reducer},777:function(e,t,a){"use strict";a.r(t),a.d(t,"columns",(function(){return v}));var r,n=a(10),s=a(30),c=a(37),i=a(267),d=a(359),u=a(578),o=a(536),l=a(316),p=a(564),f=a(568),m=a(240),g=a(5),b=a(0),j=function(e){return e.avatar.length?Object(b.jsx)(c.a,{className:"me-1",img:e.avatar,width:"32",height:"32"}):Object(b.jsx)(c.a,{initials:!0,className:"me-1",content:e.fullName||"John Doe",color:e.avatarColor||"light-primary"})},h={pending:"light-warning",active:"light-success",inactive:"light-secondary"},v=[{name:"Name",sortable:!0,minWidth:"297px",sortField:"fullName",selector:function(e){return e.fullName},cell:function(e){return Object(b.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[j(e),Object(b.jsxs)("div",{className:"d-flex flex-column",children:[Object(b.jsx)(s.b,{to:"/apps/user/view/".concat(e.id),className:"user_name text-truncate text-body",onClick:function(){return i.a.dispatch(Object(d.getUser)(e.id))},children:Object(b.jsx)("span",{className:"fw-bold",children:e.fullName})}),Object(b.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}},{name:"Role",sortable:!0,minWidth:"172px",sortField:"role",selector:function(e){return e.role_name},cell:function(e){return function(e){var t={subscriber:{class:"text-primary",icon:u.a},maintainer:{class:"text-success",icon:o.a},editor:{class:"text-info",icon:l.a},author:{class:"text-warning",icon:p.a},admin:{class:"text-danger",icon:f.a}},a=t[e.role_name]?t[e.role_name].icon:l.a;return Object(b.jsxs)("span",{className:"text-truncate text-capitalize align-middle",children:[Object(b.jsx)(a,{size:18,className:"".concat(t[e.role_name]?t[e.role_name].class:""," me-50")}),e.role_name]})}(e)}},{name:"Plan",sortable:!0,minWidth:"138px",sortField:"currentPlan",selector:function(e){return e.currentPlan},cell:function(e){return Object(b.jsx)("span",{className:"text-capitalize",children:e.currentPlan})}},(r={name:"Billing",sortable:!0,minWidth:"230px",sortField:"billing",selector:function(e){return e.billing}},Object(n.a)(r,"sortField","billing"),Object(n.a)(r,"selector",(function(e){return e.billing})),Object(n.a)(r,"cell",(function(e){return Object(b.jsx)("span",{className:"text-capitalize",children:e.billing})})),r),{name:"Status",sortable:!0,minWidth:"138px",sortField:"status",selector:function(e){return e.status},cell:function(e){return Object(b.jsx)(g.f,{className:"text-capitalize",color:h[e.status],pill:!0,children:e.status})}},{name:"Actions",minWidth:"100px",cell:function(e){return Object(b.jsx)(s.b,{to:"/apps/user/view/".concat(e.id),children:Object(b.jsx)(m.a,{className:"font-medium-3 text-body"})})}}]},785:function(e,t,a){"use strict";a.r(t);var r=a(6),n=a(4),s=a(2),c=a(777),i=a(16),d=a(359),u=a(170),o=a.n(u),l=a(214),p=a(171),f=a.n(p),m=a(5),g=a(78),b=(a(13),a(42)),j=(a(103),a(0)),h=Object(s.forwardRef)((function(e,t){return Object(j.jsx)("div",{className:"form-check",children:Object(j.jsx)(m.B,Object(n.a)({type:"checkbox",ref:t},e))})})),v=function(e){var t=e.plan,a=e.handlePlanChange,r=e.handlePerPage,n=e.rowsPerPage,s=e.handleFilter,c=e.searchTerm;Object(g.a)().t,useContext(b.a);return Object(j.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(j.jsxs)(m.S,{children:[Object(j.jsx)(m.t,{xl:"6",className:"d-flex align-items-center p-0",children:Object(j.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(j.jsx)("label",{htmlFor:"rows-per-page",children:"Show"}),Object(j.jsxs)(m.B,{className:"mx-50",type:"select",id:"rows-per-page",value:n,onChange:r,style:{width:"5rem"},children:[Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"25",children:"25"}),Object(j.jsx)("option",{value:"50",children:"50"})]}),Object(j.jsx)("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),Object(j.jsxs)(m.t,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pe-lg-1 p-0 mt-lg-0 mt-1",children:[Object(j.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(j.jsx)("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),Object(j.jsx)(m.B,{type:"text",value:c,id:"search-invoice",className:"ms-50 w-100",onChange:function(e){return s(e.target.value)}})]}),Object(j.jsxs)(m.B,{value:t,type:"select",style:{width:"10rem"},onChange:function(e){return a(e.target.value)},children:[Object(j.jsx)("option",{value:"",children:"Select Role"}),Object(j.jsx)("option",{value:"basic",children:"Basic"}),Object(j.jsx)("option",{value:"company",children:"Company"}),Object(j.jsx)("option",{value:"enterprise",children:"Enterprise"}),Object(j.jsx)("option",{value:"team",children:"Team"})]})]})]})})};t.default=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.users})),a=Object(s.useState)(""),n=Object(r.a)(a,2),u=n[0],p=n[1],g=Object(s.useState)("desc"),b=Object(r.a)(g,2),x=b[0],y=b[1],O=Object(s.useState)(""),D=Object(r.a)(O,2),C=D[0],w=D[1],S=Object(s.useState)(1),L=Object(r.a)(S,2),A=L[0],E=L[1],N=Object(s.useState)(10),k=Object(r.a)(N,2),P=k[0],_=k[1],U=Object(s.useState)("id"),W=Object(r.a)(U,2),I=W[0],F=W[1];Object(s.useEffect)((function(){e(getAllData()),e(Object(d.getData)({sort:x,role:"",sortColumn:I,status:"",q:C,currentPlan:u,page:A,perPage:P}))}),[e,t.data.length]);return Object(j.jsx)(m.l,{children:Object(j.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(j.jsx)(f.a,{noHeader:!0,subHeader:!0,pagination:!0,responsive:!0,selectableRows:!0,paginationServer:!0,columns:c.columns,onSort:function(t,a){y(a),F(t.sortField),e(Object(d.getData)({sort:x,role:"",sortColumn:I,status:"",q:C,currentPlan:u,page:A,perPage:P}))},data:function(){var e={q:C},a=Object.keys(e).some((function(t){return e[t].length>0}));return t.data.length>0?t.data:0===t.data.length&&a?[]:t.allData.slice(0,P)}(),sortIcon:Object(j.jsx)(l.a,{}),paginationComponent:function(){var a=Number(Math.ceil(t.total/P));return Object(j.jsx)(o.a,{previousLabel:"",nextLabel:"",pageCount:a||1,activeClassName:"active",forcePage:0!==A?A-1:0,onPageChange:function(t){return function(t){e(Object(d.getData)({sort:x,role:"",status:"",sortColumn:I,q:C,currentPlan:u,perPage:P,page:t.selected+1})),E(t.selected+1)}(t)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},selectableRowsComponent:h,className:"react-dataTable",subHeaderComponent:Object(j.jsx)(v,{plan:u,searchTerm:C,rowsPerPage:P,handleFilter:function(t){w(t),e(Object(d.getData)({q:t,sort:x,role:"",sortColumn:I,status:"",currentPlan:u,page:A,perPage:P}))},handlePerPage:function(t){var a=parseInt(t.currentTarget.value);e(Object(d.getData)({sort:x,role:"",sortColumn:I,status:"",q:C,perPage:a,currentPlan:u,page:A})),_(a)},handlePlanChange:function(t){p(t),e(Object(d.getData)({sort:x,role:t,sortColumn:I,status:"",q:C,currentPlan:u,page:A,perPage:P}))}})})})})}}}]);
//# sourceMappingURL=59.8cc8e39f.chunk.js.map