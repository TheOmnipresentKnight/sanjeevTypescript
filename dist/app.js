"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const allRoutes_1 = __importDefault(require("./allRoutes"));
const ResponseError_1 = __importDefault(require("./response/ResponseError"));
const database_1 = require("./database"); // Import the database connection function
(0, dotenv_1.config)({ path: ".env" });
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT || "4500");
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.listen();
        this.connectToDatabase(); // Connect to the database during app initialization
    }
    async connectToDatabase() {
        try {
            await (0, database_1.connectToDatabase)();
        }
        catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    initializeRoutes(routes) {
        this.app.get("/", (req, res) => {
            res.send("Welcome to TypeScript afflikayshon!");
        });
        // Pass the database connection to the route handlers or controllers
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
            console.log(`Welcome to ksnfdnfdefiejri!!!`);
        });
    }
}
const app = new App(allRoutes_1.default);
