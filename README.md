# NestJS Study API

Repository ini berisi project API backend berbasis NestJS yang dibuat untuk belajar dan mengeksplorasi arsitektur aplikasi RESTful dengan TypeScript.

## Deskripsi Project

Project ini merupakan API sederhana yang mencakup beberapa modul utama:

- Auth Module
  - login
  - forgot password
  - reset password
- Members Module
  - data member
  - pencarian member berdasarkan email
  - update password
- Books Module
  - modul CRUD dasar untuk data buku
- Categories Module
  - modul CRUD dasar untuk data kategori

Project ini juga sudah dilengkapi dengan struktur modular NestJS dan unit test dasar menggunakan Vitest.

## Fitur Utama

- Arsitektur modular menggunakan NestJS
- Controller, service, dan DTO yang terpisah per modul
- Validasi error dasar dengan exception dari NestJS
- Unit test untuk memastikan komponen utama terdefinisi
- Setup project yang siap dikembangkan lebih lanjut

## Struktur Folder

```bash
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
├── auth/
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── auth.service.spec.ts
│   └── dto/
├── books/
│   ├── books.controller.ts
│   ├── books.module.ts
│   ├── books.service.ts
│   ├── books.service.spec.ts
│   ├── dto/
│   └── entities/
├── categories/
│   ├── categories.controller.ts
│   ├── categories.module.ts
│   ├── categories.service.ts
│   ├── categories.service.spec.ts
│   ├── dto/
│   └── entities/
├── members/
│   ├── members.controller.ts
│   ├── members.module.ts
│   ├── members.service.ts
│   ├── members.service.spec.ts
│   └── entities/
└── main.ts
```

## Teknologi yang Digunakan

- Node.js
- NestJS
- TypeScript
- Vitest
- Supertest

## Persiapan Awal

```bash
npm install
```

## Menjalankan Project

### Development

```bash
npm run start
```

### Watch mode

```bash
npm run start:dev
```

### Production build

```bash
npm run build
```

## Menjalankan Test

```bash
npm run test
```

Untuk test coverage:

```bash
npm run test:cov
```

## Endpoint Auth yang Tersedia

```http
POST /auth/login
POST /auth/forgot-password
PATCH /auth/reset-password
```

Contoh payload login:

```json
{
  "email": "member1@example.com",
  "password": "password1"
}
```

## Contoh Alur Kerja

1. Jalankan aplikasi dengan `npm run start:dev`
2. Akses endpoint API melalui Postman atau Thunder Client
3. Uji autentikasi member dan modul lain sesuai kebutuhan
4. Lanjutkan pengembangan dengan fitur CRUD atau database nyata

## Catatan

Project ini masih dalam tahap pembelajaran dan pengembangan dasar NestJS. Beberapa bagian masih menggunakan data in-memory untuk simulasi, sehingga cocok untuk belajar konsep backend dan dependency injection di NestJS.

## Repository

- GitHub: https://github.com/muzaqinurarifin/NestJSstudy.git

## License

Project ini dibuat untuk pembelajaran dan pengembangan mandiri, tanpa lisensi khusus.

