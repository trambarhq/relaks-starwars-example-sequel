import { h, Component } from 'preact';
import { AsyncComponent } from 'prelaks';
import { List } from 'widgets/list';
import Loading from 'widgets/loading';

/** @jsx h */

class SpeciesPage extends AsyncComponent {
    /**
     * Retrieve remote data and render the synchronize half of this component
     *
     * @param  {Meanwhile}  meanwhile
     *
     * @return {VNode}
     */
    async renderAsync(meanwhile) {
        let { route, swapi } = this.props;
        let props = {
            species: null,
            homeworld: null,
            films: null,
            people: null,
            route: route,
        };
        meanwhile.show(<SpeciesPageSync {...props} />);
        props.species = await swapi.fetchOne(`/species/${route.params.id}/`);
        meanwhile.show(<SpeciesPageSync {...props} />);
        props.films = await swapi.fetchMultiple(props.species.films, { partial: 0.5 });
        meanwhile.show(<SpeciesPageSync {...props} />);
        props.people = await swapi.fetchMultiple(props.species.people, { partial: 0.5 });
        meanwhile.show(<SpeciesPageSync {...props} />);
        props.homeworld = await swapi.fetchOne(props.species.homeworld);
        meanwhile.show(<SpeciesPageSync {...props} />);
        return <SpeciesPageSync {...props} />;
    }
}

class SpeciesPageSync extends Component {
    /**
     * Render the component, making best effort using what props are given
     *
     * @return {VNode}
     */
    render() {
        let { route, species, homeworld, people, films } = this.props;
        if (!species) {
            return <Loading />;
        }
        return (
            <div className="character-page">
                <h1>{species.name}</h1>
                <div>Classification: {species.classification}</div>
                <div>Designation: {species.designation}</div>
                <div>Average height: {species.average_height}</div>
                <div>Skin colors: {species.skin_colors}</div>
                <div>Hair colors: {species.hair_colors}</div>
                <div>Eye colors: {species.eye_colors}</div>
                <div>Average lifespan: {species.average_lifespan}</div>
                <div>Language: {species.language}</div>
                <h2>Homeworld</h2>
                <List urls={species.homeworld} items={homeworld} pageName="planet-summary" route={route} />
                <h2>Members</h2>
                <List urls={species.people} items={people} pageName="character-summary" route={route} />
                <h2>Films</h2>
                <List urls={species.films} items={films} field="title" pageName="film-summary" route={route} />
            </div>
        );
    }
}

export {
    SpeciesPage as default,
    SpeciesPage,
    SpeciesPageSync,
};
