import { Express, Request, Response, Router } from "express";
import { Routes } from "../interfaces/routes.interface";
import UsersController from "../controllers/users.controller";
import validationMiddleware from "../middlewares/validation-middleware";
import { CreateUserValidator } from "../validations/users.validation";

class UsersRouter implements Routes {
  public path = "/users";
  public router = Router();
  public usersController = new UsersController();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.post(
      `${this.path}/create`,
      validationMiddleware(CreateUserValidator, "body"),
      this.usersController.createUserController
    );
    this.router.get(
      `${this.path}/getAll`,
      this.usersController.getAllUsersController
    );
  }
}
export default UsersRouter;
