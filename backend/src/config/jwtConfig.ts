import { gameRepository } from '../data/repositories/game';

export const secret = String(gameRepository.getGameId());
export const expiresAccessToken = '1 day';
