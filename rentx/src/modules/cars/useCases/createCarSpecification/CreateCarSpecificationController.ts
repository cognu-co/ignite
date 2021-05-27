import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

interface IRequest {
  specifications_id: string[];
}

class CreateCarSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCarSpecificationUseCase = container.resolve(
      CreateCarSpecificationUseCase
    );

    const { id } = request.params;
    const { specifications_id } = request.body as IRequest;

    const cars = await createCarSpecificationUseCase.execute({
      car_id: id,
      specifications_id,
    });

    return response.json(cars);
  }
}
export { CreateCarSpecificationController };
