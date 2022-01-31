import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    password,
    email,
    driver_license,
    id,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license,
      id,
      avatar,
    });

    await this.repository.save(user);
  }

  async find(
    page = 1,
    per_page = 10
  ): Promise<{ total: number; users: User[] }> {
    /**
     * Índex de onde começa a pegar os dados na tabela.
     *
     * calcular, quando a página for 2, tem que ter registos
     * de 10 á 20, page = 3, de 20 á 30...
     */
    const pageStart = (Number(page) - 1) * Number(per_page);

    const total = await this.repository.count();

    const users = await this.repository.find({
      skip: pageStart,
      take: per_page,
    });

    return {
      total,
      users,
    };
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    return this.repository.findOne(id);
  }
}

export { UsersRepository };
