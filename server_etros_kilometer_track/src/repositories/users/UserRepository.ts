import { Repository, UpdateResult } from 'typeorm'
import { AppDataSource } from '../../database/data-source.config'
import { User } from '../../entities/User';
import { IUserRepository, IUserDTO } from './IUserRepository'

class UserRepository implements IUserRepository {

  private user_repository: Repository<User>

  constructor() {
    this.user_repository = AppDataSource.getRepository(User)
  }

  async index(): Promise<User[]> {
    const users = await this.user_repository.find()

    return users;
  }

  async create(user: IUserDTO): Promise<User> {

    const new_user = this.user_repository.create({ ...user })

    return await this.user_repository.save(new_user)

  }

  async update(userData: IUserDTO): Promise<User> {
    const user_updated = await this.user_repository.save(userData)
    return user_updated;
  }

  async delete(id: string): Promise<void> {
    this.user_repository.softDelete(id)
  }

  async find(id: string): Promise<User> {
    const user = await this.user_repository.findOneBy({ id: id })

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.user_repository.findOneBy({ email })

    return user;
  }
}

export { UserRepository };


