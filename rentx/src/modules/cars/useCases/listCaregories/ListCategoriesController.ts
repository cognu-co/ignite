import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  handle(_request: Request, response: Response): Response {
    const categoriesRepository = container.resolve(ListCategoriesUseCase);

    const list = categoriesRepository.execute();

    return response.status(201).json({ list });
  }
}

export { ListCategoriesController };
