"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const validation_middleware_1 = __importDefault(require("../middlewares/validation-middleware"));
const users_validation_1 = require("../validations/users.validation");
class UsersRouter {
    constructor() {
        this.path = "/users";
        this.router = (0, express_1.Router)();
        this.usersController = new users_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/create`, (0, validation_middleware_1.default)(users_validation_1.CreateUserValidator, "body"), this.usersController.createUserController);
        this.router.get(`${this.path}/getAll`, this.usersController.getAllUsersController);
    }
}
exports.default = UsersRouter;
