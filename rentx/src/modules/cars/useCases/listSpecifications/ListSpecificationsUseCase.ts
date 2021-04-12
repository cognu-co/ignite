import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}

  async execute(name: string): Promise<Specification> {
    const specification = await this.specificationRepository.findByName(name);

    return specification;
  }
}

export { ListSpecificationsUseCase };
