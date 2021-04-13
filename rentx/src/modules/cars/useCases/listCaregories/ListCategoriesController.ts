import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(_request: Request, response: Response): Promise<Response> {
    try {
      const categoriesRepository = container.resolve(ListCategoriesUseCase);

      const list = await categoriesRepository.execute();

      return response.status(201).json({ list });
    } catch (err) {
      return response.status(401).json({ error: err.message });
    }
  }
}

export { ListCategoriesController };
