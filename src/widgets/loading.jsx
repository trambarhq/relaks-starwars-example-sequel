import { h, Component } from 'preact';

/** @jsx h */

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <div>
                    <i className="fab fa-empire fa-spin"/> Loading
                </div>
            </div>
        );
    }
}

export {
    Loading as default,
    Loading
};
