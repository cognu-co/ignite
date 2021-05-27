import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarController } from "@modules/cars/useCases/listAvailableCar/ListAvailableCarController";
import { UploadCarImageController } from "@modules/cars/useCases/uploadCarImage/UploadCarImageController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const createCarSpecificationController = new CreateCarSpecificationController();
const listAvailableCarController = new ListAvailableCarController();
const uploadCarImageController = new UploadCarImageController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureIsAdmin,
  createCarController.handle
);

carsRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  createCarSpecificationController.handle
);

carsRoutes.post(
  "/upload/:id",
  ensureAuthenticated,
  uploadCarImageController.handle
);

carsRoutes.get("/available", listAvailableCarController.handle);

export { carsRoutes };
