<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Tentang Komunitas Kita
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Tempat untuk tumbuh, belajar, dan menemukan tujuan bersama teman-teman seiman
        </p>
      </div>

      <!-- Vision & Mission Cards -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <Card class="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900">Visi Kami</h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Menjadi generasi muda yang berakar kuat dalam iman, berbuah dalam pelayanan, 
            dan menjadi berkat bagi banyak orang. Kami percaya setiap pemuda memiliki potensi 
            luar biasa untuk mengubah dunia.
          </p>
        </Card>

        <Card class="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900">Misi Kami</h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Membangun komunitas yang inklusif, mengembangkan pemimpin muda yang berkarakter, 
            dan menyebarluaskan kasih Kristus melalui pelayanan yang kreatif dan relevan.
          </p>
        </Card>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
            {{ stats.members }}+
          </div>
          <div class="text-gray-600">Anggota Aktif</div>
        </div>
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">
            {{ stats.eventsPerMonth }}+
          </div>
          <div class="text-gray-600">Event per Bulan</div>
        </div>
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
            {{ stats.yearsActive }}+
          </div>
          <div class="text-gray-600">Tahun Berdiri</div>
        </div>
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
            {{ stats.livesImpacted }}+
          </div>
          <div class="text-gray-600">Hidup Terdampak</div>
        </div>
      </div>

      <!-- Gallery Grid -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-gray-900 text-center mb-8">
          Kegiatan Kita
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div 
            v-for="(image, index) in galleryImages" 
            :key="index"
            class="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
            @click="openImageModal(image)"
          >
            <img 
              :src="image.url" 
              :alt="image.alt"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Card from '@/shared/components/Card.vue'

const stats = ref({
  members: 150,
  eventsPerMonth: 8,
  yearsActive: 5,
  livesImpacted: 1000
})

const galleryImages = ref([
  {
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Youth worship session'
  },
  {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Bible study group'
  },
  {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Community outreach'
  },
  {
    url: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Youth conference'
  },
  {
    url: 'https://images.unsplash.com/photo-1598458047223-263b4e7f5f3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Fun games and activities'
  },
  {
    url: 'https://images.unsplash.com/photo-1514468759968-7923dcf4c3e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Worship night'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Team building activities'
  },
  {
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Community service'
  }
])

const openImageModal = (image) => {
  // Dummy action - in real implementation would open modal
  console.log('Opening image modal for:', image.alt)
}

// Animate statistics on scroll
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate numbers
        animateValue('members', 0, stats.value.members, 2000)
        animateValue('eventsPerMonth', 0, stats.value.eventsPerMonth, 2000)
        animateValue('yearsActive', 0, stats.value.yearsActive, 2000)
        animateValue('livesImpacted', 0, stats.value.livesImpacted, 2000)
      }
    })
  })

  // Observe stats section
  const statsSection = document.querySelector('.grid-cols-2.md\\:grid-cols-4')
  if (statsSection) {
    observer.observe(statsSection)
  }
})

const animateValue = (id, start, end, duration) => {
  const element = document.querySelector(`[data-stat="${id}"]`)
  if (!element) return
  
  const range = end - start
  const increment = range / (duration / 16)
  let current = start
  
  const timer = setInterval(() => {
    current += increment
    if (current >= end) {
      current = end
      clearInterval(timer)
    }
    element.textContent = Math.floor(current) + '+'
  }, 16)
}
</script>

<style scoped>
/* Fade in animation for cards */
.card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.card:nth-child(1) { animation-delay: 100ms; }
.card:nth-child(2) { animation-delay: 200ms; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
