# NestJS Study API

Project ini adalah latihan backend dengan NestJS untuk belajar struktur aplikasi API dan modularisasi fitur.

## Deskripsi

Repo ini berisi beberapa modul dasar yang sudah dibuat selama proses belajar:

- Auth
  - login
  - forgot password
  - reset password
- Members
  - data member
  - pencarian member berdasarkan email
  - update password
- Books
  - modul dasar buku
- Categories
  - modul dasar kategori

Project ini masih bersifat belajar dan belum menggunakan database utama. Data yang dipakai saat ini masih bersifat sederhana di dalam service.

## Teknologi yang dipakai

- Node.js
- NestJS
- TypeScript
- Vitest

## Cara install

```bash
npm install
```

## Cara menjalankan

### mode biasa

```bash
npm run start
```

### mode watch

```bash
npm run start:dev
```

## Cara test

```bash
npm run test
```

## Struktur project

```bash
src/
├── app.module.ts
├── main.ts
├── auth/
├── books/
├── categories/
├── members/
└── ...
```

## Endpoint yang tersedia

```http
POST /auth/login
POST /auth/forgot-password
PATCH /auth/reset-password
```

## Catatan

Ini adalah project pembelajaran, jadi fokusnya adalah memahami konsep NestJS, modul, dependency injection, controller, service, dan testing dasar.

## Repository

https://github.com/muzaqinurarifin/NestJSstudy.git

