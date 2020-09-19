import { createElement } from 'react';
import { render } from 'react-dom';
import { DataSource } from 'relaks-django-data-source';
import { RouteManager } from 'relaks-route-manager';
import { FrontEnd } from './front-end.jsx';
import { routes } from './routing.js';

window.addEventListener('load', initialize);

async function initialize(evt) {
  // create remote data source
  const dataSource = new DataSource({
    baseURL: 'https://swapi.dev/api',
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
