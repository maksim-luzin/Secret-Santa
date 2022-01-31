import { createToken } from './../../helpers/tokenHelper';
import { userRepository, gameRepository } from '../../data/repositories';
import { ICreateUser } from '../../common/interfaces';

const register = async (userData: ICreateUser) => {
  const id = (await userRepository.create({
    ...userData,
  })) as number;

  const gameId = await gameRepository.getGameId();

  return {
    id,
    token: createToken(id, gameId),
  };
};

export { register };
