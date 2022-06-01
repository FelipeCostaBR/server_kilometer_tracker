/* eslint-disable import/no-unresolved */
import { Response, Router } from 'express';
import CreateSessionService from '../services/CreateSessionService';

const sessionsRouter = Router();

sessionsRouter.get('/', async (_, response: Response) => {
  response.json(true);
});

sessionsRouter.post('/', async (request, response) => {
  const { email, date_birth } = request.body;
  const authenticateUser = new CreateSessionService();

  const { user, token } = await authenticateUser.execute({
    email,
    date_birth,
  });

  return response.json({ user, token });
});

export default sessionsRouter;
