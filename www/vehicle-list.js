(window.webpackJsonp=window.webpackJsonp||[]).push([["vehicle-list"],{38:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var a=t(1),r=t.n(a),l=t(7),i=t.n(l),u=t(2),c=t.n(u),s=t(0),m=t.n(s),o=t(8),f=t(42),p=t(43);function d(){return(d=c()(r.a.mark((function e(n){var t,a,l,u,c,s,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=function(){c(s?m.a.createElement("div",null,m.a.createElement("h1",null,"Vehicles"),m.a.createElement(f.a,{items:s,pageName:"vehicle-summary",route:t})):m.a.createElement(p.a,null))},t=n.route,a=n.swapi,l=Object(o.c)(),u=i()(l,1),c=u[0],d(),e.next=6,a.fetchList("/vehicles/");case 6:s=e.sent,d(),s.more();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=o.a.memo((function(e){return d.apply(this,arguments)}))},42:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t(0),r=t.n(a);function l(e){var n=e.route,t=e.urls,a=e.items,l=e.field,i=e.pageName;return t&&("string"==typeof t&&(t=[t],a=[a]),a=t.map((function(e,n){var t=a?a[n]:null;return t||(t={url:e,pending:!0}),t}))),a?0===a.length?r.a.createElement("ul",{className:"empty"},r.a.createElement("li",null,r.a.createElement("span",null,"none"))):r.a.createElement("ul",null,a.map((function(e,t){var a=n.extractID(e.url),u=n.find(i,{id:a}),c=e.pending?"...":e[l],s={href:u,className:e.pending?"pending":void 0};return r.a.createElement("li",{key:t},r.a.createElement("a",s,c))}))):null}l.defaultProps={field:"name"}},43:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t(0),r=t.n(a);function l(){return r.a.createElement("div",{className:"loading"},r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}}}]);
//# sourceMappingURL=vehicle-list.js.map