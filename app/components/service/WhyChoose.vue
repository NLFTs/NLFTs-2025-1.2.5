<template>
  <section class="why-choose-section relative py-20 md:py-32 overflow-hidden">
    
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="gradient-orb gradient-orb-1"></div>
      <div class="gradient-orb gradient-orb-2"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="section-header text-center mb-16 max-w-3xl mx-auto">
        <div class="badge-label mb-4 opacity-0">
          <span class="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm font-medium backdrop-blur-sm">
            ⭐ Why Choose Us
          </span>
        </div>
        
        <h2 class="headline text-4xl md:text-5xl font-bold text-white mb-6 opacity-0">
          Mengapa Memilih
          <span class="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Layanan Kami?</span>
        </h2>
        
        <p class="description text-lg text-gray-400 leading-relaxed opacity-0">
          Pengalaman, kualitas, dan dedikasi kami dalam menghadirkan solusi web terbaik untuk kesuksesan bisnis Anda.
        </p>
      </div>

      <!-- Stats Counter Grid -->
      <div class="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        
        <!-- Stat 1: Projects -->
        <div class="stat-card opacity-0">
          <div class="stat-wrapper relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20 text-center overflow-hidden">
            <div class="stat-glow"></div>
            
            <div class="icon-circle w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-500/20 border border-blue-400/30">
              <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            
            <div class="stat-number text-4xl md:text-5xl font-bold text-white mb-2">
              <span class="counter" data-target="150">0</span>+
            </div>
            
            <div class="stat-label text-gray-400 text-sm font-medium">
              Projects Completed
            </div>
          </div>
        </div>

        <!-- Stat 2: Clients -->
        <div class="stat-card opacity-0">
          <div class="stat-wrapper relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 text-center overflow-hidden">
            <div class="stat-glow"></div>
            
            <div class="icon-circle w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/30">
              <svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            
            <div class="stat-number text-4xl md:text-5xl font-bold text-white mb-2">
              <span class="counter" data-target="120">0</span>+
            </div>
            
            <div class="stat-label text-gray-400 text-sm font-medium">
              Happy Clients
            </div>
          </div>
        </div>

        <!-- Stat 3: Experience -->
        <div class="stat-card opacity-0">
          <div class="stat-wrapper relative bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 text-center overflow-hidden">
            <div class="stat-glow"></div>
            
            <div class="icon-circle w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-500/20 border border-purple-400/30">
              <svg class="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            
            <div class="stat-number text-4xl md:text-5xl font-bold text-white mb-2">
              <span class="counter" data-target="5">0</span>+
            </div>
            
            <div class="stat-label text-gray-400 text-sm font-medium">
              Years Experience
            </div>
          </div>
        </div>

        <!-- Stat 4: Success Rate -->
        <div class="stat-card opacity-0">
          <div class="stat-wrapper relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20 text-center overflow-hidden">
            <div class="stat-glow"></div>
            
            <div class="icon-circle w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-500/20 border border-green-400/30">
              <svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            
            <div class="stat-number text-4xl md:text-5xl font-bold text-white mb-2">
              <span class="counter" data-target="98">0</span>%
            </div>
            
            <div class="stat-label text-gray-400 text-sm font-medium">
              Success Rate
            </div>
          </div>
        </div>

      </div>

      <!-- USP/Keunggulan Grid -->
      <div class="usp-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- USP 1: Modern Tech Stack -->
        <div class="usp-card group opacity-0">
          <div class="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 cursor-pointer overflow-hidden h-full">
            <div class="usp-glow"></div>
            
            <div class="icon-wrapper w-12 h-12 mb-5 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
              Modern Tech Stack
            </h3>
            
            <p class="text-gray-400 leading-relaxed text-sm">
              Menggunakan teknologi web terkini seperti Vue.js, Nuxt, React, Node.js, dan framework modern lainnya untuk performa optimal.
            </p>
          </div>
        </div>

        <!-- USP 2: Fast Delivery -->
        <div class="usp-card group opacity-0">
          <div class="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 cursor-pointer overflow-hidden h-full">
            <div class="usp-glow"></div>
            
            <div class="icon-wrapper w-12 h-12 mb-5 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
              <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              Fast Delivery
            </h3>
            
            <p class="text-gray-400 leading-relaxed text-sm">
              Timeline pengerjaan yang efisien tanpa mengorbankan kualitas. Project selesai tepat waktu sesuai kesepakatan.
            </p>
          </div>
        </div>

        <!-- USP 3: 24/7 Support -->
        <div class="usp-card group opacity-0">
          <div class="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 cursor-pointer overflow-hidden h-full">
            <div class="usp-glow"></div>
            
            <div class="icon-wrapper w-12 h-12 mb-5 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              24/7 Support
            </h3>
            
            <p class="text-gray-400 leading-relaxed text-sm">
              Tim support kami siap membantu kapan saja. Respons cepat untuk setiap pertanyaan dan issue yang muncul.
            </p>
          </div>
        </div>

        <!-- USP 4: Quality Assurance -->
        <div class="usp-card group opacity-0">
          <div class="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-500 cursor-pointer overflow-hidden h-full">
            <div class="usp-glow"></div>
            
            <div class="icon-wrapper w-12 h-12 mb-5 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
              Quality Assurance
            </h3>
            
            <p class="text-gray-400 leading-relaxed text-sm">
              Setiap project melalui testing menyeluruh. Bug-free, responsive, dan optimized untuk performa terbaik.
            </p>
          </div>
        </div>

        <!-- USP 5: Competitive Pricing -->
        <div class="usp-card group opacity-0">
          <div class="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-500 cursor-pointer overflow-hidden h-full">
            <div class="usp-glow"></div>
            
            <div class="icon-wrapper w-12 h-12 mb-5 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-400/30">
              <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
              Competitive Pricing
            </h3>
            
            <p class="text-gray-400 leading-relaxed text-sm">
              Harga yang kompetitif dengan kualitas premium. Transparansi biaya tanpa hidden cost yang merugikan.
            </p>
          </div>
        </div>

        <!-- USP 6: Post-Launch Support -->
        <div class="usp-card group opacity-0">
          <div class="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-500 cursor-pointer overflow-hidden h-full">
            <div class="usp-glow"></div>
            
            <div class="icon-wrapper w-12 h-12 mb-5 flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-400/30">
              <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
              Post-Launch Support
            </h3>
            
            <p class="text-gray-400 leading-relaxed text-sm">
              Dukungan berkelanjutan setelah website launch. Training, maintenance, dan update sesuai kebutuhan bisnis Anda.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Animate Section Header
  const headerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-header',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    }
  })

  headerTimeline
    .to('.badge-label', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    })
    .to('.headline', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    .to('.description', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')

  // Animate Stats Cards
  gsap.to('.stat-card', {
    scrollTrigger: {
      trigger: '.stats-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    onComplete: () => {
      // Start counter animation after cards appear
      animateCounters()
    }
  })

  // Counter Animation Function
  function animateCounters() {
    const counters = document.querySelectorAll('.counter')
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'))
      
      gsap.to(counter, {
        innerHTML: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerHTML: 1 },
        onUpdate: function() {
          counter.innerHTML = Math.ceil(counter.innerHTML)
        }
      })
    })
  }

  // Animate USP Cards
  gsap.to('.usp-card', {
    scrollTrigger: {
      trigger: '.usp-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out'
  })

  // Hover Animations for USP Cards
  const uspCards = document.querySelectorAll('.usp-card')
  
  uspCards.forEach(card => {
    const cardInner = card.querySelector('div')
    const icon = card.querySelector('.icon-wrapper')
    const glow = card.querySelector('.usp-glow')
    
    card.addEventListener('mouseenter', () => {
      gsap.to(cardInner, {
        y: -8,
        scale: 1.02,
        duration: 0.4,
        ease: 'power2.out'
      })
      
      gsap.to(icon, {
        scale: 1.1,
        rotation: 5,
        duration: 0.4,
        ease: 'back.out(1.7)'
      })

      gsap.to(glow, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    })
    
    card.addEventListener('mouseleave', () => {
      gsap.to(cardInner, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
      
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'back.out(1.7)'
      })

      gsap.to(glow, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out'
      })
    })
  })

  // Hover Animations for Stat Cards
  const statCards = document.querySelectorAll('.stat-wrapper')
  
  statCards.forEach(card => {
    const glow = card.querySelector('.stat-glow')
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -5,
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      })

      gsap.to(glow, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })

      gsap.to(glow, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })

  // Floating animation for gradient orbs
  gsap.to('.gradient-orb-1', {
    x: 50,
    y: -50,
    scale: 1.2,
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.gradient-orb-2', {
    x: -60,
    y: 60,
    scale: 0.9,
    duration: 25,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  // Refresh ScrollTrigger
  ScrollTrigger.refresh()
})
</script>

<style scoped>
.why-choose-section {
  position: relative;
}

/* Initial states */
.badge-label,
.headline,
.description,
.stat-card,
.usp-card {
  transform: translateY(40px);
}

/* Background Gradient Orbs */
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
  pointer-events: none;
}

.gradient-orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, rgba(6, 182, 212, 0) 70%);
  top: 10%;
  right: -10%;
}

.gradient-orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0) 70%);
  bottom: 10%;
  left: -10%;
}

/* Stat Card Glow */
.stat-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3));
  border-radius: 1rem;
  opacity: 0;
  filter: blur(20px);
  z-index: -1;
  transition: opacity 0.3s ease;
}

/* USP Card Glow */
.usp-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2));
  border-radius: 1rem;
  opacity: 0;
  filter: blur(15px);
  z-index: -1;
  transition: opacity 0.4s ease;
}

/* Counter Number Styling */
.stat-number {
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

/* Card Transitions */
.stat-wrapper,
.usp-card > div {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Icon Wrapper */
.icon-wrapper {
  transition: all 0.3s ease;
}

/* Responsive */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .stat-wrapper {
    padding: 1.5rem;
  }
  
  .usp-grid {
    grid-template-columns: 1fr;
  }
}
</style>