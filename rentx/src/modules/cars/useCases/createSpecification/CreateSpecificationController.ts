import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    try {
      const createSpecificationUseCase = container.resolve(
        CreateSpecificationUseCase
      );
      await createSpecificationUseCase.execute({ name, description });

      return response.status(201).json();
    } catch (error) {
      return response.status(401).json({ Error: error.message });
    }
  }
}

export { CreateSpecificationController };
