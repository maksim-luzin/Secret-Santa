import { NextFunction, Request, Response } from 'express';
import passport from 'passport';

export default (routesWhiteList: (string | RegExp)[] = []) =>
  (req: Request, res: Response, next: NextFunction) =>
    routesWhiteList.some((route) => req.path.match(route))
      ? next()
      : passport.authenticate('jwt', { session: false })(req, res, next);
