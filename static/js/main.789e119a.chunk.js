(this["webpackJsonp8-2_use-json-fetch"]=this["webpackJsonp8-2_use-json-fetch"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=(a(11),a(12),a(1)),l=a(2),u=a.n(l),i=a(5);function m(e,t){var a=Object(n.useState)(),r=Object(o.a)(a,2),c=r[0],s=r[1],l=Object(n.useState)(!1),m=Object(o.a)(l,2),f=m[0],v=m[1],p=Object(n.useState)(null),h=Object(o.a)(p,2),E=h[0],b=h[1];return Object(n.useEffect)((function(){(function(){var a=Object(i.a)(u.a.mark((function a(){var n,r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,v(!0),a.next=4,fetch(e,t);case 4:if((n=a.sent).ok){a.next=8;break}throw b(n.statusText),new Error(n.statusText);case 8:return a.next=10,n.json();case 10:r=a.sent,s(r.status),a.next=18;break;case 14:a.prev=14,a.t0=a.catch(0),console.error(a.t0),b(a.t0.message);case 18:return a.prev=18,v(!1),a.finish(18);case 21:case"end":return a.stop()}}),a,null,[[0,14,18,21]])})));return function(){return a.apply(this,arguments)}})()()}),[t,e]),[c,f,E]}var f=function(e){var t=m(e.url),a=Object(o.a)(t,3),n=a[0];return a[1],a[2],r.a.createElement("div",null,r.a.createElement("p",{className:"title"},"\u0414\u0430\u043d\u043d\u044b\u0435"),r.a.createElement("p",{className:"status"},n))};var v=function(e){var t=m(e.url),a=Object(o.a)(t,3),n=(a[0],a[1],a[2]);return r.a.createElement("div",null,r.a.createElement("p",{className:"title"},"\u041e\u0448\u0438\u0431\u043a\u0430"),r.a.createElement("p",{className:"status"},n))};var p=function(e){var t=m(e.url),a=Object(o.a)(t,3),n=(a[0],a[1]);return a[2],r.a.createElement("div",null,r.a.createElement("p",{className:"title"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"),r.a.createElement("p",{className:"status"},n&&"Loading ..."))};var h=function(){var e="http://localhost:7070/";return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{url:"".concat(e,"error")}),r.a.createElement(f,{url:"".concat(e,"data")}),r.a.createElement(v,{url:"".concat(e,"loading")}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.789e119a.chunk.js.map