/*! For license information please see 33.2e7ad62f.chunk.js.LICENSE.txt */
(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[33,159,160,161],{1261:function(e,t,n){},1332:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/create-account.ea5702aa.svg"},1531:function(e,t,n){e.exports=function(){"use strict";function e(){return e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},e.apply(this,arguments)}var t=window.Element.prototype.matches,n=function(e,t){return e.closest(t)},s=function(e,t){return new window.Event(e,t)},i=function(e,t){return new window.CustomEvent(e,t)};function a(){if(window.Element.prototype.matches||(t=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector),window.Element.prototype.closest||(n=function(e,n){if(!document.documentElement.contains(e))return null;do{if(t.call(e,n))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),window.Event&&"function"===typeof window.Event||(s=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n}),"function"!==typeof window.CustomEvent){var e=window.Event.prototype.preventDefault;i=function(t,n){var s=document.createEvent("CustomEvent");return n=n||{bubbles:!1,cancelable:!1,detail:null},s.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),s.preventDefault=function(){this.cancelable&&(e.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}))},s}}}a();var c=1e3,r={ACTIVE:"active",LINEAR:"linear",BLOCK:"dstepper-block",NONE:"dstepper-none",FADE:"fade",VERTICAL:"vertical"},o="transitionend",l="bsStepper",d=function(e,t,n,s){var a=e[l];if(!a._steps[t].classList.contains(r.ACTIVE)&&!a._stepsContents[t].classList.contains(r.ACTIVE)){var c=i("show.bs-stepper",{cancelable:!0,detail:{from:a._currentIndex,to:t,indexStep:t}});e.dispatchEvent(c);var o=a._steps.filter((function(e){return e.classList.contains(r.ACTIVE)})),d=a._stepsContents.filter((function(e){return e.classList.contains(r.ACTIVE)}));c.defaultPrevented||(o.length&&o[0].classList.remove(r.ACTIVE),d.length&&(d[0].classList.remove(r.ACTIVE),e.classList.contains(r.VERTICAL)||a.options.animation||d[0].classList.remove(r.BLOCK)),u(e,a._steps[t],a._steps,n),m(e,a._stepsContents[t],a._stepsContents,d,s))}},u=function(e,t,n,s){n.forEach((function(t){var n=t.querySelector(s.selectors.trigger);n.setAttribute("aria-selected","false"),e.classList.contains(r.LINEAR)&&n.setAttribute("disabled","disabled")})),t.classList.add(r.ACTIVE);var i=t.querySelector(s.selectors.trigger);i.setAttribute("aria-selected","true"),e.classList.contains(r.LINEAR)&&i.removeAttribute("disabled")},m=function(e,t,n,s,a){var c=e[l],d=n.indexOf(t),u=i("shown.bs-stepper",{cancelable:!0,detail:{from:c._currentIndex,to:d,indexStep:d}});function m(){t.classList.add(r.BLOCK),t.removeEventListener(o,m),e.dispatchEvent(u),a()}if(t.classList.contains(r.FADE)){t.classList.remove(r.NONE);var p=j(t);t.addEventListener(o,m),s.length&&s[0].classList.add(r.NONE),t.classList.add(r.ACTIVE),b(t,p)}else t.classList.add(r.ACTIVE),t.classList.add(r.BLOCK),e.dispatchEvent(u),a()},j=function(e){if(!e)return 0;var t=window.getComputedStyle(e).transitionDuration;return parseFloat(t)?(t=t.split(",")[0],parseFloat(t)*c):0},b=function(e,t){var n=!1,i=t+5;function a(){n=!0,e.removeEventListener(o,a)}e.addEventListener(o,a),window.setTimeout((function(){n||e.dispatchEvent(s(o)),e.removeEventListener(o,a)}),i)},p=function(e,t){t.animation&&e.forEach((function(e){e.classList.add(r.FADE),e.classList.add(r.NONE)}))},v=function(){return function(e){e.preventDefault()}},f=function(e){return function(t){t.preventDefault();var s=n(t.target,e.selectors.steps),i=n(s,e.selectors.stepper),a=i[l],c=a._steps.indexOf(s);d(i,c,e,(function(){a._currentIndex=c}))}},h={linear:!0,animation:!1,selectors:{steps:".step",trigger:".step-trigger",stepper:".bs-stepper"}};return function(){function t(t,n){var s=this;void 0===n&&(n={}),this._element=t,this._currentIndex=0,this._stepsContents=[],this.options=e({},h,{},n),this.options.selectors=e({},h.selectors,{},this.options.selectors),this.options.linear&&this._element.classList.add(r.LINEAR),this._steps=[].slice.call(this._element.querySelectorAll(this.options.selectors.steps)),this._steps.filter((function(e){return e.hasAttribute("data-target")})).forEach((function(e){s._stepsContents.push(s._element.querySelector(e.getAttribute("data-target")))})),p(this._stepsContents,this.options),this._setLinkListeners(),Object.defineProperty(this._element,l,{value:this,writable:!0}),this._steps.length&&d(this._element,this._currentIndex,this.options,(function(){}))}var n=t.prototype;return n._setLinkListeners=function(){var e=this;this._steps.forEach((function(t){var n=t.querySelector(e.options.selectors.trigger);e.options.linear?(e._clickStepLinearListener=v(e.options),n.addEventListener("click",e._clickStepLinearListener)):(e._clickStepNonLinearListener=f(e.options),n.addEventListener("click",e._clickStepNonLinearListener))}))},n.next=function(){var e=this,t=this._currentIndex+1<=this._steps.length-1?this._currentIndex+1:this._steps.length-1;d(this._element,t,this.options,(function(){e._currentIndex=t}))},n.previous=function(){var e=this,t=this._currentIndex-1>=0?this._currentIndex-1:0;d(this._element,t,this.options,(function(){e._currentIndex=t}))},n.to=function(e){var t=this,n=e-1,s=n>=0&&n<this._steps.length?n:0;d(this._element,s,this.options,(function(){t._currentIndex=s}))},n.reset=function(){var e=this;d(this._element,0,this.options,(function(){e._currentIndex=0}))},n.destroy=function(){var e=this;this._steps.forEach((function(t){var n=t.querySelector(e.options.selectors.trigger);e.options.linear?n.removeEventListener("click",e._clickStepLinearListener):n.removeEventListener("click",e._clickStepNonLinearListener)})),this._element[l]=void 0,this._element=void 0,this._currentIndex=void 0,this._steps=void 0,this._stepsContents=void 0,this._clickStepLinearListener=void 0,this._clickStepNonLinearListener=void 0},t}()}()},1532:function(e,t,n){},1533:function(e,t,n){},395:function(e,t,n){"use strict";n.r(t);var s=n(4),i=n(6),a=n(34),c=n(30),r=n(2),o=n(10),l=n(1531),d=n.n(l),u=n(12),m=n.n(u),j=n(239),b=(n(1532),n(1533),n(0)),p=Object(r.forwardRef)((function(e,t){var n,s=e.type,a=e.steps,c=e.options,l=e.instance,u=e.separator,j=e.className,p=e.headerClassName,v=e.contentClassName,f=e.contentWrapperClassName,h=Object(r.useState)(0),O=Object(i.a)(h,2),x=O[0],g=O[1],N=null;Object(r.useEffect)((function(){N=new d.a(t.current,c),t.current.addEventListener("shown.bs-stepper",(function(e){g(e.detail.indexStep)})),l&&l(N)}),[]);return Object(b.jsxs)("div",{ref:t,className:m()("bs-stepper",(n={},Object(o.a)(n,j,j),Object(o.a)(n,"vertical","vertical"===s),Object(o.a)(n,"vertical wizard-modern","modern-vertical"===s),Object(o.a)(n,"wizard-modern","modern-horizontal"===s),n)),children:[Object(b.jsx)("div",{className:m()("bs-stepper-header",Object(o.a)({},p,p)),children:a.map((function(e,t){return Object(b.jsxs)(r.Fragment,{children:[0!==t&&t!==a.length?Object(b.jsx)("div",{className:"line",children:u}):null,Object(b.jsx)("div",{className:m()("step",{crossed:x>t,active:t===x}),"data-target":"#".concat(e.id),children:Object(b.jsxs)("button",{type:"button",className:"step-trigger",children:[Object(b.jsx)("span",{className:"bs-stepper-box",children:e.icon?e.icon:t+1}),Object(b.jsxs)("span",{className:"bs-stepper-label",children:[Object(b.jsx)("span",{className:"bs-stepper-title",children:e.title}),e.subtitle?Object(b.jsx)("span",{className:"bs-stepper-subtitle",children:e.subtitle}):null]})]})})]},e.id)}))}),Object(b.jsx)("div",{className:m()("bs-stepper-content",Object(o.a)({},f,f)),children:a.map((function(e,t){var n;return Object(b.jsx)("div",{className:m()("content",(n={},Object(o.a)(n,v,v),Object(o.a)(n,"active dstepper-block",x===t),n)),id:e.id,children:e.content},e.id)}))})]})})),v=p;p.defaultProps={options:{},type:"horizontal",separator:Object(b.jsx)(j.a,{size:17})};var f=n(5),h=(n(561),n(121),n(522),n(551)),O=n(532),x=n(573),g=n(804),N=n(805),_=n(806),w=(n(1261),n(85)),L=(n(24),n(16)),y=(n(37),n(482),n(100),n(42)),E=(n(265),n(13),n(17),n(64),n(87)),S=n(46);t.default=function(){var e,t,o,l,d,u,m,j,p,k,I,C,z,A,P,B,T,V,F,D,R,q,W,K,U,M,J,H,Z,$,G,Q,X,Y,ee,te,ne,se,ie,ae,ce,re,oe=Object(L.c)((function(e){return e.domain_claims})),le=Object(w.a)().t,de=(Object(E.a)().skin,Object(L.b)(),Object(r.useContext)(y.a),Object(a.f)(),Object(r.useState)(!0)),ue=Object(i.a)(de,2),me=(ue[0],ue[1],n(486).default),je=Object(c.d)(),be=(Object(i.a)(je,1)[0],Object(r.useState)(!1)),pe=Object(i.a)(be,2),ve=(pe[0],pe[1],Object(r.useState)(null)),fe=Object(i.a)(ve,2),he=(fe[0],fe[1],Object(r.useState)(null)),Oe=Object(i.a)(he,2),xe=(Oe[0],Oe[1],Object(r.useState)(me)),ge=Object(i.a)(xe,2),Ne=(ge[0],ge[1]),_e=Object(r.useState)(null),we=Object(i.a)(_e,2),Le=(we[0],we[1]),ye=Object(r.useRef)(null),Ee=Object(r.useState)(null),Se=Object(i.a)(Ee,2),ke=Se[0],Ie=Se[1],Ce=[{id:"account-details",title:le("Account"),subtitle:le("Enter email"),icon:Object(b.jsx)(h.a,{size:18}),content:Object(b.jsx)(N.default,{stepper:ke})},{id:"email-verification",title:le("Verification"),subtitle:le("Enter Verification"),icon:Object(b.jsx)(O.a,{size:18}),content:Object(b.jsx)(_.default,{stepper:ke})},{id:"complete-info",title:le("Complete"),subtitle:le("Result Information"),icon:Object(b.jsx)(x.a,{size:18}),content:Object(b.jsx)(g.default,{stepper:ke})}],ze=n(1332).default;localStorage.getItem("i18nextLng")?"id-ID"===localStorage.i18nextLng&&localStorage.setItem("i18nextLng","id"):localStorage.setItem("i18nextLng","id"),localStorage.removeItem("domainClaim"),localStorage.removeItem("userData"),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),sessionStorage.clear();var Ae=Object(S.e)({mode:"all"}),Pe=(Ae.control,Ae.setError,Ae.handleSubmit,Ae.getValues,Ae.reset,Ae.formState);Pe.errors,Pe.isDirty,Pe.isValid,function(e){var t=window.matchMedia(e),n=Object(r.useState)(t.matches),s=Object(i.a)(n,2),a=s[0],c=s[1];Object(r.useEffect)((function(){var e=function(e){return c(e.matches)};return t.addListener(e),function(){return t.removeListener(e)}}))}("(min-width: 500px)");return Object(r.useEffect)((function(){var e,t;if(null!==oe&&void 0!==oe&&null!==(e=oe.data)&&void 0!==e&&null!==(t=e.app)&&void 0!==t&&t.info){var n,i,a,c,r,o,l,d,u,m,j,b,p,v,f,h,O,x,g,N=null===(n=oe.data)||void 0===n||null===(i=n.app)||void 0===i?void 0:i.logo,_=null===(a=oe.data)||void 0===a||null===(c=a.unit)||void 0===c||null===(r=c.attributes)||void 0===r?void 0:r.logo,w=Object(s.a)(Object(s.a)({},{layout:null!==(o=null===(l=oe.data)||void 0===l||null===(d=l.unit)||void 0===d||null===(u=d.unit_app_attributes)||void 0===u?void 0:u.layout)&&void 0!==o?o:{}}),null!==(m=null===oe||void 0===oe||null===(j=oe.data)||void 0===j||null===(b=j.app)||void 0===b?void 0:b.setting)&&void 0!==m?m:{}),L=null===oe||void 0===oe||null===(p=oe.data)||void 0===p||null===(v=p.unit)||void 0===v?void 0:v.unit_app_attributes;null===L||void 0===L||L.setting;if(null!==N&&void 0!==N&&N.appLogo&&Ne(N.appLogo),null!==w&&void 0!==w&&null!==(f=w.layout)&&void 0!==f&&f.skin||w.skin)localStorage.setItem("skin",'"'.concat(null!==(O=w.layout.skin)&&void 0!==O?O:w.skin,'"')),localStorage.setItem("skinDef",'"'.concat(null!==(x=w.layout.skin)&&void 0!==x?x:w.skin,'"'));if(null!==w&&void 0!==w&&null!==(h=w.layout)&&void 0!==h&&h.contentWidth||null!==w&&void 0!==w&&w.contentWidth)localStorage.setItem("contentWidth",'"'.concat(null!==(g=w.layout.contentWidth)&&void 0!==g?g:null===w||void 0===w?void 0:w.contentWidth,'"'));_&&Le(_)}}),[]),(null===oe||void 0===oe?void 0:oe.data)&&((null===oe||void 0===oe||null===(e=oe.data)||void 0===e||null===(t=e.app)||void 0===t||null===(o=t.setting)||void 0===o?void 0:o.enable_registration)||(null===oe||void 0===oe||null===(l=oe.data)||void 0===l||null===(d=l.unit)||void 0===d||null===(u=d.unit_app_attributes)||void 0===u?void 0:u.enable_registration))&&Object(b.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(b.jsxs)(f.S,{className:"auth-inner m-0",children:[Object(b.jsxs)(c.b,{className:"brand-logo d-flex align-items-center",to:"/",onClick:function(e){return e.preventDefault()},children:[((null===oe||void 0===oe||null===(m=oe.data.app)||void 0===m||null===(j=m.logo)||void 0===j?void 0:j.appLogo)||(null===(p=oe.data)||void 0===p||null===(k=p.app)||void 0===k||null===(I=k.logo)||void 0===I?void 0:I.appLogoLogin)||(null===(C=oe.data)||void 0===C||null===(z=C.app)||void 0===z||null===(A=z.logo)||void 0===A?void 0:A.appLogoLoginBig)||(null===(P=oe.data)||void 0===P||null===(B=P.unit)||void 0===B?void 0:B.unit_app_attributes)||(null===(T=oe.data)||void 0===T||null===(V=T.unit)||void 0===V||null===(F=V.unit_app_attributes)||void 0===F||null===(D=F.appLogoLogin)||void 0===D?void 0:D.appLogoLoginBig))&&Object(b.jsx)("img",{height:28,style:{maxWidth:"230px",maxHeight:"60px",height:"auto"},src:null!==(R=null!==(q=null!==(W=null!==(K=null===(U=oe.data)||void 0===U||null===(M=U.unit)||void 0===M||null===(J=M.unit_app_attributes)||void 0===J?void 0:J.appLogoLoginBig)&&void 0!==K?K:null===(H=oe.data)||void 0===H||null===(Z=H.unit)||void 0===Z||null===($=Z.unit_app_attributes)||void 0===$?void 0:$.appLogoLogin)&&void 0!==W?W:null===(G=oe.data)||void 0===G||null===(Q=G.app)||void 0===Q||null===(X=Q.logo)||void 0===X?void 0:X.appLogoLoginBig)&&void 0!==q?q:null===(Y=oe.data)||void 0===Y||null===(ee=Y.app)||void 0===ee||null===(te=ee.logo)||void 0===te?void 0:te.appLogoLogin)&&void 0!==R?R:null===(ne=oe.data.app)||void 0===ne||null===(se=ne.logo)||void 0===se?void 0:se.appLogo,alt:"logo"}),(null===(ie=oe.data.app)||void 0===ie?void 0:ie.name)&&!(null!==(ae=oe.data)&&void 0!==ae&&null!==(ce=ae.app)&&void 0!==ce&&null!==(re=ce.logo)&&void 0!==re&&re.appLogoLoginBig)&&Object(b.jsx)("h2",{className:"brand-text text-primary ms-1 mt-50",children:oe.data.app.name})]}),Object(b.jsx)(f.t,{lg:"3",className:"d-none d-lg-flex align-items-center p-0",children:Object(b.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center",children:Object(b.jsx)("img",{className:"img-fluid w-100",src:ze,alt:"Login Cover"})})}),Object(b.jsx)(f.t,{lg:"9",className:"d-flex align-items-center auth-bg px-2 px-sm-3 px-lg-5 pt-3",children:Object(b.jsx)("div",{className:"width-700 mx-auto",children:Object(b.jsx)(v,{ref:ye,steps:Ce,instance:function(e){return Ie(e)},headerClassName:"px-0",contentWrapperClassName:"px-0 mt-4",className:"register-multi-steps-wizard shadow-none"})})})]})})}},804:function(e,t,n){"use strict";n.r(t);var s=n(6),i=n(34),a=n(2),c=(n(46),n(526)),r=n(5),o=n(85),l=(n(16),n(37),n(482),n(100),n(42),n(265),n(13),n(17),n(64),n(87)),d=n(0);t.default=function(e){e.stepper;var t=Object(o.a)().t,n=(Object(l.a)().skin,Object(i.f)()),u=Object(a.useState)(sessionStorage.getItem("register_token_msg")),m=Object(s.a)(u,2),j=m[0],b=m[1];return Object(a.useEffect)((function(){b(sessionStorage.getItem("register_token_msg"))}),[]),Object(d.jsxs)(a.Fragment,{children:[Object(d.jsxs)("div",{className:"content-header mb-2",children:[Object(d.jsx)("h2",{className:"fw-bolder mb-75",children:t("Success Registration")}),j?Object(d.jsxs)("span",{children:[j,"."]}):Object(d.jsx)("span",{children:t("Please wait for confirmation regarding your registration application. We will notify you via email")})]}),Object(d.jsx)("div",{className:"d-flex justify-content-between mt-2",children:Object(d.jsxs)(r.i,{onClick:function(){return n("/login")},type:"button",color:"primary",className:"btn-next",children:[Object(d.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:t("Login")}),Object(d.jsx)(c.a,{size:14,className:"align-middle ms-sm-25 ms-0"})]})})]})}},805:function(e,t,n){"use strict";n.r(t);var s=n(4),i=n(6),a=n(2),c=n(44),r=n(1300),o=n(46),l=n(1301),d=n(561),u=n(121),m=n(522),j=n(239),b=n(5),p=n(482),v=n(85),f=n(24),h=n(37),O=n(100),x=n(64),g=n(87),N=n(0),_=function(e){var t=e.x,n=e.name,s=e.message;return Object(N.jsxs)("div",{className:"d-flex",children:[Object(N.jsx)("div",{className:"me-1",children:Object(N.jsx)(h.a,{size:"sm",color:"info",icon:Object(N.jsx)(d.a,{size:12})})}),Object(N.jsxs)("div",{className:"d-flex flex-column",children:[Object(N.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(N.jsx)("h6",{children:n}),Object(N.jsx)(u.a,{size:12,className:"cursor-pointer",onClick:function(){return f.b.dismiss(t.id)}})]}),Object(N.jsx)("span",{children:s})]})]})},w=function(e){var t=e.x,n=e.name,s=e.message;return Object(N.jsxs)("div",{className:"d-flex",children:[Object(N.jsx)("div",{className:"me-1",children:Object(N.jsx)(h.a,{size:"sm",color:"danger",icon:Object(N.jsx)(m.a,{size:12})})}),Object(N.jsxs)("div",{className:"d-flex flex-column",children:[Object(N.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(N.jsx)("h6",{children:n}),Object(N.jsx)(u.a,{size:12,className:"cursor-pointer",onClick:function(){return f.b.dismiss(t.id)}})]}),Object(N.jsx)("span",{children:s})]})]})},L={email:"",username:"",password:"",confirmPassword:""};t.default=function(e){var t=e.stepper,n=Object(v.a)().t,d=(Object(g.a)().skin,Object(a.useState)(!1)),u=Object(i.a)(d,2),m=u[0],h=u[1],y=Object(a.useState)(null),E=Object(i.a)(y,2),S=(E[0],E[1]),k=Object(a.useState)(null),I=Object(i.a)(k,2),C=(I[0],I[1]),z=r.a().shape({username:r.c().required("Username is required").min(4,"Username must be at least 4 characters").max(15,"Username cannot exceed 15 characters").matches(/^[a-zA-Z0-9_]+$/,"Username can only contain letters, numbers, and underscores"),email:r.c().email().required(),password:r.c().required(),confirmPassword:r.c().required().oneOf([r.b("password"),null],n("Passwords must match"))}),A=Object(o.e)({defaultValues:L,resolver:Object(l.a)(z)}),P=A.control,B=A.handleSubmit,T=A.formState.errors;return Object(N.jsx)(x.a,{blocking:m,loader:Object(N.jsx)(O.a,{}),children:Object(N.jsxs)(a.Fragment,{children:[Object(N.jsxs)("div",{className:"content-header mb-2",children:[Object(N.jsx)("h2",{className:"fw-bolder mb-75",children:n("Account Information")}),Object(N.jsxs)("span",{children:['"',n("Enter your email password details"),'"']})]}),Object(N.jsxs)(b.y,{onSubmit:B((function(e){if(Object.values(e).every((function(e){return e.length>0}))){var i=Object(s.a)({},e);null!==localStorage.getItem("dev")&&(i.device_id=localStorage.getItem("dev"),delete i.confirmPassword),h(!0),c.a.register(i).then((function(e){var s=e.data;h(!1),C(null===s||void 0===s?void 0:s.message),sessionStorage.setItem("register_token",null===s||void 0===s?void 0:s.register_token),Object(f.b)((function(e){return Object(N.jsx)(_,{x:e,name:n("Successfully"),message:null===s||void 0===s?void 0:s.message})})),t.next()})).catch((function(e){var t,s;h(!1);var i,a,c="".concat(n("Failed. Please check your email and password and make sure your account is registered correctly. Contact our support team if needed."));["email_taken","username_taken","email_await"].includes(null===(t=e.response)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.error_reason)&&(c=null===(i=e.response)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.message);S(c),Object(f.b)((function(e){return Object(N.jsx)(w,{x:e,name:n("Register Failed"),message:c})}))}))}})),children:[Object(N.jsxs)(b.S,{children:[Object(N.jsxs)(b.t,{md:"6",className:"mb-1",children:[Object(N.jsx)(b.E,{className:"form-label",for:"email",children:"Email"}),Object(N.jsx)(o.a,{control:P,id:"email",name:"email",render:function(e){var t=e.field;return Object(N.jsx)(b.B,Object(s.a)({type:"email",placeholder:"john.doe@email.com",invalid:T.email&&!0},t))}}),T.email&&Object(N.jsx)(b.z,{children:T.email.message})]}),Object(N.jsxs)(b.t,{md:"6",className:"mb-1",children:[Object(N.jsx)(b.E,{className:"form-label",for:"username",children:"Username"}),Object(N.jsx)(o.a,{id:"username",name:"username",control:P,render:function(e){var t=e.field;return Object(N.jsx)(b.B,Object(s.a)({placeholder:"johndoe",invalid:T.username&&!0},t))}}),T.username&&Object(N.jsx)(b.z,{children:T.username.message})]})]}),Object(N.jsxs)(b.S,{children:[Object(N.jsxs)("div",{className:"form-password-toggle col-md-6 mb-1",children:[Object(N.jsx)(o.a,{id:"password",name:"password",control:P,render:function(e){var t=e.field;return Object(N.jsx)(p.a,Object(s.a)({label:n("Password"),htmlFor:"password",className:"input-group-merge",invalid:T.password&&!0},t))}}),T.password&&Object(N.jsx)(b.z,{children:T.password.message})]}),Object(N.jsxs)("div",{className:"form-password-toggle col-md-6 mb-1",children:[Object(N.jsx)(o.a,{control:P,id:"confirmPassword",name:"confirmPassword",render:function(e){var t=e.field;return Object(N.jsx)(p.a,Object(s.a)({label:n("Confirm Password"),htmlFor:"confirmPassword",className:"input-group-merge",invalid:T.confirmPassword&&!0},t))}}),T.confirmPassword&&Object(N.jsx)(b.z,{children:T.confirmPassword.message})]})]}),Object(N.jsxs)(b.S,{children:[Object(N.jsxs)(b.t,{md:"6",className:"mb-1",children:[Object(N.jsx)(b.E,{className:"form-label",for:"name",children:n("Name")}),Object(N.jsx)(o.a,{id:"name",name:"name",control:P,render:function(e){var t=e.field;return Object(N.jsx)(b.B,Object(s.a)({placeholder:"John",invalid:T.name&&!0},t))}}),T.name&&Object(N.jsx)(b.z,{children:T.name.message})]}),Object(N.jsxs)(b.t,{md:"6",className:"mb-1",children:[Object(N.jsx)(b.E,{className:"form-label",for:"mobile_number",children:n("Mobile Number")}),Object(N.jsx)(o.a,{id:"mobile_number",name:"mobile_number",control:P,render:function(e){var t=e.field;return Object(N.jsx)(b.B,Object(s.a)({type:"number",id:"phone",name:"mobile_number",placeholder:"(472) 765-3654",invalid:T.mobile_number&&!0},t))}}),T.mobile_number&&Object(N.jsx)(b.z,{children:T.mobile_number.message})]})]}),Object(N.jsx)("div",{className:"d-flex justify-content-end mt-2",children:Object(N.jsxs)(b.i,{type:"submit",color:"primary",className:"btn-next",children:[Object(N.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:n("Next")}),Object(N.jsx)(j.a,{size:14,className:"align-middle ms-sm-25 ms-0"})]})})]})]})})}},806:function(e,t,n){"use strict";n.r(t);var s=n(15),i=n(6),a=n(2),c=n(46),r=n(561),o=n(121),l=n(522),d=n(533),u=n(438),m=n(5),j=n(85),b=n(24),p=n(37),v=n(100),f=n(64),h=n(87),O=n(44),x=n(0),g=function(e){var t=e.x,n=e.name,s=e.message;return Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("div",{className:"me-1",children:Object(x.jsx)(p.a,{size:"sm",color:"info",icon:Object(x.jsx)(r.a,{size:12})})}),Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsx)("h6",{children:n}),Object(x.jsx)(o.a,{size:12,className:"cursor-pointer",onClick:function(){return b.b.dismiss(t.id)}})]}),Object(x.jsx)("span",{children:s})]})]})},N=function(e){var t=e.x,n=e.name,s=e.message;return Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("div",{className:"me-1",children:Object(x.jsx)(p.a,{size:"sm",color:"danger",icon:Object(x.jsx)(l.a,{size:12})})}),Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsx)("h6",{children:n}),Object(x.jsx)(o.a,{size:12,className:"cursor-pointer",onClick:function(){return b.b.dismiss(t.id)}})]}),Object(x.jsx)("span",{children:s})]})]})},_={address:"",firstName:""};t.default=function(e){var t=e.stepper,n=Object(j.a)().t,r=(Object(h.a)().skin,Object(a.useState)(!1)),o=Object(i.a)(r,2),l=o[0],p=o[1],w=Object(a.useState)(null),L=Object(i.a)(w,2),y=(L[0],L[1]),E=Object(a.useState)(null),S=Object(i.a)(E,2),k=(S[0],S[1]),I=Object(a.useState)(["","","",""]),C=Object(i.a)(I,2),z=C[0],A=C[1],P=Object(c.e)({defaultValues:_}),B=(P.control,P.setError,P.handleSubmit);P.formState.errors;return Object(x.jsx)(f.a,{blocking:l,loader:Object(x.jsx)(v.a,{}),children:Object(x.jsxs)(a.Fragment,{children:[Object(x.jsxs)("div",{className:"content-header mb-2",children:[Object(x.jsx)("h2",{className:"fw-bolder mb-75",children:n("Email Verification")}),Object(x.jsxs)("span",{children:[n("Enter the OTP code that we have sent to your email"),"."]})]}),Object(x.jsxs)(m.y,{onSubmit:B((function(e){if(null!==z&&void 0!==z&&z.every((function(e){return""!==e}))){var s,i={otp:parseInt(null===(s=z.join())||void 0===s?void 0:s.replaceAll(",","")),register_token:sessionStorage.getItem("register_token")};p(!0),O.a.registerOtp(i).then((function(e){var s=e.data;p(!1),k(null===s||void 0===s?void 0:s.message),sessionStorage.removeItem("register_token"),sessionStorage.setItem("register_token_msg",null===s||void 0===s?void 0:s.message),Object(b.b)((function(e){return Object(x.jsx)(g,{x:e,name:n("Successfully"),message:null===s||void 0===s?void 0:s.message})})),t.next()})).catch((function(e){var t,s;p(!1);var i,a,c="".concat(n("Failed. Please check your email and password and make sure your account is registered correctly. Contact our support team if needed."));["email_taken","username_taken"].includes(null===(t=e.response)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.error_reason)&&(c=null===(i=e.response)||void 0===i||null===(a=i.data)||void 0===a?void 0:a.message);y(c),Object(b.b)((function(e){return Object(x.jsx)(N,{x:e,name:n("Register Failed"),message:c})}))}))}})),children:[Object(x.jsxs)(m.S,{children:[z.map((function(e,t){return Object(x.jsx)(m.t,{md:"2",xs:"3",className:"mb-1",children:Object(x.jsx)(m.B,{id:"otpInput".concat(t),type:"text",maxLength:"1",value:e,onChange:function(e){return function(e,t){var n=Object(s.a)(z);if(n[t]=e.target.value,""!==e.target.value&&t<3){var i=document.getElementById("otpInput".concat(t+1));i&&i.focus()}A(n)}(e,t)},onKeyDown:function(e){return function(e,t){if("Backspace"===e.key&&t>0&&""===z[t]){var n=Object(s.a)(z);n[t-1]="",A(n);var i=document.getElementById("otpInput".concat(t-1));i&&i.focus()}}(e,t)},style:{width:"100%",height:"50px",textAlign:"center",fontSize:"25px",fontWeight:600}},t)})})),Object(x.jsx)(m.t,{md:"12",className:"mb-1",children:Object(x.jsxs)("span",{style:{fontSize:"smaller",color:"#999999"},children:[n("This OTP code has an expiration date. If your code is outdated, then repeat the registration process"),"."]})})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between mt-2",children:[Object(x.jsxs)(m.i,{color:"secondary",className:"btn-prev",outline:!0,onClick:function(){return t.previous()},children:[Object(x.jsx)(d.a,{size:14,className:"align-middle me-sm-25 me-0"}),Object(x.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:n("Previous")})]}),(null===z||void 0===z?void 0:z.every((function(e){return""!==e})))&&Object(x.jsxs)(m.i,{type:"submit",color:"success",className:"btn-next",children:[Object(x.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:n("Submit")}),Object(x.jsx)(u.a,{size:14,className:"align-middle ms-sm-25 ms-0"})]})]})]})]})})}}}]);
//# sourceMappingURL=33.2e7ad62f.chunk.js.map