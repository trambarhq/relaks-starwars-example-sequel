(window.webpackJsonp=window.webpackJsonp||[]).push([["vehicle-list"],{138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VehicleListSync=t.VehicleList=t.default=void 0;var i=p(n(36)),u=p(n(37)),a=p(n(61)),l=p(n(21)),r=p(n(22)),s=p(n(62)),d=p(n(63)),o=n(11),c=n(64),f=p(n(142)),h=p(n(143));function p(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"renderAsync",value:function(){var e=(0,u.default)(i.default.mark(function e(t){var n,u,a,l;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,u=n.route,a=n.swapi,l={route:u},t.show((0,o.h)(m,l)),e.next=5,a.fetchList("/vehicles/");case 5:return l.vehicles=e.sent,l.vehicles.more(),e.abrupt("return",(0,o.h)(m,l));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(c.AsyncComponent);v.displayName="VehicleList";var m=function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.vehicles,n=e.route;if(!t)return(0,o.h)(h.default,null);var i={items:t,pageName:"vehicle-summary",route:n};return(0,o.h)("div",null,(0,o.h)("h1",null,"Vehicles"),(0,o.h)(f.default,i))}}]),t}(o.Component);m.displayName="VehicleListSync",t.default=v,t.VehicleList=v,t.VehicleListSync=m},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var i=n(11);function u(e){var t=e.route,n=e.urls,u=e.items,a=e.field,l=e.pageName;return n&&("string"==typeof n&&(n=[n],u=[u]),u=n.map(function(e,t){var n=u?u[t]:null;return n||(n={url:e,pending:!0}),n})),u?0===u.length?(0,i.h)("ul",{className:"empty"},(0,i.h)("li",null,(0,i.h)("span",null,"none"))):(0,i.h)("ul",null,u.map(function(e){var n=t.extractID(e.url),u=t.find(l,{id:n}),r=e.pending?"...":e[a],s={href:u,className:e.pending?"pending":void 0};return(0,i.h)("li",null,(0,i.h)("a",s,r))})):null}u.defaultProps={field:"name"},u.displayName="List",t.default=u,t.List=u},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var i=n(11);function u(){return(0,i.h)("div",{className:"loading"},(0,i.h)("div",null,(0,i.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}u.displayName="Loading",t.default=u,t.Loading=u}}]);
//# sourceMappingURL=vehicle-list.js.map