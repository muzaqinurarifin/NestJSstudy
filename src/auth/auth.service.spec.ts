import { Test, TestingModule } from '@nestjs/testing';
import { MembersService } from '../members/members.service.js';
import { AuthService } from './auth.service.js';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        MembersService,
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('registers a member without returning the password', () => {
    expect(
      service.register({
        name: 'New Member',
        email: 'new@example.com',
        phone: '08123456789',
        password: 'password1',
      }),
    ).toEqual({
      message: 'Registrasi berhasil',
      member: {
        id: 3,
        name: 'New Member',
        email: 'new@example.com',
        phone: '08123456789',
      },
    });
  });

  it('rejects registration when the email is already registered', () => {
    expect(() =>
      service.register({
        name: 'Existing Member',
        email: 'member1@example.com',
        phone: '08123456789',
        password: 'password1',
      }),
    ).toThrow('Email sudah terdaftar');
  });
});
