import { getRepository } from 'typeorm';
import User from '../../database/entities/User';
import AppError from '../../errors/AppError';

interface IRequest {
  name: string;
  email: string;
  date_birth: string;
}

class CreateUserService {
  public async execute({ name, email, date_birth }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);
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

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
