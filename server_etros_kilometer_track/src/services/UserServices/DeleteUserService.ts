import { DeleteResult, getRepository } from 'typeorm';
// import { hash } from 'bcryptjs';
import User from '../../models/User';
import AppError from '../../errors/AppError';

class DeleteUserService {
    public async execute(id: string): Promise<DeleteResult> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({
            where: { id },
        });

        if (!user) {
            throw new AppError('Not able to delete, try again.');
        }

        const deleteResult = await usersRepository.delete(id);

        return deleteResult;
    }
}

export default DeleteUserService;
