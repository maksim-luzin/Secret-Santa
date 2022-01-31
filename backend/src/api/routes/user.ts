import { Router, Request, Response, NextFunction } from 'express';
import { getUser } from '../services';
import { IRequest } from '../../common/interfaces';

const router: Router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) =>
  getUser(req as IRequest)
    .then((id) => res.send(id))
    .catch(next)
);

export default router;
