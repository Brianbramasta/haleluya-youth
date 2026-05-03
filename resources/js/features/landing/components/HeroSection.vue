<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
      <img 
        src="https://images.unsplash.com/photo-1438239472732-79d4556f1c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        alt="Youth gathering" 
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- Content -->
    <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
        {{ heroData.headline }}
      </h1>
      <p class="text-xl sm:text-2xl text-blue-100 mb-8 animate-fade-in-up animation-delay-200">
        {{ heroData.subtitle }}
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
        <Button 
          variant="primary" 
          size="lg"
          @click="handleJoinCommunity"
          class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
        >
          {{ heroData.joinButton }}
        </Button>
        <Button 
          variant="secondary" 
          size="lg"
          @click="handleViewEvents"
          class="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
        >
          {{ heroData.eventsButton }}
        </Button>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/shared/components/Button.vue'

const heroData = ref({
  headline: "Bergabung dengan Komunitas Youth Gereja",
  subtitle: "Temukan persahabatan, tumbuh dalam iman, dan raih potensimu bersama kami",
  joinButton: "Join Komunitas",
  eventsButton: "Lihat Event"
})

const handleJoinCommunity = () => {
  // Dummy action - scroll to CTA section
  const ctaSection = document.getElementById('cta-section')
  if (ctaSection) {
    ctaSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleViewEvents = () => {
  // Dummy action - scroll to schedule section
  const scheduleSection = document.getElementById('schedule-section')
  if (scheduleSection) {
    scheduleSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}
</style>
