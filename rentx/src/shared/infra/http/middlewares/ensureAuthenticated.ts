import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  /**
   * has token?
   *
   * has two parts?
   *
   * form?: Bearer <Token>
   *   - ex: Bearer 20935g3249875g34v578945g934875
   */

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    throw new AppError("Token error", 401);
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    throw new AppError("Token malformed", 401);
  }

  try {
    const { sub: user_id } = verify(
      token,
      "5d1e38bc9ff246383c727690ec1888ab"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("User not found", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AppError(error.message, 401);
  }
}
