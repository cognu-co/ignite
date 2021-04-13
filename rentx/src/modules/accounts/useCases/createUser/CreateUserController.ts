import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);

    try {
      const { name, password, email, username, driver_license } = request.body;

      await createUserUseCase.execute({
        name,
        password,
        email,
        username,
        driver_license,
      });

      return response.status(201).json();
    } catch (error) {
      return response.status(401).json({ Error: error.message });
    }
  }
}

export { CreateUserController };
