(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[74,78,84,85,86,170],{1259:function(e,t,a){!function(e){"use strict";var t="undefined"!==typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},a={weekdays:{shorthand:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],longhand:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],longhand:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},firstDayOfWeek:1,ordinal:function(){return""},time_24hr:!0,rangeSeparator:" - "};t.l10ns.id=a;var n=t.l10ns;e.Indonesian=a,e.default=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)},368:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(6),i=a(2),c=a(34),l=a(24),o=(a(169),a(438)),s=a(121),d=a(5),u=a(85),b=a(64),j=(a(481),a(104),a(33)),m=a(13),f=a(78),h=(a(135),a(145),a(1259),a(46)),p=a(189),v=a(16),O=a(47),x=a(12),g=a.n(x),y=a(19),S=a(54),N=a(50),w=a(1250),_=a(1247),k=a(1246),D=a(1198),C=a(0),R=["onChange","maxRows","minRows","style","value"];function P(e){return parseInt(e,10)||0}var E={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function M(e){return void 0===e||null===e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}var T=i.forwardRef((function(e,t){var a=e.onChange,n=e.maxRows,c=e.minRows,l=void 0===c?1:c,o=e.style,s=e.value,d=Object(S.a)(e,R),u=i.useRef(null!=s).current,b=i.useRef(null),j=Object(w.a)(t,b),m=i.useRef(null),f=i.useRef(0),h=i.useState({outerHeightStyle:0}),p=Object(r.a)(h,2),v=p[0],O=p[1],x=i.useCallback((function(){var t=b.current,a=Object(_.a)(t).getComputedStyle(t);if("0px"===a.width)return{outerHeightStyle:0};var r=m.current;r.style.width=a.width,r.value=t.value||e.placeholder||"x","\n"===r.value.slice(-1)&&(r.value+=" ");var i=a.boxSizing,c=P(a.paddingBottom)+P(a.paddingTop),o=P(a.borderBottomWidth)+P(a.borderTopWidth),s=r.scrollHeight;r.value="x";var d=r.scrollHeight,u=s;return l&&(u=Math.max(Number(l)*d,u)),n&&(u=Math.min(Number(n)*d,u)),{outerHeightStyle:(u=Math.max(u,d))+("border-box"===i?c+o:0),overflow:Math.abs(u-s)<=1}}),[n,l,e.placeholder]),g=function(e,t){var a=t.outerHeightStyle,n=t.overflow;return f.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==n)?(f.current+=1,{overflow:n,outerHeightStyle:a}):e},T=i.useCallback((function(){var e=x();M(e)||O((function(t){return g(t,e)}))}),[x]);i.useEffect((function(){var e,t=Object(k.a)((function(){f.current=0,b.current&&function(){var e=x();M(e)||N.flushSync((function(){O((function(t){return g(t,e)}))}))}()})),a=b.current,n=Object(_.a)(a);return n.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t)).observe(a),function(){t.clear(),n.removeEventListener("resize",t),e&&e.disconnect()}})),Object(D.a)((function(){T()})),i.useEffect((function(){f.current=0}),[s]);return Object(C.jsxs)(i.Fragment,{children:[Object(C.jsx)("textarea",Object(y.a)({value:s,onChange:function(e){f.current=0,u||T(),a&&a(e)},ref:j,rows:l,style:Object(y.a)({height:v.outerHeightStyle,overflow:v.overflow?"hidden":void 0},o)},d)),Object(C.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:m,tabIndex:-1,style:Object(y.a)({},E,o,{paddingTop:0,paddingBottom:0})})]})})),H=a(17),I=a(259),J=a(260),B=function(e){var t=e.htmlFor;return Object(C.jsxs)(d.E,{className:"form-check-label",htmlFor:t,children:[Object(C.jsx)("span",{className:"switch-icon-left",children:Object(C.jsx)(o.a,{size:14})}),Object(C.jsx)("span",{className:"switch-icon-right",children:Object(C.jsx)(s.a,{size:14})})]})};t.default=function(e){var t,a,o,s,x,y,S,N,w,_=e.show,k=e.setShow,D=e.detailPage,R=e.formState,P=e.setFormState,E=e.currentData,M=void 0===E?null:E,F=Object(u.a)().t,V=Object(c.g)().id,z=Object(v.b)(),A=Object(v.c)((function(e){return e[p.storeName]})),q=Object(i.useContext)(j.a).colors,L=Object(i.useState)("Please Wait"),W=Object(r.a)(L,2),K=(W[0],W[1]),U=Object(h.e)({}),G=U.control,Q=U.setError,Z=U.setValue,X=U.getValues,Y=U.handleSubmit,$=U.formState.errors,ee=Object(i.useState)(M.is_separator),te=Object(r.a)(ee,2),ae=te[0],ne=te[1],re=Object(i.useState)("feather"),ie=Object(r.a)(re,2),ce=ie[0],le=ie[1],oe=Object(i.useState)(null===M||void 0===M?void 0:M.icon),se=Object(r.a)(oe,2),de=se[0],ue=se[1],be=Object(i.useState)("start"),je=Object(r.a)(be,2),me=je[0],fe=je[1],he=Object(i.useState)(!1),pe=Object(r.a)(he,2),ve=pe[0],Oe=pe[1],xe=function(){le("feather"),fe("start"),Oe(!ve)},ge=function(){le("feather"),fe("bottom"),Oe(!ve)},ye=function(e){Z("icon",e),ue(e)},Se=function(){z(Object(p.resetSelectedData)())};return Object(C.jsxs)(d.G,{isOpen:_,toggle:function(){Se(),k(!_)},className:"modal-dialog-centered modal-lg",children:[Object(C.jsxs)(b.a,{blocking:A.isLoadingAddEdit||A.isLoadingDetail,loader:Object(C.jsx)(O.b,{}),children:[Object(C.jsx)(d.J,{className:"bg-transparent",toggle:function(){Se(),k(!_)}}),Object(C.jsxs)(d.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(C.jsxs)("div",{className:"text-center mb-2",children:[Object(C.jsxs)("h2",{className:"mb-1",children:[F("edit"===R?"Edit":"Add Sub")," ",F(p.pageTitle)]}),"edit"!==R&&Object(C.jsxs)("p",{className:"mb-1",children:[F("Child for ")," ",M?F(M.title):""]})]}),Object(C.jsx)(d.y,{onSubmit:Y("edit"===R?function(e){if(e.is_separator=ae,e.icon=de,e.parent_id&&(e.parent_id.value>=9e3?(e.id_app=e.parent_id.id_app,e.parent_id=null):e.parent_id=e.parent_id.value),Object.values(e).every((function(e){return null!==e}))||null===e.parent_id)if(ae||""!==e.routePath)K("".concat(F("Updating")," ").concat(F(p.pageTitle)," ").concat(F("Detail")," Data")),z(Object(p.putData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(k(!_),l.b.success("".concat(F("Successfully Updated")," ").concat(F(p.pageTitle)),{style:{padding:"16px",color:q.success.main,border:"1px solid ".concat(q.success.main)},iconTheme:{primary:q.success.main}}),D&&z(Object(p.getDataById)(V))):"rejected"===e.meta.requestStatus&&l.b.error(e.payload.message,{style:{padding:"16px",color:q.danger.main,border:"1px solid ".concat(q.danger.main)},iconTheme:{primary:q.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&Q(t,{type:"manual"})}else for(var n in e){var r;0===(null===(r=e[n])||void 0===r?void 0:r.length)&&Q(n,{type:"manual"})}}:function(e){if(Object.values(e).every((function(e){return null!==e})))if(ae||""!==e.routePath)K("".concat(F("Creating a New ".concat(p.pageTitle)))),M.is_app_header?e.parent_id=null:e.parent_id=M.id,e.id_app=M.id_app,e.is_separator=ae,e.icon=de,z(Object(p.postData)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(k(!_),l.b.success("".concat(F("Successfully Created")," ").concat(F(p.pageTitle)),{style:{padding:"16px",color:q.success.main,border:"1px solid ".concat(q.success.main)},iconTheme:{primary:q.success.main}}),D&&z(Object(p.getDataById)(V))):"rejected"===e.meta.requestStatus&&l.b.error(e.payload.message,{style:{padding:"16px",color:q.danger.main,border:"1px solid ".concat(q.danger.main)},iconTheme:{primary:q.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&Q(t,{type:"manual"})}else for(var n in e){var r;null!==e[n]&&0===(null===(r=e[n])||void 0===r?void 0:r.length)&&Q(n,{type:"manual"})}}),children:Object(C.jsxs)(d.S,{className:"gy-1 pt-75",children:[Object(C.jsxs)(d.t,{md:6,xs:12,children:[Object(C.jsxs)(d.E,{className:"form-label",for:"title",children:[F("Title"),Object(C.jsx)("span",{className:"text-danger",children:"*"})]}),Object(C.jsx)(h.a,{defaultValue:null!==(t=null===(a=A.selectedData)||void 0===a?void 0:a.title)&&void 0!==t?t:"",control:G,id:"title",name:"title",render:function(e){var t=e.field;return Object(C.jsx)(d.B,Object(n.a)(Object(n.a)({},t),{},{className:$.title?"form-control is-invalid":"form-control",id:"title",invalid:$.title&&!0}))}})]}),!ae&&Object(C.jsxs)(d.t,{md:4,xs:8,className:"text-center",children:[Object(C.jsxs)(d.E,{className:"form-label",for:"icon",children:[F("Icon"),Object(C.jsx)("span",{className:"text-danger",children:"*"})]}),Object(C.jsx)("div",{}),Object(C.jsx)(h.a,{defaultValue:null!==(o=null===(s=A.selectedData)||void 0===s?void 0:s.icon)&&void 0!==o?o:"",control:G,id:"icon",name:"icon",render:function(e){var t,a,r=e.field;return Object(C.jsxs)(d.C,{children:[Object(C.jsx)(d.B,Object(n.a)(Object(n.a)({},r),{},{className:$.icon?"form-control is-invalid":"form-control",onChange:function(e){var t=e.target.value;r.onChange(t),ue(t)},id:"icon",invalid:$.icon&&!0})),Object(C.jsx)(d.i.Ripple,{className:"btn-icon",outline:!0,color:"secondary",onClick:ge,children:Object(H.renderIcon)(null!==(t=null!==(a=X().icon)&&void 0!==a?a:de)&&void 0!==t?t:"material:highlight_alt","fw-bold",16)})]})}})]}),Object(C.jsxs)(d.t,{className:" d-grid justify-content-center",md:2,xs:4,children:[Object(C.jsx)(d.E,{className:"form-label",for:"is_separator",children:F("Separator")}),Object(C.jsxs)("div",{style:{marginTop:"4px"},className:"form-switch form-check-primary mx-auto",children:[Object(C.jsx)(d.B,{type:"switch",defaultChecked:ae,onChange:function(e){!function(e){ne(e.target.checked),e.target.checked}(e)},id:"icon-primary",name:"icon-primary"}),Object(C.jsx)(B,{htmlFor:"icon-primary"})]})]}),Object(C.jsxs)(d.t,{md:6,xs:12,children:[Object(C.jsx)(d.E,{className:"form-label",for:"parent_id",children:F("Parent Menu")}),Object(C.jsx)(h.a,{defaultValue:null!==(x=A.dataDropdown.filter((function(e){return e.value===("edit"===R?null===M||void 0===M?void 0:M.parent_id:null===M||void 0===M?void 0:M.id)})))&&void 0!==x?x:"",control:G,id:"parent_id",name:"parent_id",render:function(e){var t,a=e.field;return Object(C.jsx)(f.a,Object(n.a)(Object(n.a)({},a),{},{id:"parent_id",theme:m.H,defaultValue:A.dataDropdown.filter((function(e){return e.value===("edit"===R?null===M||void 0===M?void 0:M.parent_id:null===M||void 0===M?void 0:M.id)})),isDisabled:"add"===R,options:A.dataDropdown.filter((function(e){var t;return e.value!==(null===(t=A.selectedData)||void 0===t?void 0:t.id)})).map((function(e){return Object(n.a)(Object(n.a)({},e),{},{label:F(e.title)})})),className:g()("react-select",{"is-invalid":null===(null===(t=A.selectedData)||void 0===t?void 0:t.parent_id)}),classNamePrefix:"select"}))}})]}),!ae&&Object(C.jsxs)(d.t,{md:6,xs:12,children:[Object(C.jsxs)(d.E,{className:"form-label",for:"subject",children:[F("Route Path"),Object(C.jsx)("span",{className:"text-danger",children:"*"})]}),Object(C.jsx)(h.a,{defaultValue:null!==(y=null===(S=A.selectedData)||void 0===S?void 0:S.routePath)&&void 0!==y?y:"",control:G,id:"routePath",name:"routePath",render:function(e){var t=e.field;return Object(C.jsx)(d.B,Object(n.a)(Object(n.a)({},t),{},{className:$.routePath?"form-control is-invalid":"form-control",id:"routePath",invalid:$.routePath&&!0}))}})]}),Object(C.jsxs)(d.t,{md:12,xs:12,children:[Object(C.jsx)(d.E,{className:"form-label",for:"description",children:F("Description")}),Object(C.jsx)(h.a,{defaultValue:null!==(N=null===(w=A.selectedData)||void 0===w?void 0:w.description)&&void 0!==N?N:"",control:G,id:"description",name:"description",render:function(e){var t=e.field;return Object(C.jsx)(T,Object(n.a)(Object(n.a)({},t),{},{className:"form-control",id:"description"}))}})]}),Object(C.jsxs)(d.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(C.jsx)(d.i,{type:"submit",className:"me-1",color:"primary",children:F("Submit")}),Object(C.jsx)(d.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){Se(),P("add"),k(!1)},children:F("Cancel")})]})]})})]})]}),Object(C.jsxs)(d.O,{direction:me,isOpen:ve,toggle:xe,children:[Object(C.jsxs)(d.Q,{className:"mb-1 mt-1 me-1",toggle:xe,children:[F("Select")," ",F("Icon"),Object(C.jsx)(d.i.Ripple,{className:"ms-2 me-2",color:"primary",outline:"feather"!==ce,onClick:function(e){le("feather")},children:"Feather Icon"}),Object(C.jsx)(d.i.Ripple,{color:"primary",outline:"material"!==ce,onClick:function(e){le("material")},children:"Material Icon"})]}),Object(C.jsx)(d.P,{className:g()({"my-auto mx-0 flex-grow-0":"start"===me||"end"===me}),children:"feather"===ce?Object(C.jsx)(I.default,{setIcon:ye,setCanvasOpen:Oe}):Object(C.jsx)(J.default,{setIcon:ye,setCanvasOpen:Oe})})]})]})}}}]);
//# sourceMappingURL=74.88dfe837.chunk.js.map