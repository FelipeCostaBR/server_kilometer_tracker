import { getRepository } from 'typeorm';
import Vehicle from '../../entities/Vehicle';
import AppError from '../../errors/AppError';

interface IRequest {
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

class CreateVehicleService {
  public async execute(vehicleData: IRequest): Promise<Vehicle> {
    const vehiclesRepository = getRepository(Vehicle);
    const { registration } = vehicleData;

    const checkVehicleExists = await vehiclesRepository.findOne({
      where: { registration },
    });

    if (checkVehicleExists) {
      throw new AppError('Vehicle already exist', 405);
    }

    const newVehicle = vehiclesRepository.create(vehicleData);

    await vehiclesRepository.save(newVehicle);

    return newVehicle;
  }
}

export default CreateVehicleService;
