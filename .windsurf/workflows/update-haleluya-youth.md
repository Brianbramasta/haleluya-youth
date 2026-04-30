---
description: Update Haleluya Youth website dengan Feature-First Modular Architecture
---

# Workflow Update Haleluya Youth Website

Workflow ini digunakan untuk mengupdate website Haleluya Youth mengikuti struktur Feature-First Modular Architecture yang telah didefinisikan.

## Prerequisites

- Project Laravel + Inertia + Vue + Tailwind sudah ter-setup
- Mengikuti struktur folder yang didefinisikan di `doc/struktur_folder.md`
- Memahami konsep Feature-First Modular Architecture

## Steps

### 1. Setup Feature Structure

// turbo
1. Buat folder utama Features di `app/Features/`
2. Buat folder features di `resources/js/features/`

### 2. Create Event Module

// turbo
1. Buat struktur folder Event module:
   ```
   app/Features/Event/
   ├── Controllers/
   ├── Models/
   ├── Requests/
   ├── Services/
   └── Policies/
   ```

### 3. Create Event Frontend Module

// turbo
1. Buat struktur folder Event frontend:
   ```
   resources/js/features/event/
   ├── pages/
   ├── components/
   ├── composables/
   └── types/
   ```

### 4. Create Registration Module

// turbo
1. Buat struktur folder Registration module:
   ```
   app/Features/Registration/
   ├── Controllers/
   ├── Models/
   ├── Requests/
   └── Services/
   ```

### 5. Create Registration Frontend Module

// turbo
1. Buat struktur folder Registration frontend:
   ```
   resources/js/features/registration/
   ├── pages/
   ├── components/
   ├── composables/
   └── types/
   ```

### 6. Create Gallery Module

// turbo
1. Buat struktur folder Gallery module:
   ```
   app/Features/Gallery/
   ├── Controllers/
   ├── Models/
   └── Services/
   ```

### 7. Create Gallery Frontend Module

// turbo
1. Buat struktur folder Gallery frontend:
   ```
   resources/js/features/gallery/
   ├── pages/
   ├── components/
   ├── composables/
   └── types/
   ```

### 8. Create Contact Module

// turbo
1. Buat struktur folder Contact module:
   ```
   app/Features/Contact/
   ├── Controllers/
   └── Services/
   ```

### 9. Create Contact Frontend Module

// turbo
1. Buat struktur folder Contact frontend:
   ```
   resources/js/features/contact/
   ├── pages/
   ├── components/
   ├── composables/
   └── types/
   ```

### 10. Setup Shared Components

// turbo
1. Buat struktur folder shared:
   ```
   resources/js/shared/
   ├── components/
   ├── composables/
   ├── utils/
   └── constants/
   ```

### 11. Setup Layouts

// turbo
1. Buat struktur folder layouts:
   ```
   resources/js/layouts/
   ├── PublicLayout.vue
   └── AdminLayout.vue
   ```

### 12. Update Routes

1. Update `routes/web.php` dengan route grouping per fitur
2. Buat file route terpisah jika diperlukan:
   - `routes/event.php`
   - `routes/gallery.php`
   - `routes/registration.php`

### 13. Create Base Files

1. Buat file-file dasar untuk setiap module:
   - Controllers dengan naming convention yang tepat
   - Models dengan relasi dan casts
   - Requests untuk validasi
   - Services untuk business logic
   - Vue pages dan components

### 14. Update Composer Autoload

// turbo
1. Update `composer.json` untuk autoload Features folder:
   ```json
   "autoload": {
       "psr-4": {
           "App\\": "app/",
           "App\\Features\\": "app/Features/"
       }
   }
   ```

### 15. Update JS Configuration

1. Update `vite.config.js` untuk resolve alias features
2. Update `jsconfig.json` untuk path mapping

## Best Practices

### Backend
- **Thin Controller**: Controller hanya untuk orchestration
- **Fat Service**: Business logic di service layer
- **Feature Isolation**: Logic antar fitur tidak boleh bercampur
- **Proper Naming**: Gunakan convention yang sudah didefinisikan

### Frontend
- **Component Reusability**: Shared components di folder shared
- **Composable Logic**: Logic reusable di composables
- **Type Safety**: Gunakan TypeScript types
- **Layout Consistency**: Gunakan layout yang sesuai

### File Structure
- Ikuti struktur yang sudah didefinisikan
- Jangan buat abstraksi terlalu dini
- Refactor hanya saat fitur menjadi kompleks

## Verification

1. Pastikan semua folder sudah tercreate dengan benar
2. Test autoloading untuk Features namespace
3. Test import untuk frontend modules
4. Run `composer dump-autoload` dan `npm install` jika perlu

## Troubleshooting

- Jika namespace tidak dikenali: jalankan `composer dump-autoload`
- Jika import frontend error: periksa vite.config.js dan jsconfig.json
- Pastikan naming convention konsisten

## Notes

- Workflow ini mengikuti dokumentasi di `doc/struktur_folder.md`
- Fokus pada MVP features: Event, Registration, Gallery, Contact
- Scalable untuk future development
- Pragmatic approach tanpa over-engineering