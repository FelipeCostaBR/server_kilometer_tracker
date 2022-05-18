import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import User from '../models/User';


export default async function isAdmin(
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  const usersRepository = getRepository(User);

  const user = await usersRepository.findOne({ where: { id: request.user.user_id } })

  if (user?.name !== process.env.ADMINNAME && user?.email !== process.env.ADMINEMAIL) {
    throw new AppError('Access denied', 403);
  }

  return next()
}
