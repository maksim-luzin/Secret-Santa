/* eslint-disable max-len */
import { database } from '../connection';

database.run(
  'CREATE TABLE IF NOT EXISTS users (id INT, firstName TEXT, lastName TEXT, wishList ARRAY, ready BOOLEAN, santaId INT)'
);

const createGameTable = async () => {
  const insert = database.prepare(
    'CREATE TABLE IF NOT EXISTS game (id INT, gameId INT)'
  );
  return new Promise((resolve: (value: void) => void) =>
    insert.run(() => insert.finalize(() => resolve()))
  ).catch(() => new Error('User is not created'));
};

const createGame = async () => {
  const insert = database.prepare(`INSERT INTO game (id, gameId) VALUES(?, ?)`);
  return new Promise((resolve: (value: void) => void) =>
    insert.run(1, 50, () => insert.finalize(() => resolve()))
  ).catch(() => new Error('User is not created'));
};

const game = async () => {
  await createGameTable();
  await createGame();
};

game();
