import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

// @injectable()
class CreateCarSpecificationUseCase {
  constructor(
    // @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute(): Promise<void> {
    this.carsRepository.findAvailable();
  }
}

export { CreateCarSpecificationUseCase };
