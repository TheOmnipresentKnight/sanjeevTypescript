"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResponse_1 = __importDefault(require("./BaseResponse"));
class Unauthorized extends BaseResponse_1.default {
    constructor(message) {
        super(message, 401);
        Object.setPrototypeOf(this, Unauthorized.prototype);
    }
}
exports.default = Unauthorized;
