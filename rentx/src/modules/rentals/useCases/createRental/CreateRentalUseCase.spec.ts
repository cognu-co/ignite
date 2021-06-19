import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
  });

  it("should be able to create a new rental", async () => {
    const rental = await createRentalUseCase.execute({
      car_id: "ADF-123",
      user_id: "765432_",
      expected_return_date: new Date(),
    });

    console.log(rental);

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });
});
