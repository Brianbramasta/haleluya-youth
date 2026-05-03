<template>
  <section id="cta-section" class="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <!-- Left Content -->
        <div class="text-white">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            {{ ctaData.headline }}
          </h2>
          <p class="text-lg text-blue-100 mb-6">
            {{ ctaData.subtitle }}
          </p>
          
          <!-- Benefits List -->
          <ul class="space-y-3 mb-8">
            <li 
              v-for="benefit in ctaData.benefits" 
              :key="benefit.id"
              class="flex items-start"
            >
              <svg class="w-6 h-6 text-green-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-blue-100">{{ benefit.text }}</span>
            </li>
          </ul>

          <!-- Social Media Links -->
          <div class="flex items-center space-x-4">
            <span class="text-blue-100 font-medium">Follow kami:</span>
            <div class="flex space-x-3">
              <a 
                v-for="social in socialMedia" 
                :key="social.name"
                :href="social.url" 
                target="_blank"
                class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                :aria-label="social.name"
              >
                <component :is="social.icon" class="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <!-- Right Content - Registration Form -->
        <div class="bg-white rounded-2xl shadow-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            Daftar Sekarang
          </h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                :class="[
                  'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors',
                  errors.name ? 'border-red-500' : 'border-gray-300'
                ]"
                placeholder="Masukkan nama lengkap Anda"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-600">
                {{ errors.name }}
              </p>
            </div>

            <!-- WhatsApp Field -->
            <div>
              <label for="whatsapp" class="block text-sm font-medium text-gray-700 mb-2">
                Nomor WhatsApp *
              </label>
              <input
                id="whatsapp"
                v-model="form.whatsapp"
                type="tel"
                required
                :class="[
                  'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors',
                  errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                ]"
                placeholder="0812-3456-7890"
              />
              <p v-if="errors.whatsapp" class="mt-1 text-sm text-red-600">
                {{ errors.whatsapp }}
              </p>
            </div>

            <!-- Age Field -->
            <div>
              <label for="age" class="block text-sm font-medium text-gray-700 mb-2">
                Umur *
              </label>
              <input
                id="age"
                v-model="form.age"
                type="number"
                min="15"
                max="30"
                required
                :class="[
                  'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors',
                  errors.age ? 'border-red-500' : 'border-gray-300'
                ]"
                placeholder="Contoh: 18"
              />
              <p v-if="errors.age" class="mt-1 text-sm text-red-600">
                {{ errors.age }}
              </p>
            </div>

            <!-- Interest Checkbox -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">
                Minat Pelayanan (pilih salah satu atau lebih)
              </label>
              <div class="space-y-2">
                <label 
                  v-for="interest in interests" 
                  :key="interest.id"
                  class="flex items-center"
                >
                  <input
                    v-model="form.interests"
                    :value="interest.id"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span class="ml-2 text-gray-700">{{ interest.name }}</span>
                </label>
              </div>
            </div>

            <!-- Submit Button -->
            <Button 
              type="submit"
              variant="primary"
              size="lg"
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Mengirim...
              </span>
              <span v-else>Daftar Sekarang</span>
            </Button>
          </form>

          <!-- WhatsApp Quick Action -->
          <div class="mt-6 text-center">
            <p class="text-gray-600 text-sm mb-3">Atau hubungi kami langsung via WhatsApp</p>
            <Button 
              variant="outline"
              size="sm"
              @click="handleWhatsAppChat"
              class="flex items-center mx-auto"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
              Chat WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <Modal 
      v-if="showSuccessModal" 
      @close="showSuccessModal = false"
      title="Pendaftaran Berhasil!"
    >
      <div class="text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <p class="text-gray-700 mb-4">
          Terima kasih telah mendaftar! Kami akan segera menghubungi Anda melalui WhatsApp untuk informasi lebih lanjut.
        </p>
        <Button @click="showSuccessModal = false" variant="primary">
          OK
        </Button>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Button from '@/shared/components/Button.vue'
import Modal from '@/shared/components/Modal.vue'
import { ctaData, interestOptions } from '../composables/useLandingData.js'
import { useForm, useFormValidation } from '../composables/useFormValidation.js'

const { validationSchemas } = useFormValidation()

const socialMedia = ref([
  {
    name: 'Instagram',
    url: 'https://instagram.com/youthgerejakita',
    icon: 'svg'
  },
  {
    name: 'Facebook', 
    url: 'https://facebook.com/youthgerejakita',
    icon: 'svg'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@youthgerejakita',
    icon: 'svg'
  }
])

const { 
  formData: form, 
  isSubmitting, 
  submitForm, 
  errors,
  isValid,
  resetForm 
} = useForm({
  name: '',
  whatsapp: '',
  age: '',
  interests: []
}, validationSchemas.registration)

const showSuccessModal = ref(false)

const handleSubmit = async () => {
  const result = await submitForm(async (formData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success modal
    showSuccessModal.value = true
    
    // Reset form
    resetForm()
    
    return { success: true }
  })
  
  if (!result) {
    console.error('Form submission failed')
  }
}

const handleWhatsAppChat = () => {
  const message = encodeURIComponent("Halo, saya tertarik untuk bergabung dengan komunitas youth gereja. Mohon informasinya ya!")
  window.open(`https://wa.me/6281234567890?text=${message}`, '_blank')
}
</script>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* Form validation styles */
input:focus {
  outline: none;
}

/* Loading spinner */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
