<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollContainer = ref(null)
const targetY = ref(0) // Posisi scroll asli browser
const currentY = ref(0) // Posisi visual yang "mengejar" targetY
const lerp = 0.05 // NILAI KUNCI: 0.05 = Sangat halus & selonjoran

const runScroll = () => {
  targetY.value = window.scrollY
  
  // Rumus Lerp: Current + (Target - Current) * Kecepatan
  currentY.value += (targetY.value - currentY.value) * lerp
  
  // Kita gerakkan container utama menggunakan transform agar hardware accelerated
  if (scrollContainer.value) {
    scrollContainer.value.style.transform = `translate3d(0, ${-currentY.value}px, 0)`
  }
  
  requestAnimationFrame(runScroll)
}

const onResize = () => {
  // Update tinggi body agar scrollbar browser tetap akurat
  if (scrollContainer.value) {
    document.body.style.height = `${scrollContainer.value.getBoundingClientRect().height}px`
  }
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    targetY.value = window.scrollY
  })
  
  window.addEventListener('resize', onResize)
  
  // Set tinggi awal
  setTimeout(onResize, 500)
  
  // Jalankan loop animasi
  requestAnimationFrame(runScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  document.body.style.height = ''
})
</script>

<template>
  <div ref="scrollContainer" class="smooth-content">
    <slot />
  </div>
</template>

<style>
/* Penting: Konten harus fixed/absolute agar bisa digerakkan mulus */
.smooth-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  will-change: transform;
  /* Memastikan tidak ada flickering */
  backface-visibility: hidden;
}

html {
  /* Biarkan scrollbar tetap ada tapi behavior smooth bawaan dimatikan */
  scroll-behavior: auto !important;
}
</style>