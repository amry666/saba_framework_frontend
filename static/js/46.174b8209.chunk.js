(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[46,64,147],{1207:function(e,t,a){},378:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(2),o=a(16),i=a(81),r=(a(775),a(760)),l=a(764),s=a(5),d=a(190),u=a(1204),b=(a(1207),a(263)),p=a(188),h=a(87),j=a(0);t.default=function(e){var t,a,m=e.lookupMode,f=void 0!==m&&m,g=e.lookupMode_fieldName,O=void 0===g?"":g,x=e.lookupMode_dropdown,v=void 0!==x&&x,_=e.lookupMode_isMulti,y=void 0!==_&&_,k=e.lookupMode_onChange,M=e.lookupMode_defaultValue,S=(e.lookupMode_isM2MDefValFromGrid,Object(i.a)().t),D=Object(o.b)(),N=Object(o.c)((function(e){return e[p.storeName]})),w=Object(c.useState)(""),C=Object(n.a)(w,2),T=C[0],F=C[1];Object(c.useEffect)((function(){var e;p.getApiSummaryData&&(0===(null===(e=N.dataSummary)||void 0===e?void 0:e.length)||!N.isLoadingSummary&&p.getAlwaysGrid)&&D(Object(p.getSummaryData)({}))}),[D,null===(t=N.dataSummary)||void 0===t?void 0:t.length]);var L=["primary","success","warning","danger","info","secondary"];return v?Object(j.jsx)(l.default,{lookupMode_fieldName:O,lookupMode_onChange:k,lookupMode_defaultValue:M,lookupMode_isMulti:y,lookupMode_isM2MDefValFromGrid:!0}):Object(j.jsxs)(c.Fragment,{children:[Object(j.jsxs)("div",{className:"content-header row",children:[!f&&Object(j.jsx)(b.a,{title:S(p.pageTitle),data:[{title:S("App Setting")},{title:S(p.pageTitle)}]}),Object(j.jsx)("div",{className:"content-header-right text-md-end col-md col-12 mb-2 ",children:Object(j.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(j.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[S("Search"),":"]}),Object(j.jsx)(s.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:T,onChange:function(e){return t=e.target.value,void F(t);var t}})]})})]}),Object(j.jsxs)("div",{className:"app-user-list",children:[!f&&p.getApiSummaryData&&Object(j.jsx)(s.U,{children:null===(a=N.dataSummary)||void 0===a?void 0:a.map((function(e,t){var a;return Object(j.jsx)(s.t,{children:Object(j.jsx)(d.a,{color:L[t],statTitle:"".concat(S(e.title)),icon:e.icon?Object(j.jsx)(u.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:e.icon}):Object(j.jsx)(u.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:"lightbulb"}),renderStats:N.isLoadingSummary?Object(j.jsx)(h.a,{sx:{bgcolor:"#eef2f8"},animation:"wave",height:25,width:40,className:"fw-bolder mb-75"}):Object(j.jsx)("h3",{className:"fw-bolder mb-75",children:null!==(a=e.count_format)&&void 0!==a?a:e.count})})})}))}),Object(j.jsx)(r.default,{searchString:T,lookupMode:f,lookupMode_fieldName:O,lookupMode_defaultValue:M,lookupMode_onChange:k,lookupMode_isMulti:y,lookupMode_isM2MDefValFromGrid:!0})]})]})}},760:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(6),o=a(7),i=a.n(o),r=a(2),l=a(81),s=a(42),d=a(368),u=a(11),b=a(188),p=a(17),h=(a(189),a(16)),j=(a(169),a(170),a(84),a(243)),m=a(319),f=a(323),g=a(64),O=(a(755),a(34)),x=a(25),v=a(5),_=a(43),y=a.n(_),k=a(49),M=a.n(k),S=(a(94),a(105),a(264)),D=a(47),N=a(0),w=M()(y.a);t.default=function(e){var t=e.searchString,a=e.lookupMode,o=e.lookupMode_fieldName,_=e.lookupMode_defaultValue,y=e.lookupMode_onChange,k=e.lookupMode_isMulti,M=e.lookupMode_isM2MDefValFromGrid,C=Object(h.b)(),T=Object(h.c)((function(e){return e[b.storeName]})),F=Object(l.a)().t,L=Object(r.useState)(!1),A=Object(c.a)(L,2),V=A[0],B=A[1],G=Object(r.useContext)(s.a),E=Object(r.useState)(!1),I=Object(c.a)(E,2),z=(I[0],I[1]),P=Object(r.useState)("Please Wait"),J=Object(c.a)(P,2),q=(J[0],J[1]),R=Object(r.useState)(!1),W=Object(c.a)(R,2),U=W[0],Q=W[1],Y=Object(r.useState)(null),H=Object(c.a)(Y,2),K=H[0],X=H[1],Z=Object(r.useState)(null),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ae=Object(r.useState)(0),ne=Object(c.a)(ae,2),ce=ne[0],oe=ne[1],ie=Object(r.useState)(null),re=Object(c.a)(ie,2),le=(re[0],re[1]),se=Object(r.useContext)(O.a).colors,de=function(){var e=Object(n.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.fire({title:"".concat(F("Are you sure?")),text:"".concat(F("You won't be able to revert")," ").concat(F(b.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(F("Yes, Delete")," ").concat(F(b.pageTitle),"!"),cancelButtonText:"".concat(F("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:e.sent.value&&(q("".concat(F("Deleting")," Data ").concat(F(b.pageTitle))),z(!0),C(Object(b.deleteData)(t)).then((function(e){"fulfilled"===e.meta.requestStatus?(z(!1),x.b.success("".concat(F("Successfully deleted")," ").concat(F(b.pageTitle)),{style:{padding:"16px",color:se.success.main,border:"1px solid ".concat(se.success.main)},iconTheme:{primary:se.success.main}})):"rejected"===e.meta.requestStatus&&(z(!1),x.b.error(e.payload.message,{style:{padding:"16px",color:se.danger.main,border:"1px solid ".concat(se.danger.main)},iconTheme:{primary:se.danger.main}}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;te(e),X("add"),B(!V),Q(!U),Object(u.z)(be)},be=function(){B(!V),Q(!U),Object(u.G)()},pe=function(e){C(Object(b.setDataList)(e))},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];q("".concat(F("Updating")," ").concat(F(b.pageTitle)," Data")),t&&(e.notReload=!0);var a=e.title;C(Object(b.putData)(e,t)).then((function(e){"fulfilled"===e.meta.requestStatus?x.b.success("".concat(F("Successfully Updated")," ").concat(F(b.pageTitle)," ").concat(a),{style:{padding:"16px",color:se.success.main,border:"1px solid ".concat(se.success.main)},iconTheme:{primary:se.success.main}}):"rejected"===e.meta.requestStatus&&x.b.error(e.payload.message,{style:{padding:"16px",color:se.danger.main,border:"1px solid ".concat(se.danger.main)},iconTheme:{primary:se.danger.main}})}))},je=function(e,t){var a=JSON.parse(JSON.stringify(t));a.forEach((function t(a){e.includes(a.id)&&(a.checked=!0,a.hidden=!0),Array.isArray(a.children)&&a.children.forEach(t)})),C(Object(b.setDataList)(a))};return Object(r.useEffect)((function(){(0===T.status&&0===T.data.length||!T.isLoading&&b.getAlwaysGrid)&&(q("".concat(F("Loading Data")," ").concat(F(b.pageTitle))),C(Object(b.getDataList)({})).then((function(e){a&&M&&je(_,e.payload.data)}))),T.data,T.data.length>0&&M&&a&&je(_,T.data)}),[T.data]),Object(N.jsxs)(r.Fragment,{children:[Object(N.jsx)(g.a,{blocking:T.isLoading,loader:Object(N.jsx)(D.b,{}),children:Object(N.jsx)(v.l,{className:"overflow-hidden",children:Object(N.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(N.jsx)("div",{style:{height:a?350:800,margin:a?10:20},children:Object(N.jsx)(S.a,{treeData:T.data,onChange:pe,onMoveNode:a?null:function(e){e.treeData;var t=e.node,a=e.nextParentNode,n=(e.prevPath,e.prevTreeIndex,e.nextPath,e.nextTreeIndex),c={id:t.id,title:t.title,parent_id:null!==a&&void 0!==a&&a.is_app_header?null:a.id,index:null!==n&&void 0!==n?n:1};he(c,!0)},canDrag:!a&&function(e){var t;return null===(t=e.node)||void 0===t||!t.is_app_header},searchMethod:function(e){var t=e.node,a=e.searchQuery,n=t.title.toLowerCase(),c=F(t.title).toLowerCase();return a&&n.indexOf(a)>-1||a&&c.indexOf(a)>-1},searchQuery:t,searchFocusOffset:ce,searchFinishCallback:function(e){le(e.length),oe(e.length>0?ce%e.length:0)},maxDepth:4,generateNodeProps:function(e){var t,n=e.node;e.path;return{style:{fontSize:n.is_app_header?"16px":"14px",fontWeight:n.is_app_header?"bold":"normal"},title:Object(N.jsxs)(r.Fragment,{children:[n.is_app_header?Object(N.jsx)("img",{className:"me-1",src:n.logo,width:"30",height:"25"}):n.is_separator?null:n.icon?Object(N.jsxs)("div",{children:[Object(p.renderIcon)(n.icon,"",24)," "]}):Object(N.jsx)("div",{style:{fontWeight:n.is_app_header?"bold":400},children:F(n.title)}),Object(N.jsx)("div",{style:{paddingLeft:n.is_app_header?0:10,fontWeight:n.is_app_header||n.is_separator?"bold":400,textTransform:n.is_separator?"uppercase":"",color:n.is_separator?"#a6a4b0":"inherit"},children:F(n.title)})]}),buttons:[G.can("post",sessionStorage.getItem("current_page_perm"))&&!a?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(v.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-primary",id:"btn-edit",onClick:function(e){ue(n)},children:Object(N.jsx)(j.a,{size:16})}),Object(N.jsx)(v.cb,{placement:"left",target:"btn-edit",children:F("Add Child")})]}):null,!G.can("update",sessionStorage.getItem("current_page_perm"))||a||n.is_app_header?null:Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(v.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-info",id:"btn-edit",onClick:function(e){var t;e.preventDefault(),te(t=n),X("edit"),b.detailFromGrid?(q("".concat(F("Loading")," ").concat(F("Detail")," ").concat(F("Data")," ").concat(F(b.pageTitle))),z(!0),C(Object(b.setDataById)(t)).then((function(){z(!1),Q(!0)}))):(q("".concat(F("Loading")," ").concat(F("Detail")," ").concat(F("Data")," ").concat(F(b.pageTitle))),z(!0),C(Object(b.getDataById)(t.id)).then((function(e){"rejected"===e.meta.requestStatus?(z(!1),x.b.error(e.payload.message,{style:{padding:"16px",color:se.danger.main,border:"1px solid ".concat(se.danger.main)},iconTheme:{primary:se.danger.main}})):(z(!1),Q(!0))})))},children:Object(N.jsx)(m.a,{size:16})}),Object(N.jsx)(v.cb,{placement:"left",target:"btn-edit",children:F("Edit")})]}),G.can("delete",sessionStorage.getItem("current_page_perm"))&&!a&&!n.is_app_header&&!(null!==(t=n.children)&&void 0!==t&&t.length)>0?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(v.i.Ripple,{id:"btn-delete",className:"btn-icon rounded-circle",color:"flat-danger",onClick:function(e){e.preventDefault(),de(n.id)},children:Object(N.jsx)(f.a,{size:16})}),Object(N.jsx)(v.cb,{placement:"left",target:"btn-delete",children:F("Delete")})]}):null,a&&!n.is_app_header?Object(N.jsx)("div",{className:n.hidden?"form-check form-check-secondary":"form-check form-check-primary",children:Object(N.jsx)(v.B,{disabled:n.hidden,defaultChecked:n.checked,onChange:function(e){return function(e,t,a,n){var c=JSON.parse(JSON.stringify(T.data));return c.forEach((function a(n){n.id===t&&(n.checked=e.target.checked),Array.isArray(n.children)&&n.children.forEach(a)})),pe(c),y(t,a,n)}(e,n.id,o,k)},type:"checkbox",id:"checkbox-".concat(n.id)})}):null]}}})})})})}),U&&Object(N.jsx)(d.default,{formState:K,show:U,setShow:ue,detailPage:!1,setFormState:X,currentData:ee})]})}},764:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(16),o=a(81),i=(a(1207),a(11)),r=a(12),l=a.n(r),s=a(82),d=a(188),u=a(0);t.default=function(e){var t,a=e.lookupMode_fieldName,r=void 0===a?"":a,b=e.lookupMode_isMulti,p=void 0!==b&&b,h=e.lookupMode_onChange,j=e.lookupMode_defaultValue,m=(Object(o.a)().t,Object(c.b)()),f=Object(c.c)((function(e){return e[d.storeName]}));return Object(n.useEffect)((function(){(0===f.data.length||!f.isLoading&&d.getAlwaysGrid)&&m(Object(d.getDataList)({}))}),[m,f.data.length]),Object(u.jsx)(n.Fragment,{children:Object(u.jsx)(s.a,{theme:i.H,defaultValue:p?j:f.dataDropdown.filter((function(e){return e.value===j})),isMulti:p,onChange:function(e){return h(e,r)},options:f.dataDropdown,className:l()("react-select",{"is-invalid":null===(null===(t=f.selectedData)||void 0===t?void 0:t.id)}),classNamePrefix:"select"})})}}}]);
//# sourceMappingURL=46.174b8209.chunk.js.map