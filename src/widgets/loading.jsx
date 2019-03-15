import React, { Component } from 'react';

function Loading() {
    return (
        <div className="loading">
            <div>
                <i className="fab fa-empire fa-spin"/> Loading
            </div>
        </div>
    );
}

// set display name so it appears in React Dev Console when code is uglified
Loading.displayName = 'Loading';

export {
    Loading as default,
    Loading
};
