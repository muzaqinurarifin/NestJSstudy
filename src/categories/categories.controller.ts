import { Controller, Get, Body, Post, Patch, Delete, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service.js';
import { CreateCategoryDto } from './dto/create-categories-dto.js';
import { UpdateCategoryDto } from './dto/update-categories-dto.js';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}
    
    @Get()
        findAll() {
            return this.categoriesService.findAll();
            // this.(nama service).(nama method)();
        }
    
        // menampilkan data berdasarkan id
        @Get(':id')
        findById(@Param('id') id: string) {
            return this.categoriesService.findById(parseInt(id)); //parseInt karena id bertipe number
        }
    
        // menyimpan data ke database
        @Post()
        create(@Body() createCategoryDto: CreateCategoryDto) {
            return this.categoriesService.create(createCategoryDto);
        }
    
        // mengubah data berdasarkan id
        @Patch(':id')
            //@Param untuk mengambil parameter dari url, @Body untuk mengambil data dari body request
        update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
            return this.categoriesService.update(parseInt(id), updateCategoryDto);
        }
    
        // menghapus data berdasarkan id
        @Delete(':id')
        remove(@Param('id') id: string) {
            return this.categoriesService.remove(parseInt(id));
        }
}
