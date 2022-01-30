import { Router, Request, Response, NextFunction } from 'express';
import { getUser } from '../services';
import { Routes } from '../../common/enums';
import { IRequest } from '../../common/interfaces';

const router: Router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) =>
  getUser(req as IRequest)
    .then((auth) => res.send({ auth }))
    .catch(next)
);

export default router;
