/* eslint-disable @typescript-eslint/no-loop-func */
import { userRepository } from '../../data/repositories/user';
import { IRequest } from '../../common/interfaces';
import { SocketEvents } from '../../common/enums';

const shuffle = async (req: IRequest) => {
  await userRepository.updateById(req.user.id as number, { ready: true });

  const numberReadyUsers = await userRepository.getNumberReadyUsers();
  const numberUsers = await userRepository.getLastId();
  if (numberUsers < 3 || numberReadyUsers < numberUsers) return;

  for (let currentId = 1; currentId <= numberUsers; currentId++) {
    const santaId =
      currentId + 2 <= numberUsers
        ? currentId + 2
        : currentId + 2 - numberUsers;
    await userRepository.updateById(currentId, { santaId });
  }
  req.io.emit(SocketEvents.PLAY);
  return;
};

export { shuffle };
