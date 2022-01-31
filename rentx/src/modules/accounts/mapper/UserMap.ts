import { classToClass } from "class-transformer";

import { IUserResponseDTO } from "@modules/accounts/dtos/IUserResponseDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

class UserMap {
  static toDTO({
    id,
    name,
    email,
    avatar,
    driver_license,
    created_at,
    avatar_url,
  }: User): IUserResponseDTO {
    const user = classToClass({
      id,
      name,
      email,
      avatar,
      driver_license,
      created_at,
      avatar_url,
    });

    return user;
  }
}

export { UserMap };
