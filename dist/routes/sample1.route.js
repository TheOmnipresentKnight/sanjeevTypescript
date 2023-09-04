"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sample1_controller_1 = __importDefault(require("../controllers/sample1.controller"));
class Sample1Router {
    constructor() {
        this.path = "";
        this.router = (0, express_1.Router)();
        this.sampleController = new sample1_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/sample1", this.sampleController.sampleOneController);
    }
}
exports.default = Sample1Router;
