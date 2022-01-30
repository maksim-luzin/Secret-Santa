import { Router, Request, Response, NextFunction } from 'express';
import { register } from '../services';
import { registrationMiddleware } from '../middlewares/registrationMiddleware';
import { Routes } from '../../common/enums';

const router: Router = Router();

router.post(
  Routes.REGISTER,
  registrationMiddleware,
  (req: Request, res: Response, next: NextFunction) =>
    register(req.body)
      .then((token: string) => res.send({ token }))
      .catch(next)
);

export default router;
