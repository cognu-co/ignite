import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  handle(request: Request, response: Response): Response {
    const { name } = request.body;

    const specificationsUseCase = container.resolve(ListSpecificationsUseCase);

    const element = specificationsUseCase.execute(name);

    return response.json(element);
  }
}

export { ListSpecificationsController };
