import { Request, Response } from "express";
import { User } from "../entities/User";
import { UserRepository } from '../repositories/users/UserRepository'
import { UserService } from "../services/UserServices/UserService";

const userRepository = new UserRepository();
const userServices = new UserService(userRepository);

class UserController {
  async index(_: Request, response: Response): Promise<User[] | Response> {
    try {
      const users = await userServices.index()
      return response.status(200).send(users);
    } catch (error) {
      return response.status(500).json(error.messages)
    }
  }

  async show(request: Request, response: Response): Promise<User | Response> {
    const { id } = request.params;

    try {
      const users = await userServices.show(id)
      return response.status(200).send(users);
    } catch (error) {
      return response.status(500).json(error.messages)
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    const userData = request.body;

    try {

      const new_user = await userServices.create(userData)
      return response.status(201).send(new_user)
    } catch (error) {
      return response.status(500).json(error.messages)
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      await userServices.delete(id)
      return response.status(202).send()
    } catch (error) {
      return response.status(500).json(error.messages)
    }
  }

  async update(request: Request, response: Response): Promise<User | Response> {
    const userData = request.body;
    const { id } = request.params;
    try {
      const user = await userServices.update(id, userData)
      return response.status(200).send(user)
    } catch (error) {

    }
  }
}

export { UserController };
