import { inject, injectable } from "tsyringe";

import { IUserResponseDTO } from "@modules/accounts/dtos/IUserResponseDTO";
import { UserMap } from "@modules/accounts/mapper/UserMap";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

@injectable()
class UserListUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<IUserResponseDTO[]> {
    const users = await this.usersRepository.find();

    const parsedUsersData = users.map((user) => UserMap.toDTO(user));

    return parsedUsersData;
  }
}

export { UserListUseCase };
