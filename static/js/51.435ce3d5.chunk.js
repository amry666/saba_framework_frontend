(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[51,148],{1201:function(e,o,t){},375:function(e,o,t){"use strict";t.r(o);var a=t(2),i=t(16),l=t(78),n=t(773),r=t(762),d=t(5),s=t(220),c=t(1197),u=(t(1201),t(13),t(12),t(355)),b=t(83),f=t(0);o.default=function(e){var o,t,m=e.lookupMode,j=void 0!==m&&m,p=e.lookupMode_fieldName,h=void 0===p?"":p,g=e.lookupMode_dropdown,v=void 0!==g&&g,O=e.lookupMode_defaultValue,M=e.lookupMode_onChange,k=e.lookupMode_isMulti,x=void 0!==k&&k,_=e.errorState,w=void 0!==_&&_,S=Object(l.a)().t,y=Object(i.b)(),N=Object(i.c)((function(e){return e[u.storeName]}));Object(a.useEffect)((function(){var e;u.getApiSummaryData&&(0===(null===(e=N.dataSummary)||void 0===e?void 0:e.length)||!N.isLoadingSummary&&u.getAlwaysGrid)&&y(Object(u.getSummaryData)({}))}),[y,null===(o=N.dataSummary)||void 0===o?void 0:o.length]);var C=["primary","success","warning","danger","info","secondary"];return v?Object(f.jsx)(r.default,{lookupMode_fieldName:h,lookupMode_onChange:M,lookupMode_defaultValue:O,lookupMode_isMulti:x,errorState:w}):Object(f.jsxs)(a.Fragment,{children:[Object(f.jsx)("h3",{children:S("Permissions List")}),Object(f.jsx)("p",{children:S("Each category (Basic, Professional, and Business) includes the four predefined roles shown below.")}),!j&&u.getApiSummaryData&&Object(f.jsx)(d.S,{children:null===(t=N.dataSummary)||void 0===t?void 0:t.map((function(e,o){var t;return Object(f.jsx)(d.t,{children:Object(f.jsx)(s.a,{color:C[o],statTitle:"".concat(S(e.title)),icon:e.icon?Object(f.jsx)(c.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:e.icon}):Object(f.jsx)(c.a,{baseClassName:"material-icons-outlined",fontSize:"20",children:"lightbulb"}),renderStats:N.isLoadingSummary?Object(f.jsx)(b.a,{sx:{bgcolor:"#eef2f8"},animation:"wave",height:25,width:40,className:"fw-bolder mb-75"}):Object(f.jsx)("h3",{className:"fw-bolder mb-75",children:null!==(t=e.count_format)&&void 0!==t?t:e.count})})})}))}),Object(f.jsx)(d.l,{children:Object(f.jsx)("div",{className:"card-datatable app-user-list table-responsive",children:Object(f.jsx)(n.default,{lookupMode:j,lookupMode_fieldName:h,lookupMode_defaultValue:O,lookupMode_onChange:M,lookupMode_isMulti:x})})})]})}},762:function(e,o,t){"use strict";t.r(o);var a=t(2),i=t(16),l=t(78),n=(t(1201),t(13)),r=(t(12),t(79)),d=t(355),s=t(0);o.default=function(e){var o=e.lookupMode_fieldName,t=void 0===o?"":o,c=e.lookupMode_isMulti,u=void 0!==c&&c,b=e.lookupMode_onChange,f=e.lookupMode_defaultValue,m=(e.errorState,Object(l.a)().t,Object(i.b)()),j=Object(i.c)((function(e){return e[d.storeName]}));return Object(a.useEffect)((function(){(0===j.data.length||!j.isLoading&&d.getAlwaysGrid)&&m(Object(d.getDataList)({}))}),[m,j.data.length]),Object(s.jsx)(a.Fragment,{children:Object(s.jsx)(r.a,{theme:n.H,defaultValue:u?f:j.dataDropdown.filter((function(e){return e.value===f})),isMulti:u,onChange:function(e){return b(e.value,t)},options:j.dataDropdown,className:"react-select",classNamePrefix:"select"})})}}}]);
//# sourceMappingURL=51.435ce3d5.chunk.js.map