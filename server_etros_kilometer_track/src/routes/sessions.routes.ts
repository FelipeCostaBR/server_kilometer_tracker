/* eslint-disable import/no-unresolved */
import { Request, Response, Router } from 'express';
import { CreateSessionController } from '../controllers/CreateSessionController';

const sessionsRouter = Router();
const createSessionController = new CreateSessionController();

sessionsRouter.get('/', (_, response: Response) => {
  response.json(true);
});

sessionsRouter.post('/', (request: Request, response: Response) => {
  createSessionController.create(request, response)
});

export default sessionsRouter;
