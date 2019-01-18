import 'preact/devtools';
import { h, render } from 'preact';
import { FrontEnd } from 'front-end';
import { routes } from 'routing';
import DjangoDataSource from 'relaks-django-data-source';
import RouteManager from 'relaks-route-manager';

async function initialize(evt) {
    // create remote data source
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

    let container = document.getElementById('react-container');
    let element = h(FrontEnd, { dataSource, routeManager });
    render(element, container);
}

window.addEventListener('load', initialize);
