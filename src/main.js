import { createElement } from 'react';
import { render } from 'react-dom';
import { FrontEnd } from 'front-end';
import { routes } from 'routing';
import DjangoDataSource from 'relaks-django-data-source';
import RouteManager from 'relaks-route-manager';

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

window.addEventListener('load', initialize);
