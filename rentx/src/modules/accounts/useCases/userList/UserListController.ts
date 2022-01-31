import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserListUseCase } from "./UserListUseCase";

class UserListController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const userListUseCase = container.resolve(UserListUseCase);

    const users = await userListUseCase.execute();

    return response.json(users);
  }
}

export { UserListController };
