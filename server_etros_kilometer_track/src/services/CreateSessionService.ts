import { getRepository } from "typeorm";
import AppError from "../errors/AppError";
import User from "../database/entities/User";
import { formatDate } from "../helper/formatDate";
import authConfig from '../config/auth';
import { sign } from "jsonwebtoken";

interface IRequest {
  email: string;
  date_birth: string;
}

class CreateSessionService {
  public async execute({ email, date_birth }: IRequest): Promise<{ user: User, token: string }> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new AppError("Email does not exist, please sign up", 401);
    }

    if (user.email !== email || formatDate(user.date_birth) !== date_birth) {
      throw new AppError('Incorrect email/date_birth combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    });

    return { user, token };
  }
}

export default CreateSessionService;
