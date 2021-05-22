import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAvailableCarUseCase } from "./ListAvailableCarUseCase";

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

class ListAvailableCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, brand, category_id } = request.query as IRequest;

    const listAvailableCarUseCase = container.resolve(ListAvailableCarUseCase);

    const cars = await listAvailableCarUseCase.execute({
      name,
      brand,
      category_id,
    });

    return response.json(cars);
  }
}
export { ListAvailableCarController };
