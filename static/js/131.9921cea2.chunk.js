(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[131,78],{369:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(6),r=a(2),i=a(33),o=a(25),l=(a(168),a(441)),s=a(116),d=a(5),u=a(81),b=a(65),j=(a(756),a(102),a(34)),p=a(11),m=a(82),h=(a(137),a(145),a(1263),a(46)),f=a(188),O=a(16),g=a(47),x=a(12),v=a.n(x),y=a(19),_=a(50),S=a(53),N=a(1254),w=a(1251),D=a(1250),k=a(1202),C=a(0),T=["onChange","maxRows","minRows","style","value"];function E(e){return parseInt(e,10)||0}var P={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function I(e){return void 0===e||null===e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}var R=r.forwardRef((function(e,t){var a=e.onChange,n=e.maxRows,i=e.minRows,o=void 0===i?1:i,l=e.style,s=e.value,d=Object(_.a)(e,T),u=r.useRef(null!=s).current,b=r.useRef(null),j=Object(N.a)(t,b),p=r.useRef(null),m=r.useRef(0),h=r.useState({outerHeightStyle:0}),f=Object(c.a)(h,2),O=f[0],g=f[1],x=r.useCallback((function(){var t=b.current,a=Object(w.a)(t).getComputedStyle(t);if("0px"===a.width)return{outerHeightStyle:0};var c=p.current;c.style.width=a.width,c.value=t.value||e.placeholder||"x","\n"===c.value.slice(-1)&&(c.value+=" ");var r=a.boxSizing,i=E(a.paddingBottom)+E(a.paddingTop),l=E(a.borderBottomWidth)+E(a.borderTopWidth),s=c.scrollHeight;c.value="x";var d=c.scrollHeight,u=s;return o&&(u=Math.max(Number(o)*d,u)),n&&(u=Math.min(Number(n)*d,u)),{outerHeightStyle:(u=Math.max(u,d))+("border-box"===r?i+l:0),overflow:Math.abs(u-s)<=1}}),[n,o,e.placeholder]),v=function(e,t){var a=t.outerHeightStyle,n=t.overflow;return m.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==n)?(m.current+=1,{overflow:n,outerHeightStyle:a}):e},R=r.useCallback((function(){var e=x();I(e)||g((function(t){return v(t,e)}))}),[x]);r.useEffect((function(){var e,t=Object(D.a)((function(){m.current=0,b.current&&function(){var e=x();I(e)||S.flushSync((function(){g((function(t){return v(t,e)}))}))}()})),a=b.current,n=Object(w.a)(a);return n.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t)).observe(a),function(){t.clear(),n.removeEventListener("resize",t),e&&e.disconnect()}})),Object(k.a)((function(){R()})),r.useEffect((function(){m.current=0}),[s]);return Object(C.jsxs)(r.Fragment,{children:[Object(C.jsx)("textarea",Object(y.a)({value:s,onChange:function(e){m.current=0,u||R(),a&&a(e)},ref:j,rows:o,style:Object(y.a)({height:O.outerHeightStyle,overflow:O.overflow?"hidden":void 0},l)},d)),Object(C.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:p,tabIndex:-1,style:Object(y.a)({},P,l,{paddingTop:0,paddingBottom:0})})]})})),M=a(17),B=a(261),F=a(262),L=function(e){var t=e.htmlFor;return Object(C.jsxs)(d.E,{className:"form-check-label",htmlFor:t,children:[Object(C.jsx)("span",{className:"switch-icon-left",children:Object(C.jsx)(l.a,{size:14})}),Object(C.jsx)("span",{className:"switch-icon-right",children:Object(C.jsx)(s.a,{size:14})})]})};t.default=function(e){var t,a,l,s,x,y,_,S,N,w=e.show,D=e.setShow,k=e.detailPage,T=e.formState,E=e.setFormState,P=e.currentData,I=void 0===P?null:P,z=Object(u.a)().t,H=Object(i.g)().id,V=Object(O.b)(),q=Object(O.c)((function(e){return e[f.storeName]})),A=Object(r.useContext)(j.a).colors,J=Object(r.useState)("Please Wait"),W=Object(c.a)(J,2),G=(W[0],W[1]),U=Object(h.e)({}),Q=U.control,Y=U.setError,Z=U.setValue,K=U.getValues,X=U.handleSubmit,$=U.formState.errors,ee=Object(r.useState)(I.is_separator),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],ce=Object(r.useState)("feather"),re=Object(c.a)(ce,2),ie=re[0],oe=re[1],le=Object(r.useState)(null===I||void 0===I?void 0:I.icon),se=Object(c.a)(le,2),de=se[0],ue=se[1],be=Object(r.useState)("start"),je=Object(c.a)(be,2),pe=je[0],me=je[1],he=Object(r.useState)(!1),fe=Object(c.a)(he,2),Oe=fe[0],ge=fe[1],xe=function(){oe("feather"),me("start"),ge(!Oe)},ve=function(){oe("feather"),me("bottom"),ge(!Oe)},ye=function(e){Z("icon",e),ue(e)},_e=function(){V(Object(f.resetSelectedData)())};return Object(C.jsxs)(d.G,{isOpen:w,toggle:function(){_e(),D(!w)},className:"modal-dialog-centered modal-lg",children:[Object(C.jsxs)(b.a,{blocking:q.isLoadingAddEdit||q.isLoadingDetail,loader:Object(C.jsx)(g.b,{}),children:[Object(C.jsx)(d.J,{className:"bg-transparent",toggle:function(){_e(),D(!w)}}),Object(C.jsxs)(d.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(C.jsxs)("div",{className:"text-center mb-2",children:[Object(C.jsxs)("h2",{className:"mb-1",children:[z("edit"===T?"Edit":"Add Sub")," ",z(f.pageTitle)]}),"edit"!==T&&Object(C.jsxs)("p",{className:"mb-1",children:[z("Child for ")," ",I?z(I.title):""]})]}),Object(C.jsx)(d.y,{onSubmit:X("edit"===T?function(e){if(e.is_separator=ae,e.icon=de,e.parent_id&&(e.parent_id.value>=9e3?(e.id_app=e.parent_id.id_app,e.parent_id=null):e.parent_id=e.parent_id.value),Object.values(e).every((function(e){return null!==e}))||null===e.parent_id)if(ae||""!==e.routePath)G("".concat(z("Updating")," ").concat(z(f.pageTitle)," ").concat(z("Detail")," Data")),V(Object(f.putData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(D(!w),o.b.success("".concat(z("Successfully Updated")," ").concat(z(f.pageTitle)),{style:{padding:"16px",color:A.success.main,border:"1px solid ".concat(A.success.main)},iconTheme:{primary:A.success.main}}),k&&V(Object(f.getDataById)(H))):"rejected"===e.meta.requestStatus&&o.b.error(e.payload.message,{style:{padding:"16px",color:A.danger.main,border:"1px solid ".concat(A.danger.main)},iconTheme:{primary:A.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&Y(t,{type:"manual"})}else for(var n in e){var c;0===(null===(c=e[n])||void 0===c?void 0:c.length)&&Y(n,{type:"manual"})}}:function(e){if(Object.values(e).every((function(e){return null!==e})))if(ae||""!==e.routePath)G("".concat(z("Creating a New ".concat(f.pageTitle)))),I.is_app_header?e.parent_id=null:e.parent_id=I.id,e.id_app=I.id_app,e.is_separator=ae,e.icon=de,V(Object(f.postData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(D(!w),o.b.success("".concat(z("Successfully Created")," ").concat(z(f.pageTitle)),{style:{padding:"16px",color:A.success.main,border:"1px solid ".concat(A.success.main)},iconTheme:{primary:A.success.main}}),k&&V(Object(f.getDataById)(H))):"rejected"===e.meta.requestStatus&&o.b.error(e.payload.message,{style:{padding:"16px",color:A.danger.main,border:"1px solid ".concat(A.danger.main)},iconTheme:{primary:A.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&Y(t,{type:"manual"})}else for(var n in e){var c;null!==e[n]&&0===(null===(c=e[n])||void 0===c?void 0:c.length)&&Y(n,{type:"manual"})}}),children:Object(C.jsxs)(d.U,{className:"gy-1 pt-75",children:[Object(C.jsxs)(d.t,{md:6,xs:12,children:[Object(C.jsxs)(d.E,{className:"form-label",for:"title",children:[z("Title"),Object(C.jsx)("span",{className:"text-danger",children:"*"})]}),Object(C.jsx)(h.a,{defaultValue:null!==(t=null===(a=q.selectedData)||void 0===a?void 0:a.title)&&void 0!==t?t:"",control:Q,id:"title",name:"title",render:function(e){var t=e.field;return Object(C.jsx)(d.B,Object(n.a)(Object(n.a)({},t),{},{className:$.title?"form-control is-invalid":"form-control",id:"title",invalid:$.title&&!0}))}})]}),!ae&&Object(C.jsxs)(d.t,{md:4,xs:8,className:"text-center",children:[Object(C.jsxs)(d.E,{className:"form-label",for:"icon",children:[z("Icon"),Object(C.jsx)("span",{className:"text-danger",children:"*"})]}),Object(C.jsx)("div",{}),Object(C.jsx)(h.a,{defaultValue:null!==(l=null===(s=q.selectedData)||void 0===s?void 0:s.icon)&&void 0!==l?l:"",control:Q,id:"icon",name:"icon",render:function(e){var t,a,c=e.field;return Object(C.jsxs)(d.C,{children:[Object(C.jsx)(d.B,Object(n.a)(Object(n.a)({},c),{},{className:$.icon?"form-control is-invalid":"form-control",onChange:function(e){var t=e.target.value;c.onChange(t),ue(t)},id:"icon",invalid:$.icon&&!0})),Object(C.jsx)(d.i.Ripple,{className:"btn-icon",outline:!0,color:"secondary",onClick:ve,children:Object(M.renderIcon)(null!==(t=null!==(a=K().icon)&&void 0!==a?a:de)&&void 0!==t?t:"material:highlight_alt","fw-bold",16)})]})}})]}),Object(C.jsxs)(d.t,{className:" d-grid justify-content-center",md:2,xs:4,children:[Object(C.jsx)(d.E,{className:"form-label",for:"is_separator",children:z("Separator")}),Object(C.jsxs)("div",{style:{marginTop:"4px"},className:"form-switch form-check-primary mx-auto",children:[Object(C.jsx)(d.B,{type:"switch",defaultChecked:ae,onChange:function(e){!function(e){ne(e.target.checked),e.target.checked}(e)},id:"icon-primary",name:"icon-primary"}),Object(C.jsx)(L,{htmlFor:"icon-primary"})]})]}),Object(C.jsxs)(d.t,{md:6,xs:12,children:[Object(C.jsx)(d.E,{className:"form-label",for:"parent_id",children:z("Parent Menu")}),Object(C.jsx)(h.a,{defaultValue:null!==(x=q.dataDropdown.filter((function(e){return e.value===("edit"===T?null===I||void 0===I?void 0:I.parent_id:null===I||void 0===I?void 0:I.id)})))&&void 0!==x?x:"",control:Q,id:"parent_id",name:"parent_id",render:function(e){var t,a=e.field;return Object(C.jsx)(m.a,Object(n.a)(Object(n.a)({},a),{},{id:"parent_id",theme:p.H,defaultValue:q.dataDropdown.filter((function(e){return e.value===("edit"===T?null===I||void 0===I?void 0:I.parent_id:null===I||void 0===I?void 0:I.id)})),isDisabled:"add"===T,options:q.dataDropdown.filter((function(e){var t;return e.value!==(null===(t=q.selectedData)||void 0===t?void 0:t.id)})).map((function(e){return Object(n.a)(Object(n.a)({},e),{},{label:z(e.title)})})),className:v()("react-select",{"is-invalid":null===(null===(t=q.selectedData)||void 0===t?void 0:t.parent_id)}),classNamePrefix:"select"}))}})]}),!ae&&Object(C.jsxs)(d.t,{md:6,xs:12,children:[Object(C.jsxs)(d.E,{className:"form-label",for:"subject",children:[z("Route Path"),Object(C.jsx)("span",{className:"text-danger",children:"*"})]}),Object(C.jsx)(h.a,{defaultValue:null!==(y=null===(_=q.selectedData)||void 0===_?void 0:_.routePath)&&void 0!==y?y:"",control:Q,id:"routePath",name:"routePath",render:function(e){var t=e.field;return Object(C.jsx)(d.B,Object(n.a)(Object(n.a)({},t),{},{className:$.routePath?"form-control is-invalid":"form-control",id:"routePath",invalid:$.routePath&&!0}))}})]}),Object(C.jsxs)(d.t,{md:12,xs:12,children:[Object(C.jsx)(d.E,{className:"form-label",for:"description",children:z("Description")}),Object(C.jsx)(h.a,{defaultValue:null!==(S=null===(N=q.selectedData)||void 0===N?void 0:N.description)&&void 0!==S?S:"",control:Q,id:"description",name:"description",render:function(e){var t=e.field;return Object(C.jsx)(R,Object(n.a)(Object(n.a)({},t),{},{className:"form-control",id:"description"}))}})]}),Object(C.jsxs)(d.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(C.jsx)(d.i,{type:"submit",className:"me-1",color:"primary",children:z("Submit")}),Object(C.jsx)(d.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){_e(),E("add"),D(!1)},children:z("Cancel")})]})]})})]})]}),Object(C.jsxs)(d.O,{direction:pe,isOpen:Oe,toggle:xe,children:[Object(C.jsxs)(d.Q,{className:"mb-1 mt-1 me-1",toggle:xe,children:[z("Select")," ",z("Icon"),Object(C.jsx)(d.i.Ripple,{className:"ms-2 me-2",color:"primary",outline:"feather"!==ie,onClick:function(e){oe("feather")},children:"Feather Icon"}),Object(C.jsx)(d.i.Ripple,{color:"primary",outline:"material"!==ie,onClick:function(e){oe("material")},children:"Material Icon"})]}),Object(C.jsx)(d.P,{className:v()({"my-auto mx-0 flex-grow-0":"start"===pe||"end"===pe}),children:"feather"===ie?Object(C.jsx)(B.default,{setIcon:ye,setCanvasOpen:ge}):Object(C.jsx)(F.default,{setIcon:ye,setCanvasOpen:ge})})]})]})}},761:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(6),r=a(7),i=a.n(r),o=a(2),l=a(81),s=a(42),d=a(369),u=a(11),b=a(188),j=a(17),p=(a(189),a(16)),m=(a(169),a(170),a(84),a(243)),h=a(320),f=a(324),O=a(65),g=(a(756),a(34)),x=a(25),v=a(5),y=a(43),_=a.n(y),S=a(49),N=a.n(S),w=(a(94),a(106),a(265)),D=a(47),k=a(0),C=N()(_.a);t.default=function(e){var t=e.searchString,a=e.lookupMode,r=e.lookupMode_fieldName,y=e.lookupMode_defaultValue,_=e.lookupMode_onChange,S=e.lookupMode_isMulti,N=e.lookupMode_isM2MDefValFromGrid,T=Object(p.b)(),E=Object(p.c)((function(e){return e[b.storeName]})),P=Object(l.a)().t,I=Object(o.useState)(!1),R=Object(c.a)(I,2),M=R[0],B=R[1],F=Object(o.useContext)(s.a),L=Object(o.useState)(!1),z=Object(c.a)(L,2),H=(z[0],z[1]),V=Object(o.useState)("Please Wait"),q=Object(c.a)(V,2),A=(q[0],q[1]),J=Object(o.useState)(!1),W=Object(c.a)(J,2),G=W[0],U=W[1],Q=Object(o.useState)(null),Y=Object(c.a)(Q,2),Z=Y[0],K=Y[1],X=Object(o.useState)(null),$=Object(c.a)(X,2),ee=$[0],te=$[1],ae=Object(o.useState)(0),ne=Object(c.a)(ae,2),ce=ne[0],re=ne[1],ie=Object(o.useState)(null),oe=Object(c.a)(ie,2),le=(oe[0],oe[1]),se=Object(o.useContext)(g.a).colors,de=function(){var e=Object(n.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.fire({title:"".concat(P("Are you sure?")),text:"".concat(P("You won't be able to revert")," ").concat(P(b.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(P("Yes, Delete")," ").concat(P(b.pageTitle),"!"),cancelButtonText:"".concat(P("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:e.sent.value&&(A("".concat(P("Deleting")," Data ").concat(P(b.pageTitle))),H(!0),T(Object(b.deleteData)(t)).then((function(e){"fulfilled"===e.meta.requestStatus?(H(!1),x.b.success("".concat(P("Successfully deleted")," ").concat(P(b.pageTitle)),{style:{padding:"16px",color:se.success.main,border:"1px solid ".concat(se.success.main)},iconTheme:{primary:se.success.main}})):"rejected"===e.meta.requestStatus&&(H(!1),x.b.error(e.payload.message,{style:{padding:"16px",color:se.danger.main,border:"1px solid ".concat(se.danger.main)},iconTheme:{primary:se.danger.main}}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;te(e),K("add"),B(!M),U(!G),Object(u.z)(be)},be=function(){B(!M),U(!G),Object(u.G)()},je=function(e){T(Object(b.setDataList)(e))},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];A("".concat(P("Updating")," ").concat(P(b.pageTitle)," Data")),t&&(e.notReload=!0);var a=e.title;T(Object(b.putData)(e,t)).then((function(e){"fulfilled"===e.meta.requestStatus?x.b.success("".concat(P("Successfully Updated")," ").concat(P(b.pageTitle)," ").concat(a),{style:{padding:"16px",color:se.success.main,border:"1px solid ".concat(se.success.main)},iconTheme:{primary:se.success.main}}):"rejected"===e.meta.requestStatus&&x.b.error(e.payload.message,{style:{padding:"16px",color:se.danger.main,border:"1px solid ".concat(se.danger.main)},iconTheme:{primary:se.danger.main}})}))},me=function(e,t){var a=JSON.parse(JSON.stringify(t));a.forEach((function t(a){e.includes(a.id)&&(a.checked=!0,a.hidden=!0),Array.isArray(a.children)&&a.children.forEach(t)})),T(Object(b.setDataList)(a))};return Object(o.useEffect)((function(){(0===E.status&&0===E.data.length||!E.isLoading&&b.getAlwaysGrid)&&(A("".concat(P("Loading Data")," ").concat(P(b.pageTitle))),T(Object(b.getDataList)({})).then((function(e){a&&N&&me(y,e.payload.data)}))),E.data,E.data.length>0&&N&&a&&me(y,E.data)}),[E.data]),Object(k.jsxs)(o.Fragment,{children:[Object(k.jsx)(O.a,{blocking:E.isLoading,loader:Object(k.jsx)(D.b,{}),children:Object(k.jsx)(v.l,{className:"overflow-hidden",children:Object(k.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(k.jsx)("div",{style:{height:a?350:800,margin:a?10:20},children:Object(k.jsx)(w.a,{treeData:E.data,onChange:je,onMoveNode:a?null:function(e){e.treeData;var t=e.node,a=e.nextParentNode,n=(e.prevPath,e.prevTreeIndex,e.nextPath,e.nextTreeIndex),c={id:t.id,title:t.title,parent_id:null!==a&&void 0!==a&&a.is_app_header?null:a.id,index:null!==n&&void 0!==n?n:1};pe(c,!0)},canDrag:!a&&function(e){var t;return null===(t=e.node)||void 0===t||!t.is_app_header},searchMethod:function(e){var t=e.node,a=e.searchQuery,n=t.title.toLowerCase(),c=P(t.title).toLowerCase();return a&&n.indexOf(a)>-1||a&&c.indexOf(a)>-1},searchQuery:t,searchFocusOffset:ce,searchFinishCallback:function(e){le(e.length),re(e.length>0?ce%e.length:0)},maxDepth:4,generateNodeProps:function(e){var t,n=e.node;e.path;return{style:{fontSize:n.is_app_header?"16px":"14px",fontWeight:n.is_app_header?"bold":"normal"},title:Object(k.jsxs)(o.Fragment,{children:[n.is_app_header?Object(k.jsx)("img",{className:"me-1",src:n.logo,width:"30",height:"25"}):n.is_separator?null:n.icon?Object(k.jsxs)("div",{children:[Object(j.renderIcon)(n.icon,"",24)," "]}):Object(k.jsx)("div",{style:{fontWeight:n.is_app_header?"bold":400},children:P(n.title)}),Object(k.jsx)("div",{style:{paddingLeft:n.is_app_header?0:10,fontWeight:n.is_app_header||n.is_separator?"bold":400,textTransform:n.is_separator?"uppercase":"",color:n.is_separator?"#a6a4b0":"inherit"},children:P(n.title)})]}),buttons:[F.can("post",sessionStorage.getItem("current_page_perm"))&&!a?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-primary",id:"btn-edit",onClick:function(e){ue(n)},children:Object(k.jsx)(m.a,{size:16})}),Object(k.jsx)(v.cb,{placement:"left",target:"btn-edit",children:P("Add Child")})]}):null,!F.can("update",sessionStorage.getItem("current_page_perm"))||a||n.is_app_header?null:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-info",id:"btn-edit",onClick:function(e){var t;e.preventDefault(),te(t=n),K("edit"),b.detailFromGrid?(A("".concat(P("Loading")," ").concat(P("Detail")," ").concat(P("Data")," ").concat(P(b.pageTitle))),H(!0),T(Object(b.setDataById)(t)).then((function(){H(!1),U(!0)}))):(A("".concat(P("Loading")," ").concat(P("Detail")," ").concat(P("Data")," ").concat(P(b.pageTitle))),H(!0),T(Object(b.getDataById)(t.id)).then((function(e){"rejected"===e.meta.requestStatus?(H(!1),x.b.error(e.payload.message,{style:{padding:"16px",color:se.danger.main,border:"1px solid ".concat(se.danger.main)},iconTheme:{primary:se.danger.main}})):(H(!1),U(!0))})))},children:Object(k.jsx)(h.a,{size:16})}),Object(k.jsx)(v.cb,{placement:"left",target:"btn-edit",children:P("Edit")})]}),F.can("delete",sessionStorage.getItem("current_page_perm"))&&!a&&!n.is_app_header&&!(null!==(t=n.children)&&void 0!==t&&t.length)>0?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.i.Ripple,{id:"btn-delete",className:"btn-icon rounded-circle",color:"flat-danger",onClick:function(e){e.preventDefault(),de(n.id)},children:Object(k.jsx)(f.a,{size:16})}),Object(k.jsx)(v.cb,{placement:"left",target:"btn-delete",children:P("Delete")})]}):null,a&&!n.is_app_header?Object(k.jsx)("div",{className:n.hidden?"form-check form-check-secondary":"form-check form-check-primary",children:Object(k.jsx)(v.B,{disabled:n.hidden,defaultChecked:n.checked,onChange:function(e){return function(e,t,a,n){var c=JSON.parse(JSON.stringify(E.data));return c.forEach((function a(n){n.id===t&&(n.checked=e.target.checked),Array.isArray(n.children)&&n.children.forEach(a)})),je(c),_(t,a,n)}(e,n.id,r,S)},type:"checkbox",id:"checkbox-".concat(n.id)})}):null]}}})})})})}),G&&Object(k.jsx)(d.default,{formState:Z,show:G,setShow:ue,detailPage:!1,setFormState:K,currentData:ee})]})}}}]);
//# sourceMappingURL=131.9921cea2.chunk.js.map