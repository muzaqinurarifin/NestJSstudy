import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty({ message: "Title tidak boleh kosong" })
    @IsString({message: "Title harus berupa string"})
    readonly title: string;

    @IsNotEmpty({ message: "Author tidak boleh kosong" })
    @IsString({message: "Author harus berupa string"})
    readonly author: string;

    @IsNotEmpty({ message: "ISBN tidak boleh kosong" })
    @IsString({message: "ISBN harus berupa string"})
    readonly isbn: string;

    @IsNotEmpty({ message: "Tahun terbit tidak boleh kosong" })
    @IsString({message: "Tahun terbit harus berupa string"})
    readonly publishedYear: number;

    @IsNotEmpty({ message: "Status ketersediaan tidak boleh kosong" })
    @IsString({message: "Status ketersediaan harus berupa string"})
    readonly isAvailable: boolean;
}

