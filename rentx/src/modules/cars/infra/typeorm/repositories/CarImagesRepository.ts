import { getRepository, Repository } from "typeorm";

import { ICarImagesRepository } from "@modules/cars/repositories/ICarImagesRepository";

import { CarImage } from "../entities/CarImage";

class CarImagesRepository implements ICarImagesRepository {
  private repository: Repository<CarImage>;

  constructor() {
    this.repository = getRepository(CarImage);
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.repository.create({
      car_id,
      image_name,
    });

    return this.repository.save(carImage);
  }
}

export { CarImagesRepository };
