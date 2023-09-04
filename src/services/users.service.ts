import HttpException from "../exceptions/shared-exception";
import usersModel from "../database/models/users.model";
import UserInterface from "../interfaces/users.interface";

class UsersService {
  public createUser = async (payload: any): Promise<UserInterface> => {
    try {
      const foundUser = await usersModel.findOne({ email: payload.email });

      if (foundUser) {
        throw new HttpException(400, "User already exists");
      }

      const newUser = await usersModel.create(payload); // Add "await" here

      // You can return the newly created user if needed.
      return newUser;
    } catch (error) {
      throw new HttpException(409, `${error}`);
    }
  };

  public getAllUsers = async (): Promise<any> => {
    try {
      // Use the find() method on your Mongoose model to get all user documents
      const allUsers = await usersModel.find().exec();
      return allUsers; // Return the array of user documents
    } catch (error) {
      throw new HttpException(409, `${error}`);
    }
  };
}

export default UsersService;
