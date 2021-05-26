import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

class CreateCarSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCarSpecificationUseCase = container.resolve(
      CreateCarSpecificationUseCase
    );

    const { spec } = request.body;

    await createCarSpecificationUseCase.execute();

    return response.json();
  }
}
export { CreateCarSpecificationController };
