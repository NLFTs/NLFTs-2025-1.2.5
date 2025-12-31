<template>
  <section ref="heroRef" class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-12 gap-12 items-end">
        
        <div class="lg:col-span-7 pb-12">
          <div ref="tagRef" class="flex items-center gap-3 mb-10">
            <div class="flex gap-1">
              <div v-for="i in 3" :key="i" class="w-1 h-4 bg-blue-600/40"></div>
            </div>
            <span class="font-mono text-[10px] tracking-[0.5em] text-blue-500 uppercase">
              NLFTS_SYSTEM_CORE_v2.5.fts
            </span>
          </div>

          <div ref="titleContainer" class="relative">
            <h1 class="text-7xl md:text-[120px] font-black leading-[0.8] tracking-tighter uppercase italic">
              <span class="block text-white opacity-90">ARCHITECT</span>
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400">
                THE FUTURE
              </span>
            </h1>
            <div class="absolute -top-10 -left-10 text-[180px] font-black text-white/[0.02] pointer-events-none select-none">
              IT
            </div>
          </div>

          <div ref="descriptionRef" class="mt-10 max-w-xl">
            <p class="text-slate-400 text-lg md:text-xl font-light leading-relaxed border-l-4 border-blue-900 pl-6">
              Bukan sekadar kode, kami membangun ekosistem rekayasa tingkat tinggi. 
              Spesialisasi dalam optimasi low-level <span class="text-white font-mono">C++/C#</span> 
              untuk performa tanpa kompromi.
            </p>
          </div>

          <div ref="actionRef" class="mt-12 flex flex-wrap items-center gap-8">
            <UiAppButton @click="scrollToCommunity">MULAI_EKSEKUSI</UiAppButton>
            
            
              <div class="flex flex-col gap-1.5 group/copy relative">
    <span class="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] ml-1">
      Install_Dependency
    </span>
    
    <div 
      @click="copyToClipboard"
      class="relative flex items-center gap-4 bg-slate-900/40 border border-white/5 hover:border-blue-500/50 px-4 py-2.5 cursor-pointer transition-all duration-300 overflow-hidden group"
    >
      <div class="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div class="text-blue-500 font-mono text-xs opacity-70 group-hover:opacity-100 transition-opacity">
        $
      </div>

      <code class="font-mono text-[12px] text-slate-300 group-hover:text-blue-400 transition-colors tracking-tight">
        npm install nlfts-pixel
      </code>

      <div class="ml-4 flex items-center">
        <UIcon 
          :name="copied ? 'i-heroicons-check-circle-20-solid' : 'i-heroicons-clipboard-document'" 
          class="w-4 h-4 transition-all duration-300"
          :class="copied ? 'text-green-500 scale-110' : 'text-slate-600 group-hover:text-slate-400'"
        />
      </div>

      <Transition name="fade">
        <div v-if="copied" class="absolute -top-8 right-0 text-[9px] font-mono bg-green-500 text-white px-2 py-0.5 rounded">
          COPIED!
        </div>
      </Transition>
    </div>
  </div>


          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div ref="visualizerRef" class="relative">
            <div class="border border-white/10 bg-slate-900/20 backdrop-blur-md p-2 relative overflow-hidden">
              <div class="absolute top-0 left-0 w-full h-[2px] bg-blue-500/50 shadow-[0_0_15px_blue] z-20 animate-scan"></div>
              
              <div class="bg-black/40 border border-white/5 p-6">
                <div class="flex justify-between items-center mb-8">
                  <div class="flex gap-1.5">
                    <div class="w-2 h-2 rounded-full bg-red-500/40"></div>
                    <div class="w-2 h-2 rounded-full bg-blue-500/40"></div>
                  </div>
                  <div class="font-mono text-[9px] text-blue-600 tracking-widest">ENCODING_FTS_MODULE</div>
                </div>

                <div class="space-y-3 font-mono text-[11px]">
                  <div class="flex justify-between text-blue-400/60 border-b border-white/5 pb-2">
                    <span>MEMORY_ALLOC</span>
                    <span>0x7FFD2</span>
                  </div>
                  <div class="py-4 space-y-2">
                    <div class="h-1 bg-white/5 w-full">
                      <div class="h-full bg-blue-600 w-3/4 shadow-[0_0_10px_#2563eb]"></div>
                    </div>
                    <div class="h-1 bg-white/5 w-full">
                      <div class="h-full bg-blue-400 w-1/2 shadow-[0_0_10px_#60a5fa]"></div>
                    </div>
                  </div>
                  <p class="text-slate-500 leading-tight">
                    // NLFTs High-Performance Layer <br>
                    static_cast&lt;fts_core*&gt;(system)->initialize(); <br>
                    loading_assets... [OK]
                  </p>
                </div>
              </div>
            </div>

            <div ref="floatingCardRef" class="absolute -top-12 -right-6 bg-blue-700 text-white p-5 italic shadow-2xl z-30 hidden md:block">
              <p class="text-[10px] font-mono not-italic opacity-70">FILE_TYPE</p>
              <p class="text-3xl font-black tracking-tighter">.FTS</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// 1. Import utilities yang dibutuhkan (Nuxt 3 biasanya auto-import, tapi eksplisit lebih aman)
