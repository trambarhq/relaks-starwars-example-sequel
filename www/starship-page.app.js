webpackJsonp(["starship-page"],{"./pages/starship-page.jsx":function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(i,a){try{var s=t[i](a),l=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}return r("next")})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.StarshipPageSync=t.StarshipPage=t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("../node_modules/preact/dist/preact.esm.js"),o=n("../node_modules/relaks/preact.js"),p=n("./widgets/list.jsx"),c=n("./widgets/loading.jsx"),h=function(e){return e&&e.__esModule?e:{default:e}}(c),d=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),l(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=r(regeneratorRuntime.mark(function e(t){var n,r,i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,r=n.route,i=n.swapi,a={starship:null,films:null,pilots:null,route:r},t.show((0,u.h)(f,a)),e.next=5,i.fetchOne("/starships/"+r.params.id+"/");case 5:return a.starship=e.sent,t.show((0,u.h)(f,a)),e.next=9,i.fetchMultiple(a.starship.films,{partial:.4});case 9:return a.films=e.sent,t.show((0,u.h)(f,a)),e.next=13,i.fetchMultiple(a.starship.pilots,{partial:.4});case 13:return a.pilots=e.sent,e.abrupt("return",(0,u.h)(f,a));case 15:case"end":return e.stop()}},e,this)}));return e}()}]),t}(o.AsyncComponent);d.displayName="StarshipPage";var f=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.route,n=e.starship,r=e.pilots,i=e.films;return n?(0,u.h)("div",{className:"character-page"},(0,u.h)("h1",null,n.name),(0,u.h)("div",null,"Model: ",n.model),(0,u.h)("div",null,"Manufacturer: ",n.manufacturer),(0,u.h)("div",null,"Cost in credits: ",n.cost_in_credits),(0,u.h)("div",null,"Length: ",n.length," m"),(0,u.h)("div",null,"Max atmosphering speed: ",n.max_atmosphering_speed," km/h"),(0,u.h)("div",null,"Max sublight speed: ",n.MGLT," MGLT"),(0,u.h)("div",null,"Hyperdrive rating: ",n.hyperdrive_rating),(0,u.h)("div",null,"Crew: ",n.crew),(0,u.h)("div",null,"Passengers: ",n.passenger),(0,u.h)("div",null,"Cargo capacity: ",n.cargo_capacity," kg"),(0,u.h)("div",null,"Consumables: ",n.consumables),(0,u.h)("div",null,"Starship class: ",n.starship_class),(0,u.h)("h2",null,"Pilots"),(0,u.h)(p.List,{urls:n.pilots,items:r,pageName:"character-summary",route:t}),(0,u.h)("h2",null,"Films"),(0,u.h)(p.List,{urls:n.films,items:i,field:"title",pageName:"film-summary",route:t})):(0,u.h)(h.default,null)}}]),t}(u.Component);f.displayName="StarshipPageSync",t.default=d,t.StarshipPage=d,t.StarshipPageSync=f},"./widgets/list.jsx":function(e,t,n){"use strict";function r(e){var t=e.route,n=e.urls,r=e.items,a=e.field,s=e.pageName;return n&&("string"==typeof n?r=r?[r]:[{url:n,pending:!0}]:n instanceof Array&&(r=n.map(function(e){var t=r?r[e]:null;return t||(t={url:e,pending:!0}),t}))),r?0===r.length?(0,i.h)("ul",{className:"empty"},(0,i.h)("li",null,(0,i.h)("span",null,"none"))):(0,i.h)("ul",null,r.map(function(e){var n=t.extractID(e.url),r=t.find(s,{id:n}),l=e.pending?"...":e[a],u={href:r,className:e.pending?"pending":void 0};return(0,i.h)("li",null,(0,i.h)("a",u,l))})):null}Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var i=n("../node_modules/preact/dist/preact.esm.js");r.defaultProps={field:"name"},r.displayName="List",t.default=r,t.List=r},"./widgets/loading.jsx":function(e,t,n){"use strict";function r(){return(0,i.h)("div",{className:"loading"},(0,i.h)("div",null,(0,i.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var i=n("../node_modules/preact/dist/preact.esm.js");r.displayName="Loading",t.default=r,t.Loading=r}});