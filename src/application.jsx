import { h, render, Component } from 'preact';
import DjangoDataSource from 'relaks-django-data-source/preact';
import RouteManager from 'relaks-route-manager/preact';
import SWAPI from 'swapi';
import { Route, routes } from 'routes';
import NavBar from 'widgets/nav-bar';
import 'prelaks';
import 'style.scss';

/** @jsx h */

class Application extends Component {
    static displayName = 'Application';

    constructor() {
        super();
        this.state = {
            route: null,
            swapi: null,
        };
    }

    /**
     * Render the application
     *
     * @return {VNode}
     */
    render() {
        return (
            <div>
                {this.renderUserInterface()}
                {this.renderConfiguration()}
            </div>
        );
    }

    /**
     * Render the user interface
     *
     * @return {VNode|null}
     */
    renderUserInterface() {
        let { route, swapi } = this.state;
        if (!swapi || !route) {
            return null;
        }
        let module = route.params.module;
        let page;
        if (module) {
            let Component = module.default;
            let props = { route, swapi };
            page = <Component {...props} />;
        }
        return (
            <div>
                <NavBar route={route} />
                <div className="contents">
                    {page}
                </div>
            </div>
        );
    }

    /**
     * Render non-visual components
     *
     * @return {VNode}
     */
    renderConfiguration() {
        let routeManagerProps = {
            routes: routes,
            onChange: this.handleRouteChange,
        };
        let dataSourceProps = {
            onChange: this.handleDataSourceChange,
        };
        return (
            <div>
                <RouteManager {...routeManagerProps} />
                <DjangoDataSource {...dataSourceProps} />
            </div>
        );
    }

    /**
     * Called when the data source changes
     *
     * @param  {Object} evt
     */
    handleDataSourceChange = (evt) => {
        this.setState({ swapi: new SWAPI(evt.target) });
    }

    /**
     * Called when the route changes
     *
     * @param  {Object} evt
     */
    handleRouteChange = (evt) => {
        this.setState({ route: new Route(evt.target) });
    }
}

export {
    Application as default,
    Application
};
