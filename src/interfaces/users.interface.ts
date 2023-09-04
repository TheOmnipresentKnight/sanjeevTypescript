import Document from "./document.interface";

export default interface UserInterface extends Document {
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}
