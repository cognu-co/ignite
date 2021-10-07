import { IUserResponseDTO } from "@modules/accounts/dtos/IUserResponseDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

class UserMap {
  static toDTO({
    id,
    name,
    email,
    avatar,
    driver_license,
  }: User): IUserResponseDTO {
    return { id, name, email, avatar, driver_license };
  }
}

export { UserMap };
