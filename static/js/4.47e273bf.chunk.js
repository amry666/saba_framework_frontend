(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[4,22],{1293:function(e,t,a){"use strict";var n=a(156);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(157)),c=a(0),s=(0,r.default)((0,c.jsx)("path",{d:"m14 12-2 2-2-2 2-2 2 2zm-2-6 2.12 2.12 2.5-2.5L12 1 7.38 5.62l2.5 2.5L12 6zm-6 6 2.12-2.12-2.5-2.5L1 12l4.62 4.62 2.5-2.5L6 12zm12 0-2.12 2.12 2.5 2.5L23 12l-4.62-4.62-2.5 2.5L18 12zm-6 6-2.12-2.12-2.5 2.5L12 23l4.62-4.62-2.5-2.5L12 18z"}),"Api");t.default=s},1294:function(e,t,a){"use strict";var n=a(156);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(157)),c=a(0),s=(0,r.default)((0,c.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"}),"Web");t.default=s},1295:function(e,t,a){"use strict";var n=a(156);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(157)),c=a(0),s=(0,r.default)([(0,c.jsx)("path",{d:"M17 18H7V6h7V1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2v2z"},"0"),(0,c.jsx)("path",{d:"m18 14 5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z"},"1")],"InstallMobile");t.default=s},360:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return u})),a.d(t,"storeName",(function(){return l})),a.d(t,"endpointName",(function(){return p})),a.d(t,"serverSideGrid",(function(){return f})),a.d(t,"detailFromGrid",(function(){return m})),a.d(t,"getAlwaysGrid",(function(){return b})),a.d(t,"getApiAfterPut",(function(){return j})),a.d(t,"getApiAfterPost",(function(){return g})),a.d(t,"getApiAfterDelete",(function(){return v})),a.d(t,"getApiSummaryData",(function(){return O})),a.d(t,"detailPage",(function(){return h})),a.d(t,"dynamicColumns",(function(){return x})),a.d(t,"dynamicForm",(function(){return y})),a.d(t,"getSummaryData",(function(){return D})),a.d(t,"getDataList",(function(){return w})),a.d(t,"getDataById",(function(){return C})),a.d(t,"resetSelectedData",(function(){return S})),a.d(t,"postData",(function(){return L})),a.d(t,"putData",(function(){return N})),a.d(t,"deleteData",(function(){return k})),a.d(t,"deleteSelectedRowData",(function(){return A})),a.d(t,"setDataById",(function(){return E})),a.d(t,"pushCurrentdata",(function(){return _})),a.d(t,"putCurrentdata",(function(){return V})),a.d(t,"updateCurrentdata",(function(){return I})),a.d(t,"StoreSlice",(function(){return P}));var n=a(9),r=a(7),c=a.n(r),s=a(18),i=a(70),o=a(57),d=a(44).a.ssoAxiosInterceptor,u="App",l="apps_app",p="api/app",f=!0,m=!0,b=!1,j=!1,g=!1,v=!0,O=!0,h=!0,x=[],y=[],D=Object(s.b)("".concat(p,"/getSummaryData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,d.get("/".concat(p,"/summary"),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(s.b)("".concat(p,"/getDataList"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.keys(t).forEach((function(e){null!==t[e]&&""!==t[e]||delete t[e]})),e.next=3,d.get("/".concat(p),{params:t});case 3:return a=e.sent,e.abrupt("return",{params:t,data:a.data.data,total:a.data.total});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(s.b)("".concat(p,"/getDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.next=4,d.get("/".concat(p,"/").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.data);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),S=Object(s.b)("".concat(p,"/resetSelectedData"),function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.rejectWithValue,e.abrupt("return",a({}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(s.b)("".concat(p,"/postData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,d.post("/".concat(p),t);case 4:return i=e.sent,n(S({})),n(g?w(r()[l].params):_(i.data)),n(Object(o.resetData)({})),e.abrupt("return",i.data);case 11:return e.prev=11,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",s(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(s.b)("".concat(p,"/putData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,i=r()[l].selectedData.id,e.prev=2,e.next=5,d.put("/".concat(p,"/").concat(i),t);case 5:return u=e.sent,n(S({})),j?(n(w(r()[l].params)),O&&n(D({}))):n(V(u.data)),n(Object(o.resetData)({})),e.abrupt("return",u.data);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",s(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,a){return e.apply(this,arguments)}}()),k=Object(s.b)("".concat(p,"/deleteData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,d.delete("/".concat(p,"/").concat(t));case 4:if(i=e.sent,!v){e.next=9;break}return e.next=8,n(w(r()[l].params));case 8:O&&n(D({}));case 9:return n(Object(o.resetData)({})),e.abrupt("return",i.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),A=Object(s.b)("".concat(p,"/deleteSelectedRowData"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,s=a.rejectWithValue,e.prev=1,e.next=4,d.delete("/".concat(p),{data:t});case 4:if(i=e.sent,!v){e.next=9;break}return e.next=8,n(w(r()[l].params));case 8:O&&n(D({}));case 9:return n(Object(o.resetData)({})),e.abrupt("return",i.data);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",s(e.t0.response.data));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}()),E=Object(s.b)("".concat(p,"/setDataById"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.abrupt("return",n(t));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),_=Object(s.b)("".concat(p,"/pushCurrentdata"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t,a){return e.apply(this,arguments)}}()),V=Object(s.b)("".concat(p,"/putCurrentdata"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t,a){return e.apply(this,arguments)}}()),I=Object(s.b)("".concat(p,"/updateCurrentdata"),function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.rejectWithValue,e.prev=1,e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",n(e.t0.response.data));case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t,a){return e.apply(this,arguments)}}()),P=Object(s.c)({name:l,initialState:{dynamicColumns:x,pageTitle:u,statusSummary:0,isLoadingSummary:!1,errorSummary:0,dataSummary:[],status:0,isLoading:!1,error:0,data:[],total:1,params:{},selectedData:null,dataDropdown:[],statusDetail:0,isLoadingDetail:!1,errorDetail:0,statusAddEdit:0,isLoadingAddEdit:!1,errorAddEdit:0,statusDelete:0,isLoadingDelete:!1,errorDelete:0},reducers:{},extraReducers:function(e){e.addCase(D.pending,(function(e){e.statusSummary="loading",e.isLoadingSummary=!0})).addCase(D.fulfilled,(function(e,t){e.statusSummary="succeeded",e.isLoadingSummary=!1,e.dataSummary=t.payload.data})).addCase(D.rejected,(function(e,t){e.statusSummary="failed",e.isLoadingSummary=!1,e.errorSummary=t.error.message})).addCase(w.pending,(function(e){e.status="loading",e.isLoading=!0})).addCase(w.fulfilled,(function(e,t){e.status="succeeded",e.isLoading=!1,t.payload.data.length>0&&(e.data=t.payload.data,e.dataDropdown=t.payload.data.map((function(e){return{value:e.id,label:"".concat(e.name)}}))),e.params=t.payload.params,e.total=t.payload.total})).addCase(w.rejected,(function(e,t){var a;e.status="failed",e.isLoading=!1,e.error=null===(a=t.error.payload)||void 0===a?void 0:a.message})).addCase(N.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(N.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(N.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(L.pending,(function(e){e.statusAddEdit="loading",e.isLoadingAddEdit=!0})).addCase(L.fulfilled,(function(e){e.statusAddEdit="succeeded",e.isLoadingAddEdit=!1})).addCase(L.rejected,(function(e,t){var a;e.statusAddEdit="failed",e.isLoadingAddEdit=!1,e.errorAddEdit=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(k.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(k.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(k.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(A.pending,(function(e){e.statusDelete="loading",e.isLoadingDelete=!0})).addCase(A.fulfilled,(function(e){e.statusDelete="succeeded",e.isLoadingDelete=!1})).addCase(A.rejected,(function(e,t){var a;e.statusDelete="failed",e.isLoadingDelete=!1,e.errorDelete=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(C.pending,(function(e){e.statusDetail="loading",e.isLoadingDetail=!0})).addCase(C.fulfilled,(function(e,t){e.statusDetail="succeeded",e.isLoadingDetail=!1,e.selectedData=t.payload})).addCase(C.rejected,(function(e,t){var a;e.statusDetail="failed",e.isLoadingDetail=!1,e.selectedData=null,e.errorDetail=null===(a=t.payload)||void 0===a?void 0:a.message})).addCase(S.rejected,(function(e){e.selectedData=null})).addCase(E.rejected,(function(e,t){e.selectedData=t.payload})).addCase(_.fulfilled,(function(e,t){e.data.unshift(t.payload.data)})).addCase(V.fulfilled,(function(e,t){var a=Object(i.a)(e).data.findIndex((function(e){return e.id===parseInt(t.payload.data.id)}));-1!==a&&(e.data[a]=t.payload.data)})).addCase(I.fulfilled,(function(e,t){var a=Object(i.a)(e).data.findIndex((function(e){return e.id===parseInt(t.payload.id)}));-1!==a&&(e.data[a].logo.appLogo=t.payload.file)}))}});t.default=P.reducer},370:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(4),c=a(6),s=a(7),i=a.n(s),o=a(2),d=a(33),u=a(25),l=(a(168),a(5)),p=a(309),f=a(443),m=a(81),b=a(64),j=(a(755),a(102),a(34)),g=a(11),v=a(38),O=a(82),h=(a(137),a(145),a(1262),a(46)),x=a(360),y=a(16),D=a(1293),w=a.n(D),C=a(1294),S=a.n(C),L=a(1295),N=a.n(L),k=a(47),A=a(12),E=a.n(A),_=a(1354),V=a(489),I=a(509),P=a(1613),T=a(0),z={3:180,6:90,8:-90};t.default=function(e){var t,a,s,D,C,L,A=e.show,W=e.setShow,R=e.detailPage,F=e.formState,B=e.setFormState,H=Object(m.a)().t,M=Object(d.g)().id,Z=Object(y.b)(),q=Object(y.c)((function(e){return e[x.storeName]})),G=Object(o.useContext)(j.a).colors,J=Object(o.useState)(""),U=Object(c.a)(J,2),Q=U[0],Y=U[1],X=Object(o.useState)(""),K=Object(c.a)(X,2),$=K[0],ee=K[1],te=Object(o.useState)(""),ae=Object(c.a)(te,2),ne=ae[0],re=ae[1],ce=Object(o.useState)(""),se=Object(c.a)(ce,2),ie=se[0],oe=se[1],de=Object(o.useState)("Please Wait"),ue=Object(c.a)(de,2),le=(ue[0],ue[1]),pe=Object(o.useState)(null),fe=Object(c.a)(pe,2),me=fe[0],be=fe[1],je=Object(o.useState)({x:0,y:0}),ge=Object(c.a)(je,2),ve=ge[0],Oe=ge[1],he=Object(o.useState)(0),xe=Object(c.a)(he,2),ye=xe[0],De=xe[1],we=Object(o.useState)(1),Ce=Object(c.a)(we,2),Se=Ce[0],Le=Ce[1],Ne=Object(o.useState)(null),ke=Object(c.a)(Ne,2),Ae=ke[0],Ee=ke[1],_e=Object(h.e)({}),Ve=_e.control,Ie=_e.setError,Pe=_e.handleSubmit,Te=_e.formState.errors,ze=v.o.Option,We=[{value:"service",label:"Service",icon:Object(T.jsx)(w.a,{className:"me-1",sixe:32})},{value:"web",label:"Web App",icon:Object(T.jsx)(S.a,{className:"me-1",sixe:32})},{value:"mobile",label:"Mobile App",icon:Object(T.jsx)(N.a,{className:"me-1",sixe:32})}],Re=function(e){return Object(T.jsxs)(ze,Object(r.a)(Object(r.a)({},e),{},{children:[Object(T.jsx)("img",{className:"me-1",src:e.data.icon,style:{width:36},alt:e.data.label}),e.data.label]}))},Fe=[{value:"python",label:"Python",icon:"https://logos-download.com/wp-content/uploads/2016/10/Python_logo_wordmark.png"},{value:"javascript",label:"Javascript",icon:"https://javascriptsu.files.wordpress.com/2020/12/js.jpg"}],Be=[{value:"react",label:"React",icon:"https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"},{value:"angular",label:"Angular",icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQgREvN-e1uVZXVDc2w_zLeey0Li4buQ26gF0ZmCYxaBMoybo4uQTncS3Z5WxHRyZNfA&usqp=CAU"},{value:"flask",label:"Flask",icon:"https://miro.medium.com/max/1079/1*nvtdCw77Al6LgV8wt_ma6Q.png"},{value:"flutter",label:"Flutter",icon:"https://png.pngitem.com/pimgs/s/480-4803274_google-flutter-hd-png-download.png"}],He=function(e){if("edit"===F){var t=Object(r.a)({},Object(g.I)(q.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(Object(g.I)(t))!==JSON.stringify(Object(g.I)(e))}return!0},Me=function(e){var t=e.target.value.replace(/[^a-zA-Z0-9 ]/g,"").replaceAll(" ","_").toLowerCase();Y(t)},Ze=function(){var e=Object(n.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!He(t)){e.next=14;break}if(!Object.values(t).every((function(e){return null!==e&&""!==e}))){e.next=11;break}if(!me.includes("data:image/png;base64")&&0===ve&&ye==={x:0,y:0}){e.next=7;break}return e.next=5,Object(V.a)(me,Ae,ye);case 5:a=e.sent,t.logo={appLogo:a};case 7:le("".concat(H("Updating")," ").concat(H(x.pageTitle)," ").concat(H("Detail")," Data")),Z(Object(x.putData)(t)).then((function(e){"fulfilled"===e.meta.requestStatus?(W(!A),u.b.success("".concat(H("Successfully Updated")," ").concat(H(x.pageTitle)),{style:{padding:"16px",color:G.success.main,border:"1px solid ".concat(G.success.main)},iconTheme:{primary:G.success.main}}),R&&Z(Object(x.getDataById)(M))):"rejected"===e.meta.requestStatus&&u.b.error(e.payload.message,{style:{padding:"16px",color:G.danger.main,border:"1px solid ".concat(G.danger.main)},iconTheme:{primary:G.danger.main}})})),e.next=12;break;case 11:for(n in t)0===(null===(r=t[n])||void 0===r?void 0:r.length)&&Ie(n,{type:"manual"});case 12:e.next=15;break;case 14:Object(u.b)("".concat(H("You haven't changed anything")),{icon:"\ud83d\udc4f"});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),qe=function(){var e=Object(n.a)(i.a.mark((function e(t){var a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a={}).name=t.name,a.code=Q,a.info={description:t.description,appType:$,programming_language:{main_language:ne,language_others:[],framework:ie,framework_ver:null,dependencies:[]}},a.logo={appLogo:"https://res.cloudinary.com/insaba/image/upload/v1661262584/app/insaba_starterkit_services/logo.png",favicon:"https://res.cloudinary.com/insaba/image/upload/v1661262584/app/insaba_starterkit_services/favicon.png"},!me){e.next=11;break}return e.next=8,Object(V.a)(me,Ae,ye);case 8:n=e.sent,console.log("donee",{croppedImage:n}),a.logo.appLogo=n;case 11:if(Object.values(a).every((function(e){return null!==e&&""!==e})))le("".concat(H("Creating a New ".concat(x.pageTitle)))),Z(Object(x.postData)(a)).then((function(e){"fulfilled"===e.meta.requestStatus?(W(!A),u.b.success("".concat(H("Successfully Created")," ").concat(H(x.pageTitle)),{style:{padding:"16px",color:G.success.main,border:"1px solid ".concat(G.success.main)},iconTheme:{primary:G.success.main}}),R&&Z(Object(x.getDataById)(M))):"rejected"===e.meta.requestStatus&&u.b.error(e.payload.message,{style:{padding:"16px",color:G.danger.main,border:"1px solid ".concat(G.danger.main)},iconTheme:{primary:G.danger.main}})}));else for(r in a)null!==a[r]&&0===(null===(c=a[r])||void 0===c?void 0:c.length)&&Ie(r,{type:"manual"});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ge=function(){Z(Object(x.resetSelectedData)())},Je=Object(p.b)({multiple:!1,onDrop:function(e){var t=e[0];Ke(t)}}),Ue=Je.getRootProps,Qe=Je.getInputProps,Ye=Object(o.useCallback)((function(e,t){Ee(t)}),[]);function Xe(e){return new Promise((function(t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)}),!1),a.readAsDataURL(e)}))}var Ke=function(){var e=Object(n.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xe(t);case 2:return a=e.sent,e.next=5,Object(_.getOrientation)(t);case 5:if(n=e.sent,!(r=z[n])){e.next=11;break}return e.next=10,Object(V.b)(a,r);case 10:a=e.sent;case 11:be(a);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){var e;"edit"===F&&be(null!==(e=q.selectedData.logo.appLogo)&&void 0!==e?e:null)}),[]),Object(T.jsx)(l.G,{isOpen:A,toggle:function(){Ge(),W(!A)},className:"modal-dialog-centered modal-lg",children:Object(T.jsxs)(b.a,{blocking:q.isLoadingAddEdit||q.isLoadingDetail,loader:Object(T.jsx)(k.b,{}),children:[Object(T.jsx)(l.J,{className:"bg-transparent",toggle:function(){Ge(),W(!A)}}),Object(T.jsxs)(l.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(T.jsx)("div",{className:"text-center mb-2",children:Object(T.jsxs)("h2",{className:"mb-1",children:[H("edit"===F?"Edit":"Add")," ",H(x.pageTitle)]})}),Object(T.jsx)(l.y,{onSubmit:Pe("edit"===F?Ze:qe),children:Object(T.jsxs)(l.U,{className:"gy-1 pt-75",children:[Object(T.jsx)(l.t,{md:8,xs:12,children:Object(T.jsxs)(l.U,{children:[Object(T.jsxs)(l.t,{md:12,xs:12,className:"mb-1",children:[Object(T.jsxs)(l.E,{className:"form-label",for:"name",children:[H("App Name"),Object(T.jsx)("span",{className:"text-danger",children:"*"})]}),Object(T.jsx)(h.a,{defaultValue:null!==(t=null===(a=q.selectedData)||void 0===a?void 0:a.name)&&void 0!==t?t:"",control:Ve,id:"name",name:"name",render:function(e){var t=e.field;return Object(T.jsx)(l.B,Object(r.a)(Object(r.a)({},t),{},{className:Te.name?"form-control is-invalid":"form-control",onInput:Me,id:"name",invalid:Te.name&&!0}))}})]}),Object(T.jsxs)(l.t,{md:12,xs:12,className:"mb-1",children:[Object(T.jsxs)(l.E,{className:"form-label",for:"code",children:[H("Code"),Object(T.jsx)("span",{className:"text-danger",children:"*"})]}),Object(T.jsx)(h.a,{defaultValue:null!==(s=null===(D=q.selectedData)||void 0===D?void 0:D.code)&&void 0!==s?s:Q,control:Ve,id:"code",name:"code",render:function(e){var t,a,n=e.field;return Object(T.jsx)(l.B,Object(r.a)(Object(r.a)({disabled:!0,readOnly:!0},n),{},{value:null!==(t=null===(a=q.selectedData)||void 0===a?void 0:a.code)&&void 0!==t?t:Q,className:Te.code?"form-control is-invalid":"form-control",id:"code",invalid:Te.code&&!0}))}})]}),Object(T.jsxs)(l.t,{md:12,xs:12,className:"mb-1",children:[Object(T.jsx)(l.E,{className:"form-label",for:"appType",children:H("App Type")}),Object(T.jsx)(O.a,{id:"appType",theme:g.H,defaultValue:We.filter((function(e){var t,a;return e.value===(null===(t=q.selectedData)||void 0===t||null===(a=t.info)||void 0===a?void 0:a.appType)})),onChange:function(e){ee(e.value)},options:We,components:{Option:function(e){return Object(T.jsxs)(ze,Object(r.a)(Object(r.a)({},e),{},{children:[e.data.icon,e.data.label]}))}},className:E()("react-select",{"is-invalid":null===$}),classNamePrefix:"select"})]})]})}),Object(T.jsx)(l.t,{md:4,xs:12,children:Object(T.jsxs)(l.m,{style:{padding:0,margin:"auto"},className:"text-center",children:[me&&Object(T.jsx)("div",{className:"crop-container2",children:Object(T.jsx)(I.a,{image:me,crop:ve,rotation:ye,zoom:Se,aspect:1,showGrid:!1,onCropChange:Oe,onRotationChange:De,onCropComplete:Ye,onZoomChange:Le,restrictPosition:!1,objectFit:"vertical-cover"})}),me?null:Object(T.jsxs)("div",Object(r.a)(Object(r.a)({},Ue({className:"dropzone"})),{},{children:[Object(T.jsx)("input",Object(r.a)({},Qe())),Object(T.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-column",children:[Object(T.jsx)(f.a,{size:64}),Object(T.jsx)("h5",{children:H("Drop Files here or click to upload")}),Object(T.jsxs)("p",{className:"text-secondary",children:[H("Drop files here or click")," ",Object(T.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:H("browse")})," ",H("through your machine")]})]})]})),me?Object(T.jsxs)(o.Fragment,{children:[Object(T.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[Object(T.jsx)("div",{style:{width:"95px"},className:"d-flex flex-column me-1",children:Object(T.jsx)("span",{children:H("Zoom")})}),Object(T.jsx)(P.a,{value:Se,min:1,max:3,step:.1,"aria-labelledby":"Zoom",onChange:function(e,t){return Le(t)}})]}),Object(T.jsxs)("div",{className:"d-flex justify-content-left align-items-center  mb-1",children:[Object(T.jsx)("div",{style:{width:"95px"},className:"d-flex flex-column me-1",children:Object(T.jsx)("span",{children:H("Rotation")})}),Object(T.jsx)(P.a,{value:ye,min:0,max:360,step:1,"aria-labelledby":"Rotation",onChange:function(e,t){return De(t)}})]}),Object(T.jsx)("div",{className:"d-flex justify-content-center",children:Object(T.jsx)(l.i,{color:"danger",outline:!0,onClick:function(e){be(null)},children:H("Change")})})]}):null]})}),Object(T.jsxs)(l.t,{md:12,xs:12,children:[Object(T.jsx)(l.E,{className:"form-label",for:"main_language",children:H("Programming Language")}),Object(T.jsx)(O.a,{id:"main_language",theme:g.H,defaultValue:Fe.filter((function(e){var t,a,n;return e.value===(null===(t=q.selectedData)||void 0===t||null===(a=t.info)||void 0===a||null===(n=a.programming_language)||void 0===n?void 0:n.main_language)})),onChange:function(e){re(e.value)},options:Fe,components:{Option:Re},className:"react-select",classNamePrefix:"select"})]}),Object(T.jsxs)(l.t,{md:12,xs:12,children:[Object(T.jsx)(l.E,{className:"form-label",for:"framework",children:H("Framework")}),Object(T.jsx)(O.a,{id:"framework",theme:g.H,defaultValue:Be.filter((function(e){var t,a,n;return e.value===(null===(t=q.selectedData)||void 0===t||null===(a=t.info)||void 0===a||null===(n=a.programming_language)||void 0===n?void 0:n.framework)})),onChange:function(e){oe(e.value)},options:Be,components:{Option:Re},className:"react-select",classNamePrefix:"select"})]}),Object(T.jsxs)(l.t,{md:12,xs:12,children:[Object(T.jsxs)(l.E,{className:"form-label",for:"description",children:[H("Description"),Object(T.jsx)("span",{className:"text-danger"})]}),Object(T.jsx)(h.a,{defaultValue:null!==(C=null===(L=q.selectedData)||void 0===L?void 0:L.name)&&void 0!==C?C:"",control:Ve,id:"description",name:"description",render:function(e){var t=e.field;return Object(T.jsx)(l.B,Object(r.a)(Object(r.a)({},t),{},{type:"textarea",className:"form-control",id:"description"}))}})]}),Object(T.jsxs)(l.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(T.jsx)(l.i,{type:"submit",className:"me-1",color:"primary",children:H("Submit")}),Object(T.jsx)(l.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){Ge(),B("add"),W(!1)},children:H("Cancel")})]})]})})]})]})})}}}]);
//# sourceMappingURL=4.47e273bf.chunk.js.map