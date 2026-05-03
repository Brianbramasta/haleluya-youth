import { ref, reactive, readonly } from 'vue'

// Hero section data
export const heroData = ref({
  headline: "Bergabung dengan Komunitas Youth Gereja",
  subtitle: "Temukan persahabatan, tumbuh dalam iman, dan raih potensimu bersama kami",
  joinButton: "Join Komunitas",
  eventsButton: "Lihat Event",
  backgroundImage: "https://images.unsplash.com/photo-1438239472732-79d4556f1c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
})

// About section data
export const aboutData = reactive({
  vision: {
    title: "Visi Kami",
    description: "Menjadi generasi muda yang berakar kuat dalam iman, berbuah dalam pelayanan, dan menjadi berkat bagi banyak orang. Kami percaya setiap pemuda memiliki potensi luar biasa untuk mengubah dunia.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  },
  mission: {
    title: "Misi Kami", 
    description: "Membangun komunitas yang inklusif, mengembangkan pemimpin muda yang berkarakter, dan menyebarluaskan kasih Kristus melalui pelayanan yang kreatif dan relevan.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  stats: {
    members: 150,
    eventsPerMonth: 8,
    yearsActive: 5,
    livesImpacted: 1000
  },
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Youth worship session",
      category: "worship"
    },
    {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Bible study group",
      category: "study"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Community outreach",
      category: "outreach"
    },
    {
      url: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Youth conference",
      category: "conference"
    },
    {
      url: "https://images.unsplash.com/photo-1598458047223-263b4e7f5f3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Fun games and activities",
      category: "activities"
    },
    {
      url: "https://images.unsplash.com/photo-1514468759968-7923dcf4c3e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Worship night",
      category: "worship"
    },
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Team building activities",
      category: "activities"
    },
    {
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Community service",
      category: "outreach"
    }
  ]
})

// Schedule data
export const scheduleData = ref([
  {
    id: 1,
    title: "Youth Service",
    day: "Minggu",
    time: "09:00 - 11:00",
    location: "Gedung Utama Lantai 2",
    description: "Kebaktian rutin pemuda dengan pujian, firman, dan fellowship",
    status: "active",
    iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    id: 2,
    title: "Bible Study",
    day: "Rabu",
    time: "19:00 - 21:00",
    location: "Ruang Kelas 3",
    description: "Pembahasan Alkitab secara mendalam dan diskusi kelompok",
    status: "active",
    iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    iconBg: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    id: 3,
    title: "Prayer Meeting",
    day: "Jumat",
    time: "20:00 - 21:30",
    location: "Gedung Utama Lantai 1",
    description: "Doa bersama untuk kebutuhan jemaat dan pelayanan",
    status: "active",
    iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    id: 4,
    title: "Fellowship Night",
    day: "Sabtu",
    time: "18:00 - 20:00",
    location: "Rangkul Space",
    description: "Fellowship santai dengan games, makan malam, dan sharing",
    status: "libur",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    id: 5,
    title: "Music Practice",
    day: "Selasa",
    time: "18:30 - 20:30",
    location: "Studio Musik",
    description: "Latihan pujian untuk kebaktian mingguan",
    status: "active",
    iconPath: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600"
  },
  {
    id: 6,
    title: "Discipleship Class",
    day: "Kamis",
    time: "19:00 - 21:00",
    location: "Ruang Kelas 1",
    description: "Kelas pembinaan iman untuk pemuda yang ingin bertumbuh",
    status: "active",
    iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600"
  }
])

// Special events data
export const specialEventsData = ref([
  {
    id: 1,
    title: "Youth Camp 2026",
    date: "15-17 Mei 2026",
    time: "Full Day",
    description: "Retreat pemuda 3 hari dengan tema 'Rise Up' di Puncak, Bogor",
    location: "Puncak, Bogor",
    registrationOpen: true,
    maxParticipants: 50,
    currentParticipants: 32
  },
  {
    id: 2,
    title: "Easter Celebration",
    date: "31 Maret 2026",
    time: "18:00 - 21:00",
    description: "Perayaan Paskah dengan drama musikal dan kebaktian khusus",
    location: "Gedung Utama",
    registrationOpen: true,
    maxParticipants: 200,
    currentParticipants: 156
  }
])

