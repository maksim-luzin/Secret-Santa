import { Router, Request, Response, NextFunction } from 'express';
import { IRequest } from '../../common/interfaces';
import { shuffle } from '../services';

const router: Router = Router();

router.post('/', (req: Request, res: Response, next: NextFunction) =>
  shuffle(req as IRequest)
    .then(() => res.send())
    .catch(next)
);

export default router;
