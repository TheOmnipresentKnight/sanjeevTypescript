"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sample1_route_1 = __importDefault(require("./routes/sample1.route"));
const sample2_route_1 = __importDefault(require("./routes/sample2.route"));
const users_route_1 = __importDefault(require("./routes/users.route"));
const allRoutes = [];
allRoutes.push(new sample1_route_1.default());
allRoutes.push(new sample2_route_1.default());
allRoutes.push(new users_route_1.default());
exports.default = allRoutes;
