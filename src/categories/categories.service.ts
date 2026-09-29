import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity.js';
import { CreateCategoryDto } from './dto/create-categories-dto.js';
import { UpdateCategoryDto } from './dto/update-categories-dto.js';

@Injectable()
export class CategoriesService {
  private Categories: Category[] = [
    {
      id: 1,
      name: 'Category 1',
    },
    {
      id: 2,
      name: 'Category 2',
    },
    {
      id: 3,
      name: 'Category 3',
    },
    {
      id: 4,
      name: 'Category 4',
    },
  ];

  // menampilkan semua data buku
  // menampilkan semua data buku
  findAll(): Category[] {
    return this.Categories;
  }
  // menyimpan data ke data base
  create(inputCategory: CreateCategoryDto): Category {
    const newCategory: Category = {
      id: this.Categories.length + 1,
      name: inputCategory.name,
    };

    // simpan data ke database (dalam hal ini array Categories)
    this.Categories.push(newCategory);
    return newCategory;
  }

  // menampilkna data berdasarkan id
  findById(id: number): Category | undefined {
    //undefined karena category hanya data tunggal
    return this.Categories.find((category) => category.id === id);
  }


  // mengubah data berdasarkan id
  update(id: number, updateCategoryDto: UpdateCategoryDto): Category | undefined {
    const categoryIndex = this.Categories.findIndex((category) => category.id === id);

    if (categoryIndex === -1) {
      return undefined; // jika data tidak ditemukan
    }

    const updatedCategory: Category = {
      ...this.Categories[categoryIndex],
      ...updateCategoryDto,
    }; // spread operator untuk menggabungkan data lama dan data baru

    this.Categories[categoryIndex] = updatedCategory;
    return updatedCategory; // mengembalikan data yang telah diubah
  }

  // menghapus data berdasarkan id
  remove(id: number): boolean {
    const categoryIndex = this.Categories.findIndex((category) => category.id === id);

    if (categoryIndex === -1) {
      return false; // jika data tidak ditemukan
    }

    this.Categories.splice(categoryIndex, 1);
    return true; // mengembalikan true jika data berhasil dihapus
  }
}
