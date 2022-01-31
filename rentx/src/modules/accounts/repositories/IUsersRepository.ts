import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  find(
    page?: number,
    per_page?: number
  ): Promise<{ total: number; users: User[] }>;
}

export { IUsersRepository };
