"use strict";
// export function sharedModules(): string {
//   return 'shared-modules';
// }
Object.defineProperty(exports, "__esModule", { value: true });
class BaseResponse extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, BaseResponse.prototype);
    }
}
exports.default = BaseResponse;
