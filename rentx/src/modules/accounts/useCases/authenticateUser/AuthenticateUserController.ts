import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    try {
      const { email, password } = request.body;

      const token = await authenticateUserUseCase.execute({
        email,
        password,
      });

      // request.user = token.user;
      // request.user = token.password;
      return response.json(token);
    } catch (error) {
      return response.status(401).json({ Error: error.message });
    }
  }
}

export { AuthenticateUserController };
