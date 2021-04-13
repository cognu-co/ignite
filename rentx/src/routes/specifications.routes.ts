import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const specificationsRoutes = Router();

specificationsRoutes.use(ensureAuthenticated);
const createSpecificationController = new CreateSpecificationController();
specificationsRoutes.post("/", createSpecificationController.handle);

const listSpecificationsController = new ListSpecificationsController();
specificationsRoutes.get("/", listSpecificationsController.handle);

export { specificationsRoutes };
