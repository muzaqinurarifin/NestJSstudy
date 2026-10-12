import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";

export class loginDto {
  @IsNotEmpty({ message: "Email tidak boleh kosong" })
  @IsEmail({}, { message: "Email tidak valid" })
  readonly email: string;

  @IsNotEmpty({ message: "Password tidak boleh kosong" })
  @MaxLength(10, { message: "Password tidak boleh lebih dari 10 karakter" })
  readonly password: string;
}