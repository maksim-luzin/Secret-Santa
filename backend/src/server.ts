import { createServer } from 'http';
import { readFileSync } from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import pasport from 'passport';
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

const production = process?.env?.NODE_ENV === 'production' || false;

const staticPath = production
  ? './build/client'
  : `${__dirname}/../../frontend/build`;

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(cors());
io.on('connection', socketHandlers);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pasport.initialize());
app.use(socketInjector(io));

app.use(Routes.API, authorizationMiddleware(routesWhiteList));

routes(app);

app.use((req, res, next) => {
  res.set({
    'Cache-Control': ['max-age=34164000', 'public'],
  });
  next();
});

app.use(express.static(staticPath));

app.get('*', (req, res) => {
  res.write(readFileSync(`${staticPath}/index.html`));
  res.end();
});

app.use(errorHandlerMiddleware);

server.listen(env.app.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at ${env.app.port}.`);
});

export default app;
