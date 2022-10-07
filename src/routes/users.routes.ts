import { Router, Request, Response } from 'express';

// import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import { UserController } from '../controllers/UserController';

const usersRouter = Router();
const userController = new UserController();

usersRouter.get('/', (request: Request, response: Response) => {
  userController.index(request, response)
});

usersRouter.get('/:id', (request: Request, response: Response) => {
  userController.show(request, response)
});

usersRouter.post('/', (request: Request, response: Response) => {
  userController.create(request, response)
});

usersRouter.delete('/:id', (request: Request, response: Response) => {
  userController.delete(request, response)
});

usersRouter.put('/:id', (request: Request, response: Response) => {
  userController.update(request, response)
});

export default usersRouter;
