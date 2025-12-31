<template>
  <div 
    v-if="!isLoaded" 
    class="fixed inset-0 bg-[#010409] z-[999] flex flex-col items-center justify-center pointer-events-auto"
  >
    <div ref="leftDoor" class="fixed inset-0 w-1/2 bg-[#010409] transform origin-left"></div>
    <div ref="rightDoor" class="fixed inset-0 w-1/2 bg-[#010409] transform origin-right right-0"></div>

    <div ref="loadingContent" class="relative z-10 text-center opacity-0">
      <div class="relative w-20 h-20 mx-auto mb-8">
        <div class="absolute inset-0 border border-blue-500/50 rotate-45 animate-spin-slow"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-4xl font-black text-white italic">N</span>
        </div>
      </div>
      
      <p ref="quoteText" class="text-slate-400 font-light italic max-w-lg px-8 text-center text-lg h-[40px] flex items-center justify-center opacity-0"></p>
      
      <div class="mt-8">
        <div class="h-1 bg-white/5 w-48 mx-auto overflow-hidden">
          <div ref="progressBar" class="h-full bg-blue-600 w-0 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const isLoaded = ref(false)
const quoteText = ref(null)
const progressBar = ref(null)
const loadingContent = ref(null)
const leftDoor = ref(null)
const rightDoor = ref(null)

const quotes = [
  "Percayakan Bisnis anda pada kami, anda adalah prioritas.",
  "Format .fts membuat pekerjaan mu menjadi mudah dan efisien.",
  "Inovasi bukan hanya ide, tapi eksekusi dengan presisi.",
  "Tau kah kamu 60% lulusan IT jago dalam menulis kode tapi tidak bisa membuat website?",
  "Kami mengoptimasi hingga level terendah untuk performa tanpa kompromi.",
  "Membangun masa depan digital dengan arsitektur yang solid.",
  "Setiap baris kode adalah fondasi dari ekosistem yang tangguh.",
  "NLFTs: Solusi rekayasa perangkat lunak generasi baru.",
  "Desain intuitif, performa revolusioner.",
  "Mengubah kompleksitas menjadi kesederhanaan yang powerful."
]

let currentQuoteIndex = 0
let quoteInterval = null

const startQuoteAnimation = () => {
  gsap.fromTo(quoteText.value, 
    { opacity: 0, y: 10 }, 
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
  )

  quoteInterval = setInterval(() => {
    gsap.to(quoteText.value, 
      { 
        opacity: 0, 
        y: -10, 
        duration: 0.5, 
        ease: "power2.in", 
        onComplete: () => {
          currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length
          quoteText.value.textContent = quotes[currentQuoteIndex]
          gsap.fromTo(quoteText.value, 
            { opacity: 0, y: 10 }, 
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
          )
        }
      }
    )
  }, 4000) // Ganti kutipan setiap 4 detik
}

const stopQuoteAnimation = () => {
  if (quoteInterval) {
    clearInterval(quoteInterval)
  }
}

onMounted(async () => {
  // Pastikan GSAP diimpor di sini jika tidak global
  // const { gsap } = await import('gsap') 

  // Inisialisasi kutipan pertama
  quoteText.value.textContent = quotes[currentQuoteIndex]

  // Animasi konten loading masuk
  gsap.fromTo(loadingContent.value,
    { opacity: 0, scale: 0.95 },
    { opacity: 1, scale: 1, duration: 1.5, ease: "expo.out", delay: 0.5 }
  )

  startQuoteAnimation()

  // Simulasikan progress bar / tunggu hingga semua resource dimuat
  let progress = 0
  const interval = setInterval(() => {
    progress += Math.random() * 15 // Random progress untuk kesan dinamis
    if (progress > 100) progress = 100
    progressBar.value.style.width = `${progress}%`

    if (progress >= 100) {
      clearInterval(interval)
      
      // Tunggu 3 detik setelah progress 100%
      setTimeout(() => {
        stopQuoteAnimation()
        
        // Animasi pintu terbuka (menggunakan GSAP timeline)
        const tl = gsap.timeline({
          onComplete: () => {
            isLoaded.value = true // Hapus overlay setelah animasi selesai
            document.body.style.overflow = '' // Kembalikan scroll body
          }
        })

        tl.to(loadingContent.value, { opacity: 0, duration: 0.5 }, 0)
          .to(leftDoor.value, { x: '-100%', duration: 1.2, ease: "power4.inOut" }, 0.3)
          .to(rightDoor.value, { x: '100%', duration: 1.2, ease: "power4.inOut" }, 0.3)
      }, 3000)
    }
  }, 200) // Update progress setiap 200ms
  
  // Mencegah scroll saat loading
  document.body.style.overflow = 'hidden'
})
</script>

<style scoped>
/* Animasi putar lambat */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 5s linear infinite;
}
</style>