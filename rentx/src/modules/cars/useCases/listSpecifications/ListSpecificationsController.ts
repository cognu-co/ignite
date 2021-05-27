import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const specificationsUseCase = container.resolve(ListSpecificationsUseCase);

    const specifications = await specificationsUseCase.execute();

    return response.json(specifications);
  }
}

export { ListSpecificationsController };
