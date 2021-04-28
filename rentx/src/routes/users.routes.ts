import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
usersRoutes.post("/", createUserController.handle);

const updateUserAvatarController = new UpdateUserAvatarController();
usersRoutes.patch("/avatar", updateUserAvatarController.handle);

export { usersRoutes };
