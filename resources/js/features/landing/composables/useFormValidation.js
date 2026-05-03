import { reactive, ref, readonly } from 'vue'

export const useFormValidation = () => {
  const errors = reactive({})
  const isValid = ref(false)
  
  // Validation rules
  const validationRules = {
    required: (value) => {
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        return 'Field ini wajib diisi'
      }
      return null
    },
    
    minLength: (value, min) => {
      if (value && value.length < min) {
        return `Minimal ${min} karakter`
      }
      return null
    },
    
    maxLength: (value, max) => {
      if (value && value.length > max) {
        return `Maksimal ${max} karakter`
      }
      return null
    },
    
    email: (value) => {
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Format email tidak valid'
      }
      return null
    },
    
    phone: (value) => {
      if (value) {
        const cleanPhone = value.replace(/[-\s]/g, '')
        if (!/^08[0-9]{8,12}$/.test(cleanPhone)) {
          return 'Format nomor telepon tidak valid (contoh: 081234567890)'
        }
      }
      return null
    },
    
    whatsapp: (value) => {
      if (value) {
        const cleanWhatsApp = value.replace(/[-\s]/g, '')
        if (!/^08[0-9]{8,12}$/.test(cleanWhatsApp)) {
          return 'Format nomor WhatsApp tidak valid (contoh: 081234567890)'
        }
      }
      return null
    },
    
    age: (value, min = 15, max = 30) => {
      const ageNum = parseInt(value)
      if (isNaN(ageNum) || ageNum < min || ageNum > max) {
        return `Umur harus antara ${min}-${max} tahun`
      }
      return null
    },
    
    numbersOnly: (value) => {
      if (value && !/^[0-9]+$/.test(value)) {
        'Hanya angka yang diperbolehkan'
      }
      return null
    },
    
    alphanum: (value) => {
      if (value && !/^[a-zA-Z0-9\s]+$/.test(value)) {
        return 'Hanya huruf, angka, dan spasi yang diperbolehkan'
      }
      return null
    }
  }
  
  // Validate single field
  const validateField = (fieldName, value, rules) => {
    const fieldErrors = []
    
    for (const rule of rules) {
      const error = validateRule(rule, value)
      if (error) {
        fieldErrors.push(error)
      }
    }
    
    if (fieldErrors.length > 0) {
      errors[fieldName] = fieldErrors[0]
      return false
    } else {
      delete errors[fieldName]
      return true
    }
  }
  
  // Validate single rule
  const validateRule = (rule, value) => {
    if (typeof rule === 'string') {
      return validationRules[rule]?.(value) || null
    } else if (typeof rule === 'object') {
      const { type, ...params } = rule
      return validationRules[type]?.(value, ...Object.values(params)) || null
    }
    return null
  }
  
  // Validate entire form
  const validateForm = (formData, validationSchema) => {
    let formIsValid = true
    
    // Clear previous errors
    Object.keys(errors).forEach(key => delete errors[key])
    
    // Validate each field
    for (const [fieldName, rules] of Object.entries(validationSchema)) {
      const fieldValue = formData[fieldName]
      const fieldValid = validateField(fieldName, fieldValue, rules)
      
      if (!fieldValid) {
        formIsValid = false
      }
    }
    
    isValid.value = formIsValid
    return formIsValid
  }
  
  // Real-time validation
  const validateFieldRealtime = (formData, fieldName, validationSchema) => {
    const rules = validationSchema[fieldName]
    if (rules) {
      return validateField(fieldName, formData[fieldName], rules)
    }
    return true
  }
  
  // Clear specific field error
  const clearFieldError = (fieldName) => {
    delete errors[fieldName]
  }
  
  // Clear all errors
  const clearAllErrors = () => {
    Object.keys(errors).forEach(key => delete errors[key])
    isValid.value = false
  }
  
  // Check if form has errors
  const hasErrors = () => {
    return Object.keys(errors).length > 0
  }
  
  // Get field error
  const getFieldError = (fieldName) => {
    return errors[fieldName] || null
  }
  
  // Check if field has error
  const fieldHasError = (fieldName) => {
    return fieldName in errors
  }
  
  // Common validation schemas
  const validationSchemas = {
    registration: {
      name: [
        'required',
        { type: 'minLength', min: 3 },
        { type: 'maxLength', max: 50 },
        'alphanum'
      ],
      whatsapp: [
        'required',
        'whatsapp'
      ],
      age: [
        'required',
        { type: 'age', min: 15, max: 30 }
      ]
    },
    
    contact: {
      name: [
        'required',
        { type: 'minLength', min: 3 },
        { type: 'maxLength', max: 50 }
      ],
      email: [
        'required',
        'email'
      ],
      phone: [
        'phone'
      ],
      message: [
        'required',
        { type: 'minLength', min: 10 },
        { type: 'maxLength', max: 500 }
      ]
    },
    
    eventRegistration: {
      name: [
        'required',
        { type: 'minLength', min: 3 },
        { type: 'maxLength', max: 50 }
      ],
      whatsapp: [
        'required',
        'whatsapp'
      ],
      age: [
        'required',
        { type: 'age', min: 15, max: 30 }
      ],
      email: [
        'required',
        'email'
      ],
      interests: {
        validate: (value) => {
          if (!value || value.length === 0) {
            return 'Pilih minimal satu minat pelayanan'
          }
          return null
        }
      }
    }
  }
  
  // Custom validation for complex fields
  const validateCustomField = (fieldName, value, customValidator) => {
    const error = customValidator(value)
    if (error) {
      errors[fieldName] = error
      return false
    } else {
      delete errors[fieldName]
      return true
    }
  }
  
  // Format helpers
  const formatPhone = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '')
    
    // Format as 0812-3456-7890
    if (cleaned.length <= 4) return cleaned
    if (cleaned.length <= 8) return `${cleaned.slice(0, 4)}-${cleaned.slice(4)}`
    return `${cleaned.slice(0, 4)}-${cleaned.slice(4, 8)}-${cleaned.slice(8, 12)}`
  }
  
  const formatWhatsApp = (value) => {
    return formatPhone(value)
  }
  
  const formatAge = (value) => {
    // Only allow numbers and limit to 2 digits
    const cleaned = value.replace(/\D/g, '').slice(0, 2)
    return cleaned
  }
  
  return {
    // Reactive state
    errors: readonly(errors),
    isValid: readonly(isValid),
    
    // Validation methods
    validateField,
    validateForm,
    validateFieldRealtime,
    validateCustomField,
    
    // Error handling
    clearFieldError,
    clearAllErrors,
    hasErrors,
    getFieldError,
    fieldHasError,
    
    // Validation rules
    validationRules,
    validationSchemas,
    
    // Formatting helpers
    formatPhone,
    formatWhatsApp,
    formatAge
  }
}

