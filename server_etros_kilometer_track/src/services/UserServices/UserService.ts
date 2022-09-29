import { User } from '../../entities/User';
import { AppError } from '../../errors/AppError';
import { IUserRepository } from '../../repositories/users/IUserRepository';

interface IRequest {
  name: string;
  email: string;
  date_birth: string;
  phone: number;
}

export class UserService {
  constructor(private userRepository: IUserRepository) { }

  async create({ name, email, date_birth, phone }: IRequest): Promise<User> {
    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new AppError('Email address already exist', 422);
    }

    const new_user = await this.userRepository.create({
      name,
      email,
      date_birth,
      phone
    });

    return new_user
  }

  async index(): Promise<User[]> {
    const users = await this.userRepository.index()

    return users;
  }

  async show(id: string): Promise<User> {
    const user = await this.userRepository.find(id)
    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }

  async update(id: string, userData: IRequest): Promise<User> {
    const user = await this.userRepository.find(id)

    if (!user) {
      throw new AppError('User not found. not able to update');
    }

    const user_updated = await this.userRepository.update({ ...user, ...userData })

    return user_updated;
  }

  async delete(id: string): Promise<void> {
    const user = await this.userRepository.find(id)

    if (!user) {
      throw new AppError('User not found. Not able to delete');
    }

    await this.userRepository.delete(id)
  }

}
