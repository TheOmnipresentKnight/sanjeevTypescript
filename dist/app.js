"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const allRoutes_1 = __importDefault(require("./allRoutes"));
const ResponseError_1 = __importDefault(require("./response/ResponseError"));
(0, dotenv_1.config)({ path: ".env" });
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT || "4500");
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.listen();
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    initializeRoutes(routes) {
        this.app.get("/", (req, res) => {
            res.send("Hello, TypeScript Express!");
        });
        routes.forEach((route) => {
            this.app.use("/sanjeevApi", route.router);
        });
        this.app.use("*", function (req, res) {
            console.log("reee", req.url);
            throw new ResponseError_1.default.NotFound(`Sorry, HTTP resource you are looking for was not found.`);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Sanjeev server is running on port ${this.port}`);
        });
    }
}
const app = new App(allRoutes_1.default);
