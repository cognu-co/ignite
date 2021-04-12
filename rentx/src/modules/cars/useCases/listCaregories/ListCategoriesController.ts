import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const categoriesRepository = container.resolve(ListCategoriesUseCase);

    const list = await categoriesRepository.execute();

    return response.status(201).json({ list });
  }
}

export { ListCategoriesController };
