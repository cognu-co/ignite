import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCaregories";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./temp",
});

categoriesRoutes.post("/", (request, response) =>
  createCategoryController.handle(request, response)
);

categoriesRoutes.get("/", (request, response) =>
  listCategoriesController.handle(request, response)
);

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  importCategoryController.handle(request, response);

  return response.send();
});

export { categoriesRoutes };
