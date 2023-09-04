"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BadRequest_1 = __importDefault(require("../errors/BadRequest"));
const BaseResponse_1 = __importDefault(require("../errors/BaseResponse"));
const Forbidden_1 = __importDefault(require("../errors/Forbidden"));
const InternalServer_1 = __importDefault(require("../errors/InternalServer"));
const NotFound_1 = __importDefault(require("../errors/NotFound"));
const Unauthorized_1 = __importDefault(require("../errors/Unauthorized"));
const ResponseError = {
    BadRequest: BadRequest_1.default,
    BaseResponse: BaseResponse_1.default,
    Forbidden: Forbidden_1.default,
    InternalServer: InternalServer_1.default,
    NotFound: NotFound_1.default,
    Unauthorized: Unauthorized_1.default,
};
exports.default = ResponseError;
