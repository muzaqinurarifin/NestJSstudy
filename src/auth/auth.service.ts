import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { MembersService } from '../members/members.service.js';
import { loginDto } from './dto/login-dto.js';
import { forgotPasswordDto } from './dto/forgot-password-dto.js';
import { resetPasswordDto } from './dto/reset-password-dto.js';

@Injectable()
export class AuthService {
    constructor(private readonly membersService: MembersService) { }
    
    login(input: loginDto) {
        const member = this.membersService.findByEmail(input.email);

        if (!member || member.password !== input.password) {
            throw new UnauthorizedException('email atau password salah'); // Jika email atau password tidak valid, lemparkan UnauthorizedException supaya langsung 401 Unauthorized
        }

        return {
            message: 'Login berhasil',
            member: {
                id: member.id,
                name: member.name,
                email: member.email,
                phone: member.phone,
            }
        }
    }

    forgotPassword(input: forgotPasswordDto) {
        const member = this.membersService.findByEmail(input.email);

        if (!member) {
            return { message: 'email tidak ditemukan' }; // Jika email tidak ditemukan, kembalikan pesan kesalahan
        }

        // Logika untuk mengirim email reset password bisa ditambahkan di sini
        return { message: 'Instruksi reset password telah dikirim ke email Anda' };
    }

    resetPassword(input: resetPasswordDto) {
        if (input.newPassword !== input.confirmPassword) {
          throw new BadRequestException('Konfirmasi password tidak cocok');
        }

        const updated = this.membersService.updatePassword(
          input.email,
          input.newPassword,
        );

        if (!updated) {
          throw new NotFoundException('Email tidak ditemukan');
        }

        return { message: 'Password berhasil diperbarui' };
    }
}
