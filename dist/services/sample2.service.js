"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shared_exception_1 = __importDefault(require("../exceptions/shared-exception"));
class Sample2Service {
    constructor() {
        this.a = 1;
        this.sampleTwoService = async (haa) => {
            try {
                return {
                    jaa: haa,
                    gaa: "gaa",
                    bla: "ldakslksldklsklskdlskdlskdl",
                    arra: [1, 2, 3, 43, 543, 53, 43, 432, 4, 32],
                };
            }
            catch (error) {
                throw new shared_exception_1.default(409, "Error in sample");
            }
        };
    }
}
exports.default = Sample2Service;
