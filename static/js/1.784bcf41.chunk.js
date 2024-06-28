(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[1,21,27,79],{361:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"storeName",(function(){return l})),a.d(t,"endpointName",(function(){return p})),a.d(t,"serverSideGrid",(function(){return f})),a.d(t,"detailFromGrid",(function(){return m})),a.d(t,"getAlwaysGrid",(function(){return b})),a.d(t,"getApiAfterPut",(function(){return j})),a.d(t,"getApiAfterPost",(function(){return g})),a.d(t,"getApiAfterDelete",(function(){return v})),a.d(t,"getApiSummaryData",(function(){return y})),a.d(t,"detailPage",(function(){return h})),a.d(t,"getSummaryData",(function(){return O})),a.d(t,"getDataList",(function(){return x})),a.d(t,"getDataById",(function(){return D})),a.d(t,"resetSelectedData",(function(){return S})),a.d(t,"postData",(function(){return L})),a.d(t,"putData",(function(){return A})),a.d(t,"deleteData",(function(){return C})),a.d(t,"deleteSelectedRowData",(function(){return E})),a.d(t,"setDataById",(function(){return w})),a.d(t,"resetData",(function(){return _})),a.d(t,"StoreSlice",(function(){return U}));var r=a(9),n=a(7),s=a.n(n),d=a(18),i=a(44),u=a(57),c=i.a.ssoAxiosInterceptor,o="Role",l="apps_role",p="api/role",f=!1,m=!1,b=!1,j=!0,g=!0,v=!0,y=!0,h=!0,O=Object(d.b)("".concat(p,"/getSummaryData"),function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,c.get("/".concat(p,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(d.b)("".concat(p,"/getDataList"),function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,c.get("/".concat(p),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=Object(d.b)("".concat(p,"/getDataById"),function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.rejectWithValue,e.prev=1,e.next=4,c.get("/".concat(p,"/").concat(t));case 4:return n=e.sent,e.abrupt("return",n.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),S=Object(d.b)("".concat(p,"/resetSelectedData"),function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(d.b)("".concat(p,"/postData"),function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,d,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,c.post("/".concat(p),t);case 4:return i=e.sent,r(S({})),g&&r(x(n()[l].params)),r(Object(u.resetData)({})),e.abrupt("return",i.data);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(d.b)("".concat(p,"/putData"),function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,d,i,o,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,d=a.getState,i=a.rejectWithValue,o=null!==(r=t.id)&&void 0!==r?r:d()[l].selectedData.id,t.name=d()[l].selectedData.name,e.prev=3,e.next=6,c.put("/".concat(p,"/").concat(o),t);case 6:return f=e.sent,n(S({})),j&&(n(x(d()[l].params)),y&&n(O({}))),n(Object(u.resetData)({})),e.abrupt("return",f.data);case 13:return e.prev=13,e.t0=e.catch(3),e.abrupt("return",i(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,a){return e.apply(this,arguments)}}()),C=Object(d.b)("".concat(p,"/deleteData"),function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,d,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,c.delete("/".concat(p,"/").concat(t));case 4:if(i=e.sent,!v){e.next=9;break}return e.next=8,r(x(n()[l].params));case 8:y&&r(O({}));case 9:return r(Object(u.resetData)({})),e.abrupt("return",i.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(d.b)("".concat(p,"/deleteSelectedRowData"),function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,d,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,c.delete("/".concat(p),{data:t});case 4:if(i=e.sent,!v){e.next=9;break}return e.next=8,r(x(n()[l].params));case 8:y&&r(O({}));case 9:return r(Object(u.resetData)({})),e.abrupt("return",i.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),w=Object(d.b)("".concat(p,"/setDataById"),function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.rejectWithValue,e.abrupt("return",r(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),_=Object(d.b)("".concat(p,"/resetData"),function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U=Object(d.c)({name:l,initialState:{pageTitle:o,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(O.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(O.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(O.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(x.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(x.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:"".concat(e.name)}})),e.selectedData={value:t.payload.data[0].id,label:"".concat(t.payload.data[0].name)}),e.params=t.payload.params,e.total=t.payload.total})).addCase(x.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(A.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(A.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(L.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(L.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(L.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(C.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(C.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(C.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(E.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(E.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(E.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(D.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(D.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(D.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(S.rejected,(function(e){e.selectedData=null})).addCase(w.rejected,(function(e,t){e.selectedData=t.payload})).addCase(_.rejected,(function(e){e.data=[],e.dataSummary=[]}))}});t.default=U.reducer},363:function(e,t,a){"use strict";a.r(t),a.d(t,"getSummaryData",(function(){return c})),a.d(t,"getData",(function(){return o})),a.d(t,"getUser",(function(){return l})),a.d(t,"addUser",(function(){return p})),a.d(t,"updateUser",(function(){return f})),a.d(t,"deleteUser",(function(){return m})),a.d(t,"getDataEmployee",(function(){return b})),a.d(t,"appUsersSlice",(function(){return j}));var r=a(9),n=a(7),s=a.n(n),d=a(18),i=a(44),u=a(361),c=Object(d.b)("appUsers/getSummaryData",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,i.a.ssoAxiosInterceptor.get("/api/user/summary",{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o=Object(d.b)("appUsers/getData",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,i.a.ssoAxiosInterceptor.get("/api/user",{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,totalPages:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),l=Object(d.b)("appUsers/getUser",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.ssoAxiosInterceptor.get("/api/user/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(d.b)("appUsers/addUser",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,i.a.ssoAxiosInterceptor.post("/api/user",t);case 4:return e.sent,e.next=7,r(o(n().users.params));case 7:return r(Object(u.resetData)({})),e.abrupt("return",t);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),f=Object(d.b)("appUsers/updateUser",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,d,p,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,d=a.rejectWithValue,p=t.id,delete t.id,e.prev=3,e.next=6,i.a.ssoAxiosInterceptor.put("/api/user/".concat(p),t);case 6:return f=e.sent,r(l(p)),r(o(n().users.params)),r(c({})),r(Object(u.resetData)({})),e.abrupt("return",f.data);case 14:return e.prev=14,e.t0=e.catch(3),e.abrupt("return",d(e.t0.response.data.errors));case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t,a){return e.apply(this,arguments)}}()),m=Object(d.b)("appUsers/deleteUser",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,d,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,d=a.rejectWithValue,e.prev=1,e.next=4,i.a.ssoAxiosInterceptor.delete("/api/user/".concat(t));case 4:return l=e.sent,e.next=7,r(o(n().users.params));case 7:return r(c({})),r(Object(u.resetData)({})),e.abrupt("return",l.data);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",d(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}()),b=Object(d.b)("appUsers/getDataEmployee",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,i.a.hrAxiosInterceptor.get("/Employee",{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,totalPages:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(d.c)({name:"appUsers",initialState:{crudTitle:"User",statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},status_employee:0,isLoading_employee:!1,error_employee:0,data_employee:[],total_employee:1,params_employee:{},statusDetail:0,isLoadingDetail:!1,errorDetail:0,selectedUser:null,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(c.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(c.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(c.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(o.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(o.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,e.data=t.payload.data,e.params=t.payload.params,e.total=t.payload.totalPages})).addCase(o.rejected,(function(e,t){e.status="failed",e.isLoading=!1,e.error=t.error.message})).addCase(b.pending,(function(e){e.status_employee="loading",e.isLoading_employee=!0})).addCase(b.fulfilled,(function(e,t){e.status_employee="succeeded",e.isLoading_employee=!1,e.data_employee=t.payload.data,e.params_employee=t.payload.params,e.total_employee=t.payload.totalPages})).addCase(b.rejected,(function(e,t){e.status_employee="failed",e.isLoading_employee=!1,e.error_employee=t.error.message})).addCase(f.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(f.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(f.rejected,(function(e,t){e.statusAddEdit="failed",e.isLoadingAddEdit=!1,"object"===typeof t.payload?e.errorAddEdit=JSON.stringify(t.payload):e.errorAddEdit=t.payload.message})).addCase(p.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(p.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(p.rejected,(function(e,t){console.log(t),t.payload.errors?e.errorAddEdit=Object.values(t.payload.errors):t.payload.error_reason&&(e.errorAddEdit=t.payload.message),e.statusAddEdit="failed",e.isLoadingAddEdit=!1})).addCase(m.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(m.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(m.rejected,(function(e,t){e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=t.payload.message})).addCase(l.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0,e.selectedUser=null})).addCase(l.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedUser=t.payload})).addCase(l.rejected,(function(e,t){e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedUser=null,e.errorDetail=t.error.message}))}});t.default=j.reducer},375:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(6),s=a(2),d=a(33),i=a(25),u=a(5),c=a(81),o=a(64),l=a(755),p=(a(95),a(102),a(34)),f=a(11),m=a(12),b=a.n(m),j=a(43),g=a.n(j),v=a(82),y=a(49),h=a.n(y),O=a(46),x=a(363),D=a(167),S=a(757),L=a(16),A=a(0);h()(g.a);t.default=function(e){var t,a,m,j,g=e.show,y=e.setShow,h=e.detailPage,C=Object(s.useState)([]),E=Object(n.a)(C,2),w=(E[0],E[1],Object(s.useState)([])),_=Object(n.a)(w,2),U=_[0],k=_[1],N=Object(s.useState)(null),V=Object(n.a)(N,2),I=V[0],R=V[1],P=Object(s.useState)([]),W=Object(n.a)(P,2),B=W[0],J=W[1],F=Object(s.useState)(!1),T=Object(n.a)(F,2),G=(T[0],T[1]),H=Object(c.a)().t,X=Object(d.g)().id,q=Object(L.b)(),M=Object(L.c)((function(e){return e.users})),Y=Object(L.c)((function(e){return e.units})),z=Object(L.c)((function(e){return e.roles})),K=Object(s.useContext)(p.a).colors,Q=Object(s.useState)(M.selectedUser),Z=Object(n.a)(Q,2),$=Z[0],ee=Z[1],te=Object(O.e)({defaultValues:{username:null===$||void 0===$?void 0:$.username,name:null===$||void 0===$?void 0:$.name,phone:null!==(t=null===$||void 0===$?void 0:$.phone)&&void 0!==t?t:""}}),ae=te.reset,re=te.control,ne=te.setError,se=te.handleSubmit,de=te.formState.errors,ie=function(){return Object(A.jsxs)(s.Fragment,{children:[Object(A.jsx)(l.a,{}),Object(A.jsxs)(u.r,{className:"mb-0 mt-1 text-white",children:[H("Please Wait"),"..."]})]})};return Object(s.useEffect)((function(){ee(M.selectedUser),0!==Y.data.length||Y.isLoading||(q(Object(D.getUnits)()),ee(M.selectedUser)),0!==(null===z||void 0===z?void 0:z.data.length)||z.isLoading||q(Object(S.getData)()),0!==(null===M||void 0===M?void 0:M.data_employee.length)||M.isLoading_employee||(q(Object(x.getDataEmployee)({length:200})),M.data_employee&&null!==$&&void 0!==$&&$.id_employee&&J(M.data_employee.filter((function(e){return e.id===(null===$||void 0===$?void 0:$.id_employee)})).map((function(e){var t;return{value:e.id,label:"".concat(e.FirstName," ").concat(null!==(t=null===e||void 0===e?void 0:e.LastName)&&void 0!==t?t:"")}})))),R(null===$||void 0===$?void 0:$.id_role)}),[]),Object(A.jsx)(u.G,{isOpen:g,toggle:function(){return y(!g)},className:"modal-dialog-centered modal-lg",children:Object(A.jsxs)(o.a,{blocking:(M.isLoadingAddEdit||M.isLoadingDetail)&&!M.selectedUser,loader:Object(A.jsx)(ie,{}),children:[Object(A.jsx)(u.J,{className:"bg-transparent",toggle:function(){return y(!g)}}),Object(A.jsxs)(u.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(A.jsxs)("div",{className:"text-center mb-2",children:[Object(A.jsxs)("h1",{className:"mb-1",children:[H("Edit")," ",H("User Information")]}),Object(A.jsx)("p",{children:H("Updating user details will receive a privacy audit.")})]}),Object(A.jsx)(u.y,{onSubmit:se((function(e){if(function(e){var t,a=null!==$.member_of?null===$||void 0===$?void 0:$.member_of.map((function(e){return{value:e.id,label:e.name}})):[],r=$.name!==e.name||$.username!==e.username||(null!==(t=$.phone)&&void 0!==t?t:"")!==e.phone||JSON.stringify(a)!==JSON.stringify(U)||I!==$.id_role;return G(!0),r}(e))if(Object.values(e).every((function(e){return e.length>0||""===e})))""===e.phone&&delete e.phone,e.id=null!==X&&void 0!==X?X:$.id,e.id_role=I,e.id_employee=null===B||void 0===B?void 0:B.id,e.member_of=U,q(Object(x.updateUser)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(y(!g),i.b.success("".concat(H("Successfully Updated Data")),{style:{padding:"16px",color:K.success.main,border:"1px solid ".concat(K.success.main)},iconTheme:{primary:K.success.main}}),h&&q(Object(x.getUser)(X))):"rejected"===e.meta.requestStatus&&i.b.error(JSON.stringify(e.payload),{style:{padding:"16px",color:K.danger.main,border:"1px solid ".concat(K.danger.main)},iconTheme:{primary:K.danger.main}})}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&ne(t,{type:"manual"})}else Object(i.b)("".concat(H("You haven't changed anything")),{icon:"\ud83d\udc4f"})})),children:Object(A.jsxs)(u.U,{className:"gy-1 pt-75",children:[Object(A.jsxs)(u.t,{md:12,xs:12,children:[Object(A.jsx)(u.E,{className:"form-label",for:"name",children:H("Full Name")}),Object(A.jsx)(O.a,{defaultValue:"",control:re,id:"name",name:"name",render:function(e){var t=e.field;return Object(A.jsx)(u.B,Object(r.a)(Object(r.a)({},t),{},{id:"name",placeholder:"John",invalid:de.name&&!0}))}})]}),Object(A.jsxs)(u.t,{md:6,xs:12,children:[Object(A.jsxs)(u.E,{className:"form-label",for:"username",children:[H("Username"),":"]}),Object(A.jsx)(O.a,{defaultValue:"",control:re,id:"username",name:"username",render:function(e){var t=e.field;return Object(A.jsx)(u.B,Object(r.a)(Object(r.a)({},t),{},{id:"username",placeholder:"john.doe.007",invalid:de.username&&!0}))}})]}),Object(A.jsxs)(u.t,{md:6,xs:12,children:[Object(A.jsxs)(u.E,{className:"form-label",for:"email",children:[H("Email"),":"]}),Object(A.jsx)(u.B,{type:"email",id:"email",disabled:!0,defaultValue:null===$||void 0===$?void 0:$.email,placeholder:"example@domain.com"})]}),Object(A.jsxs)(u.t,{md:6,xs:12,children:[Object(A.jsx)(u.E,{className:"form-label",for:"phone",children:H("Contact")}),Object(A.jsx)(O.a,{defaultValue:"",control:re,id:"phone",name:"phone",render:function(e){var t=e.field;return Object(A.jsx)(u.B,Object(r.a)(Object(r.a)({},t),{},{value:(null===$||void 0===$?void 0:$.phone)||"",id:"phone",placeholder:"+62 813 940 10XX X"}))}})]}),Object(A.jsxs)(u.t,{md:6,xs:12,children:[Object(A.jsx)(u.E,{className:"form-label",for:"id_role",children:H("Role")}),Object(A.jsx)(v.a,{id:"id_role",theme:f.H,defaultValue:z.data.filter((function(e){return e.id===(null===$||void 0===$?void 0:$.id_role)})).map((function(e){return{value:e.id,label:e.name}})),onChange:function(e){R(e.value)},options:z.data.map((function(e){return{value:e.id,label:e.name}})),className:b()("react-select",{"is-invalid":null===I}),classNamePrefix:"select"})]}),Object(A.jsxs)(u.t,{md:12,xs:12,children:[Object(A.jsx)(u.E,{className:"form-label",for:"id_employee",children:H("Employee")}),Object(A.jsx)(v.a,{id:"id_employee",isClearable:!0,isLoading:M.isLoading_employee,theme:f.H,defaultValue:null!==(a=M.data_employee.filter((function(e){return e.id===(null===$||void 0===$?void 0:$.id_employee)})).map((function(e){var t;return{value:e.id,label:"".concat(e.FirstName," ").concat(null!==(t=null===e||void 0===e?void 0:e.LastName)&&void 0!==t?t:"")}})))&&void 0!==a?a:"",onChange:function(e){var t;t=e,J(Array.isArray(t)?t.map((function(e){return e.value})):[])},options:M.data_employee.map((function(e){var t;return{value:e.id,label:"".concat(e.FirstName," ").concat(null!==(t=null===e||void 0===e?void 0:e.LastName)&&void 0!==t?t:"")}})),className:"react-select",classNamePrefix:"select"})]}),Object(A.jsxs)(u.t,{md:12,xs:12,children:[Object(A.jsx)(u.E,{className:"form-label",for:"member_of",children:H("Unit")}),Object(A.jsx)(v.a,{id:"member_of",isClearable:!1,theme:f.H,closeMenuOnSelect:!1,defaultValue:null!==(m=M.selectedUser)&&void 0!==m&&m.member_of?null===(j=M.selectedUser)||void 0===j?void 0:j.member_of.map((function(e){return{value:e.id,label:e.name}})):[],onChange:function(e){var t;t=e,k(Array.isArray(t)?t.map((function(e){return e.value})):[])},isMulti:!0,options:Y.data.map((function(e){return{value:e.id,label:e.name}})).filter((function(e){return""!==e.value})),className:"react-select",classNamePrefix:"select"})]}),Object(A.jsxs)(u.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(A.jsx)(u.i,{type:"submit",className:"me-1",color:"primary",children:H("Submit")}),Object(A.jsx)(u.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){ae({username:null===$||void 0===$?void 0:$.username,name:null===$||void 0===$?void 0:$.name}),y(!1)},children:H("Cancel")})]})]})})]})]})})}},757:function(e,t,a){"use strict";a.r(t),a.d(t,"getData",(function(){return u})),a.d(t,"getSummaryData",(function(){return c})),a.d(t,"addRole",(function(){return o})),a.d(t,"updateRole",(function(){return l})),a.d(t,"deleteRole",(function(){return p})),a.d(t,"rolesSlice",(function(){return f})),a.d(t,"selectRole",(function(){return m}));var r=a(9),n=a(7),s=a.n(n),d=a(18),i=a(44),u=Object(d.b)("role/getData",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.ssoAxiosInterceptor.get("/api/role",{params:t});case 2:return a=e.sent,e.abrupt("return",{data:a.data.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c=Object(d.b)("role/getSummaryData",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,i.a.ssoAxiosInterceptor.get("/api/role/summary",{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o=Object(d.b)("roles/addRole",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,e.next=3,i.a.ssoAxiosInterceptor.post("/api/role",{role:t});case 3:return e.next=5,r(u(n().roles.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),l=Object(d.b)("roles/updateRole",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,d,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,n=t.name,d=a.dispatch,c=a.getState,e.next=4,i.a.ssoAxiosInterceptor.post("/apps/roles/update-role",{id:r,name:n});case 4:return e.next=6,d(u(c().roles.params));case 6:return e.abrupt("return",{id:r,name:n});case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),p=Object(d.b)("roles/deleteRole",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,e.next=3,i.a.ssoAxiosInterceptor.delete("/apps/roles/delete",{id:t});case 3:return e.next=5,r(u(n().roles.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),f=Object(d.c)({name:"roles",initialState:{crudTitle:"Roles",statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],selected:null},reducers:{selectRole:function(e,t){null===t.payload?e.selected=null:e.selected=t.payload}},extraReducers:function(e){e.addCase(u.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(u.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,e.data=t.payload.data})).addCase(u.rejected,(function(e,t){e.status="failed",e.isLoading=!1,e.error=t.error.message})).addCase(c.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(c.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(c.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message}))}}),m=f.actions.selectRole;t.default=f.reducer}}]);
//# sourceMappingURL=1.784bcf41.chunk.js.map