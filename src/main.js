import 'preact/devtools';
import { h, render } from 'preact';
import { Application } from 'application';
import { routes } from 'routing';
import DjangoDataSource from 'relaks-django-data-source';
import RouteManager from 'relaks-route-manager';

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

window.addEventListener('load', initialize);
