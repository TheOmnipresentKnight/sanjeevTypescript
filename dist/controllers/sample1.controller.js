"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commonResponse_1 = require("../commonResponse");
const sample1_service_1 = __importDefault(require("../services/sample1.service"));
const app_config_1 = require("../config/app_config");
class Sample1Controller {
    constructor() {
        this.sampleService = new sample1_service_1.default();
        this.sampleOneController = async (req, res) => {
            let response;
            let httpCode;
            try {
                const result = await this.sampleService.sampleOneService(req.body);
                httpCode = app_config_1.HTTP_STATUS_CODES.OK;
                response = (0, commonResponse_1.responseCF)((0, commonResponse_1.bodyCF)({
                    value: result,
                    code: commonResponse_1.codeValue.success,
                    status: "success",
                    message: "THISIS",
                }));
            }
            catch (error) {
                httpCode = app_config_1.HTTP_STATUS_CODES.BAD_REQUEST;
                response = (0, commonResponse_1.responseCF)((0, commonResponse_1.bodyCF)({
                    code: commonResponse_1.codeValue.error,
                    status: "error",
                    message: error.message,
                }));
            }
            return res.status(httpCode).json(response);
        };
    }
}
exports.default = Sample1Controller;
