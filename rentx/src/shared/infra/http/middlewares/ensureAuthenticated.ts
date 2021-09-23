import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "@config/auth";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

/**
 * verifica o token que esta sendo passado nas requisições
 *
 * - has token?
 * - has two parts?
 * - form?: Bearer "Token"
 *   - ex: Bearer 20935g3249875g34v578945g934875
 */
export async function ensureAuthenticated(
  request: Request,
  _response: Response,
  next: NextFunction
): Promise<void> {
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
    const { sub: user_id } = verify(token, auth.secret_token) as IPayload;

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AppError(error.message, 401);
  }
}
