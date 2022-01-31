import { inject, injectable } from "tsyringe";

import { IUserResponseDTO } from "@modules/accounts/dtos/IUserResponseDTO";
import { UserMap } from "@modules/accounts/mapper/UserMap";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

interface IRepositoryResponse {
  total: number;
  users: IUserResponseDTO[];
}

@injectable()
class UserListUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(page = 1): Promise<IRepositoryResponse> {
    const usersRepositoryResponse = await this.usersRepository.find(page);

    const parsedUsersData = usersRepositoryResponse.users.map((user) =>
      UserMap.toDTO(user)
    );

    return {
      total: usersRepositoryResponse.total,
      users: parsedUsersData,
    };
  }
}

export { UserListUseCase };
