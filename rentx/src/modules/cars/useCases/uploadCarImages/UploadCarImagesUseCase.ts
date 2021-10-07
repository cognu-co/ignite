import { inject, injectable } from "tsyringe";

import { ICarImagesRepository } from "@modules/cars/repositories/ICarImagesRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
  constructor(
    @inject("CarImagesRepository")
    private carImagesRepository: ICarImagesRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute({ car_id, images_name }: IRequest): Promise<void> {
    images_name.map(async (image) => {
      await this.storageProvider.save(image, "cars");
      await this.carImagesRepository.create(car_id, image);
    });
  }
}

export { UploadCarImagesUseCase };
