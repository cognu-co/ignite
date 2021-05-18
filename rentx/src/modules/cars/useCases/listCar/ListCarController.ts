import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCarUseCase } from "./ListCarUseCase";

class ListCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCarUseCase = container.resolve(ListCarUseCase);

    const cars = await listCarUseCase.execute();

    return response.json(cars);
  }
}
export { ListCarController };
