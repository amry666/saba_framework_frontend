(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[92],{1257:function(e,t,s){},829:function(e,t,s){"use strict";s.r(t);var a=s(4),r=s(2),c=s(33),l=s(30),n=s(87),i=s(44),o=s(16),j=s(265),d=s(46),m=s(540),b=s(572),x=s(317),u=s(544),h=s(42),O=s(478),f=s(5),p=(s(1257),s(0)),g={email:"",terms:!1,username:"",password:""};t.default=function(){var e=Object(r.useContext)(h.a),t=Object(n.a)().skin,v=Object(c.f)(),y=Object(o.b)(),N=Object(d.e)({defaultValues:g}),k=N.control,w=N.setError,C=N.handleSubmit,L=N.formState.errors,F="dark"===t?"register-v2-dark.svg":"register-v2.svg",E=s(1264)("./".concat(F)).default;return Object(p.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(p.jsxs)(f.S,{className:"auth-inner m-0",children:[Object(p.jsxs)(l.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(p.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(p.jsxs)("defs",{children:[Object(p.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(p.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(p.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(p.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(p.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(p.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(p.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(p.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(p.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(p.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(p.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(p.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(p.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(p.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(p.jsx)("h2",{className:"brand-text text-primary ms-1",children:"Vuexy"})]}),Object(p.jsx)(f.t,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(p.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(p.jsx)("img",{className:"img-fluid",src:E,alt:"Login Cover"})})}),Object(p.jsx)(f.t,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(p.jsxs)(f.t,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(p.jsx)(f.s,{tag:"h2",className:"fw-bold mb-1",children:"Adventure starts here \ud83d\ude80"}),Object(p.jsx)(f.r,{className:"mb-2",children:"Make your app management easy and fun!"}),Object(p.jsxs)(f.y,{action:"/",className:"auth-register-form mt-2",onSubmit:C((function(t){var s=Object(a.a)({},t);if(delete s.terms,Object.values(s).every((function(e){return e.length>0}))&&!0===t.terms){var r=t.username,c=t.email,l=t.password;i.a.register({username:r,email:c,password:l}).then((function(t){if(t.data.error)for(var s in t.data.error)null!==t.data.error[s]&&w(s,{type:"manual",message:t.data.error[s]});else{var r=Object(a.a)(Object(a.a)({},t.data.user),{},{accessToken:t.data.accessToken});e.update(t.data.user.ability),y(Object(j.b)(r)),v("/")}})).catch((function(e){return console.log(e)}))}else for(var n in t)0===t[n].length&&w(n,{type:"manual",message:"Please enter a valid ".concat(n)}),"terms"===n&&!1===t.terms&&w("terms",{type:"manual"})})),children:[Object(p.jsxs)("div",{className:"mb-1",children:[Object(p.jsx)(f.E,{className:"form-label",for:"register-username",children:"Username"}),Object(p.jsx)(d.a,{id:"username",name:"username",control:k,render:function(e){var t=e.field;return Object(p.jsx)(f.B,Object(a.a)({autoFocus:!0,placeholder:"johndoe",invalid:L.username&&!0},t))}}),L.username?Object(p.jsx)(f.z,{children:L.username.message}):null]}),Object(p.jsxs)("div",{className:"mb-1",children:[Object(p.jsx)(f.E,{className:"form-label",for:"register-email",children:"Email"}),Object(p.jsx)(d.a,{id:"email",name:"email",control:k,render:function(e){var t=e.field;return Object(p.jsx)(f.B,Object(a.a)({type:"email",placeholder:"john@example.com",invalid:L.email&&!0},t))}}),L.email?Object(p.jsx)(f.z,{children:L.email.message}):null]}),Object(p.jsxs)("div",{className:"mb-1",children:[Object(p.jsx)(f.E,{className:"form-label",for:"register-password",children:"Password"}),Object(p.jsx)(d.a,{id:"password",name:"password",control:k,render:function(e){var t=e.field;return Object(p.jsx)(O.a,Object(a.a)({className:"input-group-merge",invalid:L.password&&!0},t))}})]}),Object(p.jsxs)("div",{className:"form-check mb-1",children:[Object(p.jsx)(d.a,{name:"terms",control:k,render:function(e){var t=e.field;return Object(p.jsx)(f.B,Object(a.a)(Object(a.a)({},t),{},{id:"terms",type:"checkbox",checked:t.value,invalid:L.terms&&!0}))}}),Object(p.jsxs)(f.E,{className:"form-check-label",for:"terms",children:["I agree to",Object(p.jsx)("a",{className:"ms-25",href:"/",onClick:function(e){return e.preventDefault()},children:"privacy policy & terms"})]})]}),Object(p.jsx)(f.i,{type:"submit",block:!0,color:"primary",children:"Sign up"})]}),Object(p.jsxs)("p",{className:"text-center mt-2",children:[Object(p.jsx)("span",{className:"me-25",children:"Already have an account?"}),Object(p.jsx)(l.b,{to:"/login",children:Object(p.jsx)("span",{children:"Sign in instead"})})]}),Object(p.jsx)("div",{className:"divider my-2",children:Object(p.jsx)("div",{className:"divider-text",children:"or"})}),Object(p.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(p.jsx)(f.i,{color:"facebook",children:Object(p.jsx)(m.a,{size:14})}),Object(p.jsx)(f.i,{color:"twitter",children:Object(p.jsx)(b.a,{size:14})}),Object(p.jsx)(f.i,{color:"google",children:Object(p.jsx)(x.a,{size:14})}),Object(p.jsx)(f.i,{className:"me-0",color:"github",children:Object(p.jsx)(u.a,{size:14})})]})]})})]})})}}}]);
//# sourceMappingURL=92.bc2d97f2.chunk.js.map