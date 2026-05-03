<template>
  <div class="min-h-screen bg-white">
    <!-- Loading State -->
    <div v-if="loading" class="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <LoadingSpinner size="lg" text="Memuat halaman..." />
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div class="text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-900 mb-2">Terjadi Kesalahan</h2>
        <p class="text-gray-600 mb-4">{{ error }}</p>
        <Button @click="retryLoading" variant="primary">Coba Lagi</Button>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else>
      <!-- Hero Section -->
      <HeroSection />

      <!-- Navigation Bar (Floating) -->
      <nav 
        v-show="showNavigation"
        class="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-full shadow-lg z-30 px-6 py-3 transition-all duration-300"
      >
        <div class="flex items-center space-x-6">
          <a 
            v-for="navItem in navigationItems" 
            :key="navItem.id"
            :href="navItem.href"
            @click="smoothScroll(navItem.href)"
            class="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
          >
            {{ navItem.name }}
          </a>
        </div>
      </nav>

      <!-- About Section -->
      <AboutSection />

      <!-- Schedule Section -->
      <ScheduleSection />

      <!-- Location Section -->
      <LocationSection />

      <!-- CTA Section -->
      <CTASection />

      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-8">
            <!-- Church Info -->
            <div class="col-span-2">
              <h3 class="text-xl font-bold mb-4">Youth Gereja Kita</h3>
              <p class="text-gray-300 mb-4">
                Komunitas pemuda yang bersemangat untuk tumbuh dalam iman, 
                menemukan tujuan, dan menjadi berkat bagi banyak orang.
              </p>
              <div class="flex space-x-4">
                <a 
                  v-for="social in socialMediaData" 
                  :key="social.name"
                  :href="social.url" 
                  target="_blank"
                  class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span class="text-sm">{{ social.name.charAt(0) }}</span>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li v-for="link in footerData.quickLinks" :key="link.name">
                  <a 
                    :href="link.href"
                    @click="smoothScroll(link.href)"
                    class="text-gray-300 hover:text-white transition-colors"
                  >
                    {{ link.name }}
                  </a>
                </li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div>
              <h4 class="text-lg font-semibold mb-4">Kontak</h4>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  {{ footerData.contact.phone }}
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  {{ footerData.contact.email }}
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {{ footerData.contact.address }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Copyright -->
          <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {{ currentYear }} Youth Gereja Kita. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, readonly } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ScheduleSection from '../components/ScheduleSection.vue'
import LocationSection from '../components/LocationSection.vue'
import CTASection from '../components/CTASection.vue'
import Button from '@/shared/components/Button.vue'
import LoadingSpinner from '@/shared/components/LoadingSpinner.vue'
import { 
  navigationItems, 
  socialMediaData, 
  footerData,
  useLoadingStates 
} from '../composables/useLandingData.js'

// State
const { loading, error, setLoading, setError } = useLoadingStates()
const showNavigation = ref(false)
const lastScrollY = ref(0)

// Computed
const currentYear = computed(() => new Date().getFullYear())

// Methods
const initializePage = async () => {
  setLoading(true)
  
  try {
    // Simulate loading data
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In real implementation, this would load data from API
    // await loadLandingData()
    
    setLoading(false)
  } catch (err) {
    console.error('Failed to load landing page:', err)
    setError('Gagal memuat halaman. Silakan coba lagi.')
  }
}

const retryLoading = () => {
  initializePage()
}

const smoothScroll = (target) => {
  if (target.startsWith('#')) {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // Show/hide navigation based on scroll position
  showNavigation.value = currentScrollY > 500
  
  lastScrollY.value = currentScrollY
}

// Lifecycle
onMounted(() => {
  initializePage()
  window.addEventListener('scroll', handleScroll)
  
  // Add smooth scroll behavior to the page
  document.documentElement.style.scrollBehavior = 'smooth'
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.documentElement.style.scrollBehavior = ''
})

// SEO Meta (commented out until Vue Meta is installed)
// useHead({
//   title: 'Youth Gereja Kita - Komunitas Pemuda Kristen',
//   meta: [
//     { name: 'description', content: 'Bergabunglah dengan komunitas youth gereja kita. Temukan teman baru, tumbuh dalam iman, dan raih potensi terbaikmu.' },
//     { property: 'og:title', content: 'Youth Gereja Kita' },
//     { property: 'og:description', content: 'Komunitas pemuda yang bersemangat untuk tumbuh dalam iman dan menjadi berkat.' },
//     { property: 'og:image', content: '/images/youth-gereja-og.jpg' },
//     { property: 'og:url', content: window.location.href },
//     { name: 'twitter:card', content: 'summary_large_image' }
//   ]
// })
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Navigation backdrop blur effect */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
}

/* Fade in animation for content */
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}

/* Footer link hover effects */
footer a {
  position: relative;
}

footer a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: white;
  transition: width 0.3s ease;
}

footer a:hover::after {
  width: 100%;
}

/* Loading overlay styles */
.fixed.inset-0 {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
}

/* Responsive navigation */
@media (max-width: 768px) {
  .fixed.top-4.left-1\/2.transform.-translate-x-1\/2 {
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 2rem);
    max-width: 400px;
  }
  
  .flex.items-center.space-x-6 {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .text-gray-700.hover\:text-blue-600.font-medium.text-sm {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
}
</style>
