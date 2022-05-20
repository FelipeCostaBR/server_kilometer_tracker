import { EntityOptions, getRepository } from 'typeorm';
import User from '../../database/entities/User';

import Vehicle from '../../database/entities/Vehicle';
import AppError from '../../errors/AppError';

import isUserAdmin from '../../helper/isAdmin';

interface IVehicle extends EntityOptions {
  user_id: string;
  vehicle: string;
  model: string;
  year: string;
  transmission: string;
  registration: string;
  current_kilometers: number;
  next_km_to_service: number;
  next_service: Date;
}

class UpdateVehicleService {
  public async execute(
    id: string,
    user_id: string,
    vehicle_details_to_update: IVehicle,
  ): Promise<IVehicle> {
    const vehicleRepository = getRepository(Vehicle);
    const userRepository = getRepository(User);

    const vehicle = await vehicleRepository.findOne({ where: { id } });
    const user = await userRepository.findOne({ where: { id: user_id } });

    if (!vehicle) {
      throw new AppError('Vehicle does not exist');
    }

    if (!user) {
      throw new AppError('user does not exist');
    }

    const new_vehicle_info = isUserAdmin(user) ? { ...vehicle_details_to_update } : { ...vehicle, user_id }

    vehicleRepository.update(id, new_vehicle_info);

    return new_vehicle_info;
  }
}

export default UpdateVehicleService;
