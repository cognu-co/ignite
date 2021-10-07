import { Request, Response } from "express";
import { container } from "tsyringe";

import { ProfileUserUseCase } from "./ProfileUserUseCase";

class ProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const profileUserUseCase = container.resolve(ProfileUserUseCase);

    const { id: user_id } = request.user;

    const user = await profileUserUseCase.execute(user_id);

    return response.status(200).json(user);
  }
}

export { ProfileUserController };
