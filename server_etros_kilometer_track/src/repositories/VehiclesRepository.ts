// import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';

// import Vehicle from '../models/Vehicle';

// interface IVehicle {
//     id: string;
//     name: string;
//     model: string;
//     year: string;
//     transmission: string;
//     registration: string;
//     last_kilometers: number;
//     current_kilometers: number;
//     last_service: Date;
//     next_service: Date;
// }

// class VehiclesRepository {
//     private ormRepository: Repository<Vehicle>;

//     constructor() {
//         this.ormRepository = getRepository(Vehicle);
//     }

//     public async findById(id: string): Promise<Vehicle | undefined> {
//         const vehicle = await this.ormRepository.findOne(id);

//         return vehicle;
//     }

//     public async findByRegistration(
//         registration: string,
//     ): Promise<Vehicle | undefined> {
//         const vehicle = await this.ormRepository.findOne({
//             where: { registration },
//         });

//         return vehicle;
//     }

//     public async create(vehicleData: IVehicle): Promise<Vehicle> {
//         const vehicle = this.ormRepository.create(vehicleData);

//         await this.ormRepository.save(vehicle);

//         return vehicle;
//     }

//     public async destroy(id: string): Promise<DeleteResult> {
//         const deleteResult = await this.ormRepository.delete(id);

//         return deleteResult;
//     }

//     public async update(vehicleData: IVehicle): Promise<UpdateResult> {
//         const updateResult = await this.ormRepository.update(
//             vehicleData.id,
//             vehicleData,
//         );

//         return updateResult;
//     }
// }

// export default VehiclesRepository;
