import { Repository, QueryRunner, Entity, EntityManager } from 'typeorm'
import { AppDataSource } from '../../database/data-source.config'
import { UsersVehicles } from '../../entities/UsersVehicles';
import { Vehicle } from '../../entities/Vehicle';
import { AppError } from '../../errors/AppError';
import vehiclesRouter from '../../routes/vehicles.routes';
import { IVehicleDTO, IVehicleRepository } from './IVehicleRepository'

class VehicleRepository implements IVehicleRepository {

  private vehicle_repository: Repository<Vehicle>
  private users_vehicles_repository: Repository<UsersVehicles>
  // private queryRunner: QueryRunner

  constructor() {
    this.vehicle_repository = AppDataSource.getRepository(Vehicle)
    this.users_vehicles_repository = AppDataSource.getRepository(UsersVehicles)
    // this.queryRunner = AppDataSource.createQueryRunner()
  }

  async index(): Promise<Vehicle[]> {
    const vehicles = await this.vehicle_repository.find()

    return vehicles;
  }

  async create(vehicle: IVehicleDTO): Promise<Vehicle> {
    const new_vehicle = this.vehicle_repository.create({ ...vehicle })

    return await this.vehicle_repository.save(new_vehicle)
  }

  async update(vehicleData: IVehicleDTO): Promise<Vehicle> {
    const user_updated = await this.vehicle_repository.save(vehicleData)
    return user_updated;
  }

  async updateKilometer(vehicle: Vehicle, user_id: string, vehicleData: IVehicleDTO): Promise<Vehicle> {
    // stablish real database connection using queryRunner
    const queryRunner = AppDataSource.createQueryRunner()

    const new_user_vehicle_history = this.users_vehicles_repository.create({ user_id, vehicle_id: vehicle.id, current_kilometers: vehicleData.current_kilometers })
    const vehicleUpdated = this.vehicle_repository.create({ user_id, ...vehicle, ...vehicleData })

    await queryRunner.startTransaction()
    try {
      await queryRunner.manager.save(new_user_vehicle_history)
      await queryRunner.manager.save(vehicleUpdated)

      await queryRunner.commitTransaction()
    } catch (error) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction()
      throw new AppError(error.message);
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release()
    }

    return vehicleUpdated;
  }

  async delete(id: string): Promise<void> {
    this.vehicle_repository.softDelete(id)
  }

  async find(id: string): Promise<Vehicle> {
    const vehicle = await this.vehicle_repository.findOneBy({ id: id })

    return vehicle;
  }

  async findByRegistration(registration: string): Promise<Vehicle> {
    const vehicle = await this.vehicle_repository.findOneBy({ registration })

    return vehicle;
  }
}

export { VehicleRepository };


