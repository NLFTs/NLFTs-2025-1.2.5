<template>
  <section class="process-section relative py-20 md:py-32 overflow-hidden">
    
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="process-gradient"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="section-header text-center mb-20 max-w-3xl mx-auto">
        <div class="badge-label mb-4 opacity-0">
          <span class="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-sm font-medium backdrop-blur-sm">
            🚀 Our Process
          </span>
        </div>
        
        <h2 class="headline text-4xl md:text-5xl font-bold text-white mb-6 opacity-0">
          Bagaimana Kami
          <span class="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Bekerja?</span>
        </h2>
        
        <p class="description text-lg text-gray-400 leading-relaxed opacity-0">
          Proses yang terstruktur dan transparan dari konsultasi hingga launch. Setiap tahap dirancang untuk memastikan project Anda sukses.
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="timeline-container relative max-w-5xl mx-auto">
        
        <!-- Center Timeline Line -->
        <div class="timeline-line absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 via-cyan-500/50 to-blue-500/50 transform -translate-x-1/2 hidden md:block">
          <div class="timeline-progress absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-400 shadow-lg" style="height: 0%"></div>
        </div>

        <!-- Timeline Steps -->
        <div class="timeline-steps space-y-12 md:space-y-24">
          
          <!-- Step 1: Discovery -->
          <div class="timeline-step flex flex-col md:flex-row items-center gap-8 opacity-0">
            <!-- Content Left -->
            <div class="step-content w-full md:w-5/12 md:text-right order-2 md:order-1">
              <div class="step-card group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500">
                <div class="step-glow"></div>
                
                <div class="step-number text-emerald-400 text-sm font-bold mb-3 md:text-right">STEP 01</div>
                
                <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors md:text-right">
                  Discovery & Consultation
                </h3>
                
                <p class="text-gray-400 leading-relaxed mb-4 md:text-right">
                  Memahami kebutuhan bisnis Anda, target audience, dan goals yang ingin dicapai. Diskusi mendalam tentang visi dan ekspektasi project.
                </p>
                
                <div class="flex flex-wrap gap-2 md:justify-end">
                  <span class="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Requirements Gathering</span>
                  <span class="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Competitor Analysis</span>
                </div>
              </div>
            </div>
            
            <!-- Center Dot -->
            <div class="step-dot order-1 md:order-2 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 border-4 border-slate-900 flex items-center justify-center shadow-lg shadow-emerald-500/50 z-10">
              <Icon name="mdi:lightbulb-on" class="w-8 h-8 text-white" />
            </div>
            
            <!-- Spacer Right -->
            <div class="w-full md:w-5/12 order-3 md:order-3"></div>
          </div>

          <!-- Step 2: Planning -->
          <div class="timeline-step flex flex-col md:flex-row items-center gap-8 opacity-0">
            <!-- Spacer Left -->
            <div class="w-full md:w-5/12 order-3 md:order-1"></div>
            
            <!-- Center Dot -->
            <div class="step-dot order-1 md:order-2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-slate-900 flex items-center justify-center shadow-lg shadow-cyan-500/50 z-10">
              <Icon name="mdi:strategy" class="w-8 h-8 text-white" />
            </div>
            
            <!-- Content Right -->
            <div class="step-content w-full md:w-5/12 order-2 md:order-3">
              <div class="step-card group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500">
                <div class="step-glow"></div>
                
                <div class="step-number text-cyan-400 text-sm font-bold mb-3">STEP 02</div>
                
                <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  Planning & Strategy
                </h3>
                
                <p class="text-gray-400 leading-relaxed mb-4">
                  Membuat roadmap detail project, menentukan tech stack, arsitektur sistem, dan timeline pengerjaan yang realistis.
                </p>
                
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">Project Roadmap</span>
                  <span class="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">Tech Stack Selection</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: Design -->
          <div class="timeline-step flex flex-col md:flex-row items-center gap-8 opacity-0">
            <!-- Content Left -->
            <div class="step-content w-full md:w-5/12 md:text-right order-2 md:order-1">
              <div class="step-card group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500">
                <div class="step-glow"></div>
                
                <div class="step-number text-purple-400 text-sm font-bold mb-3 md:text-right">STEP 03</div>
                
                <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors md:text-right">
                  Design & Prototype
                </h3>
                
                <p class="text-gray-400 leading-relaxed mb-4 md:text-right">
                  Wireframing, UI/UX design, dan prototype interaktif. Revisi design hingga sesuai dengan ekspektasi sebelum masuk development.
                </p>
                
                <div class="flex flex-wrap gap-2 md:justify-end">
                  <span class="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">Wireframing</span>
                  <span class="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">UI/UX Design</span>
                </div>
              </div>
            </div>
            
            <!-- Center Dot -->
            <div class="step-dot order-1 md:order-2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-slate-900 flex items-center justify-center shadow-lg shadow-purple-500/50 z-10">
              <Icon name="mdi:palette" class="w-8 h-8 text-white" />
            </div>
            
            <!-- Spacer Right -->
            <div class="w-full md:w-5/12 order-3 md:order-3"></div>
          </div>

          <!-- Step 4: Development -->
          <div class="timeline-step flex flex-col md:flex-row items-center gap-8 opacity-0">
            <!-- Spacer Left -->
            <div class="w-full md:w-5/12 order-3 md:order-1"></div>
            
            <!-- Center Dot -->
            <div class="step-dot order-1 md:order-2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 border-4 border-slate-900 flex items-center justify-center shadow-lg shadow-blue-500/50 z-10">
              <Icon name="mdi:code-tags" class="w-8 h-8 text-white" />
            </div>
            
            <!-- Content Right -->
            <div class="step-content w-full md:w-5/12 order-2 md:order-3">
              <div class="step-card group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500">
                <div class="step-glow"></div>
                
                <div class="step-number text-blue-400 text-sm font-bold mb-3">STEP 04</div>
                
                <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  Development & Coding
                </h3>
                
                <p class="text-gray-400 leading-relaxed mb-4">
                  Implementasi design menjadi kode yang clean, efisien, dan scalable. Regular update progress dan demo untuk feedback.
                </p>
                
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">Clean Code</span>
                  <span class="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">Agile Development</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 5: Testing -->
          <div class="timeline-step flex flex-col md:flex-row items-center gap-8 opacity-0">
            <!-- Content Left -->
            <div class="step-content w-full md:w-5/12 md:text-right order-2 md:order-1">
              <div class="step-card group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/50 transition-all duration-500">
                <div class="step-glow"></div>
                
                <div class="step-number text-orange-400 text-sm font-bold mb-3 md:text-right">STEP 05</div>
                
                <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors md:text-right">
                  Testing & QA
                </h3>
                
                <p class="text-gray-400 leading-relaxed mb-4 md:text-right">
                  Testing menyeluruh untuk memastikan semua fitur berfungsi perfect. Bug fixing, performance optimization, dan cross-browser testing.
                </p>
                
                <div class="flex flex-wrap gap-2 md:justify-end">
                  <span class="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/30">Bug Testing</span>
                  <span class="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/30">Performance</span>
                </div>
              </div>
            </div>
            
            <!-- Center Dot -->
            <div class="step-dot order-1 md:order-2 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-4 border-slate-900 flex items-center justify-center shadow-lg shadow-orange-500/50 z-10">
              <Icon name="mdi:bug-check" class="w-8 h-8 text-white" />
            </div>
            
            <!-- Spacer Right -->
            <div class="w-full md:w-5/12 order-3 md:order-3"></div>
          </div>

          <!-- Step 6: Launch -->
          <div class="timeline-step flex flex-col md:flex-row items-center gap-8 opacity-0">
            <!-- Spacer Left -->
            <div class="w-full md:w-5/12 order-3 md:order-1"></div>
            
            <!-- Center Dot -->
            <div class="step-dot order-1 md:order-2 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-4 border-slate-900 flex items-center justify-center shadow-lg shadow-green-500/50 z-10">
              <Icon name="mdi:rocket-launch" class="w-8 h-8 text-white" />
            </div>
            
            <!-- Content Right -->
            <div class="step-content w-full md:w-5/12 order-2 md:order-3">
              <div class="step-card group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/50 transition-all duration-500">
                <div class="step-glow"></div>
                
                <div class="step-number text-green-400 text-sm font-bold mb-3">STEP 06</div>
                
                <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                  Launch & Support
                </h3>
                
                <p class="text-gray-400 leading-relaxed mb-4">
                  Deployment ke production, monitoring performa, dan support berkelanjutan. Training dan dokumentasi lengkap untuk tim Anda.
                </p>
                
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-300 border border-green-500/30">Deployment</span>
                  <span class="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-300 border border-green-500/30">Ongoing Support</span>
                </div>
              </div>
            </div>
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

  // Animate Timeline Line Progress
  gsap.to('.timeline-progress', {
    scrollTrigger: {
      trigger: '.timeline-container',
      start: 'top 60%',
      end: 'bottom 40%',
      scrub: 1,
    },
    height: '100%',
    ease: 'none'
  })

  // Animate Timeline Steps
  const steps = gsap.utils.toArray('.timeline-step')
  
  steps.forEach((step, index) => {
    const isLeft = index % 2 === 0
    
    // Animate step content
    gsap.to(step, {
      scrollTrigger: {
        trigger: step,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    
    // Animate step dot
    const dot = step.querySelector('.step-dot')
    gsap.from(dot, {
      scrollTrigger: {
        trigger: step,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      scale: 0,
      duration: 0.6,
      delay: 0.3,
      ease: 'back.out(1.7)'
    })
  })

  // Hover animations
  const cards = document.querySelectorAll('.step-card')
  
  cards.forEach(card => {
    const glow = card.querySelector('.step-glow')
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
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

  ScrollTrigger.refresh()
})
</script>

<style scoped>
.process-section {
  position: relative;
}

/* Initial states */
.badge-label,
.headline,
.description {
  transform: translateY(40px);
}

.timeline-step {
  transform: translateX(0);
}

/* Background Gradient */
.process-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 50% at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 70%);
}

/* Timeline Line */
.timeline-line {
  opacity: 0.3;
}

.timeline-progress {
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
}

/* Step Card Glow */
.step-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2));
  border-radius: 1rem;
  opacity: 0;
  filter: blur(15px);
  z-index: -1;
  transition: opacity 0.3s ease;
}

/* Step Card */
.step-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* Step Dot Animation */
.step-dot {
  transition: all 0.3s ease;
}

.step-dot:hover {
  transform: scale(1.1);
}

/* Mobile Timeline */
@media (max-width: 768px) {
  .timeline-line {
    display: none;
  }
  
  .step-content {
    text-align: left !important;
  }
  
  .step-number,
  .step-card h3,
  .step-card p {
    text-align: left !important;
  }
  
  .step-card .flex {
    justify-content: flex-start !important;
  }
}
</style>