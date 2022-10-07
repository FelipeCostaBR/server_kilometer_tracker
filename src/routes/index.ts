import { Router } from 'express';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';
import vehiclesRouter from './vehicles.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/vehicles', vehiclesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
