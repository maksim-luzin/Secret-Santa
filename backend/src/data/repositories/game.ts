/* eslint-disable @typescript-eslint/no-shadow */
import { database } from '../connection';

type TDatabase = typeof database;

class GameRepository {
  db: TDatabase;

  constructor(database: TDatabase) {
    this.db = database;
  }

  getGameId() {
    return new Promise((resolve: (value: number) => void, reject) =>
      this.db.get(
        'SELECT * FROM game WHERE id = ?',
        1,
        (err, { gameId }: { gameId: number }) => {
          if (err) reject(new Error(''));
          resolve(gameId);
        }
      )
    );
  }

  async update() {
    const gameId = await this.getGameId();

    return new Promise((resolve: (value: void) => void) =>
      this.db.get(
        'UPDATE game SET gameId = ? WHERE id = ?',
        [gameId + 1, 1],
        () => resolve()
      )
    ).catch(() => new Error('User is not created'));
  }
}

const gameRepository = new GameRepository(database);

export { gameRepository };
