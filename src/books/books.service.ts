import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book.entity.js';
import { CreateBookDto } from './dto/create-book-dto.js';
import { UpdateBookDto } from './dto/update-book-dto.js';
import { type Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  // menampilkan semua data buku
  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find({
      order: { createdAt: 'DESC' },
    });
  }
  // menyimpan data ke data base
  async create(book: CreateBookDto): Promise<Book> {
    const newBook = this.bookRepository.create(book);

    // simpan data
    return await this.bookRepository.save(newBook);
  }

  // menampilkna data berdasarkan id
  async findById(id: string): Promise<Book> {
    //undefined karena book hanya data tunggal
    const book = await this.bookRepository.findOneBy({ id });

    //jika tidak ada
    if (!book) {
      throw new NotFoundException(`Buku dengan id ${id} tidak ditemukan`);
    }

    //jika ada tampilkan data
    return book;
  }

  // mengubah data berdasarkan id
  async update(id: string, updateBook: UpdateBookDto): Promise<Book> {
    const book = await this.findById(id);

    //jika tidak ada
    if (!book) {
      throw new NotFoundException(`Buku dengan id ${id} tidak ditemukan`);
    }

    const updatedBook = this.bookRepository.merge(book, updateBook);

    return await this.bookRepository.save(updatedBook);
  }

  // menghapus data berdasarkan id
  async remove(id: string): Promise<{ message: string; deletedId: string }> {
    await this.findById(id);

    await this.bookRepository.softDelete(id);

      return {
          message: `Buku dengan id ${id} berhasil dihapus`,
          deletedId: id
      };
  }
}
