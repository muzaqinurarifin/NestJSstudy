import { Controller, Get } from '@nestjs/common';
import { MembersService } from './members.service.js';

@Controller('members')
export class MembersController {
    constructor(private readonly membersService: MembersService) {}
    // menampilkan data
    @Get()
    findAll() {
        return this.membersService.findAll();
    }
}
