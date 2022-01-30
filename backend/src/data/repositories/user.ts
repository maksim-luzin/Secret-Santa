/* eslint-disable @typescript-eslint/no-shadow */
import { ICreateUser, IUser } from '../../common/interfaces';
import { database } from '../connection';

type TDatabase = typeof database;

class UserRepository {
  db: TDatabase;

  constructor(database: TDatabase) {
    this.db = database;
  }

  getAll() {
    return new Promise((resolve: (value: IUser[]) => void, reject) =>
      this.db.all('SELECT * FROM users', (err, users: IUser[]) => {
        if (err) reject(new Error(''));
        resolve(users);
      })
    );
  }

  getLastId() {
    return new Promise((resolve: (value: number) => void, reject) =>
      this.db.get('SELECT COUNT(*) AS lastId FROM users', (err, { lastId }) => {
        if (err) reject(new Error(''));
        return resolve(lastId);
      })
    );
  }

  getNumberReadyUsers() {
    return new Promise((resolve: (value: number) => void, reject) =>
      this.db.get(
        'SELECT COUNT(*) AS userReady FROM users WHERE ready=true',
        (err, { userReady }) => {
          if (err) reject(new Error(''));
          return resolve(userReady);
        }
      )
    );
  }

  getByName(firstName: string) {
    return new Promise((resolve: (value: IUser[]) => void, reject) =>
      this.db.all(
        'SELECT * FROM users WHERE firstName = ?',
        firstName,
        (err, users: IUser[]) => {
          if (err) reject(new Error(''));
          resolve(users);
        }
      )
    );
  }

  getById(id: number) {
    return new Promise((resolve: (value: IUser) => void, reject) =>
      this.db.get(
        'SELECT * FROM users WHERE id = ?',
        id,
        (err, user: IUser) => {
          if (err) reject(new Error(''));
          resolve(user);
        }
      )
    );
  }

  async create({ firstName, lastName, wishList }: ICreateUser) {
    const lastId = await this.getLastId();
    const insert = this.db.prepare(
      `INSERT INTO users (id, firstName, lastName, wishList, ready) VALUES(?, ?, ?, ?, ?)`
    );
    return new Promise((resolve: (value: number) => void) =>
      insert.run(lastId + 1, firstName, lastName, wishList, false, () =>
        insert.finalize(() => resolve(lastId + 1))
      )
    ).catch(() => new Error('User is not created'));
  }

  async updateById<D>(id: number, data: D) {
    const key = Object.keys(data)[0];
    const value = Object.values(data)[0];

    return new Promise((resolve: (value: void) => void) =>
      this.db.get(`UPDATE users SET ${key} = ? WHERE id = ?`, [value, id], () =>
        resolve()
      )
    ).catch(() => new Error('User is not created'));
  }

  async delete() {
    return new Promise((resolve: (value: void) => void) =>
      this.db.run('DELETE * FROM users', () => resolve())
    ).catch(() => new Error('Table is not deleted'));
  }
}

const userRepository = new UserRepository(database);

export { userRepository };
