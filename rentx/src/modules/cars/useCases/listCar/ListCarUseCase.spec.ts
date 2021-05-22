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
    const car = await carsRepositoryInMemory.create({
      name: "car1",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    const cars = await listCarUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const cars = await listCarUseCase.execute();

    expect(cars).toEqual([]);
  });
});
