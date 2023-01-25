import React from 'react';
import { Route, Navigate } from 'react-router-dom';

import { authenticationService } from '../Services/authenticationService';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            const currentUser = authenticationService.currentUserValue;
            if (!currentUser) {
                // not logged in so Navigate to login page with the return url
                return (
                    <Navigate
                        to={{ pathname: '/', state: { from: props.location } }}
                    />
                );
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

export default PrivateRoute;
