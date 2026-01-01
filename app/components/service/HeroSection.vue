<template>
  <section ref="heroRef" class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated Background Orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <!-- Floating Geometric Shapes -->
    <div class="floating-shapes absolute inset-0 pointer-events-none">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        
        <!-- Badge Label -->
        <div class="badge-label mb-6 opacity-0">
          <span class="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm">
            🚀 Professional Web Development Services
          </span>
        </div>

        <!-- Main Headline -->
        <h1 class="headline text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span class="headline-word opacity-0">Transform</span>
          <span class="headline-word opacity-0">Your</span>
          <span class="headline-word opacity-0">Digital</span>
          <br class="hidden md:block">
          <span class="headline-word opacity-0 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Vision</span>
          <span class="headline-word opacity-0">Into</span>
          <span class="headline-word opacity-0 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Reality</span>
        </h1>

        <!-- Sub-headline -->
        <p class="sub-headline text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0">
          Membangun website modern dengan teknologi terkini. Dari konsep hingga deployment, kami hadirkan solusi web yang powerful, scalable, dan user-friendly untuk bisnis Anda.
        </p>

        <!-- CTA Buttons -->
        <div class="cta-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0">
          <button class="btn-primary group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
            <span class="relative z-10">Dapatkan Penawaran</span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button class="btn-secondary px-8 py-4 border-2 border-blue-400/50 text-blue-300 font-semibold rounded-lg transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105">
            Lihat Layanan Kami
          </button>
        </div>

        <!-- Trust Indicators -->
        <div class="trust-indicators flex flex-wrap justify-center gap-6 opacity-0">
          <div class="trust-item flex items-center gap-2 text-gray-400">
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-medium">Modern Tech Stack</span>
          </div>
          
          <div class="trust-item flex items-center gap-2 text-gray-400">
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-medium">Fast Delivery</span>
          </div>
          
          <div class="trust-item flex items-center gap-2 text-gray-400">
            <svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-medium">24/7 Support</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0">
      <div class="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
        <div class="scroll-dot w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { gsap } from 'gsap'

const heroRef = ref(null)
let ctx
let mouseMoveHandler // ← simpan di luar

onMounted(async () => {
  await nextTick()

  ctx = gsap.context(() => {

    // ===== INITIAL STATE =====
    gsap.set([
      '.badge-label',
      '.headline-word',
      '.sub-headline',
      '.cta-buttons',
      '.trust-indicators',
      '.scroll-indicator'
    ], {
      opacity: 0,
      y: 40
    })

    // ===== ENTER ANIMATIONS =====
    gsap.to('.badge-label', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })

    gsap.to('.headline-word', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.3,
      ease: 'power3.out'
    })

    gsap.to('.sub-headline', { opacity: 1, y: 0, duration: 0.8, delay: 1 })
    gsap.to('.cta-buttons', { opacity: 1, y: 0, duration: 0.8, delay: 1.3, ease: 'back.out(1.4)' })
    gsap.to('.trust-indicators', { opacity: 1, y: 0, duration: 0.8, delay: 1.6 })
    gsap.to('.scroll-indicator', { opacity: 1, duration: 0.8, delay: 2 })

    // ===== LOOP ANIMATIONS =====
    gsap.to('.shape-1', { y: -30, x: 20, rotation: 360, duration: 8, repeat: -1, yoyo: true })
    gsap.to('.shape-2', { y: 40, x: -30, rotation: -360, duration: 10, repeat: -1, yoyo: true })
    gsap.to('.shape-3', { y: -50, x: -20, rotation: 180, duration: 12, repeat: -1, yoyo: true })
    gsap.to('.shape-4', { y: 30, x: 40, rotation: -180, duration: 9, repeat: -1, yoyo: true })

    // ===== PARALLAX =====
    mouseMoveHandler = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 50
      const y = (e.clientY / window.innerHeight - 0.5) * 50

      gsap.to('.floating-shapes', {
        x,
        y,
        duration: 1,
        ease: 'power2.out'
      })
    }

    heroRef.value?.addEventListener('mousemove', mouseMoveHandler)

  }, heroRef.value)
})

onUnmounted(() => {
  heroRef.value?.removeEventListener('mousemove', mouseMoveHandler)
  ctx?.revert()
})
</script>



<style scoped>
.hero-section {
  position: relative;
}

/* Animated Background Orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  pointer-events: none;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 70%);
  top: -10%;
  right: -10%;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(6, 182, 212, 0) 70%);
  bottom: -10%;
  left: -10%;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.6) 0%, rgba(14, 165, 233, 0) 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Floating Geometric Shapes */
.floating-shapes {
  transition: transform 0.3s ease-out;
}

.shape {
  position: absolute;
  opacity: 0.15;
  pointer-events: none;
}

.shape-1 {
  width: 80px;
  height: 80px;
  border: 2px solid rgba(59, 130, 246, 0.5);
  border-radius: 20px;
  top: 15%;
  right: 10%;
  transform: rotate(45deg);
}

.shape-2 {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.3), transparent);
  border-radius: 50%;
  top: 60%;
  left: 15%;
}

.shape-3 {
  width: 100px;
  height: 100px;
  border: 3px solid rgba(14, 165, 233, 0.4);
  top: 30%;
  left: 8%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.shape-4 {
  width: 70px;
  height: 70px;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), transparent);
  bottom: 20%;
  right: 15%;
  border-radius: 10px;
  transform: rotate(30deg);
}

/* Initial States for Animation */
.badge-label,
.headline-word,
.sub-headline,
.cta-buttons,
.trust-indicators,
.scroll-indicator {
  transform: translateY(30px);
}

/* Glow Effect on Headline */
.headline {
  text-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
}

/* Button Hover Effects */
.btn-primary {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

/* Scroll Dot Animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}
</style>