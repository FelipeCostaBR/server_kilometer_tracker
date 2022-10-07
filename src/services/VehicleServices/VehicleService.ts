import { throws } from 'assert';
import { Vehicle } from '../../entities/Vehicle';
import AppError from '../../errors/AppError';
import { IVehicleRepository, IVehicleDTO } from '../../repositories/vehicles/IVehicleRepository';

export class VehicleService {
  constructor(private vehicleRepository: IVehicleRepository) { }

  async create(vehicleData: IVehicleDTO): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findByRegistration(vehicleData.registration);

    if (vehicle) {
      throw new AppError('Vehicle already exist with this registration', 422);
    }

    const new_vehicle = await this.vehicleRepository.create(vehicleData);
    return new_vehicle
  }

  async index(): Promise<Vehicle[]> {
    const vehicles = await this.vehicleRepository.index()

    return vehicles;
  }

  async show(id: string): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.find(id)
    if (!vehicle) {
      throw new AppError('vehicle not found');
    }

    return vehicle;
  }

  async findByUserId(user_id: string): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findByUserId(user_id)
    if (!vehicle) {
      throw new AppError('vehicle not found');
    }

    return vehicle;
  }

  async update(id: string, vehicleData: IVehicleDTO): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.find(id)

    if (!vehicle) {
      throw new AppError('vehicle not found. not able to update');
    }

    const vehicle_updated = await this.vehicleRepository.update({ ...vehicle, ...vehicleData })
    return vehicle_updated
  }

  async updateKilometer(user_id: string, current_kilometers: number): Promise<Vehicle | AppError> {
    const vehicle = await this.vehicleRepository.findByUserId(user_id)

    if (!vehicle) {
      throw new Error("Message error");

    }

    if (current_kilometers <= vehicle.current_kilometers) {
      throw new AppError("The kilometer can not be lower the previous one")

    }

    const vehicle_updated = await this.vehicleRepository.updateKilometer(vehicle, user_id, current_kilometers)
    return vehicle_updated
  }

  async delete(id: string): Promise<void> {
    const vehicle = await this.vehicleRepository.find(id)

    if (!vehicle) {
      throw new AppError('vehicle not found. Not able to delete');
    }

    await this.vehicleRepository.delete(id)
  }
}
