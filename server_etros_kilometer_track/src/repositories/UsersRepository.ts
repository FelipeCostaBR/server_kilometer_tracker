// import { DeleteResult, UpdateResult, getRepository, Repository } from 'typeorm';
// import User from '../models/User';

// interface IUser {
//     id: string;
//     name: string;
//     email: string;
//     date_birth: Date;
// }

// class UsersRepository {
//     private ormRepository: Repository<User>;

//     constructor() {
//         this.ormRepository = getRepository(User);
//     }

//     public async findById(id: string): Promise<User | undefined> {
//         const user = await this.ormRepository.findOne(id);

//         return user;
//     }

//     public async findByEmail(email: string): Promise<User | undefined> {
//         const user = await this.ormRepository.findOne({
//             where: { email },
//         });

//         return user;
//     }

//     public async destroy(id: string): Promise<DeleteResult> {
//         const deleteResult = await this.ormRepository.delete(id);

//         return deleteResult;
//     }

//     public async update(userData: IUser): Promise<UpdateResult> {
//         const updateResult = await this.ormRepository.update(
//             userData.id,
//             userData,
//         );

//         return updateResult;
//     }
// }

// export default UsersRepository;
