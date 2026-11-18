# Belajar Vibe Coding - Backend Project

Backend REST API yang dibangun menggunakan runtime [Bun](https://bun.sh/), framework [ElysiaJS](https://elysiajs.com/), ORM [Drizzle](https://orm.drizzle.team/), dan database MySQL.

---

## 🛠 Tech Stack

- **Runtime & Package Manager:** Bun
- **Web Framework:** ElysiaJS
- **ORM:** Drizzle ORM
- **Driver:** MySQL2
- **Database:** MySQL

---

## 🚀 Persyaratan Sistem

- [Bun](https://bun.sh/) (v1.0+)
- Server MySQL yang sedang aktif

---

## ⚙️ Setup & Instalasi

1. **Clone repository & masuk ke folder project:**
   ```bash
   git clone https://github.com/sondavidwindikbo/belajar-vibe-coding.git
   cd belajar-vibe-coding
   ```

2. **Instal dependensi:**
   ```bash
   bun install
   ```

3. **Konfigurasi Environment Variables:**
   Salin `.env.example` ke `.env`:
   ```bash
   cp .env.example .env
   ```
   Sesuaikan kredensial database pada `.env`:
   ```env
   PORT=3000
   DATABASE_URL=mysql://root:password@localhost:3306/belajar_vibe_coding
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=password
   DB_NAME=belajar_vibe_coding
   ```

---

## 🏃 Menjalankan Aplikasi

- **Development Mode (Hot Reload):**
  ```bash
  bun run dev
  ```
- **Production Mode:**
  ```bash
  bun run start
  ```
- **Type Checking:**
  ```bash
  bun run typecheck
  ```

---

## 🗄️ Database Commands (Drizzle)

- **Generate Migrasi:**
  ```bash
  bun run db:generate
  ```
- **Push Schema langsung ke Database:**
  ```bash
  bun run db:push
  ```
- **Jalankan Migrasi:**
  ```bash
  bun run db:migrate
  ```
- **Buka Drizzle Studio (Database GUI):**
  ```bash
  bun run db:studio
  ```

---

## 📡 API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Healthcheck endpoint (status server dan konektivitas database)
