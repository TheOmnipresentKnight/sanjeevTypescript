"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sample2_controller_1 = __importDefault(require("../controllers/sample2.controller"));
class Sample2Router {
    constructor() {
        this.path = "";
        this.router = (0, express_1.Router)();
        this.sampleController = new sample2_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/sample2", this.sampleController.sampleTwoController);
    }
}
exports.default = Sample2Router;
