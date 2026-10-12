import { Body, Controller, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { loginDto } from './dto/login-dto.js';
import { forgotPasswordDto } from './dto/forgot-password-dto.js';
import { resetPasswordDto } from './dto/reset-password-dto.js';
import { registerDto } from './dto/register-dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() input: registerDto) {
    return this.authService.register(input);
  }

  @Post('login')
  login(@Body() input: loginDto) {
    return this.authService.login(input);
  }

  @Post('forgot-password')
  forgotPassword(@Body() input: forgotPasswordDto) {
    return this.authService.forgotPassword(input);
  }

  @Patch('password-recovery')
  passwordRecovery(@Body() input: resetPasswordDto) {
    return this.authService.passwordRecovery(input);
  }
}   
