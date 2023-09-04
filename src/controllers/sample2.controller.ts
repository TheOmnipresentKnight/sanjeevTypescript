import { Request, Response } from "express";
import { bodyCF, codeValue, responseCF } from "../commonResponse";
import Sample2Service from "../services/sample2.service";
import { HTTP_STATUS_CODES } from "../config/app_config";

class Sample2Controller {
  public sampleService = new Sample2Service();

  public sampleTwoController = async (req: Request, res: Response) => {
    let response: any;
    let httpCode: any;
    try {
      const result = await this.sampleService.sampleTwoService(req.body);
      httpCode = HTTP_STATUS_CODES.OK;
      response = responseCF(
        bodyCF({
          value: result,
          code: codeValue.success,
          status: "success",
          message: "THISIS @22222222222222222222",
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

export default Sample2Controller;
