import { Server } from 'socket.io';
import { Request, Response, NextFunction } from 'express';

const socketInjector =
  (io: Server) => (req: Request, res: Response, next: NextFunction) => {
    Object.assign(req, { io });
    next();
  };

export { socketInjector };
