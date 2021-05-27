import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

@injectable()
class UploadCarImageUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute(): Promise<void> {
    const img = await this.carsRepository.create({});
  }
}
export { UploadCarImageUseCase };
