import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { UserTokens } from "@modules/accounts/infra/typeorm/entities/UserTokens";

import { IUsersTokensRepository } from "../IUsersTokensRepository";

class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
  private repository: UserTokens[];

  constructor() {
    this.repository = [];
  }

  async create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = new UserTokens();
    Object.assign(userToken, {
      user_id,
      expires_date,
      refresh_token,
    });

    this.repository.push(userToken);

    return userToken;
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens> {
    const userToken = this.repository.find(
      (user) => user.user_id === user_id && user.refresh_token === refresh_token
    );

    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    const userTokenIndex = this.repository.findIndex(
      (element) => element.id === id
    );
    this.repository.splice(0, userTokenIndex);
  }

  async findByRefreshToken(token: string): Promise<UserTokens> {
    const userToken = this.repository.find(
      (user) => user.refresh_token === token
    );

    return userToken;
  }
}

export { UsersTokensRepositoryInMemory };
