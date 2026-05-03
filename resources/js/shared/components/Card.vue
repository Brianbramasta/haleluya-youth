<template>
  <div :class="cardClasses" class="rounded-lg transition-all duration-200">
    <!-- Card Header -->
    <div v-if="$slots.header" :class="headerClasses" class="px-6 py-4 border-b">
      <slot name="header"></slot>
    </div>

    <!-- Card Body -->
    <div :class="bodyClasses" class="px-6 py-4">
      <slot></slot>
    </div>

    <!-- Card Footer -->
    <div v-if="$slots.footer" :class="footerClasses" class="px-6 py-4 border-t">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => [
      'default',
      'outlined',
      'elevated',
      'flat'
    ].includes(value)
  },
  padding: {
    type: String,
    default: 'normal',
    validator: (value) => ['none', 'sm', 'normal', 'lg', 'xl'].includes(value)
  },
  shadow: {
    type: String,
    default: 'medium',
    validator: (value) => ['none', 'small', 'medium', 'large', 'xl'].includes(value)
  },
  hover: {
    type: Boolean,
    default: false
  },
  clickable: {
    type: Boolean,
    default: false
  }
})

const cardClasses = computed(() => {
  const baseClasses = []
  
  // Variant classes
  const variantClasses = {
    default: ['bg-white'],
    outlined: ['bg-white', 'border', 'border-gray-200'],
    elevated: ['bg-white'],
    flat: ['bg-gray-50']
  }

  // Shadow classes
  const shadowClasses = {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
    xl: 'shadow-xl'
  }

  // Padding classes (will be applied to body)
  const paddingClasses = {
    none: '',
    sm: 'px-4 py-2',
    normal: 'px-6 py-4',
    lg: 'px-8 py-6',
    xl: 'px-10 py-8'
  }

  // Hover classes
  const hoverClasses = props.hover ? [
    'hover:shadow-lg',
    'hover:-translate-y-1',
    'transform'
  ] : []

  // Clickable classes
  const clickableClasses = props.clickable ? [
    'cursor-pointer',
    'active:scale-95',
    'transform'
  ] : []

  return [
    ...baseClasses,
    ...variantClasses[props.variant],
    shadowClasses[props.shadow],
    ...hoverClasses,
    ...clickableClasses
  ].filter(Boolean).join(' ')
})

const bodyClasses = computed(() => {
  if (props.padding === 'none') return 'px-0 py-0'
  
  const paddingMap = {
    sm: 'px-4 py-2',
    normal: 'px-6 py-4',
    lg: 'px-8 py-6',
    xl: 'px-10 py-8'
  }
  
  return paddingMap[props.padding] || paddingMap.normal
})

const headerClasses = computed(() => {
  if (props.padding === 'none') return 'px-0 py-0 border-b-0'
  
  const paddingMap = {
    sm: 'px-4 py-2',
    normal: 'px-6 py-4',
    lg: 'px-8 py-6',
    xl: 'px-10 py-8'
  }
  
  return paddingMap[props.padding] || paddingMap.normal
})

const footerClasses = computed(() => {
  if (props.padding === 'none') return 'px-0 py-0 border-t-0'
  
  const paddingMap = {
    sm: 'px-4 py-2',
    normal: 'px-6 py-4',
    lg: 'px-8 py-6',
    xl: 'px-10 py-8'
  }
  
  return paddingMap[props.padding] || paddingMap.normal
})
</script>

<style scoped>
/* Transition styles */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Transform styles */
.transform {
  transform: translateX(var(--tw-translate-x), 0) translateY(var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));
}

.-translate-y-1 {
  --tw-translate-y: -0.25rem;
  transform: translateX(var(--tw-translate-x, 0)) translateY(var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));
}

.active\:scale-95:active {
  --tw-scale-x: 0.95;
  --tw-scale-y: 0.95;
  transform: translateX(var(--tw-translate-x, 0)) translateY(var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));
}

/* Shadow utilities */
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\:shadow-lg:hover {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
