import { Router, Request, Response } from 'express';

import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import isAdmin from '../middlewares/isAdmin';

import User from '../database/entities/User';
import CreateUserService from '../services/UserServices/CreateUserService';
import DeleteUserService from '../services/UserServices/DeleteUserService';
import UpdateUserService from '../services/UserServices/UpdateUserService';

const usersRouter = Router();

usersRouter.get(
  '/',
  [ensureAuthenticated, isAdmin],
  async (request: Request, response: Response) => {
    const usersRepository = getRepository(User);
    const user = await usersRepository.find().catch(error => {
      throw new AppError(error);
    });

    response.json(user);
  },
);

usersRouter.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  const usersRepository = getRepository(User);
  const user = await usersRepository.findOne(id);

  response.json(user);
});

usersRouter.post('/', async (request: Request, response: Response) => {
  const userData = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute(userData).catch(error => {
    throw new AppError(error);
  });

  return response.json(user);
});

usersRouter.delete(
  '/:id',
  [ensureAuthenticated, isAdmin],
  async (request: Request, response: Response) => {
    const { id } = request.params;

    const deleteUserService = new DeleteUserService();

    const user = await deleteUserService.execute(id).catch(error => {
      throw new AppError(error);
    });
    return response.json(user);
  },
);

usersRouter.put(
  '/:id',
  [ensureAuthenticated, isAdmin],
  async (request: Request, response: Response) => {
    const { id } = request.params;
    const userData = request.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute(id, userData).catch(error => {
      throw new AppError(error);
    });

    return response.json(user);
  },
);

export default usersRouter;
