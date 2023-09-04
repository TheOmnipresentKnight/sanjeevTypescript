"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeValue = exports.bodyCF = exports.responseCF = void 0;
const responseCF = (body) => {
    return !body
        ? {
            body: null,
        }
        : {
            body: body,
        };
};
exports.responseCF = responseCF;
const bodyCF = ({ value, message, code, status, }) => {
    return {
        code: !code ? null : code,
        value: !value ? null : value,
        status: !status ? null : status,
        message: !message ? null : message,
    };
};
exports.bodyCF = bodyCF;
exports.codeValue = {
    success: 600,
    error: 611,
};
