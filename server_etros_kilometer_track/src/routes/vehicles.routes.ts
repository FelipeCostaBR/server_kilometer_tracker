import { Router, Request, Response } from 'express';

import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import isAdmin from '../middlewares/isAdmin';

import Vehicle from '../database/entities/Vehicle';
import CreateVehicleService from '../services/VehicleServices/CreateVehicleService';
import DeleteVehicleService from '../services/VehicleServices/DeleteVehicleService';
import UpdateVehicleWithUserService from '../services/VehicleServices/UpdateVehicleWithUserService';

const vehiclesRouter = Router();

// vehiclesRouter.use(ensureAuthenticated);

vehiclesRouter.get('/', async (_, response: Response) => {
  const vehiclesRepository = getRepository(Vehicle);
  const vehicle = await vehiclesRepository.find();

  response.json(vehicle);
});

vehiclesRouter.post('/', isAdmin, async (request: Request, response: Response) => {
  const vehicleData = request.body;
  const createVehicle = new CreateVehicleService();

  const newVehicle = await createVehicle.execute(vehicleData)

  return response.json(newVehicle);
});

vehiclesRouter.delete('/:id', isAdmin, async (request: Request, response: Response) => {
  const { id } = request.params;
  const deleteVehicleService = new DeleteVehicleService();

  const vehicle = await deleteVehicleService.execute(id)

  return response.json(vehicle);
});

vehiclesRouter.put('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const { user_id } = request.user;

  const updateVehicleWithUserService = new UpdateVehicleWithUserService();

  const vehicle = await updateVehicleWithUserService.execute(id, user_id)

  return response.json(vehicle);
});

export default vehiclesRouter;
