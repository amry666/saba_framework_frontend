(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[12],{1328:function(e,a,t){"use strict";var s=t(6),n=t(2),c=t(5),l=t(78),r=t(85),i=t(13),o=(t(168),t(16)),d=(t(46),t(0));a.a=function(e){var a,t=e.parentChange,u=e.colMode,m=void 0!==u&&u,j=e.colSize,b=void 0===j?6:j,h=e.initialValue,O=void 0===h||h,f=e.colClassName,x=void 0===f?"":f,p=Object(r.a)().t,g=(Object(i.q)(),Object(o.b)()),v=Object(o.c)((function(e){return e.units})),N=Object(n.useState)([]),w=Object(s.a)(N,2),_=w[0],S=w[1],C=Object(n.useState)(O?{value:"",label:"".concat(p("Select")," ").concat(p("Unit"))}:{}),y=Object(s.a)(C,2),P=y[0],D=y[1],E=function(e,a){D(e),"function"===typeof a&&a(e)};return Object(n.useEffect)((function(){var e=O?v.dataDropdown:v.dataDropdown.filter((function(e){return""!==e.value}));S(e),D(O?v.selectedUnit:e[0])}),[g,v.dataDropdown]),(null===(a=v.data)||void 0===a?void 0:a.length)>1?m?Object(d.jsxs)(c.t,{md:"".concat(b),className:x,children:[Object(d.jsx)(c.E,{className:"",for:"plan-select",children:p("Unit")}),Object(d.jsx)(l.a,{theme:i.H,isClearable:!1,className:"react-select",classNamePrefix:"select",options:_,value:P,onChange:function(e){E(e,t)},getOptionLabel:function(e){return e.code?"".concat(e.code," ").concat(e.label):"".concat(e.label)}})]}):Object(d.jsx)(c.l,{children:Object(d.jsx)(c.m,{children:Object(d.jsxs)(c.S,{children:[Object(d.jsx)(c.E,{className:"",for:"plan-select",children:p("Unit")}),Object(d.jsx)(l.a,{theme:i.H,isClearable:!1,className:"react-select",classNamePrefix:"select",options:_,value:P,onChange:function(e){E(e,t)},getOptionLabel:function(e){return e.code?"".concat(e.code," ").concat(e.label):"".concat(e.label)}})]})})}):null}},780:function(e,a,t){"use strict";t.r(a);var s=t(4),n=t(6),c=t(2),l=t(10),r=t(27),i=t(121),o=t(12),d=t.n(o),u=t(89),m=t.n(u),j=t(5),b=t(0),h=["open","size","title","width","children","closeBtn","className","toggleSidebar","bodyClassName","contentClassName","wrapperClassName","headerClassName"],O=function(e){var a,t=e.open,n=e.size,c=e.title,o=e.width,u=e.children,O=e.closeBtn,f=e.className,x=e.toggleSidebar,p=e.bodyClassName,g=e.contentClassName,v=e.wrapperClassName,N=e.headerClassName,w=Object(r.a)(e,h),_=O||Object(b.jsx)(i.a,{className:"cursor-pointer",size:15,onClick:x});return Object(b.jsxs)(j.G,Object(s.a)(Object(s.a)(Object(s.a)({isOpen:t,toggle:x,contentClassName:d()("overflow-hidden",Object(l.a)({},g,g)),modalClassName:d()("modal-slide-in",Object(l.a)({},v,v)),className:d()((a={},Object(l.a)(a,f,f),Object(l.a)(a,"sidebar-lg","lg"===n),Object(l.a)(a,"sidebar-sm","sm"===n),a))},void 0!==o?{style:{width:String(o)+"px"}}:{}),w),{},{children:[Object(b.jsx)(j.J,{className:d()(Object(l.a)({},N,N)),toggle:x,close:_,tag:"div",children:Object(b.jsx)("h5",{className:"modal-title",children:Object(b.jsx)("span",{className:"align-middle",children:c})})}),Object(b.jsx)(m.a,{options:{wheelPropagation:!1},children:Object(b.jsx)(j.H,{className:d()("flex-grow-1",Object(l.a)({},p,p)),children:u})})]}))},f=t(13),x=t(78),p=t(46),g=t(363),v=t(16),N=t(24),w=t(85),_=t(33),S=t(482),C={email:"",password:"",phone:"",member_of:"",id_role:"",name:"",username:""};a.default=function(e){var a=e.open,t=e.toggleSidebar,l=Object(w.a)().t,r=Object(c.useContext)(_.a).colors,i=Object(c.useState)({}),o=Object(n.a)(i,2),u=(o[0],o[1]),m=Object(c.useState)(3),h=Object(n.a)(m,2),y=h[0],P=h[1],D=Object(c.useState)([]),E=Object(n.a)(D,2),k=E[0],A=E[1],z=(Object(v.c)((function(e){return e.users})),Object(v.c)((function(e){return e.roles}))),L=Object(v.c)((function(e){return e.units})),U=Object(v.b)(),F=Object(p.e)({defaultValues:C}),T=F.control,B=F.setValue,q=F.setError,Y=F.handleSubmit,H=F.formState.errors;return Object(c.useEffect)((function(){var e=L.data.map((function(e){return{value:e.id,label:e.name}}));A([e[0]])}),[U,L.data.length]),Object(b.jsx)(O,{size:"lg",open:a,title:l("New User"),headerClassName:"mb-1",contentClassName:"pt-0",toggleSidebar:t,onClosed:function(){for(var e in C)B(e,"")},children:Object(b.jsxs)(j.y,{onSubmit:Y((function(e){if(e.member_of=null!==k?k.map((function(e){return e.value})):[],e.id_role=null!==y?y:null,u(e),function(e){return Object.values(e).every((function(e){return"object"===typeof e||"member_of"!==e?null!==e&&""!==e:e.length>0}))}(e))U(Object(g.addUser)({id_role:null===e||void 0===e?void 0:e.id_role,avatar:"",status:1,email:e.email,member_of:null===e||void 0===e?void 0:e.member_of,phone:e.phone,name:e.name,username:e.username,password:e.password})).then((function(e){if("fulfilled"===e.meta.requestStatus)t(),N.b.success("".concat(l("Successfully Create Data")),{style:{padding:"16px",color:r.success.main,border:"1px solid ".concat(r.success.main)},iconTheme:{primary:r.success.main}});else if("rejected"===e.meta.requestStatus){var a="";e.payload.errors?a=Object.values(e.payload.errors):e.payload.error_reason&&(a=e.payload.message),N.b.error("".concat(l(a)),{style:{padding:"16px",color:r.danger.main,border:"1px solid ".concat(r.danger.main)},iconTheme:{primary:r.danger.main}})}}));else for(var a in e)null!==e[a]&&0===e[a].length&&q(a,{type:"manual"})})),children:[Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsxs)(j.E,{className:"form-label",for:"name",children:[l("Full Name"),Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)(p.a,{defaultValue:"",control:T,rules:{required:!0,pattern:{value:/^[a-zA-Z\s]*$/,message:l("Invalid name, you can only use letters")}},id:"name",name:"name",render:function(e){var a=e.field;return Object(b.jsx)(j.B,Object(s.a)(Object(s.a)({},a),{},{id:"name",placeholder:"John",invalid:H.name&&!0}))}}),H.name&&Object(b.jsx)(j.A,{color:"danger",children:l(H.name.message)})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsxs)(j.E,{className:"form-label",for:"email",children:[l("Email")," ",Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)(p.a,{name:"email",control:T,rules:{required:{value:!0,message:l("You need to specify a valid email address")},pattern:{value:/^\S+@\S+$/i,message:l("Not valid email adreess.")}},render:function(e){var a=e.field;return Object(b.jsx)(j.B,Object(s.a)({type:"email",id:"email",placeholder:"john.doe@example.com",invalid:H.email&&!0},a))}}),Object(b.jsx)(j.A,{color:"muted",children:l("You can use letters, numbers & periods")})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsxs)(j.E,{className:"form-label",for:"username",children:[l("Username"),Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)(p.a,{defaultValue:"",control:T,rules:{required:!0,minLength:{value:4,message:l("minimum number of character is 4")},maxLength:{value:15,message:l("maximum number of character is 15")},pattern:{value:/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/,message:l("You can use letters and numbers without white space")}},id:"username",name:"username",render:function(e){var a=e.field;return Object(b.jsx)(j.B,Object(s.a)(Object(s.a)({},a),{},{id:"username",placeholder:"john.doe.007",invalid:H.username&&!0}))}}),H.username&&Object(b.jsx)(j.A,{color:"danger",children:l(H.username.message)})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)("div",{className:"d-flex justify-content-between",children:Object(b.jsxs)(j.E,{className:"form-label",for:"login-password",children:[l("Password")," ",Object(b.jsx)("span",{className:"text-danger",children:"*"})]})}),Object(b.jsx)(p.a,{defaultValue:"",id:"password",name:"password",control:T,rules:{required:{value:!0,message:l("Password is required")},minLength:{value:8,message:l("Password must have at least 8 characters")}},render:function(e){var a=e.field;return Object(b.jsx)(S.a,Object(s.a)({className:"input-group-merge",invalid:H.password&&!0},a))}}),H.password&&Object(b.jsx)(j.A,{color:"danger",children:l(H.password.message)})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(j.E,{className:"form-label",for:"phone",children:l("Mobile Phone Number")}),Object(b.jsx)(p.a,{defaultValue:"",control:T,rules:{required:!1,pattern:{value:/^[0-9+-]+$/,message:"This is not a valid mobile phone, try again!"},minLength:{value:6,message:"This number is too short."},maxLength:{value:14,message:"...And now it's too long."}},id:"phone",name:"phone",render:function(e){var a=e.field;return Object(b.jsx)(j.B,Object(s.a)(Object(s.a)({},a),{},{id:"phone",placeholder:"+62 813 940 10XX X"}))}}),H.phone&&Object(b.jsx)(j.A,{color:"danger",children:l(H.phone.message)})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(j.E,{className:"form-label",for:"id_unit",children:l("Unit")}),Object(b.jsx)(x.a,{id:"id_unit",isClearable:!1,theme:f.H,closeMenuOnSelect:!1,onChange:function(e){A(e)},defaultValue:L.data.map((function(e){return{value:e.id,label:e.name}}))[0],isMulti:!0,options:L.data.map((function(e){return{value:e.id,label:e.name}})),className:"react-select",classNamePrefix:"select"})]}),Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(j.E,{for:"role-select",children:l("Role")}),Object(b.jsx)(x.a,{id:"id_role",isClearable:!1,options:z.data.map((function(e){return{value:e.id,label:e.name}})),defaultValue:{label:"editor",vaue:3},classNamePrefix:"select",className:d()("react-select",{"is-invalid":null===y}),theme:f.H,onChange:function(e){P(e.value)}})]}),Object(b.jsx)(j.i,{type:"submit",className:"me-1",color:"primary",children:l("Submit")}),Object(b.jsx)(j.i,{type:"reset",color:"secondary",outline:!0,onClick:t,children:l("Cancel")})]})})}},782:function(e,a,t){"use strict";t.r(a);var s=t(6),n=t(2),c=t(30),l=t(85),r=t(42),i=t(780),o=t(375),d=t(13),u=t(37),m=t(363),j=t(755),b=t(16),h=t(78),O=t(170),f=t.n(O),x=t(171),p=t.n(x),g=t(457),v=t(453),N=t(545),w=t(549),_=t(546),S=t(537),C=t(582),y=t(241),P=t(317),D=t(568),E=t(572),k=t(449),A=t(525),z=t(321),L=t(214),U=t(64),F=t(481),T=t(33),B=t(1328),q=t(24),Y=t(5),H=(t(94),t(105),t(43)),M=t.n(H),V=t(49),I=t.n(V),W=t(86),R=t(106),J=t.n(R),Z=t(0),$=I()(M.a),X=function(e){var a=e.store,t=e.toggleSidebar,s=e.handlePerPage,c=e.rowsPerPage,i=e.handleFilter,o=e.searchTerm,d=Object(l.a)().t,u=Object(n.useContext)(r.a);function m(e){var t=document.createElement("a"),s=function(e){var t,s=Object.keys(a.data[0]);return t="",t+=s.join(","),t+="\n",e.forEach((function(e){var a=0;s.forEach((function(s){a>0&&(t+=","),t+=e[s],a++})),t+="\n"})),t}(e);if(null!==s){s.match(/^data:text\/csv/i)||(s="data:text/csv;charset=utf-8,".concat(s)),t.setAttribute("href",encodeURI(s)),t.setAttribute("download","export.csv"),t.click()}}return Object(Z.jsx)("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:Object(Z.jsxs)(Y.S,{children:[Object(Z.jsx)(Y.t,{xl:"6",className:"d-flex align-items-center p-0",children:Object(Z.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(Z.jsx)("label",{htmlFor:"rows-per-page",children:d("Show")}),Object(Z.jsxs)(Y.B,{className:"mx-50",type:"select",id:"rows-per-page",value:c,onChange:s,style:{width:"5rem"},children:[Object(Z.jsx)("option",{value:"10",children:"10"}),Object(Z.jsx)("option",{value:"25",children:"25"}),Object(Z.jsx)("option",{value:"50",children:"50"})]}),Object(Z.jsx)("label",{htmlFor:"rows-per-page",children:d("Entries")})]})}),Object(Z.jsxs)(Y.t,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[Object(Z.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[Object(Z.jsxs)("label",{className:"mb-0",htmlFor:"search-invoice",children:[d("Search"),":"]}),Object(Z.jsx)(Y.B,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(Z.jsxs)("div",{className:"d-flex align-items-center table-header-actions",children:[Object(Z.jsxs)(Y.Y,{className:"me-1",children:[Object(Z.jsxs)(Y.x,{color:"secondary",caret:!0,outline:!0,children:[Object(Z.jsx)(g.a,{className:"font-small-4 me-50"}),Object(Z.jsx)("span",{className:"align-middle",children:d("Export")})]}),Object(Z.jsxs)(Y.w,{children:[Object(Z.jsxs)(Y.v,{className:"w-100",children:[Object(Z.jsx)(v.a,{className:"font-small-4 me-50"}),Object(Z.jsx)("span",{className:"align-middle",children:"Print"})]}),Object(Z.jsxs)(Y.v,{className:"w-100",onClick:function(){return m(a.data)},children:[Object(Z.jsx)(N.a,{className:"font-small-4 me-50"}),Object(Z.jsx)("span",{className:"align-middle",children:"CSV"})]}),Object(Z.jsxs)(Y.v,{className:"w-100",children:[Object(Z.jsx)(w.a,{className:"font-small-4 me-50"}),Object(Z.jsx)("span",{className:"align-middle",children:"Excel"})]}),Object(Z.jsxs)(Y.v,{className:"w-100",children:[Object(Z.jsx)(_.a,{className:"font-small-4 me-50"}),Object(Z.jsx)("span",{className:"align-middle",children:"PDF"})]}),Object(Z.jsxs)(Y.v,{className:"w-100",children:[Object(Z.jsx)(S.a,{className:"font-small-4 me-50"}),Object(Z.jsx)("span",{className:"align-middle",children:"Copy"})]})]})]}),u.can("post",sessionStorage.getItem("current_page_perm"))?Object(Z.jsxs)(Y.i,{className:"add-new-user",color:"primary",onClick:t,children:[d("Add New")," ",d(a.crudTitle)]}):null]})]})]})})};a.default=function(){var e,a,t,O,x=Object(b.b)(),g=Object(b.c)((function(e){return e.users})),v=Object(b.c)((function(e){return e.units})),w=Object(b.c)((function(e){return e.roles})),_=Object(l.a)().t,S=Object(n.useContext)(r.a),H=Object(n.useContext)(T.a).colors,M=Object(n.useState)("desc"),V=Object(s.a)(M,2),I=V[0],R=V[1],G=Object(n.useState)(""),K=Object(s.a)(G,2),Q=K[0],ee=K[1],ae=Object(n.useState)(null!==(e=null===(a=g.params)||void 0===a?void 0:a.page)&&void 0!==e?e:1),te=Object(s.a)(ae,2),se=te[0],ne=te[1],ce=Object(n.useState)("id"),le=Object(s.a)(ce,2),re=le[0],ie=le[1],oe=Object(n.useState)(null!==(t=null===(O=g.params)||void 0===O?void 0:O.length)&&void 0!==t?t:10),de=Object(s.a)(oe,2),ue=de[0],me=de[1],je=Object(n.useState)(!1),be=Object(s.a)(je,2),he=be[0],Oe=be[1],fe=Object(n.useState)({value:"",label:"".concat(_("Select")," ").concat(_("Role"))}),xe=Object(s.a)(fe,2),pe=xe[0],ge=xe[1],ve=Object(n.useState)({value:"",label:"".concat(_("Select")," ").concat(_("Unit"))}),Ne=Object(s.a)(ve,2),we=Ne[0],_e=Ne[1],Se=Object(n.useState)({value:"",label:"".concat(_("Select")," Status"),number:0}),Ce=Object(s.a)(Se,2),ye=Ce[0],Pe=Ce[1],De=Object(n.useState)([]),Ee=Object(s.a)(De,2),ke=Ee[0],Ae=Ee[1],ze=Object(n.useState)(!1),Le=Object(s.a)(ze,2),Ue=Le[0],Fe=Le[1],Te=Object(n.useState)(!1),Be=Object(s.a)(Te,2),qe=Be[0],Ye=Be[1],He=function(){Oe(!he),Object(d.G)()},Me=function(){Oe(!he),Object(d.z)(He)};Object(n.useEffect)((function(){if(0!==(null===w||void 0===w?void 0:w.data.length)||w.isLoading){var e=w.data.map((function(e){return{value:e.id,label:e.name}}));e.unshift({value:"",label:"".concat(_("Select")," ").concat(_("Role"))}),Ae(e)}else x(Object(j.getData)()).then((function(e){if(e.data){var a=e.payload.data.map((function(e){return{value:e.id,label:e.name}}));a.unshift({value:"",label:"".concat(_("Select")," ").concat(_("Role"))}),Ae(a)}}));0!==g.data.length||g.isLoading||x(Object(m.getData)({sort_dir:I,sort:re,search:Q,page:se,length:ue,filter_role:pe.value,filter_status:ye.value,filter_unit:we.value}))}),[x,g.data.length,v.data.length,w.data.length,I,re,se]);var Ve={pending:"light-warning",active:"light-success",inactive:"light-secondary"},Ie=function(e){return e.avatar?Object(Z.jsx)(u.a,{className:"me-1",img:e.avatar,width:"32",height:"32"}):Object(Z.jsx)(u.a,{initials:!0,className:"me-1",color:e.avatarColor||"light-primary",content:e.name||"John Doe"})},We=[{name:_("User"),sortable:!0,minWidth:"400px",sortField:"name",selector:function(e){return e.name},cell:function(e){return Object(Z.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[Ie(e),Object(Z.jsxs)("div",{className:"d-flex flex-column",children:[Object(Z.jsx)(c.b,{to:"/apps/user/view/".concat(e.id),className:"user_name text-truncate text-body",children:Object(Z.jsx)("span",{className:"fw-bolder",children:e.name})}),Object(Z.jsx)("small",{className:"text-truncate text-muted mb-0",children:e.email})]})]})}},{name:_("Role"),sortable:!0,minWidth:"200px",sortField:"role_name",selector:function(e){return e.role_name},cell:function(e){return function(e){var a={public:{class:"text-primary",icon:C.a},viewer:{class:"text-success",icon:y.a},editor:{class:"text-info",icon:P.a},admin:{class:"text-warning",icon:D.a},super_user:{class:"text-danger",icon:E.a}},t=a[e.role_name]?a[e.role_name].icon:P.a;return Object(Z.jsxs)("span",{className:"text-truncate text-capitalize align-middle",children:[Object(Z.jsx)(t,{size:18,className:"".concat(a[e.role_name]?a[e.role_name].class:""," me-50")}),e.role_name]})}(e)}},{name:_("Joined Date"),minWidth:"230px",sortable:!0,sortField:"joined_date",selector:function(e){return e.billing},cell:function(e){return Object(Z.jsx)("span",{className:"text-capitalize",children:J()(e.joined_date).format("DD MMM YYYY")})}},{name:_("Status"),minWidth:"120px",sortable:!0,sortField:"status",selector:function(e){return e.is_active},cell:function(e){return Object(Z.jsx)(Y.f,{className:"text-capitalize",color:Ve[e.is_active?"active":"inactive"],pill:!0,children:e.is_active?_("active"):_("inactive")})}},{name:_("Actions"),width:"130px",cell:function(e){return Object(Z.jsx)("div",{className:"column-action text-center",children:Object(Z.jsxs)(Y.Y,{children:[Object(Z.jsx)(Y.x,{tag:"span",children:Object(Z.jsx)(k.a,{size:14,className:"cursor-pointer"})}),Object(Z.jsxs)(Y.w,{end:!0,children:[Object(Z.jsxs)(Y.v,{tag:c.b,className:"w-100",to:"/apps/user/view/".concat(e.id),onClick:function(){return g.dispatch(Object(m.getUser)(e.id))},children:[Object(Z.jsx)(N.a,{size:14,className:"me-50"}),Object(Z.jsx)("span",{className:"align-middle",children:_("Details")})]}),S.can("update",sessionStorage.getItem("current_page_perm"))&&Object(Z.jsxs)(Y.v,{tag:"a",href:"/",className:"w-100",onClick:function(a){a.preventDefault(),Xe(e.id)},children:[Object(Z.jsx)(A.a,{size:14,className:"me-50"}),Object(Z.jsx)("span",{className:"align-middle",children:_("Edit")})]}),S.can("delete",sessionStorage.getItem("current_page_perm"))&&Object(Z.jsxs)(Y.v,{tag:"a",href:"/",className:"w-100",onClick:function(a){a.preventDefault(),$e(e.id)},children:[Object(Z.jsx)(z.a,{size:14,className:"me-50"}),Object(Z.jsx)("span",{className:"align-middle",children:_("Delete")})]})]})]})})}}],Re=Object(n.useMemo)((function(){return g.isLoading?We.map((function(e){return{name:e.name,sortable:!1,minWidth:e.minWidth,width:e.width,cell:function(a){return Object(Z.jsx)(W.a,{sx:{bgcolor:H.dark.light},animation:"wave",className:"Actions"===e.name?"ms-2":"",width:"Actions"===e.name?10:"100%",height:40})}}})):We.map((function(e){return{name:e.name,sortable:e.sortable,minWidth:e.minWidth,width:e.width,sortField:e.sortField,selector:e.selector,cell:e.cell}}))}),[g.isLoading,We]),Je=[{value:"",label:"".concat(_("Select")," Status"),number:0},{value:"pending",label:"".concat(_("Pending")),number:1},{value:"active",label:"".concat(_("Active")),number:2},{value:"inactive",label:"".concat(_("Inactive")),number:3}],Ze=function(){return Object(Z.jsxs)(n.Fragment,{children:[Object(Z.jsx)(F.a,{}),Object(Z.jsxs)(Y.r,{className:"mb-0 mt-1",children:[_("Please Wait"),"..."]})]})},$e=function(e){return $.fire({title:"".concat(_("Are you sure?")),text:"".concat(_("You won't be able to revert")," ").concat(_("user"),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(_("Yes, Delete User!")),cancelButtonText:"".concat(_("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then((function(a){a.value&&(Fe(!0),x(Object(m.deleteUser)(e)).then((function(e){"fulfilled"===e.meta.requestStatus?(Fe(!1),q.b.success("".concat(_("Successfully deleted Data")),{style:{padding:"16px",color:H.success.main,border:"1px solid ".concat(H.success.main)},iconTheme:{primary:H.success.main}})):"rejected"===e.meta.requestStatus&&(Fe(!1),q.b.error(e.payload.message,{style:{padding:"16px",color:H.danger.main,border:"1px solid ".concat(H.danger.main)},iconTheme:{primary:H.danger.main}}))})))}))},Xe=function(e){var a;Fe(!0),!g.selectedUser||(null===(a=g.selectedUser)||void 0===a?void 0:a.id)!==parseInt(e)&&!g.isLoadingDetail?x(Object(m.getUser)(e)).then((function(e){Ye(!0),Fe(!1)})):(Fe(!1),Ye(!0))};return Object(Z.jsxs)(n.Fragment,{children:[Object(Z.jsxs)(U.a,{blocking:Ue,loader:Object(Z.jsx)(Ze,{}),children:[Object(Z.jsx)(Y.l,{children:Object(Z.jsx)(Y.m,{children:Object(Z.jsxs)(Y.S,{children:[Object(Z.jsxs)(Y.t,{children:[Object(Z.jsx)(Y.E,{for:"role-select",children:_("Role")}),Object(Z.jsx)(h.a,{isClearable:!1,value:pe,options:ke,className:"react-select",classNamePrefix:"select",theme:d.H,onChange:function(e){ge(e),x(Object(m.getData)({sort_dir:I,sort:re,search:Q,filter_role:e.value,page:se,length:ue,filter_status:ye.value,filter_unit:we.value}))}})]}),Object(Z.jsxs)(Y.t,{children:[Object(Z.jsx)(Y.E,{for:"status-select",children:"Status"}),Object(Z.jsx)(h.a,{theme:d.H,isClearable:!1,className:"react-select",classNamePrefix:"select",options:Je,value:ye,onChange:function(e){Pe(e),x(Object(m.getData)({sort_dir:I,sort:re,search:Q,page:se,filter_status:e.value,length:ue,filter_role:pe.value,filter_unit:we.value}))}})]}),Object(Z.jsx)(B.a,{parentChange:function(e){_e(e),x(Object(m.getData)({sort_dir:I,sort:re,search:Q,page:se,length:ue,filter_role:pe.value,filter_unit:e.value,filter_status:ye.value}))},colMode:!0})]})})}),Object(Z.jsx)(Y.l,{className:"overflow-hidden",children:Object(Z.jsx)("div",{className:"react-dataTable",children:Object(Z.jsx)(p.a,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,style:{"min-height":"400px"},columns:Re,onSort:function(e,a){R(a),ie(e.sortField),x(Object(m.getData)({sort_dir:I,sort:re,search:Q,page:se,length:ue,filter_role:pe.value,filter_status:ye.value,filter_unit:we.value}))},sortIcon:Object(Z.jsx)(L.a,{}),className:"react-dataTable",paginationComponent:function(){var e=Number(Math.ceil(g.total/ue));return Object(Z.jsx)(f.a,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:0!==se?se-1:0,onPageChange:function(e){return function(e){x(Object(m.getData)({sort_dir:I,sort:re,search:Q,length:ue,page:e.selected+1,filter_role:pe.value,filter_status:ye.value,filter_unit:we.value})),ne(e.selected+1)}(e)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},data:function(){var e={filter_role:pe.value,filter_unit:we.value,filter_status:ye.value,search:Q},a=Object.keys(e).some((function(a){return e[a].length>0}));return g.isLoading?Array(10).fill({}):g.data.length>0?g.data:0===g.data.length&&a?[]:void 0}(),subHeaderComponent:Object(Z.jsx)(X,{store:g,searchTerm:Q,rowsPerPage:ue,handleFilter:function(e){ee(e),x(Object(m.getData)({sort_dir:I,search:e,sort:re,page:se,length:ue,filter_role:pe.value,filter_status:ye.value,filter_unit:we.value}))},handlePerPage:function(e){var a=parseInt(e.currentTarget.value);x(Object(m.getData)({sort_dir:I,sort:re,search:Q,length:a,page:se,filter_role:pe.value,filter_unit:we.value,filter_status:ye.value})),me(a)},toggleSidebar:Me})})})}),Object(Z.jsx)(i.default,{open:he,toggleSidebar:Me})]}),null!==g.selectedUser&&Object(Z.jsx)(o.default,{show:qe,setShow:Ye,detailPage:!1})]})}}}]);
//# sourceMappingURL=12.8f3ebb36.chunk.js.map