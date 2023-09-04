import { Request, Response } from "express";
import { bodyCF, codeValue, responseCF } from "../commonResponse";
import Sample1Service from "../services/sample1.service";
import { HTTP_STATUS_CODES } from "../config/app_config";

class Sample1Controller {
  public sampleService = new Sample1Service();

  public sampleOneController = async (req: Request, res: Response) => {
    let response: any;
    let httpCode: any;
    try {
      const result = await this.sampleService.sampleOneService(req.body);
      httpCode = HTTP_STATUS_CODES.OK;
      response = responseCF(
        bodyCF({
          value: result,
          code: codeValue.success,
          status: "success",
          message: "THISIS",
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

export default Sample1Controller;
