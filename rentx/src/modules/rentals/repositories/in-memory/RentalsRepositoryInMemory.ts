import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";

import { IRentalsRepository } from "../IRentalsRepository";

class RentalsRepositoryInMemory implements IRentalsRepository {
  private repository: Rental[];

  constructor() {
    this.repository = [];
  }

  async create({
    car_id,
    expected_return_date,
    user_id,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = new Rental();

    Object.assign(rental, {
      car_id,
      expected_return_date,
      user_id,
      start_date: new Date(),
      created_at: new Date(),
    });
    this.repository.push(rental);

    return rental;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.repository.find(
      (rental) => rental.user_id === user_id && !rental.end_date
    );
  }
  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return this.repository.find(
      (rental) => rental.car_id === car_id && !rental.end_date
    );
  }

  async findById(id: string): Promise<Rental> {
    return this.repository.find((rental) => rental.id === id);
  }
}

export { RentalsRepositoryInMemory };
