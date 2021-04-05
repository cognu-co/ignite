import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute(name: string): Specification {
    const element = this.specificationRepository.findByName(name);

    return element;
  }
}

export { ListSpecificationsUseCase };
