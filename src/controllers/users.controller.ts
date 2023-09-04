import { Request, Response } from "express";
import { bodyCF, codeValue, responseCF } from "../commonResponse";
import { HTTP_STATUS_CODES } from "../config/app_config";
import UsersService from "../services/users.service";

class UsersController {
  public usersService = new UsersService();

  public createUserController = async (req: Request, res: Response) => {
    let response: any;
    let httpCode: any;
    try {
      const result = await this.usersService.createUser(req.body);
      httpCode = HTTP_STATUS_CODES.OK;
      response = responseCF(
        bodyCF({
          value: result,
          code: codeValue.success,
          status: "success",
          message: "User created successfully",
        })
      );
    } catch (error: any) {
      httpCode = HTTP_STATUS_CODES.BAD_REQUEST;
      response = responseCF(
        bodyCF({
          code: codeValue.error,
          status: "error",
          message: error.message,
        })
      );
    }

    return res.status(httpCode).json(response);
  };
  public getAllUsersController = async (req: Request, res: Response) => {
    let response: any;
    let httpCode: any;
    try {
      const result = await this.usersService.getAllUsers();
      httpCode = HTTP_STATUS_CODES.OK;
      response = responseCF(
        bodyCF({
          value: result,
          code: codeValue.success,
          status: "success",
          message: "User get all successful",
        })
      );
    } catch (error: any) {
      httpCode = HTTP_STATUS_CODES.BAD_REQUEST;
      response = responseCF(
        bodyCF({
          code: codeValue.error,
          status: "error",
          message: error.message,
        })
      );
    }

    return res.status(httpCode).json(response);
  };
}

export default UsersController;
