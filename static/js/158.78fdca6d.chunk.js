(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[158],{803:function(e,a,t){"use strict";t.r(a);var i=t(4),n=t(36),l=t(265),c=t(64),s=t(148),d=t(47),r=t(14),o=(t(146),t(102),t(2)),j=t(185),m=t(556),b=t(582),u=t(81),v=t(65),h=t.n(v),x=t(16),O=t(5),g=t(482),p=t.n(g),f=t(99),D=t(0),N={pagination:{clickable:!0},autoplay:{delay:7500,disableOnInteraction:!1}};a.default=function(e){e.hideCardTitle,e.id_user;var a=Object(u.a)().t,v=Object(x.c)((function(e){return e.dynamicStore})),g=(Object(x.c)((function(e){return e.dynamic_temp_state})),Object(x.b)()),T="TrainingEmployee_task";Object(o.useEffect)((function(){var e,a,t;v.pageData[T]&&(0!==(null===(e=v.pageData[T])||void 0===e||null===(a=e.data)||void 0===a?void 0:a.length)||null!==(t=v.pageData[T])&&void 0!==t&&t.isLoading)||g(Object(r.i)({storeName:T,endpointName:"TrainingEmployee/assignment",baseUrl:"hr",type:"to_me",Id_AttendingState:1}))}),[]);var y,k,w,S,_,L,E={lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"L"},I=function(e){return e.toUpperCase()},z=function(e){if(e){var i,n=e.map((function(e,a){var i,n="".concat(null===e||void 0===e?void 0:e.FirstName," ").concat(null===e||void 0===e?void 0:e.LastName);if(a<=10)return{title:"".concat(n.replaceAll(".","")),placement:"bottom",img:null!==(i=null===e||void 0===e?void 0:e.PhotoPath)&&void 0!==i?i:t(88).default,imgHeight:33,imgWidth:33}})),c=(null!==(i=e.length)&&void 0!==i?i:0)-10;return c>0&&n?n.push({meta:"+".concat(c)}):n.push({meta:"".concat(n.length," ").concat(a("Employee ready to attend"))}),Object(D.jsx)(l.a,{data:n})}return null};return null!==(y=v.pageData[T])&&void 0!==y&&y.isLoading?Object(D.jsx)(O.t,{lg:"12",xs:"12",children:Object(D.jsxs)(O.l,{style:{minHeight:"200px"},children:[Object(D.jsx)(O.o,{children:Object(D.jsxs)("div",{className:"d-flex align-items-center",children:[Object(D.jsx)(p.a,{className:"user-timeline-title-icon me-1"}),Object(D.jsx)(O.s,{tag:"h4",children:a("Training Task")})]})}),Object(D.jsx)(c.a,{blocking:!0,loader:Object(D.jsx)(d.b,{}),children:Object(D.jsx)(O.m,{})})]})}):(null===(k=v.pageData[T])||void 0===k||null===(w=k.data)||void 0===w?void 0:w.length)>0?Object(D.jsx)(O.t,{lg:"12",xs:"12",children:Object(D.jsxs)(O.l,{children:[Object(D.jsx)(O.o,{children:Object(D.jsxs)("div",{className:"d-flex align-items-center",children:[Object(D.jsx)(p.a,{className:"user-timeline-title-icon me-1"}),null!==(S=v.pageData[T])&&void 0!==S&&null!==(_=S.data[0])&&void 0!==_&&_.isManager?Object(D.jsx)(O.s,{tag:"h4",children:a("Me & Staff Training Task")}):Object(D.jsx)(O.s,{tag:"h4",children:a("My Training Task")})]})}),Object(D.jsx)(O.m,{className:"px-0 pb-0 ",children:Object(D.jsx)(f.a,Object(i.a)(Object(i.a)({},N),{},{children:null===(L=v.pageData[T])||void 0===L?void 0:L.data.map((function(e){var t,i,l,c,d,r,o,u,v,x,g;return Object(D.jsx)(f.b,{children:Object(D.jsxs)(O.l,{className:"card-developer-meetup  cursor-pointer",children:[Object(D.jsx)("div",{className:"meetup-img-wrapper rounded-top text-center",children:Object(D.jsx)("img",{src:null!==e&&void 0!==e&&null!==(t=e.TrainingData)&&void 0!==t&&t.Image?e.TrainingData.Image:s.a,height:"170"})}),Object(D.jsxs)(O.m,{children:[Object(D.jsxs)("div",{className:"meetup-header d-flex align-items-center",children:[Object(D.jsxs)("div",{className:"meetup-day",children:[Object(D.jsx)("h6",{className:"mb-0",children:Object(D.jsx)(h.a,{filter:I,format:"ddd",children:null===e||void 0===e||null===(i=e.TrainingData)||void 0===i?void 0:i.StartDate})}),Object(D.jsx)("h3",{className:"mb-0",children:Object(D.jsx)(h.a,{format:"DD",children:null===e||void 0===e||null===(l=e.TrainingData)||void 0===l?void 0:l.StartDate})})]}),Object(D.jsxs)("div",{className:"my-auto text-truncate",children:[Object(D.jsx)(O.s,{tag:"h4",className:"mb-25",children:null===e||void 0===e||null===(c=e.TrainingData)||void 0===c?void 0:c.Name}),Object(D.jsx)(O.r,{className:"mb-0",children:null===e||void 0===e||null===(d=e.TrainingData)||void 0===d?void 0:d.Description})]})]}),Object(D.jsxs)("div",{className:"d-flex",children:[Object(D.jsx)(n.a,{color:"light-primary",className:"rounded me-1",icon:Object(D.jsx)(j.a,{size:18})}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h6",{className:"mb-0",children:Object(D.jsx)(h.a,{calendar:E,children:null===e||void 0===e||null===(r=e.TrainingData)||void 0===r?void 0:r.StartDate})}),Object(D.jsx)("small",{children:Object(D.jsx)(h.a,{format:"[Start at] LT",children:null===e||void 0===e||null===(o=e.TrainingData)||void 0===o?void 0:o.StartDate})})]})]}),null!==e&&void 0!==e&&null!==(u=e.TrainingData)&&void 0!==u&&u.IsOnline?Object(D.jsxs)("div",{className:"d-flex mt-2",children:[Object(D.jsx)(n.a,{color:"light-primary",className:"rounded me-1",icon:Object(D.jsx)(b.a,{size:18})}),Object(D.jsxs)("div",{children:[Object(D.jsx)("h6",{className:"mb-0",children:a("Online Training")}),Object(D.jsx)("small",{children:null!==e&&void 0!==e&&null!==(x=e.TrainingData)&&void 0!==x&&x.LinkRef?null===e||void 0===e||null===(g=e.TrainingData)||void 0===g?void 0:g.LinkRef:"The link will be sent before the event starts"})]})]}):Object(D.jsxs)("div",{className:"d-flex mt-2",children:[Object(D.jsx)(n.a,{color:"light-primary",className:"rounded me-1",icon:Object(D.jsx)(m.a,{size:18})}),Object(D.jsx)("div",{children:Object(D.jsx)("small",{children:null===e||void 0===e||null===(v=e.TrainingData)||void 0===v?void 0:v.Address})})]}),z(null===e||void 0===e?void 0:e.Employee)]})]})},"swiper_".concat(e.Id_Training))}))}))})]})}):null}}}]);
//# sourceMappingURL=158.78fdca6d.chunk.js.map