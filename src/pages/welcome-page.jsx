import React, { Component } from 'react';

function WelcomePage(props) {
    return (
        <div>
            <h1>Welcome!</h1>
        </div>
    );
}

// set display name so it appears in React Dev Console when code is uglified
WelcomePage.displayName = 'WelcomePage';

export {
    WelcomePage as default,
    WelcomePage
};
