"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shared_exception_1 = __importDefault(require("../exceptions/shared-exception"));
const users_model_1 = __importDefault(require("../database/models/users.model"));
class UsersService {
    constructor() {
        this.createUser = async (payload) => {
            try {
                const foundUser = await users_model_1.default.findOne({ email: payload.email });
                if (foundUser) {
                    throw new shared_exception_1.default(400, "User already exists");
                }
                const newUser = await users_model_1.default.create(payload); // Add "await" here
                // You can return the newly created user if needed.
                return newUser;
            }
            catch (error) {
                throw new shared_exception_1.default(409, `${error}`);
            }
        };
        this.getAllUsers = async () => {
            try {
                // Use the find() method on your Mongoose model to get all user documents
                const allUsers = await users_model_1.default.find().exec();
                return allUsers; // Return the array of user documents
            }
            catch (error) {
                throw new shared_exception_1.default(409, `${error}`);
            }
        };
    }
}
exports.default = UsersService;
