import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  id: string;
}

@injectable()
class DevolutionRentalUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute({ id }: IRequest): Promise<Rental> {
    const minimumDaily = 1;

    const rental = await this.rentalsRepository.findById(id);
    const car = await this.carsRepository.findById(rental.car_id);
    if (!rental) {
      throw new AppError("Rental do not exist");
    }

    const dateNow = this.dateProvider.currentDate();

    /**
     * verifica quantos dias o aluguel ficou em aberto,
     * se nao demorou menos de 24 horas, vai ser cobrado apenas 1 dia
     */
    let daily = this.dateProvider.compareInDays(rental.start_date, dateNow);
    if (daily <= 0) {
      daily = minimumDaily;
    }

    /**
     * verificar se atrasou o dia de retorno do aluguel,
     * e aplicar multa sobre os dias atrasados,
     * depois calcula o total a ser pago
     */
    const delay = this.dateProvider.compareInDays(
      dateNow,
      rental.expected_return_date
    );
    let total = 0;
    if (delay > 0) {
      const calculate_fine = delay * car.fine_amount;
      total = calculate_fine;
    }
    total += daily * car.daily_rate;

    rental.end_date = dateNow;
    rental.total = total;

    await this.rentalsRepository.create(rental);
    await this.carsRepository.updateAvailable(car.id, true);

    return rental;
  }
}
export { DevolutionRentalUseCase };