// Composable for form handling
export const useForm = (initialData = {}, validationSchema = {}) => {
  const { validateForm, validateFieldRealtime, clearAllErrors, errors, isValid } = useFormValidation()
  
  const formData = reactive({ ...initialData })
  const isSubmitting = ref(false)
  const submitError = ref(null)
  
  // Update form data
  const updateField = (fieldName, value) => {
    formData[fieldName] = value
    
    // Real-time validation
    if (validationSchema[fieldName]) {
      validateFieldRealtime(formData, fieldName, validationSchema)
    }
  }
  
  // Reset form
  const resetForm = () => {
    Object.keys(formData).forEach(key => {
      if (Array.isArray(formData[key])) {
        formData[key] = []
      } else if (typeof formData[key] === 'boolean') {
        formData[key] = false
      } else {
        formData[key] = ''
      }
    })
    clearAllErrors()
    submitError.value = null
  }
  
  // Submit form
  const submitForm = async (submitHandler) => {
    // Validate form
    const formIsValid = validateForm(formData, validationSchema)
    
    if (!formIsValid) {
      return false
    }
    
    isSubmitting.value = true
    submitError.value = null
    
    try {
      const result = await submitHandler(formData)
      return result
    } catch (error) {
      submitError.value = error.message || 'Terjadi kesalahan saat mengirim form'
      return false
    } finally {
      isSubmitting.value = false
    }
  }
  
  return {
    // Form data
    formData: readonly(formData),
    
    // Form state
    isSubmitting: readonly(isSubmitting),
    submitError: readonly(submitError),
    errors,
    isValid,
    
    // Form methods
    updateField,
    resetForm,
    submitForm
  }
}
