import "reflect-metadata";
import express, { NextFunction, Response, Request } from "express";
import swaggerUi from "swagger-ui-express";

import { routes } from "./routes";
import swaggerFile from "./swagger.json";

import "./shared/container";

import "./database";
import { AppError } from "./errors/AppError";

const app = express();
// MIDDLEWARES
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use(
  (err: Error, _request: Request, response: Response, _next: NextFunction) => {
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

app.listen(3333, () => console.log("Server is running on port 3333"));

export default app;
