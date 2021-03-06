class Route {
  constructor(routeManager) {
    this.routeManager = routeManager;
    this.name = routeManager.name;
    this.params = routeManager.params;
    this.history = routeManager.history;
  }

  change(url, options) {
    return this.routeManager.change(url, options);
  }

  find(name, params) {
    return this.routeManager.find(name, params);
  }

  extractID(url) {
    let si = url.lastIndexOf('/');
    let ei;
    if (si === url.length - 1) {
      ei = si;
      si = url.lastIndexOf('/', ei - 1);
    }
    const text = url.substring(si + 1, ei);
    return parseInt(text);
  }
}

const routes = {
  'welcome': {
    path: '/',
    load: async (match) => {
      match.params.module = await import('./pages/welcome-page.jsx' /* webpackChunkName: "welcome-page" */);
    }
  },
  'film-list': {
    path: '/films/',
    load: async (match) => {
      match.params.module = await import('./pages/film-list.jsx' /* webpackChunkName: "film-list" */);
    }
  },
  'film-summary': {
    path: '/films/${id}/',
    params: { id: Number },
    load: async (match) => {
      match.params.module = await import('./pages/film-page.jsx' /* webpackChunkName: "film-page" */);
    }
  },
  'character-list': {
    path: '/characters/',
    load: async (match) => {
      match.params.module = await import('./pages/character-list.jsx' /* webpackChunkName: "character-list" */);
    }
  },
  'character-summary': {
    path: '/characters/${id}/',
    params: { id: Number },
    load: async (match) => {
      match.params.module = await import('./pages/character-page.jsx' /* webpackChunkName: "character-page" */);
    }
  },
  'planet-list': {
    path: '/planets/',
    load: async (match) => {
      match.params.module = await import('./pages/planet-list.jsx' /* webpackChunkName: "planet-list" */);
    }
  },
  'planet-summary': {
    path: '/planets/${id}/',
    params: { id: Number },
    load: async (match) => {
      match.params.module = await import('./pages/planet-page.jsx' /* webpackChunkName: "planet-page" */);
    }
  },
  'species-list': {
    path: '/species/',
    load: async (match) => {
      match.params.module = await import('./pages/species-list.jsx' /* webpackChunkName: "species-list" */);
    }
  },
  'species-summary': {
    path: '/species/${id}/',
    params: { id: Number },
    load: async (match) => {
      match.params.module = await import('./pages/species-page.jsx' /* webpackChunkName: "species-page" */);
    }
  },
  'vehicle-list': {
    path: '/vehicles/',
    load: async (match) => {
      match.params.module = await import('./pages/vehicle-list.jsx' /* webpackChunkName: "vehicle-list" */);
    }
  },
  'vehicle-summary': {
    path: '/vehicles/${id}/',
    params: { id: Number },
    load: async (match) => {
      match.params.module = await import('./pages/vehicle-page.jsx' /* webpackChunkName: "vehicle-page" */);
    }
  },
  'starship-list': {
    path: '/starships/',
    load: async (match) => {
      match.params.module = await import('./pages/starship-list.jsx' /* webpackChunkName: "starship-list" */);
    }
  },
  'starship-summary': {
    path: '/starship/${id}/',
    params: { id: Number },
    load: async (match) => {
      match.params.module = await import('./pages/starship-page.jsx' /* webpackChunkName: "starship-page" */);
    }
  },
};

export {
  Route,
  routes
};
