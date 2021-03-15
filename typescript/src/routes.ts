import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(_request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    duration: 10,
    educator: "elias@allex",
  });

  return response.json();
}

// export default routes;
