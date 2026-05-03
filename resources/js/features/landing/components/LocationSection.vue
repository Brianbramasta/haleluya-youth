<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Lokasi Ibadah
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Temukan kami di lokasi yang strategis dan mudah diakses
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Map Container -->
        <div class="relative">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden h-full min-h-[400px]">
            <!-- Google Maps Embed (Dummy) -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135078664!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sMonas!5e0!3m2!1sen!2sid!4v1651234567890!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full min-h-[400px]"
            ></iframe>
          </div>
        </div>

        <!-- Location Info -->
        <div class="space-y-6">
          <!-- Main Address Card -->
          <Card class="bg-white p-6 shadow-lg">
            <div class="flex items-start mb-4">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Alamat Lengkap</h3>
                <p class="text-gray-600 leading-relaxed">
                  {{ locationData.fullAddress }}
                </p>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="flex flex-wrap gap-3">
              <Button 
                variant="primary" 
                size="sm"
                @click="handleNavigate"
                class="flex items-center"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
                Navigasi
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                @click="handleCopyAddress"
                class="flex items-center"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Salin Alamat
              </Button>
            </div>
          </Card>

          <!-- Contact Information -->
          <Card class="bg-white p-6 shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Informasi Kontak</h3>
            
            <div class="space-y-4">
              <!-- Phone -->
              <div class="flex items-center">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Telepon</p>
                  <a 
                    :href="`tel:${locationData.phone}`" 
                    class="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                  >
                    {{ locationData.phone }}
                  </a>
                </div>
              </div>

              <!-- WhatsApp -->
              <div class="flex items-center">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">WhatsApp</p>
                  <a 
                    :href="`https://wa.me/${locationData.whatsapp}`" 
                    target="_blank"
                    class="text-gray-900 font-medium hover:text-green-600 transition-colors"
                  >
                    {{ locationData.whatsappFormatted }}
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-center">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Email</p>
                  <a 
                    :href="`mailto:${locationData.email}`" 
                    class="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                  >
                    {{ locationData.email }}
                  </a>
                </div>
              </div>
            </div>
          </Card>

          <!-- Operating Hours -->
          <Card class="bg-white p-6 shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Jam Operasional</h3>
            <div class="space-y-2">
              <div 
                v-for="schedule in locationData.operatingHours" 
                :key="schedule.day"
                class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
              >
                <span class="text-gray-600">{{ schedule.day }}</span>
                <span 
                  class="font-medium"
                  :class="schedule.isOpen ? 'text-green-600' : 'text-gray-400'"
                >
                  {{ schedule.hours }}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/shared/components/Card.vue'
import Button from '@/shared/components/Button.vue'

const locationData = ref({
  fullAddress: "Jl. Gereja Kita No. 123, Kelurahan Mekar Jaya, Kecamatan Sukamaju, Kota Jakarta Selatan, DKI Jakarta 12345, Indonesia",
  phone: "+62 21 1234 5678",
  whatsapp: "6281234567890",
  whatsappFormatted: "+62 812-3456-7890",
  email: "youth@gerejakita.org",
  operatingHours: [
    { day: "Senin - Jumat", hours: "09:00 - 21:00", isOpen: true },
    { day: "Sabtu", hours: "08:00 - 22:00", isOpen: true },
    { day: "Minggu", hours: "07:00 - 21:00", isOpen: true },
    { day: "Hari Libur", hours: "08:00 - 17:00", isOpen: true }
  ]
})

const handleNavigate = () => {
  // Open Google Maps with the location
  const address = encodeURIComponent(locationData.value.fullAddress)
  window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
}

const handleCopyAddress = () => {
  // Copy address to clipboard
  navigator.clipboard.writeText(locationData.value.fullAddress).then(() => {
    alert('Alamat berhasil disalin!')
  }).catch(() => {
    alert('Gagal menyalin alamat. Silakan salin secara manual.')
  })
}
</script>

<style scoped>
/* Custom styles for map container */
.map-container {
  position: relative;
  overflow: hidden;
}

.map-container iframe {
  border-radius: 0.75rem;
}

/* Smooth transitions */
.transition-colors {
  transition: color 0.2s ease;
}
</style>
