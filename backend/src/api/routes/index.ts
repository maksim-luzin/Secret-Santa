import { Express } from 'express';
import auth from './auth';
import shuffle from './shuffle';
import wish from './wish';
import user from './user';
import { Routes } from '../../common/enums';

const routes = (app: Express) => {
  app.use([Routes.API, Routes.AUTH].join(''), auth);
  app.use([Routes.API, Routes.SHUFFLE].join(''), shuffle);
  app.use([Routes.API, Routes.WISH].join(''), wish);
  app.use([Routes.API, Routes.USER].join(''), user);
};

export default routes;
