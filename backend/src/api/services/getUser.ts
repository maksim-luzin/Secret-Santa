/* eslint-disable @typescript-eslint/no-loop-func */
import { userRepository } from '../../data/repositories/user';
import { IRequest } from '../../common/interfaces';

const getUser = async (req: IRequest) => {
  const { id } = await userRepository.getById(req.user.id as number);

  return { id };
};

export { getUser };
