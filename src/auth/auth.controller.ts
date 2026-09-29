import { Body, Controller, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { loginDto } from './dto/login-dto.js';
import { forgotPasswordDto } from './dto/forgot-password-dto.js';
import { resetPasswordDto } from './dto/reset-password-dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() input: loginDto) {
    return this.authService.login(input);
  }

  @Post('forgot-password')
  forgotPassword(@Body() input: forgotPasswordDto) {
    return this.authService.forgotPassword(input);
  }

  @Patch('reset-password')
  resetPassword(@Body() input: resetPasswordDto) {
    return this.authService.resetPassword(input);
  }
}   
