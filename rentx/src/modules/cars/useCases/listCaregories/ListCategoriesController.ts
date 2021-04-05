import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private categoriesRepository: ListCategoriesUseCase) {}

  handle(_request: Request, response: Response): Response {
    const list = this.categoriesRepository.execute();

    return response.status(201).json({ list });
  }
}

export { ListCategoriesController };
