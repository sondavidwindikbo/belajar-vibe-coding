# Project Initialization Plan: ElysiaJS + Drizzle ORM + MySQL (Bun)

## 1. Overview
Inisialisasi backend project baru di root repository menggunakan runtime **Bun** dengan framework **ElysiaJS**, ORM **Drizzle**, dan database **MySQL**. Dokumen ini berfungsi sebagai panduan implementasi high-level untuk pengembang atau model AI pelaksana.

---

## 2. Tech Stack
- **Runtime & Package Manager:** [Bun](https://bun.sh/)
- **Web Framework:** [ElysiaJS](https://elysiajs.com/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/) & `drizzle-kit`
- **Database Driver:** `mysql2` (atau driver MySQL yang kompatibel dengan Bun & Drizzle)
- **Database Engine:** MySQL

---

## 3. Implementation Steps

### Phase 1: Project Initialization & Configuration
1. Inisialisasi project Bun baru di direktori root (`bun init`).
2. Pastikan file konfigurasi TypeScript (`tsconfig.json`) telah diatur dengan konfigurasi standar yang kompatibel dengan Elysia dan Bun.
3. Siapkan file `.env.example` dan `.env` yang memuat konfigurasi variabel lingkungan:
   - `PORT` (default port aplikasi)
   - `DATABASE_URL` atau detail kredensial koneksi MySQL (`DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).
4. Pastikan file `.gitignore` sudah mencakup `node_modules`, `.env`, serta file output build/log.

### Phase 2: Dependency Installation
Instal dependensi yang diperlukan:
- **Core Dependencies:**
  - `elysia`
  - `drizzle-orm`
  - `mysql2`
- **Dev Dependencies:**
  - `drizzle-kit`
  - `@types/bun` (jika belum terpasang)

### Phase 3: Database & Drizzle ORM Setup
1. Buat file konfigurasi Drizzle (`drizzle.config.ts`) untuk migrasi dan inspeksi skema.
2. Buat koneksi database client Drizzle (misalnya di `src/db/index.ts`) menggunakan konfigurasi environment variable MySQL.
3. Definisikan file skema database awal (misalnya tabel dasar atau contoh skema di `src/db/schema.ts`).
4. Tambahkan script pada `package.json` untuk manajemen database:
   - Generate migrasi (`drizzle-kit generate`)
   - Jalankan migrasi/push (`drizzle-kit migrate` atau `drizzle-kit push`)
   - Drizzle Studio (`drizzle-kit studio`)

### Phase 4: Application Server Setup
1. Buat entry point server Elysia (misalnya di `src/index.ts`).
2. Buat endpoint dasar:
   - Root route (`GET /`): Menampilkan status atau pesan selamat datang.
   - Healthcheck route (`GET /health`): Memverifikasi status server dan koneksi database.
3. Tambahkan script runtime pada `package.json`:
   - `bun run dev` (dengan hot reload / `--watch`)
   - `bun run start` (mode production)

### Phase 5: Recommended Directory Structure
```text
.
├── .env.example
├── .gitignore
├── drizzle.config.ts
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts          # Entry point server Elysia
│   ├── db/
│   │   ├── index.ts      # Koneksi database Drizzle
│   │   └── schema.ts     # Definisi skema tabel MySQL
│   └── routes/           # Handler endpoint / routing
```

---

## 4. Acceptance Criteria
- [ ] Project berhasil dijalankan menggunakan perintah `bun run dev` tanpa error.
- [ ] ElysiaJS melayani request HTTP pada port yang ditentukan (default misal: 3000).
- [ ] Koneksi Drizzle ke database MySQL terkonfigurasi dengan benar melalui environment variables.
- [ ] Skrip `drizzle-kit` dapat dieksekusi untuk sinkronisasi/migrasi skema.
- [ ] Dokumen `README.md` singkat tersedia dengan petunjuk setup env dan cara menjalankan project.
