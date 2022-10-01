import { sign } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';
import { User } from '../entities/User';
import authConfig from '../config/auth';
import { UserRepository } from '../repositories/users/UserRepository';
import { formatDate } from '../helper/formatDate'
interface UserAuthentication {
  user: User
  token: string
}

class CreateSessionService {

  async create({ email, date_birth }): Promise<UserAuthentication> {
    const usersRepository = new UserRepository()
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email does not exist, please sign up.', 401);
    }

    if (!user.is_active) {
      throw new AppError('This account is not active., ', 401);
    }

    if (user.email !== email || user.date_birth !== formatDate(date_birth)) {
      throw new AppError('Incorrect email/date_birth combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default CreateSessionService;
