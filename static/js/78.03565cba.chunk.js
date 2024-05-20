(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[78],{368:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(6),c=a(2),i=a(34),l=a(25),o=(a(168),a(439)),s=a(121),d=a(5),u=a(81),j=a(64),b=(a(753),a(102),a(33)),m=a(13),f=a(82),h=(a(136),a(145),a(1260),a(46)),p=a(188),O=a(16),v=a(47),x=a(11),g=a.n(x),y=a(19),N=a(54),S=a(50),w=a(1251),_=a(1248),C=a(1247),D=a(1199),k=a(0),R=["onChange","maxRows","minRows","style","value"];function E(e){return parseInt(e,10)||0}var P={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function T(e){return void 0===e||null===e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}var H=c.forwardRef((function(e,t){var a=e.onChange,n=e.maxRows,i=e.minRows,l=void 0===i?1:i,o=e.style,s=e.value,d=Object(N.a)(e,R),u=c.useRef(null!=s).current,j=c.useRef(null),b=Object(w.a)(t,j),m=c.useRef(null),f=c.useRef(0),h=c.useState({outerHeightStyle:0}),p=Object(r.a)(h,2),O=p[0],v=p[1],x=c.useCallback((function(){var t=j.current,a=Object(_.a)(t).getComputedStyle(t);if("0px"===a.width)return{outerHeightStyle:0};var r=m.current;r.style.width=a.width,r.value=t.value||e.placeholder||"x","\n"===r.value.slice(-1)&&(r.value+=" ");var c=a.boxSizing,i=E(a.paddingBottom)+E(a.paddingTop),o=E(a.borderBottomWidth)+E(a.borderTopWidth),s=r.scrollHeight;r.value="x";var d=r.scrollHeight,u=s;return l&&(u=Math.max(Number(l)*d,u)),n&&(u=Math.min(Number(n)*d,u)),{outerHeightStyle:(u=Math.max(u,d))+("border-box"===c?i+o:0),overflow:Math.abs(u-s)<=1}}),[n,l,e.placeholder]),g=function(e,t){var a=t.outerHeightStyle,n=t.overflow;return f.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==n)?(f.current+=1,{overflow:n,outerHeightStyle:a}):e},H=c.useCallback((function(){var e=x();T(e)||v((function(t){return g(t,e)}))}),[x]);c.useEffect((function(){var e,t=Object(C.a)((function(){f.current=0,j.current&&function(){var e=x();T(e)||S.flushSync((function(){v((function(t){return g(t,e)}))}))}()})),a=j.current,n=Object(_.a)(a);return n.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t)).observe(a),function(){t.clear(),n.removeEventListener("resize",t),e&&e.disconnect()}})),Object(D.a)((function(){H()})),c.useEffect((function(){f.current=0}),[s]);return Object(k.jsxs)(c.Fragment,{children:[Object(k.jsx)("textarea",Object(y.a)({value:s,onChange:function(e){f.current=0,u||H(),a&&a(e)},ref:b,rows:l,style:Object(y.a)({height:O.outerHeightStyle,overflow:O.overflow?"hidden":void 0},o)},d)),Object(k.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:m,tabIndex:-1,style:Object(y.a)({},P,o,{paddingTop:0,paddingBottom:0})})]})})),I=a(17),B=a(259),V=a(260),z=function(e){var t=e.htmlFor;return Object(k.jsxs)(d.E,{className:"form-check-label",htmlFor:t,children:[Object(k.jsx)("span",{className:"switch-icon-left",children:Object(k.jsx)(o.a,{size:14})}),Object(k.jsx)("span",{className:"switch-icon-right",children:Object(k.jsx)(s.a,{size:14})})]})};t.default=function(e){var t,a,o,s,x,y,N,S,w,_=e.show,C=e.setShow,D=e.detailPage,R=e.formState,E=e.setFormState,P=e.currentData,T=void 0===P?null:P,M=Object(u.a)().t,F=Object(i.g)().id,q=Object(O.b)(),L=Object(O.c)((function(e){return e[p.storeName]})),J=Object(c.useContext)(b.a).colors,U=Object(c.useState)("Please Wait"),W=Object(r.a)(U,2),A=(W[0],W[1]),G=Object(h.e)({}),Q=G.control,Z=G.setError,K=G.setValue,X=G.getValues,Y=G.handleSubmit,$=G.formState.errors,ee=Object(c.useState)(T.is_separator),te=Object(r.a)(ee,2),ae=te[0],ne=te[1],re=Object(c.useState)("feather"),ce=Object(r.a)(re,2),ie=ce[0],le=ce[1],oe=Object(c.useState)(null===T||void 0===T?void 0:T.icon),se=Object(r.a)(oe,2),de=se[0],ue=se[1],je=Object(c.useState)("start"),be=Object(r.a)(je,2),me=be[0],fe=be[1],he=Object(c.useState)(!1),pe=Object(r.a)(he,2),Oe=pe[0],ve=pe[1],xe=function(){le("feather"),fe("start"),ve(!Oe)},ge=function(){le("feather"),fe("bottom"),ve(!Oe)},ye=function(e){K("icon",e),ue(e)},Ne=function(){q(Object(p.resetSelectedData)())};return Object(k.jsxs)(d.G,{isOpen:_,toggle:function(){Ne(),C(!_)},className:"modal-dialog-centered modal-lg",children:[Object(k.jsxs)(j.a,{blocking:L.isLoadingAddEdit||L.isLoadingDetail,loader:Object(k.jsx)(v.b,{}),children:[Object(k.jsx)(d.J,{className:"bg-transparent",toggle:function(){Ne(),C(!_)}}),Object(k.jsxs)(d.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(k.jsxs)("div",{className:"text-center mb-2",children:[Object(k.jsxs)("h2",{className:"mb-1",children:[M("edit"===R?"Edit":"Add Sub")," ",M(p.pageTitle)]}),"edit"!==R&&Object(k.jsxs)("p",{className:"mb-1",children:[M("Child for ")," ",T?M(T.title):""]})]}),Object(k.jsx)(d.y,{onSubmit:Y("edit"===R?function(e){if(e.is_separator=ae,e.icon=de,e.parent_id&&(e.parent_id.value>=9e3?(e.id_app=e.parent_id.id_app,e.parent_id=null):e.parent_id=e.parent_id.value),Object.values(e).every((function(e){return null!==e}))||null===e.parent_id)if(ae||""!==e.routePath)A("".concat(M("Updating")," ").concat(M(p.pageTitle)," ").concat(M("Detail")," Data")),q(Object(p.putData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(C(!_),l.b.success("".concat(M("Successfully Updated")," ").concat(M(p.pageTitle)),{style:{padding:"16px",color:J.success.main,border:"1px solid ".concat(J.success.main)},iconTheme:{primary:J.success.main}}),D&&q(Object(p.getDataById)(F))):"rejected"===e.meta.requestStatus&&l.b.error(e.payload.message,{style:{padding:"16px",color:J.danger.main,border:"1px solid ".concat(J.danger.main)},iconTheme:{primary:J.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&Z(t,{type:"manual"})}else for(var n in e){var r;0===(null===(r=e[n])||void 0===r?void 0:r.length)&&Z(n,{type:"manual"})}}:function(e){if(Object.values(e).every((function(e){return null!==e})))if(ae||""!==e.routePath)A("".concat(M("Creating a New ".concat(p.pageTitle)))),T.is_app_header?e.parent_id=null:e.parent_id=T.id,e.id_app=T.id_app,e.is_separator=ae,e.icon=de,q(Object(p.postData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(C(!_),l.b.success("".concat(M("Successfully Created")," ").concat(M(p.pageTitle)),{style:{padding:"16px",color:J.success.main,border:"1px solid ".concat(J.success.main)},iconTheme:{primary:J.success.main}}),D&&q(Object(p.getDataById)(F))):"rejected"===e.meta.requestStatus&&l.b.error(e.payload.message,{style:{padding:"16px",color:J.danger.main,border:"1px solid ".concat(J.danger.main)},iconTheme:{primary:J.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&Z(t,{type:"manual"})}else for(var n in e){var r;null!==e[n]&&0===(null===(r=e[n])||void 0===r?void 0:r.length)&&Z(n,{type:"manual"})}}),children:Object(k.jsxs)(d.U,{className:"gy-1 pt-75",children:[Object(k.jsxs)(d.t,{md:6,xs:12,children:[Object(k.jsxs)(d.E,{className:"form-label",for:"title",children:[M("Title"),Object(k.jsx)("span",{className:"text-danger",children:"*"})]}),Object(k.jsx)(h.a,{defaultValue:null!==(t=null===(a=L.selectedData)||void 0===a?void 0:a.title)&&void 0!==t?t:"",control:Q,id:"title",name:"title",render:function(e){var t=e.field;return Object(k.jsx)(d.B,Object(n.a)(Object(n.a)({},t),{},{className:$.title?"form-control is-invalid":"form-control",id:"title",invalid:$.title&&!0}))}})]}),!ae&&Object(k.jsxs)(d.t,{md:4,xs:8,className:"text-center",children:[Object(k.jsxs)(d.E,{className:"form-label",for:"icon",children:[M("Icon"),Object(k.jsx)("span",{className:"text-danger",children:"*"})]}),Object(k.jsx)("div",{}),Object(k.jsx)(h.a,{defaultValue:null!==(o=null===(s=L.selectedData)||void 0===s?void 0:s.icon)&&void 0!==o?o:"",control:Q,id:"icon",name:"icon",render:function(e){var t,a,r=e.field;return Object(k.jsxs)(d.C,{children:[Object(k.jsx)(d.B,Object(n.a)(Object(n.a)({},r),{},{className:$.icon?"form-control is-invalid":"form-control",onChange:function(e){var t=e.target.value;r.onChange(t),ue(t)},id:"icon",invalid:$.icon&&!0})),Object(k.jsx)(d.i.Ripple,{className:"btn-icon",outline:!0,color:"secondary",onClick:ge,children:Object(I.renderIcon)(null!==(t=null!==(a=X().icon)&&void 0!==a?a:de)&&void 0!==t?t:"material:highlight_alt","fw-bold",16)})]})}})]}),Object(k.jsxs)(d.t,{className:" d-grid justify-content-center",md:2,xs:4,children:[Object(k.jsx)(d.E,{className:"form-label",for:"is_separator",children:M("Separator")}),Object(k.jsxs)("div",{style:{marginTop:"4px"},className:"form-switch form-check-primary mx-auto",children:[Object(k.jsx)(d.B,{type:"switch",defaultChecked:ae,onChange:function(e){!function(e){ne(e.target.checked),e.target.checked}(e)},id:"icon-primary",name:"icon-primary"}),Object(k.jsx)(z,{htmlFor:"icon-primary"})]})]}),Object(k.jsxs)(d.t,{md:6,xs:12,children:[Object(k.jsx)(d.E,{className:"form-label",for:"parent_id",children:M("Parent Menu")}),Object(k.jsx)(h.a,{defaultValue:null!==(x=L.dataDropdown.filter((function(e){return e.value===("edit"===R?null===T||void 0===T?void 0:T.parent_id:null===T||void 0===T?void 0:T.id)})))&&void 0!==x?x:"",control:Q,id:"parent_id",name:"parent_id",render:function(e){var t,a=e.field;return Object(k.jsx)(f.a,Object(n.a)(Object(n.a)({},a),{},{id:"parent_id",theme:m.H,defaultValue:L.dataDropdown.filter((function(e){return e.value===("edit"===R?null===T||void 0===T?void 0:T.parent_id:null===T||void 0===T?void 0:T.id)})),isDisabled:"add"===R,options:L.dataDropdown.filter((function(e){var t;return e.value!==(null===(t=L.selectedData)||void 0===t?void 0:t.id)})).map((function(e){return Object(n.a)(Object(n.a)({},e),{},{label:M(e.title)})})),className:g()("react-select",{"is-invalid":null===(null===(t=L.selectedData)||void 0===t?void 0:t.parent_id)}),classNamePrefix:"select"}))}})]}),!ae&&Object(k.jsxs)(d.t,{md:6,xs:12,children:[Object(k.jsxs)(d.E,{className:"form-label",for:"subject",children:[M("Route Path"),Object(k.jsx)("span",{className:"text-danger",children:"*"})]}),Object(k.jsx)(h.a,{defaultValue:null!==(y=null===(N=L.selectedData)||void 0===N?void 0:N.routePath)&&void 0!==y?y:"",control:Q,id:"routePath",name:"routePath",render:function(e){var t=e.field;return Object(k.jsx)(d.B,Object(n.a)(Object(n.a)({},t),{},{className:$.routePath?"form-control is-invalid":"form-control",id:"routePath",invalid:$.routePath&&!0}))}})]}),Object(k.jsxs)(d.t,{md:12,xs:12,children:[Object(k.jsx)(d.E,{className:"form-label",for:"description",children:M("Description")}),Object(k.jsx)(h.a,{defaultValue:null!==(S=null===(w=L.selectedData)||void 0===w?void 0:w.description)&&void 0!==S?S:"",control:Q,id:"description",name:"description",render:function(e){var t=e.field;return Object(k.jsx)(H,Object(n.a)(Object(n.a)({},t),{},{className:"form-control",id:"description"}))}})]}),Object(k.jsxs)(d.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(k.jsx)(d.i,{type:"submit",className:"me-1",color:"primary",children:M("Submit")}),Object(k.jsx)(d.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){Ne(),E("add"),C(!1)},children:M("Cancel")})]})]})})]})]}),Object(k.jsxs)(d.O,{direction:me,isOpen:Oe,toggle:xe,children:[Object(k.jsxs)(d.Q,{className:"mb-1 mt-1 me-1",toggle:xe,children:[M("Select")," ",M("Icon"),Object(k.jsx)(d.i.Ripple,{className:"ms-2 me-2",color:"primary",outline:"feather"!==ie,onClick:function(e){le("feather")},children:"Feather Icon"}),Object(k.jsx)(d.i.Ripple,{color:"primary",outline:"material"!==ie,onClick:function(e){le("material")},children:"Material Icon"})]}),Object(k.jsx)(d.P,{className:g()({"my-auto mx-0 flex-grow-0":"start"===me||"end"===me}),children:"feather"===ie?Object(k.jsx)(B.default,{setIcon:ye,setCanvasOpen:ve}):Object(k.jsx)(V.default,{setIcon:ye,setCanvasOpen:ve})})]})]})}}}]);
//# sourceMappingURL=78.03565cba.chunk.js.map