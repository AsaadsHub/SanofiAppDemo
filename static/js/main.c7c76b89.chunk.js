(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,n){},115:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),i=(n(113),n(74)),s=n(14),u=n.n(s),l=n(21),d=n(67),p=n(11),f=(n(115),n(47)),b=n(13),j=n(39),h=n.n(j),m=n(52),g={auth:{authority:"https://login.microsoftonline.com/8bfe0e10-3213-49c3-ba07-719dee9fd10b/",clientId:"a2ffb130-5fe6-4588-90e8-a33a5c9d2a44",redirectUri:window.location.origin},cache:{cacheLocation:"localStorage",storeAuthStateInCookie:!0},system:{loggerOptions:{loggerCallback:function(e,t,n){if(!n)switch(e){case m.a.Error:return void console.error(t);case m.a.Info:return void console.info(t);case m.a.Verbose:return void console.debug(t);case m.a.Warning:return void console.warn(t);default:return void console.log(t)}}}}},x={scopes:["https://notificationpreferences.azurewebsites.net/user_impersonation","User.Read"]},v=new m.b(g);window.MSALObj=v;var O=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.handleRedirectPromise());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.loginRedirect(x));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e,t=v.getAllAccounts();return null===t?null:t.length>1?(console.warn("Multiple accounts detected."),null):(1===t.length&&(e=t[0].username),e)},k=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=w()){e.next=3;break}return e.abrupt("return");case 3:return n=v.getAccountByUsername(t),c=Object(p.a)(Object(p.a)({},x),{},{account:n,forceRefresh:!1}),e.next=7,v.acquireTokenSilent(c).catch(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("InteractionRequiredAuthError"!==t.name){e.next=4;break}return e.next=3,v.acquireTokenRedirect(x);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=w(),t={account:v.getAccountByUsername(e),redirectUri:window.location.origin};v.logout(t)},N=n(177),I=n(171),L=n(176),P=n(4),A=Object(L.a)((function(e){return{root:{height:"100vh",alignItems:"center",display:"grid"},box:{height:"auto",display:"flex",padding:3,marginBottom:"15px",marginLeft:"10%",marginRight:"10%"},centerBox:{justifyContent:"center",alignItems:"center"}}}));function E(){var e=A();return Object(P.jsx)("div",{className:e.root,children:Object(P.jsx)(N.a,{component:"div",className:"".concat(e.centerBox," ").concat(e.box),children:Object(P.jsx)(I.a,{})})})}var R=function(e){return Object(c.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y().catch((function(e){h.a.fire("something went wrong",e.response?e.response.data:e.message,"error")}));case 2:t.sent&&e.history.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()()}),[]),Object(P.jsx)(E,{})},D=n(173),C=n(174),S=n(53),z=n.n(S);z.a.interceptors.request.use(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k().catch((function(e){console.log(e)}));case 2:return n=e.sent,c={headers:{Authorization:"Bearer ".concat(null===n||void 0===n?void 0:n.accessToken)}},e.abrupt("return",Object.assign({},t,c));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),z.a.defaults.baseURL="https://notificationpreferences.azurewebsites.net/api/";var M={get:function(e){return z.a.get("languages")}},T={get:function(e){return z.a.get("preferences")},update:function(e){return z.a.post("preferences",e)}},U=n(64),F=n.n(U),W=Object(L.a)((function(e){return{logo:{position:"absolute",margin:"8px",padding:"3px",width:"50px",height:"50px"},logout:{position:"absolute",margin:"12px",marginTop:"20px",padding:"3px",right:"8px"},root:{height:"100vh",alignItems:"center",display:"grid"},box:{height:"auto",display:"flex",padding:3,marginBottom:"15px",marginLeft:"10%",marginRight:"10%"},centerBox:{justifyContent:"center",alignItems:"center"}}}));var q=function(){var e=W();return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("img",{className:e.logo,alt:"logo",src:"./logo512.png"}),Object(P.jsx)(D.a,{onClick:function(){return B()},className:e.logout,size:"small",variant:"contained",color:"secondary",children:Object(P.jsx)(F.a,{})}),Object(P.jsx)("div",{className:e.root,children:Object(P.jsxs)("div",{children:[Object(P.jsx)(N.a,{component:"div",m:1,className:"".concat(e.centerBox," ").concat(e.box),children:Object(P.jsx)(C.a,{size:"large",variant:"contained",color:"primary",fullWidth:!0,children:"Change Your Password"})}),Object(P.jsx)(N.a,{component:"div",m:1,className:"".concat(e.centerBox," ").concat(e.box),children:Object(P.jsx)(C.a,{size:"large",variant:"contained",color:"primary",fullWidth:!0,children:"Reset Your Password"})}),Object(P.jsx)(N.a,{component:"div",m:1,className:"".concat(e.centerBox," ").concat(e.box),children:Object(P.jsx)(C.a,{component:f.b,to:"/app/changePreferences",size:"large",variant:"contained",color:"primary",fullWidth:!0,children:"Change Your Preferences"})})]})})]})},Y=n(60),J=n(175),V=n(179),_=n(178),G=n(26),H=n(96),K=n.n(H),Q=n(57),X={languages:void 0,preferences:void 0,devices:void 0,loading:!0};function Z(e,t){switch(t.type){case"setLanguages":return Object(p.a)(Object(p.a)({},e),{},{languages:t.payload});case"setPreferences":return Object(p.a)(Object(p.a)({},e),{},{preferences:t.payload});case"setDevices":return Object(p.a)(Object(p.a)({},e),{},{devices:t.payload});case"setLoading":return Object(p.a)(Object(p.a)({},e),{},{loading:t.payload});default:throw new Error("Something went wrong!")}}var $=Object(L.a)((function(e){return{logo:{width:"50px",height:"50px"},logout:{position:"absolute",margin:"12px",padding:"3px",right:"8px"},box:{height:"auto",display:"flex",padding:3,marginBottom:"15px"},leftBox:{alignItems:"center"},form:{height:"auto",display:"grid",padding:3,marginBottom:"15px",marginLeft:"15%",marginRight:"15%"},centerForm:{justifyContent:"center",alignItems:"center"},child:{marginLeft:"20px"},centerBox:{justifyContent:"center",alignItems:"center"},title:{margin:0},checkBox:{margin:0}}}));var ee=function(e){var t,n,a,r=Object(c.useReducer)(Z,X,void 0),o=Object(d.a)(r,2),i=o[0],s=o[1],b=$();return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T.get().then((function(e){s({type:"setLoading",payload:!1}),s({type:"setPreferences",payload:e.data});var t=e.data.devices.map((function(e){return{id:e.devicePreferences.deviceId,notifyDevice:e.devicePreferences.notifyDevice,model:e.model}}));s({type:"setDevices",payload:t})})).catch((function(e){s({type:"setLoading",payload:!1}),h.a.fire("something went wrong",e.response?e.response.data:e.message,"error")})),M.get().then((function(e){s({type:"setLanguages",payload:e.data})})).catch((function(e){h.a.fire("something went wrong",e.response?e.response.data:e.message,"error")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),i.loading?Object(P.jsx)(E,{}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(D.a,{onClick:function(){return B()},className:b.logout,variant:"contained",color:"secondary",children:Object(P.jsx)(F.a,{})}),Object(P.jsx)(N.a,{component:"div",m:1,className:"".concat(b.leftBox," ").concat(b.box),children:Object(P.jsx)("img",{className:b.logo,alt:"logo",src:"./logo512.png"})}),Object(P.jsx)(N.a,{component:"div",m:1,className:"".concat(b.leftBox," ").concat(b.box),children:Object(P.jsx)(C.a,{component:f.b,to:"/",size:"small",variant:"contained",color:"secondary",children:Object(P.jsx)(K.a,{})})}),Object(P.jsx)(G.c,{enableReinitialize:!0,initialValues:{notifyMobileDevices:null===(t=i.preferences)||void 0===t?void 0:t.user.userPreferences.notifyMobileDevices,notifyEmail:null===(n=i.preferences)||void 0===n?void 0:n.user.userPreferences.notifyEmail,languageId:null===(a=i.preferences)||void 0===a?void 0:a.user.userPreferences.languageId,devices:i.devices},onSubmit:function(t,n){var c=n.setSubmitting,a=Object(p.a)(Object(p.a)({},t),{},{devices:t.devices.map((function(e){return{id:e.id,notifyDevice:e.notifyDevice}}))});T.update(a).then((function(t){c(!1),h.a.fire("Your preferences have been saved successfully").then((function(t){e.history.push("/app/")}))})).catch((function(e){c(!1),h.a.fire("something went wrong",e.response?e.response.data:e.message,"error")}))},children:function(e){var t,n,c,a,r=e.values,o=e.isSubmitting;return Object(P.jsx)(G.b,{children:Object(P.jsx)("div",{children:Object(P.jsxs)("div",{className:"".concat(b.centerForm," ").concat(b.form),children:[Object(P.jsx)(N.a,{component:"div",m:1,className:"".concat(b.leftBox," ").concat(b.box),children:Object(P.jsxs)("h3",{className:b.title,children:[null===(t=i.preferences)||void 0===t?void 0:t.user.displayName," Preferences"]})}),Object(P.jsxs)(N.a,{component:"div",className:"".concat(b.leftBox," ").concat(b.box),children:[Object(P.jsx)(G.a,{type:"checkbox",className:b.child,component:Q.a,name:"notifyMobileDevices",Label:{label:"Mobile Devices"}}),Object(P.jsx)(G.a,{type:"checkbox",className:b.child,component:Q.a,name:"notifyEmail",Label:{label:"Email"}})]}),Object(P.jsx)(N.a,{component:"div",className:"".concat(b.leftBox," ").concat(b.box),children:Object(P.jsxs)(J.a,{className:b.child,fullWidth:!0,variant:"outlined",children:[Object(P.jsx)(V.a,{children:"Language"}),Object(P.jsx)(G.a,Object(Y.a)({children:{labelId:"languageId"},type:"select",value:null!==(n=r.languageId)&&void 0!==n?n:"",component:Q.b,name:"languageId"},"children",null===(c=i.languages)||void 0===c?void 0:c.map((function(e,t){return Object(P.jsx)(_.a,{value:e.languageId,children:e.description.replace(/_/g," ")},t)}))))]})}),Object(P.jsx)(N.a,{component:"div",m:1,mt:4,className:"".concat(b.leftBox," ").concat(b.box),children:Object(P.jsx)("h3",{className:b.title,children:"Devices"})}),null===(a=r.devices)||void 0===a?void 0:a.map((function(e,t){return Object(P.jsx)(N.a,{component:"div",className:"".concat(b.leftBox," ").concat(b.box," ").concat(b.checkBox),children:Object(P.jsx)(G.a,{type:"checkbox",className:b.child,name:"devices.".concat(t,".notifyDevice"),component:Q.a,Label:{label:e.model}})},t)})),Object(P.jsx)(N.a,{component:"div",m:1,className:"".concat(b.centerBox," ").concat(b.box),children:Object(P.jsx)(C.a,{type:"submit",variant:"contained",color:"primary",disabled:o,children:"Save"})})]})})})}})]})};var te=function(){return Object(P.jsx)("h1",{style:{justifyContent:"center",display:"flex"},children:"404: Page not found"})},ne={token:null,isLoading:!0};function ce(e,t){switch(t.type){case"setToken":return Object(p.a)(Object(p.a)({},e),{},{token:t.payload});case"setIsLoading":return Object(p.a)(Object(p.a)({},e),{},{isLoading:t.payload});default:throw new Error("Something went wrong!")}}var ae=function(e){var t=e.component,n=e.isAuthenticated,c=Object(i.a)(e,["component","isAuthenticated"]);return Object(P.jsx)(b.b,Object(p.a)(Object(p.a)({},c),{},{render:function(e){return n?a.a.createElement(t,e):Object(P.jsx)(b.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},re=function(e){var t=e.component,n=e.isAuthenticated,c=Object(i.a)(e,["component","isAuthenticated"]);return Object(P.jsx)(b.b,Object(p.a)(Object(p.a)({},c),{},{render:function(e){return n?Object(P.jsx)(b.a,{to:{pathname:"/"}}):a.a.createElement(t,e)}}))},oe=Object(b.g)((function(e){var t=e.match;return Object(P.jsxs)(b.d,{children:[Object(P.jsx)(b.b,{path:"".concat(t.url,"/"),exact:!0,component:q}),Object(P.jsx)(b.b,{path:"".concat(t.url,"/changePreferences"),component:ee}),Object(P.jsx)(b.b,{component:te})]})})),ie=function(){var e=Object(c.useReducer)(ce,ne,void 0),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O().catch((function(e){console.log(e)}));case 2:if(t=e.sent,n.token){e.next=7;break}return e.next=6,k().catch((function(e){console.log(e)}));case 6:t=e.sent;case 7:r({type:"setToken",payload:t}),r({type:"setIsLoading",payload:!1});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(P.jsx)(a.a.Fragment,{children:n.isLoading?Object(P.jsx)(E,{}):Object(P.jsx)(f.a,{children:Object(P.jsxs)(b.d,{children:[Object(P.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(P.jsx)(b.a,{to:"/app"})}}),Object(P.jsx)(ae,{path:"/app",component:oe,isAuthenticated:!!n.token}),Object(P.jsx)(re,{path:"/login",component:R,isAuthenticated:!!n.token}),Object(P.jsx)(b.b,{component:te})]})})})};o.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(ie,{})}),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.c7c76b89.chunk.js.map