import React, { ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Routes } from '../../enums';

type PublicRouteProps<T> = T & { component: ReactNode }

const PublicRoute = ({ component: Component, isAuthorized, ...rest }: PublicRouteProps<any>) => (
  isAuthorized
    ? <Redirect to={Routes.PLAY} />
    : <Route {...rest} render={props => <Component {...props} />} />
);

export { PublicRoute };
