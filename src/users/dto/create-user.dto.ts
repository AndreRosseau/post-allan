import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  @MaxLength(120, { message: 'Name must have at most 120 characters' })
  name?: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString()
  @MinLength(6, {
    message: 'Password must have at least 6 characters',
  })
  password: string;
}