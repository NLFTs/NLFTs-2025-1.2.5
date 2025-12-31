<template>
  <div class="fixed top-0 left-0 w-full z-[300] pointer-events-none">
    <div 
      ref="progressRef" 
      class="h-[3px] bg-blue-600 shadow-[0_0_15px_#2563eb] w-0 transition-opacity duration-500"
      :class="{ 'opacity-100': isLoading, 'opacity-0': !isLoading }"
    ></div>
    
    <div 
      v-if="isLoading"
      class="absolute top-0 right-0 h-[3px] w-20 bg-gradient-to-r from-transparent to-white/50 blur-[2px]"
    ></div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp()
const progressRef = ref(null)
const isLoading = ref(false)
const nuxtApp = useNuxtApp()

onMounted(async () => {
  const { default: gsap } = await import('gsap')

  // Hook Nuxt: Saat mulai pindah halaman
  nuxtApp.hook('page:start', () => {
    isLoading.value = true
    gsap.to(progressRef.value, {
      width: '70%',
      duration: 2,
      ease: 'power2.out'
    })
  })

  // Hook Nuxt: Saat halaman selesai dimuat
  nuxtApp.hook('page:finish', () => {
    gsap.to(progressRef.value, {
      width: '100%',
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        setTimeout(() => {
          isLoading.value = false
          gsap.set(progressRef.value, { width: '0%' })
        }, 300)
      }
    })
  })
})
</script>