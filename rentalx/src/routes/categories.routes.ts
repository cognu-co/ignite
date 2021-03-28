import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const CategoryAlreadyExists = categoriesRepository.findByName(name);
  if (CategoryAlreadyExists) {
    return response.status(400).json({ error: "Category already exists" });
  }
  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (_request, response) => {
  const list = categoriesRepository.list();

  return response.status(201).json({ list });
});

export { categoriesRoutes };
