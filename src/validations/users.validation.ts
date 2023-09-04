import {
  IsString,
  IsEmail,
  IsInt,
  IsArray,
  IsOptional,
  IsDate,
  IsNotEmpty,
  Length,
  Matches,
  IsPhoneNumber,
  IsBoolean,
} from "class-validator";

export class CreateUserValidator {
  @IsNotEmpty({ message: "Name cannot be empty" })
  @IsString({ message: "Name must be string" })
  public name?: string;

  @IsNotEmpty({ message: "Email cannot be empty" })
  @IsString({ message: "Email must be a string" })
  public email?: string;

  @IsString({ message: "Email must be a string" })
  public phone?: string;
}
