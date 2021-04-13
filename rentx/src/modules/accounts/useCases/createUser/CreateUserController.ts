import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const { name, password, email, driver_license } = request.body;

    await createUserUseCase.execute({
      name,
      password,
      email,
      driver_license,
    });

    return response.status(201).json();
  }
}

export { CreateUserController };
