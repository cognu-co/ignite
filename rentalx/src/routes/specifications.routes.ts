import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) =>
  createSpecificationController.handle(request, response)
);

specificationsRoutes.get("/", (request, response) =>
  listSpecificationsController.handle(request, response)
);

export { specificationsRoutes };
