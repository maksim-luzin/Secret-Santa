import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from '../../enums';
import { PrivateRoute } from '../PrivateRoute';
import { PublicRoute } from '../PublicRoute';
import { Auth } from '../../../scenes/Auth/components/Auth';
import { Play } from '../../../scenes/Play/components/Play';
import { WishList } from '../../../scenes/WishList/components/WishList';
import { NotFound } from '../../components/NotFound';
import { Notifications } from '../../components/Notifications';
import { getToken } from '../../helpers';
import { useAction } from '../../hooks/useAction';
import { useAuth } from '../../hooks/useAuth';
import { useTypedSelector } from '../../hooks/store';
import { WsHelper } from '../../helpers';

const Routing = () => {
  const { authorizedAction } = useAction();
  const token = getToken();
  const { isAuthorized } = useAuth();
  const message = useTypedSelector(root => root.authentication.error || root.wish.error || '');

  useEffect(() => {
    if (!isAuthorized && token) {
      authorizedAction();
    }
  }, [isAuthorized, token, authorizedAction]);

  return (
    <>
      <Switch>
        <PublicRoute isAuthorized={isAuthorized} exact path={Routes.AUTH} component={Auth} />
        <PrivateRoute isAuthorized={isAuthorized} exact path={Routes.WISHLIST} component={WishList} />
        <PrivateRoute isAuthorized={isAuthorized} exact path={Routes.PLAY} component={Play} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Notifications message={message} />
      <WsHelper />
    </>

  );
};

export { Routing };
