import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { MembersModule } from '../members/members.module.js';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [MembersModule],
})
export class AuthModule {}
