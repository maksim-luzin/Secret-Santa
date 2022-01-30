import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from '../../enums';
import { PrivateRoute } from '../PrivateRoute';
import { PublicRoute } from '../PublicRoute';
import { Auth } from '../../../scenes/Auth/components/Auth';
import { Play } from '../../../scenes/Play/components/Play';
import { WishList } from '../../../scenes/WishList/components/WishList';
import { NotFound } from '../../components/NotFound';
import { getToken } from '../../helpers';
import { useAction } from '../../hooks/useAction';
import { useAuth } from '../../hooks/useAuth';

const Routing = () => {
  const { authorizedAction } = useAction();
  const token = getToken();
  const { isAuthorized } = useAuth();

  useEffect(() => {
    if (!isAuthorized && token) {
      authorizedAction();
      console.log(111);
    }
  }, [isAuthorized, token, authorizedAction]);

  return (
    <Switch>
      <PublicRoute isAuthorized={isAuthorized} path={Routes.AUTH} component={Auth} />
      <PrivateRoute isAuthorized={isAuthorized} path={Routes.PLAY} component={Play} />
      <PrivateRoute isAuthorized={isAuthorized} path={Routes.WISHLIST} component={WishList} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export { Routing };
