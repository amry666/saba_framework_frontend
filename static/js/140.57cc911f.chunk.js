(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[140],{1278:function(t,e,i){"use strict";e.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAMAAABBJv+bAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHqADAAQAAAABAAAAHAAAAACwgWRlAAABI1BMVEUAAACDi4uCh42Gio6DiYyChoyChoyDh4yDh4uCh4yDh4uDh4uChoyDh4yChouDh4yFiY6Gio+Hi5CKjpKMkJWRlJmTl5uUl5uXmp6Xmp+Ym5+ZnKCanaGcoKSdoKSeoaWhpKijpqmkp6qlqKymqayoq66rrrGytLeytLiztbi0trm3ur24u725vL66vL+6vb++wMK/wcTAwsXBw8bExsjFx8nGx8rGyMrHycvIyczKzM7Lzc/S09XT1NbU1tfX2NrX2drZ2tvZ2tza29zb3N3c3d7c3d/d3t/d3uDg4eLj4+Xk5OXm5+jn6Ono6erp6uvs7e7t7e7t7u/u7u/x8fLy8/Pz9PT19fX39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7////BHwLlAAAADnRSTlMAITE/VIG+x9jZ7PLz+smRHRAAAAEUSURBVCjPhZNnU8JAEIYTINXwil3ErlGxIQYL9pJILFHBXk7z/3+Fp6cZBG72+XQzz8zO3u67ipKQ0nTLcSxdSyntZEwkmJkWqRr4h6E227SNFux0k82ijWziVRsdsP/qG+iI8dszJIj+TZk2f6YBKd/z0eRa41oHqmX4E5Nnbpgr8Zdbmy3UcqVtQOfaAraifFz2rgrxSFQfioevN1bi8csKYHHtAO774t3J0Sae5x9eio/YOT1oLL1OA47QfZ++d38zg2M/vAj2MXdb9wLWA3SJ4ojY4NNbL1bZepUV0f/RGGXnEMV5a1g+RGUXyIdjU+EAsLfWHSxAtEZ8jBgLMVRqJcRCqTgQYaKiSAWZOgPZEX0Bchw0koyW2TQAAAAASUVORK5CYII="},792:function(t,e,i){"use strict";i.r(e);var a=i(2),l=i(16),o=i(81),n=i(5),s=i(533),r=i(449),c=i(581),d=i(36),A=i(392),u=i(263),m=i(87),v=i(791),j=i(795),b=i(793),h=i(794),g=i(796),f=i(1278),x=i(64),O=i.n(x),y=(i(146),i(102),i(65)),p=i(47),w=i(0);e.default=function(t){var e,i=t.hideCardTitle,x=void 0!==i&&i,N=t.id_user,C=void 0===N?null:N,L=t.hide_me,B=void 0===L?null:L,E=Object(o.a)().t,z=Object(l.c)((function(t){return t[u.storeName]})),X=Object(l.b)();Object(a.useEffect)((function(){(0===z.data.length&&!z.isLoading||u.getAlwaysGrid)&&X(Object(u.getDataList)({length:6,filter_id_user:C,filter_hide_me:B}))}),[]);var K=function(t){var e=t.row;if(1===e.id_activityCategory){var i,a,l,o={Chrome:{class:"text-primary",icon:s.a,img:v.default},ChromeMobile:{class:"text-primary",icon:s.a,img:v.default},Edge:{class:"text-primary",icon:s.a,img:j.default},Firefox:{class:"text-primary",icon:s.a,img:b.default},Opera:{class:"text-primary",icon:s.a,img:g.default},Safari:{class:"text-primary",icon:s.a,img:h.default},Others:{class:"text-primary",icon:s.a,img:f.a}},n=null===e||void 0===e||null===(i=e.attributes)||void 0===i||null===(a=i.user_agent)||void 0===a||null===(l=a.family)||void 0===l?void 0:l.replace(/ /g,""),c=(o[n]?o[n].icon:r.a,o[n]?o[n].img:o.Others.img);return Object(w.jsxs)("div",{className:"d-flex align-items-center",children:[Object(w.jsx)("img",{className:"me-1",src:c,alt:"data.json",height:"23"}),Object(w.jsxs)("span",{className:"fw-bolder",children:[null===e||void 0===e?void 0:e.attributes.user_agent.family," ",E("on")," ",null===e||void 0===e?void 0:e.attributes.os.family," ",null===e||void 0===e?void 0:e.attributes.os.major," | ip:"," ",null===e||void 0===e?void 0:e.attributes.ip," | device: ",null===e||void 0===e?void 0:e.attributes.device.family," ",null===e||void 0===e?void 0:e.attributes.device.model]})]})}return Object(w.jsx)("div",{className:"d-flex align-items-center"})},R=function(t){var e,i,a,l,o,n,s,r;t.row;return null!==(e=t.row)&&void 0!==e&&null!==(i=e.user)&&void 0!==i&&i.avatar?Object(w.jsx)(d.a,{color:"light-info",img:null===(a=t.row)||void 0===a||null===(l=a.user)||void 0===l?void 0:l.avatar,initials:!(null!==(o=t.row)&&void 0!==o&&null!==(n=o.user)&&void 0!==n&&n.avatar)}):Object(w.jsx)(d.a,{initials:!0,color:"light-info",content:(null===(s=t.row)||void 0===s||null===(r=s.user)||void 0===r?void 0:r.name)||"John Doe"})},S=Object(a.useMemo)((function(){return z.isLoading?Array(10).map((function(){return{title:Object(w.jsx)(m.a,{width:100,height:50}),content:Object(w.jsx)(m.a,{width:200,height:50}),meta:Object(w.jsx)(m.a,{width:90,height:50}),metaClassName:"me-1",customContent:Object(w.jsx)(m.a,{width:200,height:50})}})):z.data.map((function(t){var e,i,a,l,o,n,s,r,c,d,A,u,m;return{title:"".concat(t.user.name," ").concat(E(t.title)),content:"".concat(null!==(e=null!==(i=E(null===(a=t.attributes)||void 0===a?void 0:a.title))&&void 0!==i?i:E(null===(l=t.attributes)||void 0===l?void 0:l.description))&&void 0!==e?e:""," ").concat(null!==(o=null!==(n=null!==(s=E(null===(r=t.attributes)||void 0===r||null===(c=r.data)||void 0===c?void 0:c.title))&&void 0!==s?s:E(null===(d=t.attributes)||void 0===d||null===(A=d.data)||void 0===A?void 0:A.name))&&void 0!==n?n:null===(u=t.attributes)||void 0===u||null===(m=u.data)||void 0===m?void 0:m.code)&&void 0!==o?o:""),icon:Object(w.jsx)(R,{row:t}),meta:Object(w.jsx)(O.a,{locale:"id",fromNow:!0,children:t.created_date}),metaClassName:"me-1",customContent:Object(w.jsx)(K,{row:t})}}))}),[z.isLoading,z.data]);return Object(w.jsxs)(n.l,{style:{minHeight:"200px"},className:"card-user-timeline",children:[!x&&Object(w.jsx)(n.o,{children:Object(w.jsxs)("div",{className:"d-flex align-items-center",children:[Object(w.jsx)(c.a,{className:"user-timeline-title-icon"}),Object(w.jsx)(n.s,{tag:"h4",children:E("Users Timeline")})]})}),Object(w.jsx)(y.a,{blocking:z.isLoading,loader:Object(w.jsx)(p.b,{}),children:Object(w.jsx)(n.m,{children:z.data.length>0?Object(w.jsx)(A.a,{className:"ms-50 mb-0 lastActivity",data:S}):Object(w.jsx)("div",{style:{textAlign:"center"},className:"align-items-center",children:z.error?Object(w.jsx)(p.a,{message:null!==(e=z.error)&&void 0!==e?e:""}):Object(w.jsx)(p.c,{titleCustom:E("No Activities."),messageCustom:E("There is currently no activity from users. It looks like you're the only one logged in to the app.")})})})})]})}}}]);
//# sourceMappingURL=140.57cc911f.chunk.js.map