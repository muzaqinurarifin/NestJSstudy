import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book-dto.js';
import { UpdateBookDto } from './dto/update-book-dto.js';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}
    // menampilkan data keseluruhan
    @Get()
    findAll() {
        return this.booksService.findAll();
        // this.(nama service).(nama method)();
    }

    // menampilkan data berdasarkan id
    @Get(':id')
    findById(@Param('id') id: string) {
        return this.booksService.findById(parseInt(id)); //parseInt karena id bertipe number
    }

    // menyimpan data ke database
    @Post()
    create(@Body() createBookDto: CreateBookDto) {
        return this.booksService.create(createBookDto);
    }

    // mengubah data berdasarkan id
    @Patch(':id')
        //@Param untuk mengambil parameter dari url, @Body untuk mengambil data dari body request
    update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
        return this.booksService.update(parseInt(id), updateBookDto);
    }

    // menghapus data berdasarkan id
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.booksService.remove(parseInt(id));
    }

}

