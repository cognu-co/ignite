import { request, Request, Response } from "express";
import { container } from "tsyringe";

import { UserListUseCase } from "./UserListUseCase";

class UserListController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userListUseCase = container.resolve(UserListUseCase);

    const { page } = request.query;

    const repositoryResponse = await userListUseCase.execute(Number(page));

    response.setHeader("x-total-count", Number(repositoryResponse.total));

    return response.json(repositoryResponse.users);
  }
}

export { UserListController };
