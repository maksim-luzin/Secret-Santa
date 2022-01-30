import jwt from 'jsonwebtoken';
import { secret, expiresAccessToken } from '../config/jwtConfig';

export const createToken = (id: number, gameId: number) =>
  jwt.sign({ id, gameId }, secret, { expiresIn: expiresAccessToken });
