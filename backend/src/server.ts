import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import cors from 'cors';
import { Server } from 'socket.io';
import { env } from './env';
import routes from './api/routes';
import { errorHandlerMiddleware } from './api/middlewares/errorHandlerMiddleware';
import { routesWhiteList } from './config/routesWhiteListConfig';
import authorizationMiddleware from './api/middlewares/authorizationMiddleware';
import { socketInjector } from './api/socket/injector';
import socketHandlers from './api/socket/handlers';
import './config/passportConfig';
import { Routes } from './common/enums';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
io.on('connection', socketHandlers);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(socketInjector(io));

app.use(Routes.API, authorizationMiddleware(routesWhiteList));

routes(app);

app.use(errorHandlerMiddleware);

server.listen(env.app.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at ${env.app.port}.`);
});
