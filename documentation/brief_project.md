# Brief MVP Website Youth Gereja

## 1. Latar Belakang

Saat ini informasi terkait kegiatan youth gereja sering tersebar di berbagai media seperti grup WhatsApp, Instagram, atau pengumuman langsung saat ibadah.

Kondisi ini menyebabkan beberapa kendala:

* Informasi event mudah terlewat
* Orang baru kesulitan mengetahui cara bergabung
* Pendaftaran kegiatan masih manual
* Dokumentasi kegiatan tidak terorganisir
* Sulit menyediakan pusat informasi yang konsisten

Untuk menjawab kebutuhan tersebut, dibutuhkan sebuah **MVP (Minimum Viable Product) Website Youth Gereja** sebagai pusat informasi digital yang sederhana, mudah diakses, dan dapat digunakan sebagai fondasi pengembangan ke depannya.

---

## 2. Tujuan MVP

Membangun platform digital sederhana yang dapat:

* Menyediakan informasi resmi terkait youth gereja
* Menampilkan jadwal dan event terbaru
* Mempermudah pendaftaran kegiatan
* Menjadi pintu masuk bagi anggota baru
* Meningkatkan engagement komunitas youth

---

## 3. Objective Utama

Website harus mampu menjawab 3 pertanyaan utama pengguna:

### Informasi

**"Ada kegiatan apa?"**

Menampilkan seluruh kegiatan youth secara jelas dan terstruktur.

---

### Akses

**"Bagaimana cara ikut?"**

Menyediakan alur pendaftaran yang mudah.

---

### Koneksi

**"Kalau saya baru, harus menghubungi siapa?"**

Menyediakan kontak yang jelas dan mudah diakses.

---

## 4. Target Pengguna

### Primary User

* Jemaat youth aktif
* Pengunjung baru
* Calon anggota youth

### Secondary User

* Pengurus youth
* PIC event
* Tim media / admin

---

## 5. Scope MVP

## 5.1 Landing Page

### Tujuan

Sebagai halaman utama dan first impression website.

### Konten

* Hero section
* Nama komunitas youth
* Deskripsi singkat
* Jadwal ibadah rutin
* Lokasi gereja
* CTA utama

### CTA

* Join This Week
* Lihat Event
* Hubungi Kami

---

## 5.2 Event Management (Sederhana)

### Tujuan

Menampilkan daftar kegiatan youth.

### Fitur

* List upcoming event
* Detail event
* Tanggal
* Jam
* Lokasi
* Deskripsi
* Status pendaftaran

### Contoh Event

* Ibadah Youth
* Komsel
* Futsal
* Retreat
* Workshop
* Pelayanan

---

## 5.3 Registration Form

### Tujuan

Mempermudah proses pendaftaran kegiatan.

### Field

* Nama lengkap
* Nomor WhatsApp
* Umur
* Gender (opsional)
* First timer (Ya/Tidak)
* Catatan tambahan (opsional)

### Output

Data tersimpan di database / spreadsheet.

---

## 5.4 Contact / PIC Page

### Tujuan

Memberikan jalur komunikasi yang jelas.

### Konten

* Nama PIC
* Nomor WhatsApp
* Instagram Youth
* Lokasi gereja

---

## 5.5 Gallery

### Tujuan

Membangun trust dan menunjukkan aktivitas komunitas.

### Konten

* Foto event sebelumnya
* Highlight kegiatan
* Dokumentasi komunitas

---

## 6. Out of Scope (Belum Masuk MVP)

Fitur berikut ditunda untuk fase selanjutnya:

### Authentication

* Login
* Register account

### Attendance

* QR check-in
* Kehadiran member

### Internal Dashboard

* Statistik anggota
* Tracking engagement

### Volunteer Management

* Jadwal pelayanan
* Assignment tim

### Prayer Request System

### Daily Devotion

### Notification Automation

---

## 7. Success Metrics

MVP dianggap berhasil jika dalam 1–2 bulan:

### Traffic

* Website aktif diakses oleh youth

### Engagement

* Ada pendaftaran event melalui website

### Adoption

* Pengurus mulai menggunakan website sebagai sumber informasi utama

### Newcomer Conversion

* Ada anggota baru yang bergabung melalui website

---

## 8. Tech Stack Recommendation

## Frontend

* Next.js
* Tailwind CSS
* TypeScript

---

## Backend / Database

Pilihan 1:

* Supabase

Pilihan 2 (lebih cepat)

* Google Sheets / Google Form

---

## Deployment

* Vercel

---

## Optional Integration

* n8n (automation)
* WhatsApp notification
* Google Calendar

---

## 9. Struktur Halaman

```txt
/
├── Home
├── Events
├── Event Detail
├── Gallery
├── About
└── Contact
```

---

## 10. Timeline Pengembangan

## Week 1

Planning & UI Design

* Requirement finalization
* Wireframe
* Design system

---

## Week 2

Development Core Features

* Landing page
* Event page
* Registration form

---

## Week 3

Finishing

* Gallery
* Contact
* Testing
* Deployment

---

## 11. Prioritas Pengembangan

### High Priority

1. Landing Page
2. Event List
3. Event Detail
4. Registration Form
5. Contact

---

### Medium Priority

6. Gallery
7. Announcement Banner

---

### Low Priority

8. Testimonial Section

---

## 12. Prinsip Pengembangan

MVP harus:

### Simple

Fokus pada kebutuhan utama.

### Fast

Cepat dirilis dan diuji.

### Useful

Langsung memberikan manfaat nyata.

### Scalable

Mudah dikembangkan ke versi berikutnya.

---

## 13. Vision Future

Setelah MVP tervalidasi, pengembangan dapat dilanjutkan ke:

### Phase 2

Operational Tools

* Attendance
* Volunteer schedule
* Admin dashboard

### Phase 3

Community Platform

* Prayer board
* Member profile
* Devotional content

### Phase 4

Automation Ecosystem

* Reminder system
* Follow-up automation
* Analytics dashboard
