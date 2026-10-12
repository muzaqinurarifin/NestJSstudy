import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class registerDto {
  @IsNotEmpty({ message: 'Nama tidak boleh kosong' })
  readonly name: string;

  @IsNotEmpty({ message: 'Email tidak boleh kosong' })
  @IsEmail({}, { message: 'Email tidak valid' })
  readonly email: string;

  @IsString()
  @IsNotEmpty({ message: 'Nomor telepon tidak boleh kosong' })
  readonly phone: string;

  @IsNotEmpty({ message: 'Password tidak boleh kosong' })
  @MinLength(3, { message: 'Password tidak boleh kurang dari 3 karakter' })
  @MaxLength(10, { message: 'Password tidak boleh lebih dari 10 karakter' })
  readonly password: string;
}
