/* eslint-disable @typescript-eslint/no-loop-func */
import { userRepository } from '../../data/repositories/user';
import { gameRepository } from '../../data/repositories/game';
import { IUser } from '../../common/interfaces';

const wish = async ({ id }: IUser) => {
  const { santaId } = await userRepository.getById(id);
  const { firstName, lastName, wishList } = await userRepository.getById(
    santaId
  );
  await userRepository.updateById(id, { ready: false });
  const numberReadyUsers = await userRepository.getNumberReadyUsers();

  if (!numberReadyUsers) {
    await userRepository.delete();
    await gameRepository.update();
  }
  return { firstName, lastName, wishList };
};

export { wish };
