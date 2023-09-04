"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
class HttpResponse {
    /**
     * Base Response
     * @param dataResponse
     * @returns
     */
    static baseResponse(dataResponse) {
        const { message = 'Record has been retrieved', code = 200 } = dataResponse, rest = __rest(dataResponse, ["message", "code"]);
        return Object.assign({ code, message }, rest);
    }
    /**
     * Response Get or Sucess
     * @param dataResponse
     * @returns
     */
    static get(dataResponse) {
        let message = "Record has been retrieved", code = 200;
        if (!dataResponse.data) {
            code = 404;
            message = "Records not found";
        }
        return this.baseResponse(Object.assign({ code, message }, dataResponse));
    }
    /**
     * Response Created
     * @param dataResponse
     * @returns
     */
    static created(dataResponse) {
        const message = "Record has been created successfully.";
        return this.baseResponse(Object.assign({ code: 201, message }, dataResponse));
    }
    /**
     * Response Updated
     * @param dataResponse
     * @returns
     */
    static updated(dataResponse) {
        const message = "Record has been updated successfully.";
        return this.baseResponse(Object.assign({ message }, dataResponse));
    }
    /**
     * Response Deleted
     * @param dataResponse
     * @returns
     */
    static deleted(dataResponse) {
        const message = "Record has been deleted successfully.";
        return this.baseResponse(Object.assign({ message }, dataResponse));
    }
}
exports.default = HttpResponse;
