import { Request, Response } from "express";
import CreateSessionService from "../services/CreateSessionService";

const createSessionServices = new CreateSessionService();

class CreateSessionController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, date_birth } = request.body;

    try {
      const new_session = await createSessionServices.create({ email, date_birth })
      return response.status(201).send(new_session)
    } catch (error) {
      return response.status(500).json(error.messages)
    }
  }
}

export { CreateSessionController };
