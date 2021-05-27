import { CarImage } from "../infra/typeorm/entities/CarImage";

interface ICarImagesRepository {
  create(car_id: string, imageName: string): Promise<CarImage>;
}

export { ICarImagesRepository };
