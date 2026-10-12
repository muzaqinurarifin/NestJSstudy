import { Injectable } from '@nestjs/common';
import { Member } from './entities/member.entity.js';
import { CreateMemberDto } from './dto/create-members-dto.js';
import { UpdateMemberDto } from './dto/update-members-dto.js';

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

  // READ
  // menampilkan semua data buku
  findAll(): Member[] {
    return this.members;
  }

  // menampilkan data berdasarkan email
  findByEmail(email: string): Member | undefined {
    return this.members.find((member) => member.email === email);
  }

  // menampilkna data berdasarkan id
  findById(id: number): Member | undefined {
    return this.members.find((member) => member.id === id);
  }

  // CREATE
  // menyimpan data ke data base
  create(inputMember: CreateMemberDto): Member {
    const newMember: Member = {
      id: Math.max(0, ...this.members.map((member) => member.id)) + 1,
      name: inputMember.name,
      email: inputMember.email,
      phone: inputMember.phone,
      password: inputMember.password,
    };

    this.members.push(newMember);
    return newMember;
  }

  //UPDATE
  // mengubah data berdasarkan id
  update(id: number, updateMemberDto: UpdateMemberDto): Member | undefined {
    const memberIndex = this.members.findIndex((member) => member.id === id);

    if (memberIndex === -1) {
      return undefined; // jika data tidak ditemukan
    }

    const updatedMember: Member = {
      ...this.members[memberIndex],
      ...updateMemberDto,
    }; // spread operator untuk menggabungkan data lama dan data baru

    this.members[memberIndex] = updatedMember;
    return updatedMember; // mengembalikan data yang telah diubah
  }

  //update data [password]
  updatePassword(email: string, newPassword: string): boolean {
    const member = this.members.find((member) => member.email === email);

    if (!member) {
      return false;
    }

    member.password = newPassword;
    return true;
  }

  // menghapus data berdasarkan id
  remove(id: number): boolean {
    const memberIndex = this.members.findIndex(
      (category) => category.id === id,
    );

    if (memberIndex === -1) {
      return false; // jika data tidak ditemukan
    }

    this.members.splice(memberIndex, 1);
    return true; // mengembalikan true jika data berhasil dihapus
  }
}
