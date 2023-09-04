"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shared_exception_1 = __importDefault(require("../exceptions/shared-exception"));
class Sample1Service {
    constructor() {
        this.a = 1;
        this.sampleOneService = async (haa) => {
            try {
                return { jaa: haa, gaa: "gaa" };
            }
            catch (error) {
                throw new shared_exception_1.default(409, "Error in sample");
            }
        };
    }
}
exports.default = Sample1Service;
