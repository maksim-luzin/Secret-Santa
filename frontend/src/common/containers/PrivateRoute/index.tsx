import React, { FunctionComponent, ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Routes } from '../../enums';

type PrivateRouteProps<T> = T & { component: ReactNode }

const PrivateRoute: FunctionComponent<PrivateRouteProps<any>> = ({
  component: Component,
  isAuthorized,
  ...rest
}: PrivateRouteProps<any>) => (
  isAuthorized
    ? <Route {...rest} render={props => <Component {...props} />} />
    : <Redirect to={Routes.AUTH} />
);

export { PrivateRoute };
