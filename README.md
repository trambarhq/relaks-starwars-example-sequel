Relaks Star Wars Example - the Sequel
-------------------------------------
This is a continuation of the [Relaks Star Wars Example](https://github.com/chung-leong/relaks-starwars-example). The app is now fully built out. Instead of just the character list, all the information provided by [https://swapi.co/](https://swapi.co/) is available. It's also properly integrated with the browser's history functionality. It's a more realistic demonstration of what an app built using [Preact](https://preactjs.com/) and [Relaks](https://github.com/chung-leong/relaks) would work.

You can see the app in action [here](https://trambar.io/examples/starwars-v/). You can view its WebPack bundle analysis [here](https://trambar.io/examples/starwars-v/report.html).
When gzipped, it's just around 30 KB.

The example makes use of [relaks-route-manager](https://github.com/chung-leong/relaks-route-manager) and [relaks-django-data-source](https://github.com/chung-leong/relaks-django-data-source).

* [Getting started](#getting-started)
* [Application](#application)
* [Routing](#routing)
* [Character list](#character-list)
* [Character page](#character-page)
* [Next step](#next-step)

## Getting started

To see the code running in debug mode, first clone this repository. In the working folder, run `npm install`. Once that's done, run `npm run start` to launch [WebPack Dev Server](https://webpack.js.org/configuration/dev-server/). Open a browser window and enter `http://localhost:8080` as the location.

## Application

The `initialize()` function ([main.js](https://github.com/chung-leong/relaks-starwars-example-sequel/blob/master/src/main.js)) has changed slightly. The function has to be declared as `async`, since we need to use the `await` operator. It initializes a second object, `RouteManager`. The route manager maps the URL displayed in the browser's location bar to pages in the app. It'll intercept clicks on hyperlinks and handle them internally.

```javascript
async function initialize(evt) {
    // create data source
    let dataSource = new DjangoDataSource({
        baseURL: 'https://swapi.co/api',
    });
    dataSource.activate();

    // create route manager
    let routeManager = new RouteManager({
        useHashFallback: (process.env.NODE_ENV === 'production'),
        routes,
    });
    routeManager.activate();
    await routeManager.start();

    let appContainer = document.getElementById('app-container');
    if (!appContainer) {
        throw new Error('Unable to find app element in DOM');
    }
    let appElement = h(Application, { dataSource, routeManager });
    render(appElement, appContainer);
}
```

We'll using hash fallback mode for the production version, so that the app will work properly when loaded as a file ([pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries)
does not work at a file:// location). It also make hosting the example easier.

The `render()` method of `Application` ([application.jsx](https://github.com/chung-leong/relaks-starwars-example-sequel/blob/master/src/application.jsx)) has changed quite a bit. The app now has a nav bar. It's
also using a router to determine which page to render:

```javascript
render() {
    let { route, swapi } = this.state;
    let PageComponent = route.params.module.default;
    return (
        <div>
            <NavBar route={route} />
            <div className="contents">
                <PageComponent route={route} swapi={swapi} />
            </div>
        </div>
    );
}
```

In addition to route parameters extracted from the current URL, the route object contains a reference to the module used to generate the page. We have to explicitly ask for the `default` export here, because it isn't picked automatically when `require()` or `import()` is used to import a JavaScript module.

## Routing

Route definitions for the app's various pages are contained in [routing.js](https://github.com/chung-leong/relaks-starwars-example-sequel/blob/master/src/routing.js). The file also contains the proxy object for the route manager.

The following is one of the routes:

```js
'film-summary': {
    path: '/films/${id}/',
    params: { id: Number },
    load: async (match) => {
        match.params.module = await import('pages/film-page' /* webpackChunkName: "film-page" */);
    }
},
```

`path` is the pattern of matching URLs. It uses the syntax of ES6 variable interpolation.

`params` controls the typecasting of extracted parameters. In this case we want `id` to be a number.

`load` is an async function that loads the module for the page. The module is placed into `match.params.module`, which is referenced by `render()` of `Application`.

The *webpackChunkName* comment assigns a name to the code chunk holding the module. The name forms part of the name of the resultant JavaScript file. Without it the file would end up with an unintuitive numeric name.

## Character list

The `renderAsync()` method of `CharacterList` ([character-list.jsx](https://github.com/chung-leong/relaks-starwars-example-isomorphic/blob/master/src/pages/character-list.jsx)) is largely the same as before. The only difference is `route` is now passed to to `CharacterListSync` (instead of the callback function `onSelect`).

```javascript
async renderAsync(meanwhile) {
    let { route, swapi } = this.props;
    let props = {
        route,
    };
    meanwhile.show(<CharacterListSync {...props} />);
    props.people = await swapi.fetchList('/people/');
    props.people.more();
    return <CharacterListSync {...props} />;
}
```

The `render()` method of `CharacterListSync` has been refactored so that it uses a reusable component to draw the list:

```javascript
render() {
    let { people, route } = this.props;
    if (!people) {
        return <Loading />;
    }
    let listProps = {
        items: people,
        field: 'name',
        pageName: 'character-summary',
        route: route,
    };
    return (
        <div>
            <h1>Characters</h1>
            <List {...listProps} />
        </div>
    );
}
```

`List` ([list.jsx](https://github.com/chung-leong/relaks-starwars-example-isomorphic/blob/master/src/widgets/list.jsx)) is a stateless component that draw a list of items:

```javascript
function List(props) {
    let { route, urls, items, field, pageName } = props;
    if (urls) {
        // accept single URL and object
        if (typeof(urls) === 'string') {
            urls = [ urls ];
            items = [ items ];
        }
        items = urls.map((url, index) => {
            var item = (items) ? items[index] : null;
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
    return (
        <ul>
        {
            items.map((item) => {
                let id = route.extractID(item.url);
                let url = route.find(pageName, { id });
                let text = item.pending ? '...' : item[field];
                let linkProps = {
                    href: url,
                    className: (item.pending) ? 'pending' : undefined,
                };
                return <li><a {...linkProps}>{text}</a></li>;
            })
        }
        </ul>
    );
}
```

The `find()` method of `route` is used to generate a URL to the summary page of an item. `pageName` corresponds to the key of the desired route in the routing table ([routing.js](https://github.com/chung-leong/relaks-starwars-example-sequel/blob/master/src/routing.js)).

## Character page

The `renderAsync()` method of `CharacterPage` ([character-page.jsx](https://github.com/chung-leong/relaks-starwars-example-isomorphic/blob/master/src/pages/character-page.jsx)) is also largely unchanged. Insteading of receiving `person` as a prop, it's now necessary to fetch the object, using the id from the route.

```javascript
async renderAsync(meanwhile) {
    let { route, swapi } = this.props;
    let props = {
        route: route,
    };
    meanwhile.show(<CharacterPageSync {...props} />);
    props.person = await swapi.fetchOne(`/people/${route.params.id}/`);
    meanwhile.show(<CharacterPageSync {...props} />);
    props.films = await swapi.fetchMultiple(props.person.films, { minimum: '60%' });
    meanwhile.show(<CharacterPageSync {...props} />);
    props.species = await swapi.fetchMultiple(props.person.species, { minimum: '60%' });
    meanwhile.show(<CharacterPageSync {...props} />);
    props.homeworld = await swapi.fetchOne(props.person.homeworld);
    meanwhile.show(<CharacterPageSync {...props} />);
    props.vehicles = await swapi.fetchMultiple(props.person.vehicles, { minimum: '60%' });
    meanwhile.show(<CharacterPageSync {...props} />);
    props.starships = await swapi.fetchMultiple(props.person.starships, { minimum: '60%' });
    meanwhile.show(<CharacterPageSync {...props} />);
    return <CharacterPageSync {...props} />;
}
```

The `render()` method of `CharacterPageSync` ([character-page.jsx](https://github.com/chung-leong/relaks-starwars-example-isomorphic/blob/master/src/pages/character-page.jsx)) is also largely the same. Redundant code for drawing lists was refactored out. The method also returns a loading animation when `person` is `undefined`.

```javascript
render() {
    let { route, person, homeworld, films, species, vehicles, starships } = this.props;
    if (!person) {
        return <Loading />;
    }
    return (
        <div className="character-page">
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
```

## Next step

In the [next example](https://github.com/chung-leong/relaks-starwars-example-isomorphic), we'll make our app isomorphic. It'll render on both the client side and the server side (for the purpose of SEO among other things).
