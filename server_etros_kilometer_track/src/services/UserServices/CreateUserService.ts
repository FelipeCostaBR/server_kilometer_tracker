import { getRepository } from 'typeorm';
// import { hash } from 'bcryptjs';
import User from '../../models/User';
import AppError from '../../errors/AppError';
// import UpdateVehicleService from '../VehicleServices/UpdateVehicleService';
// import Vehicle from '../../models/Vehicle';

interface IRequest {
  name: string;
  email: string;
  date_birth: string;
  // vehicle_id: string;
}

class CreateUserService {
  public async execute({ name, email, date_birth }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);
    // const vehicleRepository = getRepository(Vehicle);
    // const updateVehicleService = new UpdateVehicleService();

    // const vehicleData = await vehicleRepository.findOne({
    //     where: { vehicle_id },
    // });

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already exist');
    }

    const user = usersRepository.create({
      name,
      email,
      date_birth,
    });

    // const vehicleWithUser = { user_id: user.id, ...vehicleData };
    // updateVehicleService.execute(vehicle_id, vehicleWithUser);

    await usersRepository.save(user);

    // await vehicleRepository.save(vehicleWithUser);

    return user;
  }
}

export default CreateUserService;
