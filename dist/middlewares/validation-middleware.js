"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const commonResponse_1 = require("../commonResponse");
function validationMiddleware(type, value = "body", skipMissingProperties = false, whitelist = true, forbidNonWhitelisted = true) {
    return (req, res, next) => {
        (0, class_validator_1.validate)((0, class_transformer_1.plainToInstance)(type, req[value]), {
            skipMissingProperties,
            whitelist,
            forbidNonWhitelisted,
        }).then((errors) => {
            if (errors.length > 0) {
                const message = errors.flatMap((error) => {
                    return Object.values(error.constraints || {});
                });
                const resp = (0, commonResponse_1.responseCF)((0, commonResponse_1.bodyCF)({ message: message.join(", "), code: "611", status: "error" }));
                return res.send(resp);
            }
            else {
                next();
            }
        });
    };
}
exports.default = validationMiddleware;
