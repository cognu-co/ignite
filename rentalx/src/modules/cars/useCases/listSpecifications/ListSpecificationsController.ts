import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private specificationsUseCase: ListSpecificationsUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.body;
    const element = this.specificationsUseCase.execute(name);

    return response.json(element);
  }
}

export { ListSpecificationsController };
