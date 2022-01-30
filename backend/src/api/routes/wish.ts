import { Router, Request, Response, NextFunction } from 'express';
import { wish } from '../services';
import { IUser } from '../../common/interfaces';

const router: Router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) =>
  wish(req.user as IUser)
    .then((user) => res.send(user))
    .catch(next)
);

export default router;
