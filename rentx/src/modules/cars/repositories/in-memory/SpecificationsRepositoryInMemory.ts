import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
  private repository: Specification[];

  constructor() {
    this.repository = [];
  }

  list(): Promise<Specification[]> {
    throw new Error("Method not implemented.");
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.repository.push(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    return this.repository.find((specification) => specification.name === name);
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = this.repository.filter((specification) =>
      ids.includes(specification.id)
    );

    return specifications;
  }
}

export { SpecificationsRepositoryInMemory };
