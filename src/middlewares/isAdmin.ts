import { Request, Response, NextFunction } from 'express';

import AppError from '../errors/AppError';
import { UserRepository } from '../repositories/users/UserRepository';


export default async function isAdmin(
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  const usersRepository = new UserRepository();

  const user = await usersRepository.find(request.user.user_id)

  if (user?.name !== process.env.ADMINNAME && user?.email !== process.env.ADMINEMAIL) {
    throw new AppError('Access denied', 403);
  }

  return next()
}
