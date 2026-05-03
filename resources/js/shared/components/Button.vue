<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="$emit('click', $event)"
    class="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
  >
    <!-- Loading Spinner -->
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <!-- Icon Slot -->
    <slot name="icon"></slot>

    <!-- Default Slot -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => [
      'primary',
      'secondary', 
      'outline',
      'ghost',
      'link',
      'danger'
    ].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses = []
  
  // Size classes
  const sizeClasses = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  }

  // Variant classes
  const variantClasses = {
    primary: [
      'bg-blue-600 text-white border border-transparent',
      'hover:bg-blue-700 focus:ring-blue-500',
      'disabled:bg-blue-300 disabled:cursor-not-allowed'
    ],
    secondary: [
      'bg-gray-600 text-white border border-transparent',
      'hover:bg-gray-700 focus:ring-gray-500',
      'disabled:bg-gray-300 disabled:cursor-not-allowed'
    ],
    outline: [
      'bg-transparent text-gray-700 border border-gray-300',
      'hover:bg-gray-50 focus:ring-blue-500',
      'disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200'
    ],
    ghost: [
      'bg-transparent text-gray-700 border border-transparent',
      'hover:bg-gray-100 focus:ring-blue-500',
      'disabled:text-gray-400'
    ],
    link: [
      'bg-transparent text-blue-600 border border-transparent p-0 h-auto',
      'hover:text-blue-800 focus:ring-blue-500 focus:ring-offset-0',
      'disabled:text-gray-400'
    ],
    danger: [
      'bg-red-600 text-white border border-transparent',
      'hover:bg-red-700 focus:ring-red-500',
      'disabled:bg-red-300 disabled:cursor-not-allowed'
    ]
  }

  // Width classes
  const widthClasses = props.fullWidth ? 'w-full' : ''

  return [
    ...baseClasses,
    sizeClasses[props.size] || sizeClasses.md,
    ...variantClasses[props.variant] || variantClasses.primary,
    widthClasses
  ].filter(Boolean).join(' ')
})
</script>

<style scoped>
/* Custom animations */
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

/* Focus styles */
button:focus {
  outline: none;
}

/* Disabled styles */
button:disabled {
  cursor: not-allowed;
}
</style>
