import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity.js';
import { CreateBookDto } from './dto/create-book-dto.js';
import { UpdateBookDto } from './dto/update-book-dto.js';

@Injectable()
export class BooksService {
    private books: Book[] = [
        {
            id: 1,
            title: 'Book 1',
            author: 'Author 1',
            isbn: '1234567890',
            publishedYear: 2020,
            isAvailable: true,
        },
        {
            id: 2,
            title: 'Book 2',
            author: 'Author 2',
            isbn: '0987654321',
            publishedYear: 2021,
            isAvailable: false,
        },
        {
            id: 3,
            title: 'Book 3',
            author: 'Author 3',
            isbn: '1122334455',
            publishedYear: 2022,
            isAvailable: true,
        },
        {
            id: 4,
            title: 'Book 4',
            author: 'Author 4',
            isbn: '5566778899',
            publishedYear: 2023,
            isAvailable: false,
        },
    ];
    
    // menampilkan semua data buku
    findAll(): Book[] {
        return this.books;
    }
    // menyimpan data ke data base
    create(inputBook: CreateBookDto): Book {
        const newBook: Book = {
            id: this.books.length + 1,
            title: inputBook.title,
            author: inputBook.author,
            isbn: inputBook.isbn,
            publishedYear: inputBook.publishedYear,
            isAvailable: true,
        }

        // simpan data ke database (dalam hal ini array books)
        this.books.push(newBook);
        return newBook;
    }

    // menampilkna data berdasarkan id
    findById(id: number): Book | undefined { //undefined karena book hanya data tunggal
        return this.books.find(book => book.id === id);
    }

    // mengubah data berdasarkan id
    update(id: number, updateBookDto: UpdateBookDto): Book | undefined {
        const bookIndex = this.books.findIndex(book => book.id === id);
        
        if (bookIndex === -1) {
            return undefined; // jika data tidak ditemukan
        }

        const updatedBook: Book = {
            ...this.books[bookIndex],
            ...updateBookDto,
        }; // spread operator untuk menggabungkan data lama dan data baru

        this.books[bookIndex] = updatedBook;
        return updatedBook; // mengembalikan data yang telah diubah
    }

    // menghapus data berdasarkan id
    remove(id: number): boolean {
        const bookIndex = this.books.findIndex(book => book.id === id);

        if (bookIndex === -1) {
            return false; // jika data tidak ditemukan
        }

        this.books.splice(bookIndex, 1);
        return true; // mengembalikan true jika data berhasil dihapus
    }
}