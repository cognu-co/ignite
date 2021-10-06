import "reflect-metadata";
import "express-async-errors";

import "dotenv/config";

import express, { NextFunction, Response, Request } from "express";
import swaggerUi from "swagger-ui-express";

import { AppError } from "@shared/errors/AppError";
import createConnection from "@shared/infra/typeorm"; // database_

import swaggerFile from "../../../swagger.json";
import { routes } from "./routes";

import "@shared/container";

createConnection();
const app = express();
// MIDDLEWARES
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use(
  (err: Error, _request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal Server Error - ${err.message}`,
    });
  }
);

export { app };
