import { h, Component } from 'preact';

/** @jsx h */

class NavBar extends Component {
    render() {
        let { route } = this.props;
        return (
            <div className="nav-bar">
                <Button pageName="welcome" route={route}>
                    <i className="fab fa-empire"/>
                </Button>
                <Button pageName="film-list" route={route}>
                    Films
                </Button>
                <Button pageName="character-list" route={route}>
                    Characters
                </Button>
                <Button pageName="planet-list" route={route}>
                    Planets
                </Button>
                <Button pageName="species-list" route={route}>
                    Species
                </Button>
                <Button pageName="vehicle-list" route={route}>
                    Vehicles
                </Button>
                <Button pageName="starship-list" route={route}>
                    Starships
                </Button>
            </div>
        );
    }
}

function Button(props) {
    let { route } = props;
    let url = route.find(props.pageName);
    return <a className="button" href={url}>{props.children}</a>;
}

export {
    NavBar as default,
    NavBar
};
