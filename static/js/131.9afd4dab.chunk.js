(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[131,78],{375:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(6),i=a(2),r=a(34),l=a(25),o=(a(170),a(448)),s=a(116),d=a(5),u=a(80),b=a(64),j=(a(767),a(101),a(35)),p=a(11),m=a(75),h=(a(137),a(146),a(1299),a(46)),f=a(189),O=a(16),g=a(47),x=a(12),v=a.n(x),y=a(20),_=a(54),S=a(1290),N=a(1287),D=a(1228),w=a(1286),k=a(0),C=["onChange","maxRows","minRows","style","value"];function T(e){return parseInt(e,10)||0}var P={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};var I=i.forwardRef((function(e,t){var a=e.onChange,n=e.maxRows,c=e.minRows,r=void 0===c?1:c,l=e.style,o=e.value,s=Object(_.a)(e,C),d=i.useRef(null!=o).current,u=i.useRef(null),b=Object(S.a)(t,u),j=i.useRef(null),p=i.useRef(null),m=i.useCallback((function(){var t=u.current,a=Object(N.a)(t).getComputedStyle(t);if("0px"===a.width)return{outerHeightStyle:0,overflowing:!1};var c=p.current;c.style.width=a.width,c.value=t.value||e.placeholder||"x","\n"===c.value.slice(-1)&&(c.value+=" ");var i=a.boxSizing,l=T(a.paddingBottom)+T(a.paddingTop),o=T(a.borderBottomWidth)+T(a.borderTopWidth),s=c.scrollHeight;c.value="x";var d=c.scrollHeight,b=s;return r&&(b=Math.max(Number(r)*d,b)),n&&(b=Math.min(Number(n)*d,b)),{outerHeightStyle:(b=Math.max(b,d))+("border-box"===i?l+o:0),overflowing:Math.abs(b-s)<=1}}),[n,r,e.placeholder]),h=i.useCallback((function(){var e=m();if(void 0!==(t=e)&&null!==t&&0!==Object.keys(t).length&&(0!==t.outerHeightStyle||t.overflowing)){var t,a=e.outerHeightStyle,n=u.current;j.current!==a&&(j.current=a,n.style.height="".concat(a,"px")),n.style.overflow=e.overflowing?"hidden":""}}),[m]);Object(D.a)((function(){var e,t,a=function(){h()},n=Object(w.a)(a),c=u.current,i=Object(N.a)(c);return i.addEventListener("resize",n),"undefined"!==typeof ResizeObserver&&(t=new ResizeObserver(a)).observe(c),function(){n.clear(),cancelAnimationFrame(e),i.removeEventListener("resize",n),t&&t.disconnect()}}),[m,h]),Object(D.a)((function(){h()}));return Object(k.jsxs)(i.Fragment,{children:[Object(k.jsx)("textarea",Object(y.a)({value:o,onChange:function(e){d||h(),a&&a(e)},ref:b,rows:r,style:l},s)),Object(k.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:p,tabIndex:-1,style:Object(y.a)({},P,l,{paddingTop:0,paddingBottom:0})})]})})),R=a(17),E=a(268),B=a(269),F=function(e){var t=e.htmlFor;return Object(k.jsxs)(d.E,{className:"form-check-label",htmlFor:t,children:[Object(k.jsx)("span",{className:"switch-icon-left",children:Object(k.jsx)(o.a,{size:14})}),Object(k.jsx)("span",{className:"switch-icon-right",children:Object(k.jsx)(s.a,{size:14})})]})};t.default=function(e){var t,a,o,s,x,y,_,S,N,D=e.show,w=e.setShow,C=e.detailPage,T=e.formState,P=e.setFormState,M=e.currentData,L=void 0===M?null:M,z=Object(u.a)().t,A=Object(r.g)().id,V=Object(O.b)(),q=Object(O.c)((function(e){return e[f.storeName]})),H=Object(i.useContext)(j.a).colors,J=Object(i.useState)("Please Wait"),W=Object(c.a)(J,2),U=(W[0],W[1]),G=Object(h.e)({}),Q=G.control,Y=G.setError,K=G.setValue,Z=G.getValues,X=G.handleSubmit,$=G.formState.errors,ee=Object(i.useState)(L.is_separator),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],ce=Object(i.useState)("feather"),ie=Object(c.a)(ce,2),re=ie[0],le=ie[1],oe=Object(i.useState)(null===L||void 0===L?void 0:L.icon),se=Object(c.a)(oe,2),de=se[0],ue=se[1],be=Object(i.useState)("start"),je=Object(c.a)(be,2),pe=je[0],me=je[1],he=Object(i.useState)(!1),fe=Object(c.a)(he,2),Oe=fe[0],ge=fe[1],xe=function(){le("feather"),me("start"),ge(!Oe)},ve=function(){le("feather"),me("bottom"),ge(!Oe)},ye=function(e){K("icon",e),ue(e)},_e=function(){V(Object(f.resetSelectedData)())};return Object(k.jsxs)(d.G,{isOpen:D,toggle:function(){_e(),w(!D)},className:"modal-dialog-centered modal-lg",children:[Object(k.jsxs)(b.a,{blocking:q.isLoadingAddEdit||q.isLoadingDetail,loader:Object(k.jsx)(g.b,{}),children:[Object(k.jsx)(d.J,{className:"bg-transparent",toggle:function(){_e(),w(!D)}}),Object(k.jsxs)(d.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(k.jsxs)("div",{className:"text-center mb-2",children:[Object(k.jsxs)("h2",{className:"mb-1",children:[z("edit"===T?"Edit":"Add Sub")," ",z(f.pageTitle)]}),"edit"!==T&&Object(k.jsxs)("p",{className:"mb-1",children:[z("Child for ")," ",L?z(L.title):""]})]}),Object(k.jsx)(d.y,{onSubmit:X("edit"===T?function(e){if(e.is_separator=ae,e.icon=de,e.parent_id&&(e.parent_id.value>=9e3?(e.id_app=e.parent_id.id_app,e.parent_id=null):e.parent_id=e.parent_id.value),Object.values(e).every((function(e){return null!==e}))||null===e.parent_id)if(ae||""!==e.routePath)U("".concat(z("Updating")," ").concat(z(f.pageTitle)," ").concat(z("Detail")," Data")),V(Object(f.putData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(w(!D),l.b.success("".concat(z("Successfully Updated")," ").concat(z(f.pageTitle)),{style:{padding:"16px",color:H.success.main,border:"1px solid ".concat(H.success.main)},iconTheme:{primary:H.success.main}}),C&&V(Object(f.getDataById)(A))):"rejected"===e.meta.requestStatus&&l.b.error(e.payload.message,{style:{padding:"16px",color:H.danger.main,border:"1px solid ".concat(H.danger.main)},iconTheme:{primary:H.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&Y(t,{type:"manual"})}else for(var n in e){var c;0===(null===(c=e[n])||void 0===c?void 0:c.length)&&Y(n,{type:"manual"})}}:function(e){if(Object.values(e).every((function(e){return null!==e})))if(ae||""!==e.routePath)U("".concat(z("Creating a New ".concat(f.pageTitle)))),L.is_app_header?e.parent_id=null:e.parent_id=L.id,e.id_app=L.id_app,e.is_separator=ae,e.icon=de,V(Object(f.postData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(w(!D),l.b.success("".concat(z("Successfully Created")," ").concat(z(f.pageTitle)),{style:{padding:"16px",color:H.success.main,border:"1px solid ".concat(H.success.main)},iconTheme:{primary:H.success.main}}),C&&V(Object(f.getDataById)(A))):"rejected"===e.meta.requestStatus&&l.b.error(e.payload.message,{style:{padding:"16px",color:H.danger.main,border:"1px solid ".concat(H.danger.main)},iconTheme:{primary:H.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&Y(t,{type:"manual"})}else for(var n in e){var c;null!==e[n]&&0===(null===(c=e[n])||void 0===c?void 0:c.length)&&Y(n,{type:"manual"})}}),children:Object(k.jsxs)(d.U,{className:"gy-1 pt-75",children:[Object(k.jsxs)(d.t,{md:6,xs:12,children:[Object(k.jsxs)(d.E,{className:"form-label",for:"title",children:[z("Title"),Object(k.jsx)("span",{className:"text-danger",children:"*"})]}),Object(k.jsx)(h.a,{defaultValue:null!==(t=null===(a=q.selectedData)||void 0===a?void 0:a.title)&&void 0!==t?t:"",control:Q,id:"title",name:"title",render:function(e){var t=e.field;return Object(k.jsx)(d.B,Object(n.a)(Object(n.a)({},t),{},{className:$.title?"form-control is-invalid":"form-control",id:"title",invalid:$.title&&!0}))}})]}),!ae&&Object(k.jsxs)(d.t,{md:4,xs:8,className:"text-center",children:[Object(k.jsxs)(d.E,{className:"form-label",for:"icon",children:[z("Icon"),Object(k.jsx)("span",{className:"text-danger",children:"*"})]}),Object(k.jsx)("div",{}),Object(k.jsx)(h.a,{defaultValue:null!==(o=null===(s=q.selectedData)||void 0===s?void 0:s.icon)&&void 0!==o?o:"",control:Q,id:"icon",name:"icon",render:function(e){var t,a,c=e.field;return Object(k.jsxs)(d.C,{children:[Object(k.jsx)(d.B,Object(n.a)(Object(n.a)({},c),{},{className:$.icon?"form-control is-invalid":"form-control",onChange:function(e){var t=e.target.value;c.onChange(t),ue(t)},id:"icon",invalid:$.icon&&!0})),Object(k.jsx)(d.i.Ripple,{className:"btn-icon",outline:!0,color:"secondary",onClick:ve,children:Object(R.renderIcon)(null!==(t=null!==(a=Z().icon)&&void 0!==a?a:de)&&void 0!==t?t:"material:highlight_alt","fw-bold",16)})]})}})]}),Object(k.jsxs)(d.t,{className:" d-grid justify-content-center",md:2,xs:4,children:[Object(k.jsx)(d.E,{className:"form-label",for:"is_separator",children:z("Separator")}),Object(k.jsxs)("div",{style:{marginTop:"4px"},className:"form-switch form-check-primary mx-auto",children:[Object(k.jsx)(d.B,{type:"switch",defaultChecked:ae,onChange:function(e){!function(e){ne(e.target.checked),e.target.checked}(e)},id:"icon-primary",name:"icon-primary"}),Object(k.jsx)(F,{htmlFor:"icon-primary"})]})]}),Object(k.jsxs)(d.t,{md:6,xs:12,children:[Object(k.jsx)(d.E,{className:"form-label",for:"parent_id",children:z("Parent Menu")}),Object(k.jsx)(h.a,{defaultValue:null!==(x=q.dataDropdown.filter((function(e){return e.value===("edit"===T?null===L||void 0===L?void 0:L.parent_id:null===L||void 0===L?void 0:L.id)})))&&void 0!==x?x:"",control:Q,id:"parent_id",name:"parent_id",render:function(e){var t,a=e.field;return Object(k.jsx)(m.a,Object(n.a)(Object(n.a)({},a),{},{id:"parent_id",theme:p.L,defaultValue:q.dataDropdown.filter((function(e){return e.value===("edit"===T?null===L||void 0===L?void 0:L.parent_id:null===L||void 0===L?void 0:L.id)})),isDisabled:"add"===T,options:q.dataDropdown.filter((function(e){var t;return e.value!==(null===(t=q.selectedData)||void 0===t?void 0:t.id)})).map((function(e){return Object(n.a)(Object(n.a)({},e),{},{label:z(e.title)})})),className:v()("react-select",{"is-invalid":null===(null===(t=q.selectedData)||void 0===t?void 0:t.parent_id)}),classNamePrefix:"select"}))}})]}),!ae&&Object(k.jsxs)(d.t,{md:6,xs:12,children:[Object(k.jsxs)(d.E,{className:"form-label",for:"subject",children:[z("Route Path"),Object(k.jsx)("span",{className:"text-danger",children:"*"})]}),Object(k.jsx)(h.a,{defaultValue:null!==(y=null===(_=q.selectedData)||void 0===_?void 0:_.routePath)&&void 0!==y?y:"",control:Q,id:"routePath",name:"routePath",render:function(e){var t=e.field;return Object(k.jsx)(d.B,Object(n.a)(Object(n.a)({},t),{},{className:$.routePath?"form-control is-invalid":"form-control",id:"routePath",invalid:$.routePath&&!0}))}})]}),Object(k.jsxs)(d.t,{md:12,xs:12,children:[Object(k.jsx)(d.E,{className:"form-label",for:"description",children:z("Description")}),Object(k.jsx)(h.a,{defaultValue:null!==(S=null===(N=q.selectedData)||void 0===N?void 0:N.description)&&void 0!==S?S:"",control:Q,id:"description",name:"description",render:function(e){var t=e.field;return Object(k.jsx)(I,Object(n.a)(Object(n.a)({},t),{},{className:"form-control",id:"description"}))}})]}),Object(k.jsxs)(d.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(k.jsx)(d.i,{type:"submit",className:"me-1",color:"primary",children:z("Submit")}),Object(k.jsx)(d.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){_e(),P("add"),w(!1)},children:z("Cancel")})]})]})})]})]}),Object(k.jsxs)(d.O,{direction:pe,isOpen:Oe,toggle:xe,children:[Object(k.jsxs)(d.Q,{className:"mb-1 mt-1 me-1",toggle:xe,children:[z("Select")," ",z("Icon"),Object(k.jsx)(d.i.Ripple,{className:"ms-2 me-2",color:"primary",outline:"feather"!==re,onClick:function(e){le("feather")},children:"Feather Icon"}),Object(k.jsx)(d.i.Ripple,{color:"primary",outline:"material"!==re,onClick:function(e){le("material")},children:"Material Icon"})]}),Object(k.jsx)(d.P,{className:v()({"my-auto mx-0 flex-grow-0":"start"===pe||"end"===pe}),children:"feather"===re?Object(k.jsx)(E.default,{setIcon:ye,setCanvasOpen:ge}):Object(k.jsx)(B.default,{setIcon:ye,setCanvasOpen:ge})})]})]})}},772:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a(6),i=a(7),r=a.n(i),l=a(2),o=a(80),s=a(42),d=a(375),u=a(11),b=a(189),j=a(17),p=(a(190),a(16)),m=(a(171),a(172),a(84),a(250)),h=a(329),f=a(333),O=a(64),g=(a(767),a(35)),x=a(25),v=a(5),y=a(44),_=a.n(y),S=a(49),N=a.n(S),D=(a(93),a(106),a(272)),w=a(47),k=a(0),C=N()(_.a);t.default=function(e){var t=e.searchString,a=e.lookupMode,i=e.lookupMode_fieldName,y=e.lookupMode_defaultValue,_=e.lookupMode_onChange,S=e.lookupMode_isMulti,N=e.lookupMode_isM2MDefValFromGrid,T=Object(p.b)(),P=Object(p.c)((function(e){return e[b.storeName]})),I=Object(o.a)().t,R=Object(l.useState)(!1),E=Object(c.a)(R,2),B=E[0],F=E[1],M=Object(l.useContext)(s.a),L=Object(l.useState)(!1),z=Object(c.a)(L,2),A=(z[0],z[1]),V=Object(l.useState)("Please Wait"),q=Object(c.a)(V,2),H=(q[0],q[1]),J=Object(l.useState)(!1),W=Object(c.a)(J,2),U=W[0],G=W[1],Q=Object(l.useState)(null),Y=Object(c.a)(Q,2),K=Y[0],Z=Y[1],X=Object(l.useState)(null),$=Object(c.a)(X,2),ee=$[0],te=$[1],ae=Object(l.useState)(0),ne=Object(c.a)(ae,2),ce=ne[0],ie=ne[1],re=Object(l.useState)(null),le=Object(c.a)(re,2),oe=(le[0],le[1]),se=Object(l.useContext)(g.a).colors,de=function(){var e=Object(n.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.fire({title:"".concat(I("Are you sure?")),text:"".concat(I("You won't be able to revert")," ").concat(I(b.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(I("Yes, Delete")," ").concat(I(b.pageTitle),"!"),cancelButtonText:"".concat(I("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:e.sent.value&&(H("".concat(I("Deleting")," Data ").concat(I(b.pageTitle))),A(!0),T(Object(b.deleteData)(t)).then((function(e){"fulfilled"===e.meta.requestStatus?(A(!1),x.b.success("".concat(I("Successfully deleted")," ").concat(I(b.pageTitle)),{style:{padding:"16px",color:se.success.main,border:"1px solid ".concat(se.success.main)},iconTheme:{primary:se.success.main}})):"rejected"===e.meta.requestStatus&&(A(!1),x.b.error(e.payload.message,{style:{padding:"16px",color:se.danger.main,border:"1px solid ".concat(se.danger.main)},iconTheme:{primary:se.danger.main}}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;te(e),Z("add"),F(!B),G(!U),Object(u.D)(be)},be=function(){F(!B),G(!U),Object(u.K)()},je=function(e){T(Object(b.setDataList)(e))},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];H("".concat(I("Updating")," ").concat(I(b.pageTitle)," Data")),t&&(e.notReload=!0);var a=e.title;T(Object(b.putData)(e,t)).then((function(e){"fulfilled"===e.meta.requestStatus?x.b.success("".concat(I("Successfully Updated")," ").concat(I(b.pageTitle)," ").concat(a),{style:{padding:"16px",color:se.success.main,border:"1px solid ".concat(se.success.main)},iconTheme:{primary:se.success.main}}):"rejected"===e.meta.requestStatus&&x.b.error(e.payload.message,{style:{padding:"16px",color:se.danger.main,border:"1px solid ".concat(se.danger.main)},iconTheme:{primary:se.danger.main}})}))},me=function(e,t){var a=JSON.parse(JSON.stringify(t));a.forEach((function t(a){e.includes(a.id)&&(a.checked=!0,a.hidden=!0),Array.isArray(a.children)&&a.children.forEach(t)})),T(Object(b.setDataList)(a))};return Object(l.useEffect)((function(){(0===P.status&&0===P.data.length||!P.isLoading&&b.getAlwaysGrid)&&(H("".concat(I("Loading Data")," ").concat(I(b.pageTitle))),T(Object(b.getDataList)({})).then((function(e){a&&N&&me(y,e.payload.data)}))),P.data,P.data.length>0&&N&&a&&me(y,P.data)}),[P.data]),Object(k.jsxs)(l.Fragment,{children:[Object(k.jsx)(O.a,{blocking:P.isLoading,loader:Object(k.jsx)(w.b,{}),children:Object(k.jsx)(v.l,{className:"overflow-hidden",children:Object(k.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(k.jsx)("div",{style:{height:a?350:800,margin:a?10:20},children:Object(k.jsx)(D.a,{treeData:P.data,onChange:je,onMoveNode:a?null:function(e){e.treeData;var t=e.node,a=e.nextParentNode,n=(e.prevPath,e.prevTreeIndex,e.nextPath,e.nextTreeIndex),c={id:t.id,title:t.title,parent_id:null!==a&&void 0!==a&&a.is_app_header?null:a.id,index:null!==n&&void 0!==n?n:1};pe(c,!0)},canDrag:!a&&function(e){var t;return null===(t=e.node)||void 0===t||!t.is_app_header},searchMethod:function(e){var t=e.node,a=e.searchQuery,n=t.title.toLowerCase(),c=I(t.title).toLowerCase();return a&&n.indexOf(a)>-1||a&&c.indexOf(a)>-1},searchQuery:t,searchFocusOffset:ce,searchFinishCallback:function(e){oe(e.length),ie(e.length>0?ce%e.length:0)},maxDepth:4,generateNodeProps:function(e){var t,n=e.node;e.path;return{style:{fontSize:n.is_app_header?"16px":"14px",fontWeight:n.is_app_header?"bold":"normal"},title:Object(k.jsxs)(l.Fragment,{children:[n.is_app_header?Object(k.jsx)("img",{className:"me-1",src:n.logo,width:"30",height:"25"}):n.is_separator?null:n.icon?Object(k.jsxs)("div",{children:[Object(j.renderIcon)(n.icon,"",24)," "]}):Object(k.jsx)("div",{style:{fontWeight:n.is_app_header?"bold":400},children:I(n.title)}),Object(k.jsx)("div",{style:{paddingLeft:n.is_app_header?0:10,fontWeight:n.is_app_header||n.is_separator?"bold":400,textTransform:n.is_separator?"uppercase":"",color:n.is_separator?"#a6a4b0":"inherit"},children:I(n.title)})]}),buttons:[M.can("post",sessionStorage.getItem("current_page_perm"))&&!a?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-primary",id:"btn-edit",onClick:function(e){ue(n)},children:Object(k.jsx)(m.a,{size:16})}),Object(k.jsx)(v.db,{placement:"left",target:"btn-edit",children:I("Add Child")})]}):null,!M.can("update",sessionStorage.getItem("current_page_perm"))||a||n.is_app_header?null:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-info",id:"btn-edit",onClick:function(e){var t;e.preventDefault(),te(t=n),Z("edit"),b.detailFromGrid?(H("".concat(I("Loading")," ").concat(I("Detail")," ").concat(I("Data")," ").concat(I(b.pageTitle))),A(!0),T(Object(b.setDataById)(t)).then((function(){A(!1),G(!0)}))):(H("".concat(I("Loading")," ").concat(I("Detail")," ").concat(I("Data")," ").concat(I(b.pageTitle))),A(!0),T(Object(b.getDataById)(t.id)).then((function(e){"rejected"===e.meta.requestStatus?(A(!1),x.b.error(e.payload.message,{style:{padding:"16px",color:se.danger.main,border:"1px solid ".concat(se.danger.main)},iconTheme:{primary:se.danger.main}})):(A(!1),G(!0))})))},children:Object(k.jsx)(h.a,{size:16})}),Object(k.jsx)(v.db,{placement:"left",target:"btn-edit",children:I("Edit")})]}),M.can("delete",sessionStorage.getItem("current_page_perm"))&&!a&&!n.is_app_header&&!(null!==(t=n.children)&&void 0!==t&&t.length)>0?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(v.i.Ripple,{id:"btn-delete",className:"btn-icon rounded-circle",color:"flat-danger",onClick:function(e){e.preventDefault(),de(n.id)},children:Object(k.jsx)(f.a,{size:16})}),Object(k.jsx)(v.db,{placement:"left",target:"btn-delete",children:I("Delete")})]}):null,a&&!n.is_app_header?Object(k.jsx)("div",{className:n.hidden?"form-check form-check-secondary":"form-check form-check-primary",children:Object(k.jsx)(v.B,{disabled:n.hidden,defaultChecked:n.checked,onChange:function(e){return function(e,t,a,n){var c=JSON.parse(JSON.stringify(P.data));return c.forEach((function a(n){n.id===t&&(n.checked=e.target.checked),Array.isArray(n.children)&&n.children.forEach(a)})),je(c),_(t,a,n)}(e,n.id,i,S)},type:"checkbox",id:"checkbox-".concat(n.id)})}):null]}}})})})})}),U&&Object(k.jsx)(d.default,{formState:K,show:U,setShow:ue,detailPage:!1,setFormState:Z,currentData:ee})]})}}}]);