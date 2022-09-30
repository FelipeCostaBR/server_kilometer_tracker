import { Request, Response } from "express";
import { Vehicle } from "../entities/Vehicle";
import { VehicleRepository } from '../repositories/vehicles/VehicleRepository'
import { VehicleService } from "../services/VehicleServices/VehicleService";

const vehicleRepository = new VehicleRepository();
const vehicleServices = new VehicleService(vehicleRepository);

class VehicleController {
  async index(_: Request, response: Response): Promise<Vehicle[] | Response> {
    try {
      const vehicles = await vehicleServices.index()
      return response.status(200).send(vehicles);
    } catch (error) {
      return response.status(500).json(error.messages)
    }
  }

  async show(request: Request, response: Response): Promise<Vehicle | Response> {
    const { id } = request.params;

    try {
      const vehicles = await vehicleServices.show(id)
      return response.status(200).send(vehicles);
    } catch (error) {
      return response.status(500).json(error.messages)
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    const vehicleData = request.body;
    try {
      const new_vehicle = await vehicleServices.create(vehicleData)
      return response.status(201).send(new_vehicle)
    } catch (error) {
      return response.status(500).json(error.messages)
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      await vehicleServices.delete(id)
      return response.status(202).send()
    } catch (error) {
      return response.status(500).json(error.messages)
    }
  }

  async update(request: Request, response: Response): Promise<Vehicle | Response> {
    const vehicleData = request.body;
    const { id } = request.params;

    try {
      const vehicle = await vehicleServices.update(id, vehicleData)
      return response.status(200).send(vehicle)
    } catch (error) {
      return response.status(500).json(error.messages)
    }
  }
}

export { VehicleController };