// Location data
export const locationData = reactive({
  address: {
    full: "Jl. Gereja Kita No. 123, Kelurahan Mekar Jaya, Kecamatan Sukamaju, Kota Jakarta Selatan, DKI Jakarta 12345, Indonesia",
    short: "Jl. Gereja Kita No. 123, Jakarta Selatan"
  },
  coordinates: {
    lat: -6.2088,
    lng: 106.8456
  },
  contact: {
    phone: "+62 21 1234 5678",
    whatsapp: "6281234567890",
    whatsappFormatted: "+62 812-3456-7890",
    email: "youth@gerejakita.org"
  },
  operatingHours: [
    { day: "Senin - Jumat", hours: "09:00 - 21:00", isOpen: true },
    { day: "Sabtu", hours: "08:00 - 22:00", isOpen: true },
    { day: "Minggu", hours: "07:00 - 21:00", isOpen: true },
    { day: "Hari Libur", hours: "08:00 - 17:00", isOpen: true }
  ]
})

// CTA section data
export const ctaData = reactive({
  headline: "Bergabunglah dengan Komunitas Youth Kita",
  subtitle: "Temukan teman baru, tumbuh dalam iman, dan raih potensi terbaikmu bersama kami. Daftar sekarang dan mulai perjalanan spiritualmu!",
  benefits: [
    { id: 1, text: "Komunitas yang supportif dan welcoming" },
    { id: 2, text: "Pembinaan iman yang terstruktur" },
    { id: 3, text: "Kegiatan seru dan bermanfaat setiap bulan" },
    { id: 4, text: "Kesempatan untuk mengembangkan talenta" }
  ]
})

// Social media data
export const socialMediaData = ref([
  {
    name: "Instagram",
    url: "https://instagram.com/youthgerejakita",
    icon: "instagram",
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    name: "Facebook",
    url: "https://facebook.com/youthgerejakita", 
    icon: "facebook",
    color: "bg-blue-600"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@youthgerejakita",
    icon: "youtube",
    color: "bg-red-600"
  }
])

// Interest options for registration
export const interestOptions = ref([
  { id: "music", name: "Music/Team Pujian", icon: "🎵" },
  { id: "multimedia", name: "Multimedia/Kreatif", icon: "🎨" },
  { id: "outreach", name: "Outreach/Pelayanan", icon: "🤝" },
  { id: "education", name: "Education/Pengajaran", icon: "📚" },
  { id: "event", name: "Event/Perlengkapan", icon: "📋" }
])

// Navigation items
export const navigationItems = ref([
  { id: 1, name: "Tentang", href: "#tentang" },
  { id: 2, name: "Jadwal", href: "#schedule-section" },
  { id: 3, name: "Lokasi", href: "#lokasi" },
  { id: 4, name: "Daftar", href: "#cta-section" }
])

// Footer data
export const footerData = reactive({
  church: {
    name: "Youth Gereja Kita",
    description: "Komunitas pemuda yang bersemangat untuk tumbuh dalam iman, menemukan tujuan, dan menjadi berkat bagi banyak orang."
  },
  quickLinks: [
    { name: "Tentang Kita", href: "#tentang" },
    { name: "Jadwal Ibadah", href: "#schedule-section" },
    { name: "Lokasi", href: "#lokasi" },
    { name: "Daftar Sekarang", href: "#cta-section" }
  ],
  contact: {
    phone: "+62 21 1234 5678",
    email: "youth@gerejakita.org",
    address: "Jakarta Selatan, Indonesia"
  }
})

// Utility functions
export const formatPhoneNumber = (phone) => {
  return phone.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3")
}

export const formatWhatsAppNumber = (phone) => {
  return phone.replace(/[-\s]/g, '')
}

export const generateGoogleMapsUrl = (address) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

export const generateWhatsAppUrl = (phone, message = '') => {
  const formattedPhone = formatWhatsAppNumber(phone)
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`
}

export const animateNumber = (elementId, start, end, duration) => {
  const element = document.getElementById(elementId)
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
    element.textContent = Math.floor(current).toLocaleString()
  }, 16)
}

// Composable for loading states
export const useLoadingStates = () => {
  const loading = ref(false)
  const error = ref(null)
  
  const setLoading = (state) => {
    loading.value = state
    if (state) error.value = null
  }
  
  const setError = (message) => {
    error.value = message
    loading.value = false
  }
  
  const clearError = () => {
    error.value = null
  }
  
  return {
    loading: readonly(loading),
    error: readonly(error),
    setLoading,
    setError,
    clearError
  }
}
