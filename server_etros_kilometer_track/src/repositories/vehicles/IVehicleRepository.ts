import { Vehicle } from '../../entities/Vehicle'

export interface IVehicleDTO {
  vehicle: string
  model: string
  year: string
  transmission: string
  registration: string
  current_kilometers?: number
  next_km_to_service?: number
  next_service?: Date
  user_id?: string
}

export interface IVehicleRepository {
  create(vehicle: IVehicleDTO): Promise<Vehicle>
  update(vehicle: Vehicle, vehicleData: IVehicleDTO): Promise<Vehicle>
  delete(id: string): Promise<void>
  index(): Promise<Vehicle[]>
  find(id: string): Promise<Vehicle>
  findByRegistration(registration: string): Promise<Vehicle>
}

