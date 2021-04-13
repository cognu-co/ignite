import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    /**
     * - User exists
     * - User password is correct
     * - Generate token
     */

    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new Error(`Email or password incorrect 456`);
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error(`Email or password incorrect 346`);
    }

    const token = sign({}, "5d1e38bc9ff246383c727690ec1888ab", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
