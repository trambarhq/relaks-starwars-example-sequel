(window.webpackJsonp=window.webpackJsonp||[]).push([["character-page"],{115:function(e,t,a){"use strict";var n=a(34),r=a(35);t.a={get:n.b,set:n.d,plant:n.c,use:r.b,memo:r.a}},120:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return v});var n,r=a(0),l=a.n(r),i=a(22),c=a.n(i),s=a(2),u=a.n(s),m=a(1),o=a.n(m),p=a(35),d=a(115),f=a(132),h=a(131),E=(n=u()(l.a.mark(function e(t){var a,n,r,i,s,u,m,d,E,v,g,y;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return y=function(){s(u?o.a.createElement("div",null,o.a.createElement("h1",null,u.name),o.a.createElement("div",null,"Height: ",u.height," cm"),o.a.createElement("div",null,"Mass: ",u.mass," kg"),o.a.createElement("div",null,"Hair color: ",u.hair_color),o.a.createElement("div",null,"Skin color: ",u.skin_color),o.a.createElement("div",null,"Hair color: ",u.hair_color),o.a.createElement("div",null,"Eye color: ",u.eye_color),o.a.createElement("div",null,"Birth year: ",u.birth_year),o.a.createElement("h2",null,"Homeworld"),o.a.createElement(f.a,{urls:u.homeworld,items:E,pageName:"planet-summary",route:a}),o.a.createElement("h2",null,"Films"),o.a.createElement(f.a,{urls:u.films,items:m,field:"title",pageName:"film-summary",route:a}),o.a.createElement("h2",null,"Species"),o.a.createElement(f.a,{urls:u.species,items:d,pageName:"species-summary",route:a}),o.a.createElement("h2",null,"Vehicles"),o.a.createElement(f.a,{urls:u.vehicles,items:v,pageName:"vehicle-summary",route:a}),o.a.createElement("h2",null,"Starships"),o.a.createElement(f.a,{urls:u.starships,items:g,pageName:"starship-summary",route:a})):o.a.createElement(h.a,null))},a=t.route,n=t.swapi,r=Object(p.d)(),i=c()(r,1),s=i[0],y(),e.next=6,n.fetchOne("/people/"+a.params.id+"/");case 6:return u=e.sent,y(),e.next=10,n.fetchMultiple(u.films,{minimum:"60%"});case 10:return m=e.sent,y(),e.next=14,n.fetchMultiple(u.species,{minimum:"60%"});case 14:return d=e.sent,y(),e.next=18,n.fetchOne(u.homeworld);case 18:return E=e.sent,y(),e.next=22,n.fetchMultiple(u.vehicles,{minimum:"60%"});case 22:return v=e.sent,y(),e.next=26,n.fetchMultiple(u.starships,{minimum:"60%"});case 26:g=e.sent,y();case 28:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)}),v=d.a.memo(E)},131:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(1),r=a.n(n);function l(){return r.a.createElement("div",{className:"loading"},r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}},132:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(1),r=a.n(n);function l(e){var t=e.route,a=e.urls,n=e.items,l=e.field,i=e.pageName;return a&&("string"==typeof a&&(a=[a],n=[n]),n=a.map(function(e,t){var a=n?n[t]:null;return a||(a={url:e,pending:!0}),a})),n?0===n.length?r.a.createElement("ul",{className:"empty"},r.a.createElement("li",null,r.a.createElement("span",null,"none"))):r.a.createElement("ul",null,n.map(function(e,a){var n=t.extractID(e.url),c=t.find(i,{id:n}),s=e.pending?"...":e[l],u={href:c,className:e.pending?"pending":void 0};return r.a.createElement("li",{key:a},r.a.createElement("a",u,s))})):null}l.defaultProps={field:"name"}}}]);
//# sourceMappingURL=character-page.js.map