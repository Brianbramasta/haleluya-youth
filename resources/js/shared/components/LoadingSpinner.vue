<template>
  <div :class="containerClasses" class="flex items-center justify-center">
    <div :class="spinnerClasses" class="animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
    
    <!-- Optional Text -->
    <span v-if="text" :class="textClasses" class="ml-2">
      {{ text }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  color: {
    type: String,
    default: 'blue',
    validator: (value) => ['blue', 'green', 'red', 'purple', 'gray', 'white'].includes(value)
  },
  text: {
    type: String,
    default: ''
  },
  centered: {
    type: Boolean,
    default: true
  }
})

const spinnerClasses = computed(() => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5', 
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const colorClasses = {
    blue: 'border-t-blue-600',
    green: 'border-t-green-600',
    red: 'border-t-red-600',
    purple: 'border-t-purple-600',
    gray: 'border-t-gray-600',
    white: 'border-t-white'
  }

  return [
    sizeClasses[props.size] || sizeClasses.md,
    colorClasses[props.color] || colorClasses.blue
  ].join(' ')
})

const containerClasses = computed(() => {
  const baseClasses = ['inline-flex', 'items-center']
  
  if (props.centered) {
    baseClasses.push('justify-center')
  }
  
  if (props.text) {
    baseClasses.push('space-x-2')
  }
  
  return baseClasses.join(' ')
})

const textClasses = computed(() => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  }

  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    purple: 'text-purple-600',
    gray: 'text-gray-600',
    white: 'text-white'
  }

  return [
    sizeClasses[props.size] || sizeClasses.md,
    colorClasses[props.color] || colorClasses.blue
  ].join(' ')
})
</script>

<style scoped>
/* Animation */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Border styles */
.border-2 {
  border-width: 2px;
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));
}

/* Color utilities */
.border-t-blue-600 {
  --tw-border-opacity: 1;
  border-top-color: rgba(37, 99, 235, var(--tw-border-opacity));
}

.border-t-green-600 {
  --tw-border-opacity: 1;
  border-top-color: rgba(34, 197, 94, var(--tw-border-opacity));
}

.border-t-red-600 {
  --tw-border-opacity: 1;
  border-top-color: rgba(220, 38, 38, var(--tw-border-opacity));
}

.border-t-purple-600 {
  --tw-border-opacity: 1;
  border-top-color: rgba(147, 51, 234, var(--tw-border-opacity));
}

.border-t-gray-600 {
  --tw-border-opacity: 1;
  border-top-color: rgba(75, 85, 99, var(--tw-border-opacity));
}

.border-t-white {
  --tw-border-opacity: 1;
  border-top-color: rgba(255, 255, 255, var(--tw-border-opacity));
}

/* Text color utilities */
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgba(37, 99, 235, var(--tw-text-opacity));
}

.text-green-600 {
  --tw-text-opacity: 1;
  color: rgba(34, 197, 94, var(--tw-text-opacity));
}

.text-red-600 {
  --tw-text-opacity: 1;
  color: rgba(220, 38, 38, var(--tw-text-opacity));
}

.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgba(147, 51, 234, var(--tw-text-opacity));
}

.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgba(75, 85, 99, var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}

/* Size utilities */
.w-4 {
  width: 1rem;
}

.h-4 {
  height: 1rem;
}

.w-5 {
  width: 1.25rem;
}

.h-5 {
  height: 1.25rem;
}

.w-6 {
  width: 1.5rem;
}

.h-6 {
  height: 1.5rem;
}

.w-8 {
  width: 2rem;
}

.h-8 {
  height: 2rem;
}

.w-12 {
  width: 3rem;
}

.h-12 {
  height: 3rem;
}

/* Flex utilities */
.inline-flex {
  display: inline-flex;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}

/* Text size utilities */
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
</style>
