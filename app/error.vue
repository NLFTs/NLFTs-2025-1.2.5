<template>
  <div class="relative min-h-screen bg-[#020408] text-slate-300 font-mono overflow-hidden flex items-center justify-center" @mousemove="handleMouseMove">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

    <div 
      ref="spotlight"
      class="pointer-events-none absolute inset-0 z-30 transition-opacity duration-500"
      :style="{
        background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(255, 0, 0, 0.08), transparent 80%)`
      }"
    ></div>

    <div class="relative z-10 w-full max-w-2xl px-6">
      <div class="flex items-center gap-2 mb-8 opacity-50">
        <div class="w-3 h-3 rounded-full bg-red-500/50 animate-pulse"></div>
        <span class="text-xs uppercase tracking-widest">Security Protocol Alpha-01</span>
      </div>

      <div ref="container" class="border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
        <div class="flex flex-col md:flex-row items-center gap-8">
          
          <div class="relative group">
            <h1 ref="code" class="text-8xl font-bold text-white tracking-tighter">
              {{ error.statusCode }}
            </h1>
            <div class="absolute -top-4 -right-4 rotate-12 group-hover:rotate-45 transition-transform duration-500">
              <Icon name="logos:react" size="32" class="opacity-20 grayscale brightness-200" />
            </div>
          </div>

          <div class="hidden md:block w-[1px] h-20 bg-white/10"></div>

          <div class="text-center md:text-left">
            <h2 class="text-xl font-semibold text-white mb-2 tracking-tight">Access Restricted</h2>
            <p class="text-sm text-slate-500 leading-relaxed mb-6">
              {{ error.statusCode === 404 
                ? 'The requested endpoint is not authenticated or has been moved to a secure vault.' 
                : 'Server integrity compromised. Internal handshake failed.' }}
            </p>
          </div>
        </div>

        <div class="mt-8 h-[2px] w-full bg-white/5 overflow-hidden">
          <div ref="progress" class="h-full bg-red-600 w-full origin-left"></div>
        </div>
      </div>

      <div class="mt-8 flex justify-center gap-4">
        <button 
          @click="handleClearError"
          class="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white text-black font-bold text-sm hover:bg-slate-200 transition-all active:scale-95"
        >
          Verify Identity & Return
        </button>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20 text-[10px] uppercase tracking-[0.5em] whitespace-nowrap">
      Hash: {{ Math.random().toString(36).substring(7).toUpperCase() }} // Nuxt-Shield-Active
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({ error: Object })
const container = ref(null)
const code = ref(null)
const progress = ref(null)
const mouse = reactive({ x: 0, y: 0 })

const handleClearError = () => clearError({ redirect: '/' })

const handleMouseMove = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "expo.out" } })

  // Entrance
  tl.from(container.value, {
    y: 40,
    opacity: 0,
    duration: 1.5,
  })
  .from(code.value, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
  }, "-=1")
  .from(progress.value, {
    scaleX: 0,
    duration: 2,
    ease: "power4.inOut"
  }, "-=0.5")

  // Subtle code flicker
  gsap.to(code.value, {
    opacity: 0.7,
    duration: 0.1,
    repeat: 5,
    yoyo: true,
    delay: 2,
    repeatDelay: 3
  })
})
</script>