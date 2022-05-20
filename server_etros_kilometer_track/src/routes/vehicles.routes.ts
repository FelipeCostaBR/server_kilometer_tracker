import { Router, Request, Response } from 'express';

import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import isAdmin from '../middlewares/isAdmin';

import Vehicle from '../database/entities/Vehicle';
import CreateVehicleService from '../services/VehicleServices/CreateVehicleService';
import DeleteVehicleService from '../services/VehicleServices/DeleteVehicleService';
import UpdateVehicleService from '../services/VehicleServices/UpdateVehicleService';

const vehiclesRouter = Router();

vehiclesRouter.use(ensureAuthenticated);

vehiclesRouter.get('/', async (_, response: Response) => {
  const vehiclesRepository = getRepository(Vehicle);
  const vehicle = await vehiclesRepository.find();

  response.json(vehicle);
});

vehiclesRouter.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  const vehiclesRepository = getRepository(Vehicle);
  const vehicle = await vehiclesRepository.findOne(id);

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
  const vehicle_to_update = request.body;

  const updateVehicleService = new UpdateVehicleService();

  const vehicle = await updateVehicleService.execute(id, user_id, vehicle_to_update)

  return response.json(vehicle);
});

export default vehiclesRouter;
