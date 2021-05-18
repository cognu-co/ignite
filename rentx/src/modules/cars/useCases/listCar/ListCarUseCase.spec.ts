import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarUseCase } from "./ListCarUseCase";

let carsRepositoryInMemory: ICarsRepository;
let listCarUseCase: ListCarUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarUseCase = new ListCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const cars = await listCarUseCase.execute();

    expect(cars.length).toBe(1);
  });
});
