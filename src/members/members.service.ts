import { Injectable } from '@nestjs/common';
import { Member } from './entities/member.entity.js';

@Injectable()
export class MembersService {
  private members: Member[] = [
    {
      id: 1,
      name: 'Member 1',
      email: 'member1@example.com',
      phone: '1234567890',
      password: 'password1',
    },
    {
      id: 2,
      name: 'Member 2',
      email: 'member2@example.com',
      phone: '0987654321',
      password: 'password2',
    },
  ];

  // menampilkan semua data buku
  findAll(): Member[] {
    return this.members;
  }
  findByEmail(email: string): Member | undefined {
    return this.members.find((member) => member.email === email);
  }

  updatePassword(email: string, newPassword: string): boolean {
    const member = this.members.find((member) => member.email === email);

    if (!member) {
      return false;
    }

    member.password = newPassword;
    return true;
  }
  // menyimpan data ke data base

  // menampilkna data berdasarkan id

  // mengubah data berdasarkan id

  // menghapus data berdasarkan id
}
