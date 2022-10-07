import { Router, Request, Response, NextFunction } from 'express';

// import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import { VehicleController } from '../controllers/VehicleController';


const vehiclesRouter = Router();
const vehicleController = new VehicleController();

// vehiclesRouter.use(ensureAuthenticated)
vehiclesRouter.get('/', (request: Request, response: Response) => {
  vehicleController.index(request, response)
});

vehiclesRouter.get('/:id', (request: Request, response: Response) => {
  vehicleController.show(request, response)
});

vehiclesRouter.get('/user/:user_id', (request: Request, response: Response) => {
  vehicleController.showByUserId(request, response)
});

vehiclesRouter.post('/', (request: Request, response: Response) => {
  vehicleController.create(request, response)
});

vehiclesRouter.delete('/:id', (request: Request, response: Response) => {
  vehicleController.delete(request, response)
});

vehiclesRouter.put('/:id', (request: Request, response: Response, next: NextFunction) => {
  vehicleController.update(request, response)
});

vehiclesRouter.put('/user/:user_id', async (request: Request, response: Response, next: NextFunction) => {
  await vehicleController.updateKilometer(request, response)
});

export default vehiclesRouter;
