import { User } from '../../entities/User'

export interface IUserDTO {
  name: string
  email: string
  date_birth: string
  phone: number
  vehicle_id?: string
}

interface IUserRepository {
  create(user: IUserDTO): Promise<User>
  update(userData: IUserDTO): Promise<User>
  delete(id: string): Promise<void>
  index(): Promise<User[]>
  find(id: string): Promise<User>
  findByEmail(email: string): Promise<User>
}

export { IUserRepository }
