<template>
  <section id="schedule-section" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Jadwal Ibadah Kita
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Bergabunglah dengan kami dalam setiap pertemuan untuk tumbuh bersama dalam iman
        </p>
      </div>

      <!-- Schedule Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          v-for="schedule in schedules" 
          :key="schedule.id"
          class="p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
          :class="{
            'border-l-4 border-green-500': schedule.status === 'active',
            'border-l-4 border-gray-300': schedule.status === 'libur',
            'opacity-75': schedule.status === 'libur'
          }"
        >
          <!-- Status Badge -->
          <div 
            class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
            :class="{
              'bg-green-100 text-green-800': schedule.status === 'active',
              'bg-gray-100 text-gray-600': schedule.status === 'libur'
            }"
          >
            {{ schedule.status === 'active' ? 'Aktif' : 'Libur' }}
          </div>

          <!-- Icon -->
          <div class="flex items-center mb-4">
            <div 
              class="w-12 h-12 rounded-full flex items-center justify-center mr-4"
              :class="schedule.iconBg"
            >
              <svg :class="schedule.iconColor" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="schedule.iconPath"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900">{{ schedule.title }}</h3>
              <p class="text-gray-600">{{ schedule.day }}</p>
            </div>
          </div>

          <!-- Time -->
          <div class="flex items-center mb-3 text-gray-700">
            <svg class="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-medium">{{ schedule.time }}</span>
          </div>

          <!-- Location -->
          <div class="flex items-center mb-4 text-gray-700">
            <svg class="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>{{ schedule.location }}</span>
          </div>

          <!-- Description -->
          <p class="text-gray-600 text-sm mb-4">{{ schedule.description }}</p>

          <!-- Action Button -->
          <Button 
            v-if="schedule.status === 'active'"
            variant="outline" 
            size="sm"
            @click="handleJoinSchedule(schedule)"
            class="w-full"
          >
            Ikuti Jadwal
          </Button>
          <div 
            v-else
            class="w-full text-center py-2 px-4 bg-gray-100 text-gray-500 rounded-lg text-sm"
          >
            Sedang Libur
          </div>
        </Card>
      </div>

      <!-- Special Events -->
      <div class="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
        <h3 class="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Event Spesial Bulan Ini
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div 
            v-for="event in specialEvents" 
            :key="event.id"
            class="bg-white rounded-lg p-6 shadow-md"
          >
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-semibold text-gray-900 mb-1">{{ event.title }}</h4>
                <p class="text-gray-600 text-sm mb-2">{{ event.date }} • {{ event.time }}</p>
                <p class="text-gray-700 text-sm">{{ event.description }}</p>
                <Button 
                  variant="link" 
                  size="sm"
                  @click="handleJoinEvent(event)"
                  class="mt-3 p-0 h-auto"
                >
                  Daftar Event →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/shared/components/Card.vue'
import Button from '@/shared/components/Button.vue'

const schedules = ref([
  {
    id: 1,
    title: 'Youth Service',
    day: 'Minggu',
    time: '09:00 - 11:00',
    location: 'Gedung Utama Lantai 2',
    description: 'Kebaktian rutin pemuda dengan pujian, firman, dan fellowship',
    status: 'active',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    id: 2,
    title: 'Bible Study',
    day: 'Rabu',
    time: '19:00 - 21:00',
    location: 'Ruang Kelas 3',
    description: 'Pembahasan Alkitab secara mendalam dan diskusi kelompok',
    status: 'active',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    id: 3,
    title: 'Prayer Meeting',
    day: 'Jumat',
    time: '20:00 - 21:30',
    location: 'Gedung Utama Lantai 1',
    description: 'Doa bersama untuk kebutuhan jemaat dan pelayanan',
    status: 'active',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    id: 4,
    title: 'Fellowship Night',
    day: 'Sabtu',
    time: '18:00 - 20:00',
    location: 'Rangkul Space',
    description: 'Fellowship santai dengan games, makan malam, dan sharing',
    status: 'libur',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    id: 5,
    title: 'Music Practice',
    day: 'Selasa',
    time: '18:30 - 20:30',
    location: 'Studio Musik',
    description: 'Latihan pujian untuk kebaktian mingguan',
    status: 'active',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    iconPath: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
  },
  {
    id: 6,
    title: 'Discipleship Class',
    day: 'Kamis',
    time: '19:00 - 21:00',
    location: 'Ruang Kelas 1',
    description: 'Kelas pembinaan iman untuk pemuda yang ingin bertumbuh',
    status: 'active',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  }
])

const specialEvents = ref([
  {
    id: 1,
    title: 'Youth Camp 2026',
    date: '15-17 Mei 2026',
    time: 'Full Day',
    description: 'Retreat pemuda 3 hari dengan tema "Rise Up" di Puncak, Bogor'
  },
  {
    id: 2,
    title: 'Easter Celebration',
    date: '31 Maret 2026',
    time: '18:00 - 21:00',
    description: 'Perayaan Paskah dengan drama musikal dan kebaktian khusus'
  }
])

const handleJoinSchedule = (schedule) => {
  // Dummy action - would open registration modal or navigate to registration page
  console.log('Joining schedule:', schedule.title)
  alert(`Terima kasih telah berminat mengikuti ${schedule.title}! Kami akan menghubungi Anda segera.`)
}

const handleJoinEvent = (event) => {
  // Dummy action - would open event registration
  console.log('Joining event:', event.title)
  alert(`Pendaftaran untuk ${event.title} akan segera dibuka!`)
}
</script>

<style scoped>
/* Custom animations */
.schedule-card {
  transition: all 0.3s ease;
}

.schedule-card:hover {
  transform: translateY(-2px);
}
</style>
