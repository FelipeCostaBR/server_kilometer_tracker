import { getRepository, UpdateResult } from 'typeorm';
// import { hash } from 'bcryptjs';
import User from '../../database/entities/User';
import AppError from '../../errors/AppError';

interface IRequest {
  name: string;
  email: string;
  date_birth: string;
}
class UpdateUserService {
  public async execute(id: string, userData: IRequest): Promise<UpdateResult> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new AppError('user does not exist')
    }

    const updateResult = usersRepository.update(id, userData)

    return updateResult
  }
}

export default UpdateUserService
