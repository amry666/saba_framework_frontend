(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[79],{758:function(e,t,a){"use strict";a.r(t),a.d(t,"getData",(function(){return c})),a.d(t,"getSummaryData",(function(){return i})),a.d(t,"addRole",(function(){return d})),a.d(t,"updateRole",(function(){return l})),a.d(t,"deleteRole",(function(){return p})),a.d(t,"rolesSlice",(function(){return f})),a.d(t,"selectRole",(function(){return m}));var r=a(9),n=a(7),s=a.n(n),u=a(18),o=a(44),c=Object(u.b)("role/getData",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.ssoAxiosInterceptor.get("/api/role",{params:t});case 2:return a=e.sent,e.abrupt("return",{data:a.data.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i=Object(u.b)("role/getSummaryData",function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,o.a.ssoAxiosInterceptor.get("/api/role/summary",{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d=Object(u.b)("roles/addRole",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,e.next=3,o.a.ssoAxiosInterceptor.post("/api/role",{role:t});case 3:return e.next=5,r(c(n().roles.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),l=Object(u.b)("roles/updateRole",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,n=t.name,u=a.dispatch,i=a.getState,e.next=4,o.a.ssoAxiosInterceptor.post("/apps/roles/update-role",{id:r,name:n});case 4:return e.next=6,u(c(i().roles.params));case 6:return e.abrupt("return",{id:r,name:n});case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),p=Object(u.b)("roles/deleteRole",function(){var e=Object(r.a)(s.a.mark((function e(t,a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,e.next=3,o.a.ssoAxiosInterceptor.delete("/apps/roles/delete",{id:t});case 3:return e.next=5,r(c(n().roles.params));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),f=Object(u.c)({name:"roles",initialState:{crudTitle:"Roles",statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],selected:null},reducers:{selectRole:function(e,t){null===t.payload?e.selected=null:e.selected=t.payload}},extraReducers:function(e){e.addCase(c.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(c.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,e.data=t.payload.data})).addCase(c.rejected,(function(e,t){e.status="failed",e.isLoading=!1,e.error=t.error.message})).addCase(i.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(i.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(i.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message}))}}),m=f.actions.selectRole;t.default=f.reducer}}]);
//# sourceMappingURL=79.2c882124.chunk.js.map