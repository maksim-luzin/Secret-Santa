import { Request, Response, NextFunction } from 'express';
import { userRepository } from '../../data/repositories/user';
import { ICreateUser } from '../../common/interfaces';

const registrationMiddleware = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const {
    body: { firstName, lastName },
  }: { body: ICreateUser } = req;
  const users = await userRepository.getByName(firstName);
  
  if (users.some((user) => user.lastName === lastName)) {
    next({ status: 401, message: 'Username is already taken.' });
  }

  next();
};

export { registrationMiddleware };
