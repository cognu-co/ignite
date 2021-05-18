import { NextFunction, Response, Request } from "express";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

async function ensureIsAdmin(
  request: Request,
  _response: Response,
  next: NextFunction
): Promise<void> {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);
  if (!user.isAdmin) {
    throw new AppError("User is not admin");
  }

  return next();
}

export { ensureIsAdmin };
