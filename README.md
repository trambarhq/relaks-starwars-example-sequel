Relaks Star Wars Example - the Sequel
-------------------------------------
This is a continuation of the [Relaks Star Wars Example](https://github.com/trambarhq/relaks-starwars-example). We're going to build out our front-end more fully. Instead of just the character list, we'll make all information provided by [https://swapi.co/](https://swapi.co/) available. We'll also make the site work properly with the browser's history functionality. You can see the code in action [here](https://trambar.io/examples/starwars-v/). You can view its WebPack bundle analysis [here](https://trambar.io/examples/starwars-v/report.html). When gzipped, it's around 60 KB.

[![Screenshot](docs/img/screenshot.png)](https://trambar.io/examples/starwars-v/)

The example makes use of [relaks-route-manager](https://github.com/trambarhq/relaks-route-manager) and [relaks-django-data-source](https://github.com/trambarhq/relaks-django-data-source).

## Getting started

To see the code running in debug mode, first clone this repository. In the working folder, run `npm install`. Once that's done, run `npm run dev` to launch [WebPack Dev Server](https://webpack.js.org/configuration/dev-server/). A browser window should open automatically. If not, open one and enter `http://localhost:8080` as the location.

## Bootstrap code

We have to change the bookstrap code ([main.js](https://github.com/trambarhq/relaks-starwars-example-sequel/blob/master/src/main.js)) a bit. `initialize()` is now declared as `async` as we need to use the `await` operator. It initializes a second object, `RouteManager`. The route manager maps the URL displayed in the browser's location bar to a page component. It'll also intercept clicks on hyperlinks and handle them internally.

```javascript
import { createElement } from 'react';
import { render } from 'react-dom';
import { DataSource } from 'relaks-django-data-source';
import { RouteManager } from 'relaks-route-manager';
import { FrontEnd } from './front-end.jsx';
import { routes } from './routing.js';

window.addEventListener('load', initialize);

async function initialize(evt) {
  // create remote data source
  const dataSource = new DjangoDataSource({
    baseURL: 'https://swapi.co/api',
  });
  dataSource.activate();

  // create route manager
  const routeManager = new RouteManager({
    useHashFallback: (process.env.NODE_ENV === 'production'),
    routes,
  });
  routeManager.activate();
  await routeManager.start();

  const container = document.getElementById('react-container');
  const element = createElement(FrontEnd, { dataSource, routeManager });
  render(element, container);
}
```

For the production version we'll use hash fallback so that the front-end will work properly when loaded as a file ([pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries)
does not work at a file:// location). It also makes hosting the example easier.

## FrontEnd

The source code of `FrontEnd` ([front-end.jsx](https://github.com/trambarhq/relaks-starwars-example-sequel/blob/master/src/front-end.jsx)) is listed below.

```javascript
import React, { useEffect, useMemo } from 'react';
import { useEventTime } from 'relaks';
import { SWAPI } from './swapi.js';
import { Route } from './routing.js';
import { NavBar } from './widgets/nav-bar.jsx';
import './style.scss';

function FrontEnd(props) {
  const { routeManager, dataSource } = props;
  const [ routeChanged, setRouteChanged ] = useEventTime();
  const [ dataChanged, setDataChanged ] = useEventTime();
  const route = useMemo(() => {
    return new Route(routeManager);
  }, [ routeManager, routeChanged ]);
  const swapi = useMemo(() => {
    return new SWAPI(dataSource);
  }, [ dataSource, dataChanged ]);

  useEffect(() => {
    routeManager.addEventListener('change', setRouteChanged);
    dataSource.addEventListener('change', setDataChanged);
    return () => {
      routeManager.removeEventListener('change', setRouteChanged);
      dataSource.removeEventListener('change', setDataChanged);
    };
  }, [ routeManager, dataSource ]);

  const PageComponent = route.params.module.default;
  return (
    <div>
      <NavBar route={route} />
      <div className="contents">
        <PageComponent route={route} swapi={swapi} />
      </div>
    </div>
  );
}

export {
  FrontEnd
};
```

As before, we start by assigning the component's props to local variables:

```javascript
  const { routeManager, dataSource } = props;
```

We need to add another `useEventTime` hook to keep track of `change` event from the route manager:

```javascript
  const [ routeChanged, setRouteChanged ] = useEventTime();
  const [ dataChanged, setDataChanged ] = useEventTime();
```

And another `useMemo` hook to maintain a `Route` proxy object ([routing.js](https://github.com/trambarhq/relaks-starwars-example-sequel/blob/master/src/routing.js))

```javascript
  const route = useMemo(() => {
    return new Route(routeManager);
  }, [ routeManager, routeChanged ]);
  const swapi = useMemo(() => {
    return new SWAPI(dataSource);
  }, [ dataSource, dataChanged ]);
```

Again, we're using a `useEffect` hook to attach event handlers:

```javascript
  useEffect(() => {
    routeManager.addEventListener('change', setRouteChanged);
    dataSource.addEventListener('change', setDataChanged);
    return () => {
      routeManager.removeEventListener('change', setRouteChanged);
      dataSource.removeEventListener('change', setDataChanged);
    };
  }, [ dataSource, dataChanged ]);
```

We don't need a state variable to keep track of what's selected anymore since that comes from the browser location. We also don't need callbacks as navigation is handled by the route manager.

In addition to parameters extracted from the URL, the route parameters include a reference to the module for the matching page. We use that to render the page:

```javascript
  const PageComponent = route.params.module.default;
  return (
    <div>
      <NavBar route={route} />
      <div className="contents">
        <PageComponent route={route} swapi={swapi} />
      </div>
    </div>
  );
```

We have to explicitly ask for the `default` export here as it isn't picked automatically when `require()` or `import()` is used to import a JavaScript module.

## Routing

Route definitions for the front-end's various pages are contained in [routing.js](https://github.com/trambarhq/relaks-starwars-example-sequel/blob/master/src/routing.js#L29). The file also contains the route manager's proxy class.

The following is one of the routes:

```js
'film-summary': {
  path: '/films/${id}/',
  params: { id: Number },
  load: async (match) => {
    match.params.module = await import('./pages/film-page.jsx' /* webpackChunkName: "film-page" */);
  }
},
```

`path` is the pattern of matching URLs. It uses the syntax of ES6 variable interpolation.

`params` controls the typecasting of extracted parameters. In this case we want `id` to be a number.

`load` is an async function that loads the module for the page. The module is placed into `match.params.module`, which is referenced by `FrontEnd`.

We're using [code-splitting](https://webpack.js.org/guides/code-splitting/) to reduce initial load time. The code for each page will be kept in a separate file which will be loaded as necessary. The *webpackChunkName* comment assigns a name to the code chunk holding the module. That's used to name the JavaScript file. Without it the file would end up with an unintuitive numeric name.

If code-splitting isn't necessary, `require()` can be used to import the module instead and `load()` wouldn't have to be async.

## CharacterList

`CharacterList` ([character-list.jsx](https://github.com/trambarhq/relaks-starwars-example-sequel/blob/master/src/pages/character-list.jsx)) is largely the same as before.

```javascript
import React from 'react';
import Relaks, { useProgress } from 'relaks';
import { List } from '../widgets/list.jsx';
import { Loading } from '../widgets/loading.jsx';

async function CharacterList(props) {
  const { route, swapi } = props;
  const [ show ] = useProgress();

  render();
  const people = await swapi.fetchList('/people/');
  render();

  people.more();

  function render() {
    if (!people) {
      show(<Loading />);
    } else {
      show(
        <div>
          <h1>Characters</h1>
          <List items={people} field="name" pageName="character-summary" route={route} />
        </div>
      );
    }
  };
}

const component = Relaks.memo(CharacterList);

export {
  component as CharacterList,
};
```

We have moved the code for drawing a list of items into the reusable component `List` ([list.jsx](https://github.com/trambarhq/relaks-starwars-example-sequel/blob/master/src/widgets/list.jsx)):

```javascript
import React from 'react';

function List(props) {
  let { route, urls, items, field, pageName } = props;
  if (urls) {
    // accept single URL and object
    if (typeof(urls) === 'string') {
      urls = [ urls ];
      items = [ items ];
    }
    // deal with holes in the data set
    items = urls.map((url, index) => {
      let item = (items) ? items[index] : null;
      if (!item) {
        item = { url, pending: true };
      }
      return item;
    });
  }
  if (!items) {
    return null;
  }
  if (items.length === 0) {
    return <ul className="empty"><li><span>none</span></li></ul>;
  }
  return <ul>{items.map(renderItem)}</ul>;

  function renderItem(item, i) {
    const id = route.extractID(item.url);
    const url = route.find(pageName, { id });
    const text = item.pending ? '...' : item[field];
    const linkProps = {
      href: url,
      className: (item.pending) ? 'pending' : undefined,
    };
    return <li key={i}><a {...linkProps}>{text}</a></li>;
  }
}

List.defaultProps = {
  field: 'name'
};

export {
  List
};
```

The `find()` method of `route` is used to generate a URL to the summary page of an item. `pageName` corresponds to the key of the desired route in the routing table ([routing.js](https://github.com/trambarhq/relaks-starwars-example-sequel/blob/master/src/routing.js)).

## CharacterPage

`CharacterPage` ([character-page.jsx](https://github.com/trambarhq/relaks-starwars-example-sequel/blob/master/src/pages/character-page.jsx)) is also largely unchanged. Instead of receiving `person` as a prop, it now fetches the object from Django, using the id from the route.

```javascript
import React from 'react';
import Relaks, { useProgress } from 'relaks';
import { List } from '../widgets/list.jsx';
import { Loading } from '../widgets/loading.jsx';

async function CharacterPage(props) {
  const { route, swapi } = props;
  const [ show ] = useProgress();

  render();
  const person = await swapi.fetchOne(`/people/${route.params.id}/`);
  render();
  const films = await swapi.fetchMultiple(person.films, { minimum: '60%' });
  render();
  const species = await swapi.fetchMultiple(person.species, { minimum: '60%' });
  render();
  const homeworld = await swapi.fetchOne(person.homeworld);
  render();
  const vehicles = await swapi.fetchMultiple(person.vehicles, { minimum: '60%' });
  render();
  const starships = await swapi.fetchMultiple(person.starships, { minimum: '60%' });
  render();

  function render() {
    if (!person) {
      show(<Loading />);
    } else {
      show(
        <div>
          <h1>{person.name}</h1>
          <div>Height: {person.height} cm</div>
          <div>Mass: {person.mass} kg</div>
          <div>Hair color: {person.hair_color}</div>
          <div>Skin color: {person.skin_color}</div>
          <div>Hair color: {person.hair_color}</div>
          <div>Eye color: {person.eye_color}</div>
          <div>Birth year: {person.birth_year}</div>
          <h2>Homeworld</h2>
          <List urls={person.homeworld} items={homeworld} pageName="planet-summary" route={route} />
          <h2>Films</h2>
          <List urls={person.films} items={films} field="title" pageName="film-summary" route={route} />
          <h2>Species</h2>
          <List urls={person.species} items={species} pageName="species-summary" route={route} />
          <h2>Vehicles</h2>
          <List urls={person.vehicles} items={vehicles} pageName="vehicle-summary" route={route} />
          <h2>Starships</h2>
          <List urls={person.starships} items={starships} pageName="starship-summary" route={route} />
        </div>
      );
    }
  }
}

const component = Relaks.memo(CharacterPage);

export {
  component as CharacterPage,
};
```

`person` can now be `undefined` so `render()` has to check for that and display a page loading animation when the object is absent. When navigating from `CharacterList`, the animation will be skipped since the object will be found in the cache. We'll only see it when the browser loads the page directly.

## Other pages

The [other pages](https://github.com/trambarhq/relaks-starwars-example-sequel/tree/master/src/pages) are all just copy-and-paste variants of the code described above.

## Next step

In the [next example](https://github.com/trambarhq/relaks-starwars-example-isomorphic), we'll make our front-end isomorphic. It'll render on both the client side and the server side (for the purpose of SEO among other things).
