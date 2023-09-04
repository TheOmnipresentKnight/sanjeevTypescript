"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: ".env" });
let dbConnection;
let dbHost = process.env.DB_HOST || `localhost`;
let dbPort = process.env.DB_PORT || 27017;
let dbDialect = process.env.DB_DIALECT || `mongodb`;
let dbName = process.env.DB_NAME || `sanjeev`;
async function connectToDatabase() {
    if (dbConnection) {
        return dbConnection;
    }
    const dbUri = `${dbDialect}://${dbHost}:${dbPort}/${dbName}`;
    const options = {}; // No need to specify useNewUrlParser and useUnifiedTopology
    try {
        await mongoose_1.default.connect(dbUri, options);
        dbConnection = mongoose_1.default.connection;
        console.log("Connected to Sanjeev's MongoDB database");
        return dbConnection;
    }
    catch (error) {
        throw new Error("Error connecting to MongoDB: " + error);
    }
}
exports.connectToDatabase = connectToDatabase;
