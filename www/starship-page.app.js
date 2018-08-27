webpackJsonp(["starship-page"],{"./pages/starship-page.jsx":function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.StarshipPageSync=t.StarshipPage=t.default=void 0;var l=s("../node_modules/babel-runtime/regenerator/index.js"),n=a(l),r=s("../node_modules/babel-runtime/helpers/asyncToGenerator.js"),i=a(r),u=s("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),d=a(u),o=s("../node_modules/babel-runtime/helpers/classCallCheck.js"),p=a(o),h=s("../node_modules/babel-runtime/helpers/createClass.js"),c=a(h),m=s("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),f=a(m),g=s("../node_modules/babel-runtime/helpers/inherits.js"),v=a(g),_=s("../node_modules/preact/dist/preact.esm.js"),y=s("../node_modules/relaks/preact.js"),b=s("./widgets/list.jsx"),j=s("./widgets/loading.jsx"),x=a(j),w=function(e){function t(){return(0,p.default)(this,t),(0,f.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,c.default)(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,i.default)(n.default.mark(function e(t){var s,a,l,r;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.props,a=s.route,l=s.swapi,r={starship:null,films:null,pilots:null,route:a},t.show((0,_.h)(L,r)),e.next=5,l.fetchOne("/starships/"+a.params.id+"/");case 5:return r.starship=e.sent,t.show((0,_.h)(L,r)),e.next=9,l.fetchMultiple(r.starship.films,{partial:.4});case 9:return r.films=e.sent,t.show((0,_.h)(L,r)),e.next=13,l.fetchMultiple(r.starship.pilots,{partial:.4});case 13:return r.pilots=e.sent,e.abrupt("return",(0,_.h)(L,r));case 15:case"end":return e.stop()}},e,this)}));return e}()}]),t}(y.AsyncComponent);w.displayName="StarshipPage";var L=function(e){function t(){return(0,p.default)(this,t),(0,f.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.route,s=e.starship,a=e.pilots,l=e.films;return s?(0,_.h)("div",{className:"character-page"},(0,_.h)("h1",null,s.name),(0,_.h)("div",null,"Model: ",s.model),(0,_.h)("div",null,"Manufacturer: ",s.manufacturer),(0,_.h)("div",null,"Cost in credits: ",s.cost_in_credits),(0,_.h)("div",null,"Length: ",s.length," m"),(0,_.h)("div",null,"Max atmosphering speed: ",s.max_atmosphering_speed," km/h"),(0,_.h)("div",null,"Max sublight speed: ",s.MGLT," MGLT"),(0,_.h)("div",null,"Hyperdrive rating: ",s.hyperdrive_rating),(0,_.h)("div",null,"Crew: ",s.crew),(0,_.h)("div",null,"Passengers: ",s.passenger),(0,_.h)("div",null,"Cargo capacity: ",s.cargo_capacity," kg"),(0,_.h)("div",null,"Consumables: ",s.consumables),(0,_.h)("div",null,"Starship class: ",s.starship_class),(0,_.h)("h2",null,"Pilots"),(0,_.h)(b.List,{urls:s.pilots,items:a,pageName:"character-summary",route:t}),(0,_.h)("h2",null,"Films"),(0,_.h)(b.List,{urls:s.films,items:l,field:"title",pageName:"film-summary",route:t})):(0,_.h)(x.default,null)}}]),t}(_.Component);L.displayName="StarshipPageSync",t.default=w,t.StarshipPage=w,t.StarshipPageSync=L},"./widgets/list.jsx":function(e,t,s){"use strict";function a(e){var t=e.route,s=e.urls,a=e.items,n=e.field,r=e.pageName;return s&&("string"==typeof s?a=a?[a]:[{url:s,pending:!0}]:s instanceof Array&&(a=s.map(function(e,t){var s=a?a[t]:null;return s||(s={url:e,pending:!0}),s}))),a?0===a.length?(0,l.h)("ul",{className:"empty"},(0,l.h)("li",null,(0,l.h)("span",null,"none"))):(0,l.h)("ul",null,a.map(function(e){var s=t.extractID(e.url),a=t.find(r,{id:s}),i=e.pending?"...":e[n],u={href:a,className:e.pending?"pending":void 0};return(0,l.h)("li",null,(0,l.h)("a",u,i))})):null}Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var l=s("../node_modules/preact/dist/preact.esm.js");a.defaultProps={field:"name"},a.displayName="List",t.default=a,t.List=a},"./widgets/loading.jsx":function(e,t,s){"use strict";function a(){return(0,l.h)("div",{className:"loading"},(0,l.h)("div",null,(0,l.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var l=s("../node_modules/preact/dist/preact.esm.js");a.displayName="Loading",t.default=a,t.Loading=a}});