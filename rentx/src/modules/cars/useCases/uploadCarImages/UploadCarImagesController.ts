import { Response, Request } from "express";
import { container } from "tsyringe";

import { UploadCarImagesUseCase } from "./UploadCarImagesUseCase";

interface IFiles {
  filename: string;
}

class UploadCarImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const uploadCarImagesUseCase = container.resolve(UploadCarImagesUseCase);

    const { id: car_id } = request.params;
    const images = request.files as IFiles[];

    const images_name = images.map((file) => file.filename);

    await uploadCarImagesUseCase.execute({ car_id, images_name });

    return response.status(201).json();
  }
}
export { UploadCarImagesController };
