(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(72),o=n.n(c),i=n(54),s=n(15),l=n(12),j={device:"web",theme:{mode:"light",color:"blue",primary:{main:"#00bcd4"},secondary:{main:"#00bcd4"},background:{default:"#fafafa"}},alertBar:{open:!1,message:"",severity:"info"}},u=n(34),d=n(35),b=n(36),h=n(37),x=n(41),f=n(120),m=n(121),O=Object.freeze({Primary:{RED:{LIGHT:u.a[500],DARK:u.a[700]},BLUE:{LIGHT:d.a[500],DARK:d.a[700]},GREEN:{LIGHT:b.a[500],DARK:b.a[700]},PURPLE:{LIGHT:h.a[200],DARK:h.a[400]},YELLOW:{LIGHT:x.a[600],DARK:f.a[600]},GREY:{LIGHT:m.a[200],DARK:"#2f353f"}},Secondary:{RED:{LIGHT:u.a[300],DARK:u.a[300]},BLUE:{LIGHT:d.a[200],DARK:d.a[300]},GREEN:{LIGHT:b.a[200],DARK:b.a[300]},PURPLE:{LIGHT:h.a[100],DARK:h.a[200]},YELLOW:{LIGHT:x.a[200],DARK:f.a[200]},GREY:{LIGHT:m.a[300],DARK:m.a[300]}}});Object.freeze();function p(e,t,n){return O[n][t][e]}function g(e){return"DARK"===e?"#2f353f":"#fafafa"}var v=n(1),w=a.a.createContext({publicCtx:"",setPublicCtx:function(){}}),y=function(e){var t=e.children,n=R(),r=a.a.useState(n),c=Object(l.a)(r,2),o=c[0],i=c[1],s=a.a.useMemo((function(){return{publicCtx:o,setPublicCtx:i}}),[o]);return Object(v.jsx)(w.Provider,{value:s,children:t})},R=function(){var e=Object(s.a)({},j);return e.device="ontouchstart"in window||"onmsgesturechange"in window?"mobile":"web",e.theme={mode:"DARK",color:"GREY",primary:{main:p("DARK","GREY","Primary")},secondary:{main:p("DARK","GREY","Secondary")},background:{default:g("DARK")}},e},k=n(77),L=n(143),C=n(145);function A(e){var t=e.children,n=a.a.useContext(w).publicCtx,r=Object(k.a)({palette:{mode:n.theme.mode.toLowerCase(),primary:{main:n.theme.primary.main},secondary:{main:n.theme.secondary.main},background:{default:n.theme.background.default}}});return Object(v.jsxs)(L.a,{theme:r,children:[Object(v.jsx)(C.a,{}),t]})}var D=n(151),E=n(149),G=n(150),S=n.p+"static/media/Logo.adba5c17.png";function I(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("img",{alt:"Logo",src:S,style:{width:"30px",marginRight:"20px"}})})}var K=n(147);function T(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(K.a,{variant:"subtitle1",component:"div",children:"RiskLab AI"})})}function P(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{style:{flexGrow:1}})})}var H=n(148),B=n(128),F=n(129);function z(){var e=a.a.useContext(w),t=e.publicCtx,n=e.setPublicCtx;return Object(v.jsx)(H.a,{sx:{marginLeft:"5px"},onClick:function(){var e="DARK"===t.theme.mode?"LIGHT":"DARK";n(Object(s.a)(Object(s.a)({},t),{},{theme:Object(s.a)(Object(s.a)({},t.theme),{},{mode:e,primary:Object(s.a)(Object(s.a)({},t.theme.primary),{},{main:p(e,t.theme.color,"Primary")}),secondary:Object(s.a)(Object(s.a)({},t.theme.secondary),{},{main:p(e,t.theme.color,"Secondary")}),background:{default:g(e)}})}))},color:"inherit",children:"DARK"===t.theme.mode?Object(v.jsx)(B.a,{}):Object(v.jsx)(F.a,{})})}function W(e){return Object(v.jsx)(E.a,{elevation:e.elevation,position:e.position,sx:{textAlign:"center",height:"50px",backgroundColor:0===e.elevation?"transparent":"default"},enableColorOnDark:!0,children:Object(v.jsxs)(G.a,{variant:"dense",children:[Object(v.jsx)(I,{}),Object(v.jsx)(T,{}),Object(v.jsx)(P,{}),Object(v.jsx)(z,{})]})})}function U(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(D.a,{sx:{flexGrow:1},children:Object(v.jsx)(W,{position:"static"})})})}var Y=n(130);n(141);function N(){return Object(v.jsx)("header",{children:Object(v.jsx)(U,{})})}var _=n(5);function J(){var e=a.a.lazy((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,293))})),t=a.a.lazy((function(){return Promise.all([n.e(4),n.e(6)]).then(n.bind(null,292))})),r=a.a.lazy((function(){return n.e(7).then(n.bind(null,290))}));return Object(v.jsx)(a.a.Suspense,{fallback:Object(v.jsx)("div",{children:"Loading..."}),children:Object(v.jsxs)(_.c,{children:[Object(v.jsx)(_.a,{path:"/",element:Object(v.jsx)(e,{}),exact:!0}),Object(v.jsx)(_.a,{path:"/Page1",element:Object(v.jsx)(t,{})}),Object(v.jsx)(_.a,{path:"*",element:Object(v.jsx)(r,{})})]})})}var M=n(131),q=n(144),V=n(132),$=n(133),Q=n(134),X=n(135);function Z(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(M.a,{direction:"row",justifyContent:"center",alignItems:"center",sx:{color:"text.primary",paddingTop:"15px",fontSize:".8rem"},children:[Object(v.jsx)(V.a,{sx:{mr:.3,fontSize:14}}),"2022"," ","RiskLab AI"]}),Object(v.jsx)(M.a,{direction:"row",justifyContent:"space-around",alignItems:"center",sx:{paddingTop:"10px",paddingBottom:"10px"},children:Object(v.jsxs)(q.a,{sx:{color:"text.primary"},children:[Object(v.jsx)($.a,{sx:{cursor:"pointer",fontSize:"20px"},onClick:function(){return window.open("https://twitter.com/".concat(""),"_blank")}}),Object(v.jsx)(Q.a,{sx:{cursor:"pointer",fontSize:"20px",mx:2},onClick:function(){return window.open("https://t.me/".concat("RiskLab"),"_blank")}}),Object(v.jsx)(X.a,{sx:{cursor:"pointer",fontSize:"20px"},onClick:function(){return window.open("https://www.linkedin.com/".concat("company/risklab-me"),"_blank")}})]})})]})}var ee=function(){var e=a.a.useContext(w).publicCtx;return Object(v.jsx)("footer",{children:Object(v.jsx)("div",{style:{textAlign:"center",backgroundColor:e.theme.primary.main},children:Object(v.jsx)(Z,{})})})},te=n(136),ne=n(152),re=n(137);function ae(e){var t=e.children,n=Object(Y.a)({target:void 0,disableHysteresis:!0,threshold:100});return Object(v.jsx)(te.a,{in:n,children:Object(v.jsx)(D.a,{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})}function ce(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{id:"back-to-top-anchor"}),e.children,Object(v.jsx)(ae,Object(s.a)(Object(s.a)({},e),{},{children:Object(v.jsx)(ne.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(v.jsx)(re.a,{})})}))]})}var oe=n(139),ie=n(140),se=a.a.forwardRef((function(e,t){return Object(v.jsx)(oe.a,Object(s.a)({elevation:6,ref:t,variant:"filled"},e))}));function le(){var e=a.a.useContext(w),t=e.publicCtx,n=e.setPublicCtx,r=a.a.useState(!1),c=Object(l.a)(r,2),o=c[0],i=c[1],j=a.a.useState(""),u=Object(l.a)(j,2),d=u[0],b=u[1],h=a.a.useState("info"),x=Object(l.a)(h,2),f=x[0],m=x[1],O=function(e,r){"clickaway"!==r&&n(Object(s.a)(Object(s.a)({},t),{},{alertBar:{open:!1,message:"",severity:"info"}}))};return a.a.useEffect((function(){b(t.alertBar.message),m(t.alertBar.severity),i(t.alertBar.open)}),[t.alertBar]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(ie.a,{open:o,autoHideDuration:6e3,onClose:O,children:Object(v.jsx)(se,{severity:f,onClose:O,sx:{width:"100%"},children:d})})})}function je(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N,{}),Object(v.jsx)(ce,{children:Object(v.jsxs)("main",{style:{minHeight:"103vh",maxWidth:"1400px",marginTop:"40px",marginBottom:"150px",marginLeft:"auto",marginRight:"auto",paddingLeft:"20px",paddingRight:"20px"},children:[Object(v.jsx)(J,{}),Object(v.jsx)(le,{})]})}),Object(v.jsx)(ee,{})]})}function ue(){return Object(v.jsx)(i.a,{children:Object(v.jsx)(y,{children:Object(v.jsx)(A,{children:Object(v.jsx)(je,{})})})})}var de=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,291)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var xe=n(66),fe=n(67),me=n(68),Oe=n(71),pe=function(e){Object(me.a)(n,e);var t=Object(Oe.a)(n);function n(e){var r;return Object(xe.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(fe.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasError?Object(v.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.a.Component);n(94);o.a.createRoot(document.getElementById("root")).render(Object(v.jsx)(pe,{children:Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(ue,{})})})),de(),function(e){if("serviceWorker"in navigator){if(new URL("/RiskLab",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/RiskLab","/service-worker.js");be?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):he(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):he(t,e)}))}}()}},[[95,1,2]]]);
//# sourceMappingURL=main.367ed4f5.chunk.js.map