import { ref, onMounted, onUnmounted } from 'vue'

const copied = ref(false)

const copyToClipboard = () => {
  const text = 'npm install nlfts-pixel'
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  })
}

// 2. Definisi Refs untuk DOM Elements
const titleContainer = ref(null)
const descriptionRef = ref(null)
const actionRef = ref(null)
const tagRef = ref(null)
const visualizerRef = ref(null)
const floatingCardRef = ref(null)

// 3. Fungsi Scroll (Pindahkan ke atas agar bisa dibaca template)
const scrollToCommunity = () => {
  if (process.client) {
    const section = document.getElementById('section-children')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.log("Menjalankan urutan sistem .fts... (Section tujuan belum dibuat)")
    }
  }
}

// 4. Parallax Logic (Dipisah agar mudah dikelola)
const handleParallax = (e, gsap) => {
  if (!visualizerRef.value) return
  
  const x = (e.clientX / window.innerWidth - 0.5) * 30
  const y = (e.clientY / window.innerHeight - 0.5) * 30
  
  gsap.to(visualizerRef.value, {
    rotateY: -15 + (x / 10),
    rotateX: (y / 10),
    duration: 1,
    ease: 'power2.out'
  })
}

// 5. Lifecycle Hook
onMounted(async () => {
  // Hanya jalankan di browser
  if (process.client) {
    const { default: gsap } = await import('gsap')
    
    // Timeline Animasi Masuk
    const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.5 } })

    tl.from(tagRef.value, { y: -20, opacity: 0 })
      .from(titleContainer.value.querySelectorAll('span'), { 
        y: 100, 
        opacity: 0, 
        stagger: 0.2,
        skewY: 5 
      }, "-=1")
      .from(descriptionRef.value, { x: -30, opacity: 0 }, "-=1")
      .from(visualizerRef.value, { scale: 0.9, opacity: 0, rotateY: -15 }, "-=1.2")
      .from(floatingCardRef.value, { y: 40, opacity: 0, rotate: 10 }, "-=0.8")
      .from(actionRef.value, { y: 20, opacity: 0 }, "-=1")

    // Mouse Move Listener
    const mouseMoveHandler = (e) => handleParallax(e, gsap)
    window.addEventListener('mousemove', mouseMoveHandler)

    // Cleanup saat komponen hancur (Penting agar tidak lag)
    onUnmounted(() => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    })
  }
})

// 6. Expose fungsi agar bisa dipanggil dari luar jika perlu
defineExpose({ scrollToCommunity })
</script>

<style scoped>
@keyframes scan {
  0% { top: 0% }
  100% { top: 100% }
}
.animate-scan {
  animation: scan 4s linear infinite;
}
</style>