import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const specificationsUseCase = container.resolve(ListSpecificationsUseCase);

    const specification = await specificationsUseCase.execute(name);

    return response.json(specification);
  }
}

export { ListSpecificationsController };
