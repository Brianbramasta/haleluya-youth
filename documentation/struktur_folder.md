# Dokumentasi Struktur Project

## Feature-First Modular Architecture

### Laravel + Inertia + Vue + Tailwind

---

# 1. Pendahuluan

Dokumentasi ini menjelaskan struktur project menggunakan pendekatan **Feature-First Modular Architecture** untuk pengembangan aplikasi web menggunakan:

* Laravel
* Inertia.js
* Vue.js
* Tailwind CSS

Pendekatan ini dirancang untuk project skala kecil hingga menengah yang membutuhkan struktur rapi, scalable, dan tetap pragmatis tanpa kompleksitas berlebih seperti full clean architecture.

Cocok untuk:

* MVP
* Internal tools
* Community platform
* Product validation
* Tim kecil / solo developer

---

# 2. Filosofi Feature-First

Alih-alih memisahkan file berdasarkan layer global seperti:

```txt
app/
  Domain/
  Data/
  Presentation/
```

Feature-first mengelompokkan kode berdasarkan **fitur bisnis**.

Contoh:

```txt
Event
Registration
Gallery
Contact
```

Setiap fitur memiliki seluruh logic-nya sendiri.

Keuntungan:

* Mudah dicari
* Minim context switching
* Scalable
* Lebih maintainable
* Cocok untuk pengembangan bertahap

---

# 3. Struktur Folder Utama

```txt
project/
│
├── app/
│   ├── Features/
│   │   ├── Event/
│   │   ├── Registration/
│   │   ├── Gallery/
│   │   └── Contact/
│
├── resources/
│   └── js/
│       ├── features/
│       ├── shared/
│       └── layouts/
│
├── routes/
├── database/
└── config/
```

---

# 4. Struktur Backend

## app/Features

Seluruh business logic dikelompokkan per fitur.

---

## 4.1 Event Module

```txt
app/Features/Event/
├── Controllers/
├── Models/
├── Requests/
├── Services/
└── Policies/
```

---

### Controllers

Menangani HTTP request.

Contoh:

```txt
EventController.php
AdminEventController.php
```

Tugas:

* menerima request
* validasi awal
* memanggil service
* return response

Controller harus tipis.

---

### Models

Representasi database.

Contoh:

```txt
Event.php
```

Berisi:

* relasi
* casts
* scope
* accessor

---

### Requests

Validasi request.

Contoh:

```txt
StoreEventRequest.php
UpdateEventRequest.php
```

Tujuan:

Memisahkan validasi dari controller.

---

### Services

Business logic.

Contoh:

```txt
EventService.php
```

Berisi:

* create event
* update event
* publish event
* event filtering

---

### Policies

Authorization.

Contoh:

```txt
EventPolicy.php
```

---

## 4.2 Registration Module

```txt
app/Features/Registration/
├── Controllers/
├── Models/
├── Requests/
└── Services/
```

Tanggung jawab:

* pendaftaran event
* validasi peserta
* penyimpanan data
* optional notification

---

## 4.3 Gallery Module

```txt
app/Features/Gallery/
├── Controllers/
├── Models/
└── Services/
```

Tanggung jawab:

* upload media
* grouping dokumentasi
* tampilkan gallery

---

## 4.4 Contact Module

```txt
app/Features/Contact/
├── Controllers/
└── Services/
```

Biasanya ringan.

---

# 5. Struktur Frontend

## resources/js/features

Frontend dipisahkan per fitur.

```txt
resources/js/features/
├── event/
├── registration/
├── gallery/
└── contact/
```

---

## 5.1 Event Frontend Module

```txt
event/
├── pages/
├── components/
├── composables/
└── types/
```

---

### pages

Halaman inertia.

Contoh:

```txt
Index.vue
Show.vue
Create.vue
Edit.vue
```

---

### components

Komponen khusus event.

Contoh:

```txt
EventCard.vue
EventBanner.vue
EventMeta.vue
```

---

### composables

Logic reusable.

Contoh:

```txt
useEventFilter.ts
```

---

### types

TypeScript types.

```txt
event.ts
```

---

## 5.2 Shared Folder

Untuk reusable global.

```txt
resources/js/shared/
├── components/
├── composables/
├── utils/
└── constants/
```

---

### components

Reusable UI:

```txt
Button.vue
Input.vue
Modal.vue
Card.vue
```

---

### utils

Helper functions.

```txt
formatDate.ts
slugify.ts
```

---

# 6. Layout Structure

```txt
resources/js/layouts/
├── PublicLayout.vue
└── AdminLayout.vue
```

---

## PublicLayout

Untuk:

* home
* event
* gallery
* contact

---

## AdminLayout

Untuk dashboard admin.

---

# 7. Routing Strategy

Gunakan route grouping per fitur.

## routes/web.php

```php
Route::prefix('events')->group(function () {
    // event routes
});

Route::prefix('gallery')->group(function () {
    // gallery routes
});
```

Atau pecah:

```txt
routes/
├── web.php
├── event.php
├── gallery.php
└── registration.php
```

Lebih scalable.

---

# 8. Naming Convention

## Backend

Controller:

```txt
EventController
RegistrationController
```

Service:

```txt
EventService
GalleryService
```

Request:

```txt
StoreEventRequest
```

---

## Frontend

Pages:

```txt
Index.vue
Show.vue
Create.vue
Edit.vue
```

Components:

```txt
EventCard.vue
RegistrationForm.vue
```

Composables:

```txt
useEvent.ts
useGallery.ts
```

---

# 9. Alur Data

Contoh create event:

```txt
User Action
   ↓
Vue Form
   ↓
Controller
   ↓
Request Validation
   ↓
Service
   ↓
Model
   ↓
Database
   ↓
Response
   ↓
Inertia Render
```

---

# 10. Prinsip Pengembangan

---

## Thin Controller

Controller hanya orchestration.

Jangan taruh business logic berat di controller.

---

## Fat Service

Business rules di service.

---

## Feature Isolation

Logic event tidak boleh bercampur dengan registration.

---

## Shared Only When Truly Shared

Jangan terlalu cepat abstraksi.

---

# 11. Kapan Refactor

Jika suatu fitur mulai kompleks:

* banyak service
* banyak workflow
* banyak integration

Baru pecah lagi menjadi:

```txt
Feature/
├── Domain/
├── Application/
├── Infrastructure/
└── Presentation/
```

Jangan dari awal.

---

# 12. Struktur Awal untuk MVP Youth Website

```txt
app/Features/
├── Event/
├── Registration/
├── Gallery/
└── Contact/

resources/js/features/
├── event/
├── registration/
├── gallery/
└── contact/
```

Cukup untuk:

* landing page
* event list
* event detail
* registration
* gallery
* contact

---

# 13. Rekomendasi Implementasi Awal

Mulai dari:

### Phase 1

Setup project

---

### Phase 2

Event module

---

### Phase 3

Registration module

---

### Phase 4

Gallery

---

### Phase 5

Admin dashboard

---

# 14. Kesimpulan

Feature-first modular architecture memberikan keseimbangan antara:

**kesederhanaan**
dan
**skalabilitas**

Pendekatan ini ideal untuk MVP karena:

* cepat dikembangkan
* mudah dipahami
* tetap terstruktur
* mudah di-refactor saat project tumbuh

Untuk project website youth gereja, pendekatan ini adalah pilihan yang lebih proporsional dibanding full clean architecture.