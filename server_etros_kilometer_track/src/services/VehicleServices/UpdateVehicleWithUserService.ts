import { getRepository } from 'typeorm';

import Vehicle from '../../database/entities/Vehicle';
import AppError from '../../errors/AppError';

class UpdateVehicleWithUserService {
  public async execute(
    id: string,
    user_id: string,
  ): Promise<Vehicle> {
    const vehicleRepository = getRepository(Vehicle);

    const vehicle = await vehicleRepository.findOne({
      where: { id },
    });

    if (!vehicle) {
      throw new AppError('Vehicle does not exist');
    }

    const vehicleWithUser = { ...vehicle, user_id }

    vehicleRepository.update(id, vehicleWithUser);

    return vehicleWithUser;
  }
}

export default UpdateVehicleWithUserService;
