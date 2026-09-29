import { Test, TestingModule } from '@nestjs/testing';
import { MembersService } from './members.service.js';

describe('MembersService', () => {
  let service: MembersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MembersService],
    }).compile();

    service = module.get<MembersService>(MembersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('finds a member by email', () => {
    expect(service.findByEmail('member1@example.com')).toEqual({
      id: 1,
      name: 'Member 1',
      email: 'member1@example.com',
      phone: '1234567890',
      password: 'password1',
    });
  });

  it('returns undefined when the email is not found', () => {
    expect(service.findByEmail('unknown@example.com')).toBeUndefined();
  });
});
