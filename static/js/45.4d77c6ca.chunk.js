(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[45,146],{1203:function(e,t,a){},377:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(2),o=a(16),i=a(85),r=a(772),l=a(757),d=a(761),s=a(5),u=a(220),p=a(1201),b=(a(1203),a(263)),j=a(362),f=a(86),h=a(0);t.default=function(e){var t,a,m=e.lookupMode,g=void 0!==m&&m,O=e.lookupMode_fieldName,x=void 0===O?"":O,_=e.lookupMode_dropdown,k=void 0!==_&&_,v=e.lookupMode_isMulti,M=void 0!==v&&v,y=e.lookupMode_onChange,S=e.lookupMode_defaultValue,D=(e.lookupMode_isM2MDefValFromGrid,Object(i.a)().t),N=Object(o.b)(),w=Object(o.c)((function(e){return e[j.storeName]})),C=Object(c.useState)(""),T=Object(n.a)(C,2),F=T[0];T[1];Object(c.useEffect)((function(){var e;j.getApiSummaryData&&(0===(null===(e=w.dataSummary)||void 0===e?void 0:e.length)||!w.isLoadingSummary&&j.getAlwaysGrid)&&N(Object(j.getSummaryData)({}))}),[N,null===(t=w.dataSummary)||void 0===t?void 0:t.length]);var L=["primary","success","warning","danger","info","secondary"];return k?Object(h.jsx)(d.default,{lookupMode_fieldName:x,lookupMode_onChange:y,lookupMode_defaultValue:S,lookupMode_isMulti:M,lookupMode_isM2MDefValFromGrid:!0}):Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)("div",{className:"content-header row",children:!g&&Object(h.jsx)(b.a,{title:D(j.pageTitle),data:[{title:D("App Setting")},{title:D(j.pageTitle)}]})}),Object(h.jsxs)("div",{className:"app-user-list",children:[!g&&j.getApiSummaryData&&Object(h.jsx)(s.S,{children:null===(a=w.dataSummary)||void 0===a?void 0:a.map((function(e,t){var a;return Object(h.jsx)(s.t,{children:Object(h.jsx)(u.a,{color:L[t],statTitle:"".concat(D(e.title)),icon:e.icon?Object(h.jsx)(p.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:e.icon}):Object(h.jsx)(p.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:"lightbulb"}),renderStats:w.isLoadingSummary?Object(h.jsx)(f.a,{sx:{bgcolor:"#eef2f8"},animation:"wave",height:25,width:40,className:"fw-bolder mb-75"}):Object(h.jsx)("h3",{className:"fw-bolder mb-75",children:null!==(a=e.count_format)&&void 0!==a?a:e.count})})})}))}),j.isTreeLayout?Object(h.jsx)(l.default,{searchString:F,lookupMode:g,lookupMode_fieldName:x,lookupMode_defaultValue:S,lookupMode_onChange:y,lookupMode_isMulti:M,lookupMode_isM2MDefValFromGrid:!0}):Object(h.jsx)(r.default,{lookupMode:g,lookupMode_fieldName:x,lookupMode_defaultValue:S,lookupMode_onChange:y,lookupMode_isMulti:M,lookupMode_isM2MDefValFromGrid:!0})]})]})}},757:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(6),o=a(7),i=a.n(o),r=a(2),l=a(85),d=a(42),s=a(365),u=a(13),p=a(362),b=(a(190),a(16)),j=(a(170),a(171),a(82),a(242)),f=a(317),h=a(321),m=a(64),g=(a(481),a(33)),O=a(24),x=a(5),_=a(43),k=a.n(_),v=a(49),M=a.n(v),y=(a(94),a(105),a(221)),S=a(47),D=a(0),N=M()(k.a);t.default=function(e){var t=e.searchString,a=e.lookupMode,o=e.lookupMode_fieldName,_=e.lookupMode_defaultValue,k=e.lookupMode_onChange,v=e.lookupMode_isMulti,M=e.lookupMode_isM2MDefValFromGrid,w=Object(b.b)(),C=Object(b.c)((function(e){return e[p.storeName]})),T=Object(l.a)().t,F=Object(r.useState)(!1),L=Object(c.a)(F,2),A=L[0],V=L[1],G=Object(r.useContext)(d.a),B=Object(r.useState)(!1),E=Object(c.a)(B,2),z=(E[0],E[1]),I=Object(r.useState)("Please Wait"),P=Object(c.a)(I,2),J=(P[0],P[1]),q=Object(r.useState)(!1),R=Object(c.a)(q,2),W=R[0],Z=R[1],Q=Object(r.useState)(null),U=Object(c.a)(Q,2),Y=U[0],H=U[1],K=Object(r.useState)(null),X=Object(c.a)(K,2),$=X[0],ee=X[1],te=Object(r.useState)(0),ae=Object(c.a)(te,2),ne=ae[0],ce=ae[1],oe=Object(r.useState)(null),ie=Object(c.a)(oe,2),re=(ie[0],ie[1]),le=Object(r.useContext)(g.a).colors,de=function(){var e=Object(n.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.fire({title:"".concat(T("Are you sure?")),text:"".concat(T("You won't be able to revert")," ").concat(T(p.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(T("Yes, Delete")," ").concat(T(p.pageTitle),"!"),cancelButtonText:"".concat(T("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:e.sent.value&&(J("".concat(T("Deleting")," Data ").concat(T(p.pageTitle))),z(!0),w(Object(p.deleteData)(t)).then((function(e){"fulfilled"===e.meta.requestStatus?(z(!1),O.b.success("".concat(T("Successfully deleted")," ").concat(T(p.pageTitle)),{style:{padding:"16px",color:le.success.main,border:"1px solid ".concat(le.success.main)},iconTheme:{primary:le.success.main}})):"rejected"===e.meta.requestStatus&&(z(!1),O.b.error(e.payload.message,{style:{padding:"16px",color:le.danger.main,border:"1px solid ".concat(le.danger.main)},iconTheme:{primary:le.danger.main}}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;ee(e),H("add"),V(!A),Z(!W),Object(u.z)(ue)},ue=function(){V(!A),Z(!W),Object(u.G)()},pe=function(e){w(Object(p.setDataList)(e))},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];J("".concat(T("Updating")," ").concat(T(p.pageTitle)," Data")),t&&(e.notReload=!0);var a=e.title;w(Object(p.putData)(e,t)).then((function(e){"fulfilled"===e.meta.requestStatus?O.b.success("".concat(T("Successfully Updated")," ").concat(T(p.pageTitle)," ").concat(a),{style:{padding:"16px",color:le.success.main,border:"1px solid ".concat(le.success.main)},iconTheme:{primary:le.success.main}}):"rejected"===e.meta.requestStatus&&O.b.error(e.payload.message,{style:{padding:"16px",color:le.danger.main,border:"1px solid ".concat(le.danger.main)},iconTheme:{primary:le.danger.main}})}))},je=function(e,t){var a=JSON.parse(JSON.stringify(t));a.forEach((function t(a){e.includes(a.id)&&(a.checked=!0,a.hidden=!0),Array.isArray(a.children)&&a.children.forEach(t)})),w(Object(p.setDataList)(a))};return Object(r.useEffect)((function(){(0===C.data.length||!C.isLoading&&p.getAlwaysGrid)&&(J("".concat(T("Loading Data")," ").concat(T(p.pageTitle))),w(Object(p.getDataList)({})).then((function(e){a&&M&&je(_,e.payload.data)}))),C.data.length>0&&M&&a&&je(_,C.data)}),[w,C.data.length]),Object(D.jsxs)(r.Fragment,{children:[Object(D.jsx)(m.a,{blocking:C.isLoading,loader:Object(D.jsx)(S.b,{}),children:Object(D.jsx)(x.l,{className:"overflow-hidden",children:Object(D.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(D.jsx)("div",{style:{height:a?350:800,margin:a?10:20},children:Object(D.jsx)(y.a,{treeData:C.data,onChange:pe,onMoveNode:a?null:function(e){e.treeData;var t=e.node,a=e.nextParentNode,n=(e.prevPath,e.prevTreeIndex,e.nextPath,e.nextTreeIndex,{id:t.id,title:t.title,parent_id:a.is_app_header?null:a.id});be(n,!0)},canDrag:!a&&function(e){return!e.node.is_app_header},searchMethod:function(e){var t=e.node,a=e.searchQuery;return a&&t.title.toLowerCase().indexOf(a.toLowerCase())>-1},searchQuery:t,searchFocusOffset:ne,searchFinishCallback:function(e){re(e.length),ce(e.length>0?ne%e.length:0)},maxDepth:4,generateNodeProps:function(e){var t=e.node;e.path;return{style:{fontSize:t.is_app_header?"16px":"14px",fontWeight:t.is_app_header?"bold":"normal"},title:t.icon?Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{style:{paddingLeft:t.is_app_header?0:10,fontWeight:t.is_app_header?"bold":400},children:t.title})}):Object(D.jsx)("div",{style:{fontWeight:t.is_app_header?"bold":400},children:t.title}),buttons:[G.can("post",sessionStorage.getItem("current_page_perm"))&&!a?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(x.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-primary",id:"btn-edit",onClick:function(e){se(t)},children:Object(D.jsx)(j.a,{size:16})}),Object(D.jsx)(x.Z,{placement:"left",target:"btn-edit",children:T("Add Child")})]}):null,!G.can("update",sessionStorage.getItem("current_page_perm"))||a||t.is_app_header?null:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(x.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-info",id:"btn-edit",onClick:function(e){var a;e.preventDefault(),a=t,H("edit"),p.detailFromGrid?(J("".concat(T("Loading")," ").concat(T("Detail")," ").concat(T("Data")," ").concat(T(p.pageTitle))),z(!0),w(Object(p.setDataById)(a)).then((function(){z(!1),Z(!0)}))):(J("".concat(T("Loading")," ").concat(T("Detail")," ").concat(T("Data")," ").concat(T(p.pageTitle))),z(!0),w(Object(p.getDataById)(a.id)).then((function(e){"rejected"===e.meta.requestStatus?(z(!1),O.b.error(e.payload.message,{style:{padding:"16px",color:le.danger.main,border:"1px solid ".concat(le.danger.main)},iconTheme:{primary:le.danger.main}})):(z(!1),Z(!0))})))},children:Object(D.jsx)(f.a,{size:16})}),Object(D.jsx)(x.Z,{placement:"left",target:"btn-edit",children:T("Edit")})]}),!G.can("delete",sessionStorage.getItem("current_page_perm"))||a||t.is_app_header?null:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(x.i.Ripple,{id:"btn-delete",className:"btn-icon rounded-circle",color:"flat-danger",onClick:function(e){e.preventDefault(),de(t.id)},children:Object(D.jsx)(h.a,{size:16})}),Object(D.jsx)(x.Z,{placement:"left",target:"btn-delete",children:T("Delete")})]}),a&&!t.is_app_header?Object(D.jsx)("div",{className:t.hidden?"form-check form-check-secondary":"form-check form-check-primary",children:Object(D.jsx)(x.B,{disabled:t.hidden,defaultChecked:t.checked,onChange:function(e){return function(e,t,a,n){var c=JSON.parse(JSON.stringify(C.data));return c.forEach((function a(n){n.id===t&&(n.checked=e.target.checked),Array.isArray(n.children)&&n.children.forEach(a)})),pe(c),k(t,a,n)}(e,t.id,o,v)},type:"checkbox",id:"checkbox-".concat(t.id)})}):null]}}})})})})}),W&&Object(D.jsx)(s.default,{formState:Y,show:W,setShow:se,detailPage:!1,setFormState:H,currentData:$})]})}},761:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(16),o=a(85),i=(a(1203),a(13)),r=a(12),l=a.n(r),d=a(78),s=a(362),u=a(0);t.default=function(e){var t,a=e.lookupMode_fieldName,r=void 0===a?"":a,p=e.lookupMode_isMulti,b=void 0!==p&&p,j=e.lookupMode_onChange,f=e.lookupMode_defaultValue,h=(Object(o.a)().t,Object(c.b)()),m=Object(c.c)((function(e){return e[s.storeName]}));return Object(n.useEffect)((function(){(0===m.data.length||!m.isLoading&&s.getAlwaysGrid)&&h(Object(s.getDataList)({}))}),[h,m.data.length]),Object(u.jsx)(n.Fragment,{children:Object(u.jsx)(d.a,{theme:i.H,defaultValue:b?f:m.dataDropdown.filter((function(e){return e.value===f})),isMulti:b,onChange:function(e){return j(e,r)},options:m.dataDropdown,className:l()("react-select",{"is-invalid":null===(null===(t=m.selectedData)||void 0===t?void 0:t.id)}),classNamePrefix:"select"})})}}}]);
//# sourceMappingURL=45.4d77c6ca.chunk.js.map