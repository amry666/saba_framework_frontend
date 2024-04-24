(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[160],{805:function(e,t,s){"use strict";s.r(t);var n=s(15),c=s(6),a=s(2),i=s(46),r=s(557),l=s(121),o=s(518),d=s(529),j=s(435),u=s(5),m=s(78),b=s(24),x=s(37),O=s(104),f=s(63),h=s(87),v=s(44),p=s(0),g=function(e){var t=e.x,s=e.name,n=e.message;return Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"me-1",children:Object(p.jsx)(x.a,{size:"sm",color:"info",icon:Object(p.jsx)(r.a,{size:12})})}),Object(p.jsxs)("div",{className:"d-flex flex-column",children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("h6",{children:s}),Object(p.jsx)(l.a,{size:12,className:"cursor-pointer",onClick:function(){return b.b.dismiss(t.id)}})]}),Object(p.jsx)("span",{children:n})]})]})},N=function(e){var t=e.x,s=e.name,n=e.message;return Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"me-1",children:Object(p.jsx)(x.a,{size:"sm",color:"danger",icon:Object(p.jsx)(o.a,{size:12})})}),Object(p.jsxs)("div",{className:"d-flex flex-column",children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("h6",{children:s}),Object(p.jsx)(l.a,{size:12,className:"cursor-pointer",onClick:function(){return b.b.dismiss(t.id)}})]}),Object(p.jsx)("span",{children:n})]})]})},k={address:"",firstName:""};t.default=function(e){var t=e.stepper,s=Object(m.a)().t,r=(Object(h.a)().skin,Object(a.useState)(!1)),l=Object(c.a)(r,2),o=l[0],x=l[1],y=Object(a.useState)(null),S=Object(c.a)(y,2),w=(S[0],S[1]),z=Object(a.useState)(null),I=Object(c.a)(z,2),_=(I[0],I[1]),C=Object(a.useState)(["","","",""]),E=Object(c.a)(C,2),B=E[0],P=E[1],F=Object(i.e)({defaultValues:k}),T=(F.control,F.setError,F.handleSubmit);F.formState.errors;return Object(p.jsx)(f.a,{blocking:o,loader:Object(p.jsx)(O.a,{}),children:Object(p.jsxs)(a.Fragment,{children:[Object(p.jsxs)("div",{className:"content-header mb-2",children:[Object(p.jsx)("h2",{className:"fw-bolder mb-75",children:s("Email Verification")}),Object(p.jsxs)("span",{children:[s("Enter the OTP code that we have sent to your email"),"."]})]}),Object(p.jsxs)(u.y,{onSubmit:T((function(e){if(null!==B&&void 0!==B&&B.every((function(e){return""!==e}))){var n,c={otp:parseInt(null===(n=B.join())||void 0===n?void 0:n.replaceAll(",","")),register_token:sessionStorage.getItem("register_token")};x(!0),v.a.registerOtp(c).then((function(e){var n=e.data;x(!1),_(null===n||void 0===n?void 0:n.message),sessionStorage.removeItem("register_token"),sessionStorage.setItem("register_token_msg",null===n||void 0===n?void 0:n.message),Object(b.b)((function(e){return Object(p.jsx)(g,{x:e,name:s("Successfully"),message:null===n||void 0===n?void 0:n.message})})),t.next()})).catch((function(e){var t,n;x(!1);var c,a,i="".concat(s("Failed. Please check your email and password and make sure your account is registered correctly. Contact our support team if needed."));["email_taken","username_taken"].includes(null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.error_reason)&&(i=null===(c=e.response)||void 0===c||null===(a=c.data)||void 0===a?void 0:a.message);w(i),Object(b.b)((function(e){return Object(p.jsx)(N,{x:e,name:s("Register Failed"),message:i})}))}))}})),children:[Object(p.jsxs)(u.S,{children:[B.map((function(e,t){return Object(p.jsx)(u.t,{md:"2",xs:"3",className:"mb-1",children:Object(p.jsx)(u.B,{id:"otpInput".concat(t),type:"text",maxLength:"1",value:e,onChange:function(e){return function(e,t){var s=Object(n.a)(B);if(s[t]=e.target.value,""!==e.target.value&&t<3){var c=document.getElementById("otpInput".concat(t+1));c&&c.focus()}P(s)}(e,t)},onKeyDown:function(e){return function(e,t){if("Backspace"===e.key&&t>0&&""===B[t]){var s=Object(n.a)(B);s[t-1]="",P(s);var c=document.getElementById("otpInput".concat(t-1));c&&c.focus()}}(e,t)},style:{width:"100%",height:"50px",textAlign:"center",fontSize:"25px",fontWeight:600}},t)})})),Object(p.jsx)(u.t,{md:"12",className:"mb-1",children:Object(p.jsxs)("span",{style:{fontSize:"smaller",color:"#999999"},children:[s("This OTP code has an expiration date. If your code is outdated, then repeat the registration process"),"."]})})]}),Object(p.jsxs)("div",{className:"d-flex justify-content-between mt-2",children:[Object(p.jsxs)(u.i,{color:"secondary",className:"btn-prev",outline:!0,onClick:function(){return t.previous()},children:[Object(p.jsx)(d.a,{size:14,className:"align-middle me-sm-25 me-0"}),Object(p.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:s("Previous")})]}),(null===B||void 0===B?void 0:B.every((function(e){return""!==e})))&&Object(p.jsxs)(u.i,{type:"submit",color:"success",className:"btn-next",children:[Object(p.jsx)("span",{className:"align-middle d-sm-inline-block d-none",children:s("Submit")}),Object(p.jsx)(j.a,{size:14,className:"align-middle ms-sm-25 ms-0"})]})]})]})]})})}}}]);
//# sourceMappingURL=160.acfb0eb2.chunk.js.map