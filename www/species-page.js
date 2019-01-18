webpackJsonp(["species-page"],{"./pages/species-page.jsx":function(e,s,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0}),s.SpeciesPageSync=s.SpeciesPage=s.default=void 0;var l=t("../node_modules/babel-runtime/regenerator/index.js"),a=n(l),i=t("../node_modules/babel-runtime/helpers/asyncToGenerator.js"),r=n(i),u=t("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=n(u),d=t("../node_modules/babel-runtime/helpers/classCallCheck.js"),p=n(d),c=t("../node_modules/babel-runtime/helpers/createClass.js"),h=n(c),m=t("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),f=n(m),g=t("../node_modules/babel-runtime/helpers/inherits.js"),v=n(g),_=t("../node_modules/preact/dist/preact.esm.js"),y=t("../node_modules/relaks/preact.js"),b=t("./widgets/list.jsx"),j=t("./widgets/loading.jsx"),w=n(j),N=function(e){function s(){return(0,p.default)(this,s),(0,f.default)(this,(s.__proto__||(0,o.default)(s)).apply(this,arguments))}return(0,v.default)(s,e),(0,h.default)(s,[{key:"renderAsync",value:function(){function e(e){return s.apply(this,arguments)}var s=(0,r.default)(a.default.mark(function e(s){var t,n,l,i;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.route,l=t.swapi,i={route:n},s.show((0,_.h)(x,i)),e.next=5,l.fetchOne("/species/"+n.params.id+"/");case 5:return i.species=e.sent,s.show((0,_.h)(x,i)),e.next=9,l.fetchMultiple(i.species.films,{minimum:"60%"});case 9:return i.films=e.sent,s.show((0,_.h)(x,i)),e.next=13,l.fetchMultiple(i.species.people,{minimum:"60%"});case 13:return i.people=e.sent,s.show((0,_.h)(x,i)),e.next=17,l.fetchOne(i.species.homeworld);case 17:return i.homeworld=e.sent,e.abrupt("return",(0,_.h)(x,i));case 19:case"end":return e.stop()}},e,this)}));return e}()}]),s}(y.AsyncComponent);N.displayName="SpeciesPage";var x=function(e){function s(){return(0,p.default)(this,s),(0,f.default)(this,(s.__proto__||(0,o.default)(s)).apply(this,arguments))}return(0,v.default)(s,e),(0,h.default)(s,[{key:"render",value:function(){var e=this.props,s=e.route,t=e.species,n=e.homeworld,l=e.people,a=e.films;return t?(0,_.h)("div",{className:"character-page"},(0,_.h)("h1",null,t.name),(0,_.h)("div",null,"Classification: ",t.classification),(0,_.h)("div",null,"Designation: ",t.designation),(0,_.h)("div",null,"Average height: ",t.average_height),(0,_.h)("div",null,"Skin colors: ",t.skin_colors),(0,_.h)("div",null,"Hair colors: ",t.hair_colors),(0,_.h)("div",null,"Eye colors: ",t.eye_colors),(0,_.h)("div",null,"Average lifespan: ",t.average_lifespan),(0,_.h)("div",null,"Language: ",t.language),(0,_.h)("h2",null,"Homeworld"),(0,_.h)(b.List,{urls:t.homeworld,items:n,pageName:"planet-summary",route:s}),(0,_.h)("h2",null,"Members"),(0,_.h)(b.List,{urls:t.people,items:l,pageName:"character-summary",route:s}),(0,_.h)("h2",null,"Films"),(0,_.h)(b.List,{urls:t.films,items:a,field:"title",pageName:"film-summary",route:s})):(0,_.h)(w.default,null)}}]),s}(_.Component);x.displayName="SpeciesPageSync",s.default=N,s.SpeciesPage=N,s.SpeciesPageSync=x},"./widgets/list.jsx":function(e,s,t){"use strict";function n(e){var s=e.route,t=e.urls,n=e.items,a=e.field,i=e.pageName;return t&&("string"==typeof t&&(t=[t],n=[n]),n=t.map(function(e,s){var t=n?n[s]:null;return t||(t={url:e,pending:!0}),t})),n?0===n.length?(0,l.h)("ul",{className:"empty"},(0,l.h)("li",null,(0,l.h)("span",null,"none"))):(0,l.h)("ul",null,n.map(function(e){var t=s.extractID(e.url),n=s.find(i,{id:t}),r=e.pending?"...":e[a],u={href:n,className:e.pending?"pending":void 0};return(0,l.h)("li",null,(0,l.h)("a",u,r))})):null}Object.defineProperty(s,"__esModule",{value:!0}),s.List=s.default=void 0;var l=t("../node_modules/preact/dist/preact.esm.js");n.defaultProps={field:"name"},n.displayName="List",s.default=n,s.List=n},"./widgets/loading.jsx":function(e,s,t){"use strict";function n(){return(0,l.h)("div",{className:"loading"},(0,l.h)("div",null,(0,l.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(s,"__esModule",{value:!0}),s.Loading=s.default=void 0;var l=t("../node_modules/preact/dist/preact.esm.js");n.displayName="Loading",s.default=n,s.Loading=n}});