import { Request } from 'express';
import { Server } from 'socket.io';
import { IUser } from './user';

interface IRequest extends Request {
  user: IUser;
  io: Server;
}

export type { IRequest };
