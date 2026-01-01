<template>
  <section class="services-section relative py-20 md:py-32 overflow-hidden">
    
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="grid-pattern"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="section-header text-center mb-16 max-w-3xl mx-auto">
        <div class="badge-label mb-4 opacity-0">
          <span class="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium backdrop-blur-sm">
            💼 Our Services
          </span>
        </div>
        
        <h2 class="headline text-4xl md:text-5xl font-bold text-white mb-6 opacity-0">
          Layanan Pengembangan Web
          <span class="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Profesional</span>
        </h2>
        
        <p class="description text-lg text-gray-400 leading-relaxed opacity-0">
          Solusi lengkap untuk kebutuhan digital Anda. Dari konsep hingga deployment, kami siap mewujudkan website impian Anda dengan teknologi terkini.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        <!-- Service Card 1: Custom Web Development -->
        <div class="service-card group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 cursor-pointer overflow-hidden opacity-0">
          <div class="card-glow"></div>
          
          <div class="icon-wrapper relative w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
            <svg class="icon w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
            Custom Web Development
          </h3>
          
          <p class="text-gray-400 leading-relaxed mb-4">
            Website custom sesuai kebutuhan bisnis Anda. Dari company profile hingga complex web platform dengan fitur-fitur canggih.
          </p>
          
          <div class="flex items-center text-blue-400 font-medium text-sm">
            <span class="mr-2">Learn More</span>
            <svg class="arrow w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        <!-- Service Card 2: E-Commerce Solutions -->
        <div class="service-card group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 cursor-pointer overflow-hidden opacity-0">
          <div class="card-glow"></div>
          
          <div class="icon-wrapper relative w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
            <svg class="icon w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
            E-Commerce Solutions
          </h3>
          
          <p class="text-gray-400 leading-relaxed mb-4">
            Toko online yang powerful dengan sistem pembayaran terintegrasi, inventory management, dan fitur marketing automation.
          </p>
          
          <div class="flex items-center text-cyan-400 font-medium text-sm">
            <span class="mr-2">Learn More</span>
            <svg class="arrow w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        <!-- Service Card 3: Web Application -->
        <div class="service-card group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 cursor-pointer overflow-hidden opacity-0">
          <div class="card-glow"></div>
          
          <div class="icon-wrapper relative w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30">
            <svg class="icon w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
            Web Application
          </h3>
          
          <p class="text-gray-400 leading-relaxed mb-4">
            Dashboard, CRM, atau sistem internal untuk meningkatkan efisiensi operasional bisnis Anda dengan teknologi modern.
          </p>
          
          <div class="flex items-center text-blue-400 font-medium text-sm">
            <span class="mr-2">Learn More</span>
            <svg class="arrow w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        <!-- Service Card 4: UI/UX Design -->
        <div class="service-card group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 cursor-pointer overflow-hidden opacity-0">
          <div class="card-glow"></div>
          
          <div class="icon-wrapper relative w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30">
            <svg class="icon w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
            UI/UX Design
          </h3>
          
          <p class="text-gray-400 leading-relaxed mb-4">
            Desain interface yang beautiful dan user experience yang seamless. Wireframing, prototyping, hingga design system lengkap.
          </p>
          
          <div class="flex items-center text-purple-400 font-medium text-sm">
            <span class="mr-2">Learn More</span>
            <svg class="arrow w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        <!-- Service Card 5: Maintenance & Support -->
        <div class="service-card group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 cursor-pointer overflow-hidden opacity-0">
          <div class="card-glow"></div>
          
          <div class="icon-wrapper relative w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30">
            <svg class="icon w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
            Maintenance & Support
          </h3>
          
          <p class="text-gray-400 leading-relaxed mb-4">
            Jaga website tetap optimal dengan maintenance rutin, bug fixing, security updates, dan technical support 24/7.
          </p>
          
          <div class="flex items-center text-green-400 font-medium text-sm">
            <span class="mr-2">Learn More</span>
            <svg class="arrow w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        <!-- Service Card 6: SEO & Optimization -->
        <div class="service-card group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 cursor-pointer overflow-hidden opacity-0">
          <div class="card-glow"></div>
          
          <div class="icon-wrapper relative w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-400/30">
            <svg class="icon w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
            SEO & Optimization
          </h3>
          
          <p class="text-gray-400 leading-relaxed mb-4">
            Tingkatkan ranking dan performa website Anda. SEO optimization, speed enhancement, dan conversion rate optimization.
          </p>
          
          <div class="flex items-center text-orange-400 font-medium text-sm">
            <span class="mr-2">Learn More</span>
            <svg class="arrow w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
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
  // Animate Section Header dengan ScrollTrigger yang lebih responsive
  const headerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-header',
      start: 'top 85%',
      end: 'top 50%',
      toggleActions: 'play none none reverse',
      markers: false, // Set true untuk debug
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

  // Animate Service Cards dengan ScrollTrigger individual per card
  const cards = gsap.utils.toArray('.service-card')
  
  cards.forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        end: 'top 60%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power3.out'
    })
  })

  // Card Hover Animations (sama seperti sebelumnya)
  cards.forEach(card => {
    const icon = card.querySelector('.icon')
    const arrow = card.querySelector('.arrow')
    const glow = card.querySelector('.card-glow')
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.4,
        ease: 'power2.out'
      })
      
      gsap.to(icon, {
        rotation: 360,
        scale: 1.1,
        duration: 0.6,
        ease: 'back.out(1.7)'
      })
      
      gsap.to(arrow, {
        x: 5,
        duration: 0.3,
        ease: 'power2.out'
      })

      gsap.to(glow, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    })
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
      
      gsap.to(icon, {
        rotation: 0,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)'
      })
      
      gsap.to(arrow, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      })

      gsap.to(glow, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out'
      })
    })
  })

  // Refresh ScrollTrigger after animations setup
  ScrollTrigger.refresh()
})
</script>

<style scoped>
.services-section {
  position: relative;
}

/* Initial state untuk animasi */
.badge-label,
.headline,
.description,
.service-card {
  transform: translateY(40px);
}

/* Grid Pattern Background */
.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%);
}

/* Card Glow Effect */
.card-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2));
  border-radius: 1rem;
  opacity: 0;
  filter: blur(20px);
  z-index: -1;
  transition: opacity 0.4s ease;
}

/* Icon Wrapper Animation */
.icon-wrapper {
  transition: all 0.3s ease;
}

.service-card:hover .icon-wrapper {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
}

/* Card Shadow on Hover */
.service-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);
}

/* Arrow Animation */
.arrow {
  transition: transform 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .services-grid {
    gap: 1.5rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
}
</style>