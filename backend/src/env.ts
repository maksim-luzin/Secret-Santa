import * as dotenv from 'dotenv';
import { getOsEnv } from './helpers/pathHelper';

dotenv.config();

export const env = {
  app: {
    port: getOsEnv('PORT') || 3001,
    saltRounds: getOsEnv('SALT') || 10,
    secret: getOsEnv('SECRET') || 'yourSecret'
  },
  baseUrl: getOsEnv('BASE_URL'),
};
