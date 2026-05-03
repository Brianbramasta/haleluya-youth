<template>
  <!-- Backdrop -->
  <Transition name="modal-backdrop">
    <div
      v-if="show"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4"
      @click="handleBackdropClick"
    >
      <!-- Modal Content -->
      <Transition name="modal-content">
        <div
          v-if="show"
          ref="modalContent"
          :class="modalClasses"
          class="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-hidden"
          @click.stop
        >
          <!-- Modal Header -->
          <div v-if="title || $slots.header" class="px-6 py-4 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <h3 v-if="title" class="text-lg font-semibold text-gray-900">
                {{ title }}
              </h3>
              <slot name="header"></slot>
              
              <!-- Close Button -->
              <button
                v-if="closable"
                @click="handleClose"
                class="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Body -->
          <div :class="bodyClasses" class="px-6 py-4 overflow-y-auto">
            <slot></slot>
          </div>

          <!-- Modal Footer -->
          <div v-if="$slots.footer" class="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <slot name="footer"></slot>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value)
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true
  },
  bodyPadding: {
    type: String,
    default: 'normal',
    validator: (value) => ['none', 'sm', 'normal', 'lg'].includes(value)
  }
})

const emit = defineEmits(['close', 'opened', 'closed'])

const modalContent = ref(null)

const modalClasses = computed(() => {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
  }

  return sizeClasses[props.size] || sizeClasses.md
})

const bodyClasses = computed(() => {
  const paddingClasses = {
    none: 'px-0 py-0',
    sm: 'px-4 py-2',
    normal: 'px-6 py-4',
    lg: 'px-8 py-6'
  }

  return paddingClasses[props.bodyPadding] || paddingClasses.normal
})

const handleClose = () => {
  if (props.closable) {
    emit('close')
  }
}

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    handleClose()
  }
}

const handleEscapeKey = (event) => {
  if (event.key === 'Escape' && props.show && props.closable) {
    handleClose()
  }
}

// Focus management
const focusModal = async () => {
  await nextTick()
  if (modalContent.value) {
    // Focus first focusable element in modal
    const focusableElements = modalContent.value.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }
  }
}

// Watch for show changes
watch(() => props.show, async (newValue) => {
  if (newValue) {
    // Modal opened
    document.body.style.overflow = 'hidden'
    await focusModal()
    emit('opened')
  } else {
    // Modal closed
    document.body.style.overflow = ''
    emit('closed')
  }
})

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey)
  // Restore body overflow in case it's still hidden
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Modal backdrop transition */
.modal-backdrop-enter-active,
.modal-backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.modal-backdrop-enter-from,
.modal-backdrop-leave-to {
  opacity: 0;
}

/* Modal content transition */
.modal-content-enter-active,
.modal-content-leave-active {
  transition: all 0.3s ease;
}

.modal-content-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}

.modal-content-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}

/* Custom scrollbar for modal body */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Focus styles */
button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Size utilities */
.max-w-sm {
  max-width: 24rem;
}

.max-w-lg {
  max-width: 32rem;
}

.max-w-2xl {
  max-width: 42rem;
}

.max-w-4xl {
  max-width: 56rem;
}

.max-w-full {
  max-width: 100%;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

/* Spacing utilities */
.px-0 {
  padding-left: 0;
  padding-right: 0;
}

.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

/* Border utilities */
.border-b {
  border-bottom-width: 1px;
}

.border-t {
  border-top-width: 1px;
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
}

/* Background utilities */
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(---tw-bg-opacity));
}

/* Position utilities */
.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* Z-index utilities */
.z-40 {
  z-index: 40;
}

/* Flex utilities */
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

/* Overflow utilities */
.overflow-hidden {
  overflow: hidden;
}

.overflow-y-auto {
  overflow-y: auto;
}

/* Text utilities */
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.font-semibold {
  font-weight: 600;
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, var(--tw-text-opacity));
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-text-opacity));
}

.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgba(75, 85, 99, var(--tw-text-opacity));
}

/* Shadow utilities */
.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

/* Border radius utilities */
.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

/* Transition utilities */
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Background opacity utilities */
.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}

/* Hover utilities */
.hover\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgba(75, 85, 99, var(--tw-text-opacity));
}

.hover\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}

/* SVG utilities */
.w-6 {
  width: 1.5rem;
}

.h-6 {
  height: 1.5rem;
}

/* Button utilities */
.p-1 {
  padding: 0.25rem;
}

/* Computed styles */
.max-h-\[90vh\] {
  max-height: 90vh;
}

.w-full {
  width: 100%;
}

.p-4 {
  padding: 1rem;
}
</style>
