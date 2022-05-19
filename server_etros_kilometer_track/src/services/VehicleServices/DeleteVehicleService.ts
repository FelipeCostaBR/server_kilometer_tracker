import { DeleteResult, getRepository, IsNull } from 'typeorm';
import Vehicle from '../../database/entities/Vehicle';
import AppError from '../../errors/AppError';

class DeleteVehicleService {
  public async execute(id: string): Promise<DeleteResult> {
    const vehiclesRepository = getRepository(Vehicle);

    const vehicle = await vehiclesRepository.findOne({
      where: {
        user_id: IsNull(),
        id,
      },
    });

    if (!vehicle) {
      throw new AppError(
        'Error to delete. This vehicle is currently rented',
      );
    }

    const deleteResult = vehiclesRepository.delete(id);

    return deleteResult;
  }
}

export default DeleteVehicleService;
