import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepository: ICarsRepository;

describe("Car specifications", () => {
  beforeEach(() => {
    carsRepository = new CarsRepository();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepository
    );
  });

  it("should be able to create a specification", () => {
    const spec = createCarSpecificationUseCase.execute();

    expect(spec).toBeInstanceOf(CarsRepository);
  });
});
