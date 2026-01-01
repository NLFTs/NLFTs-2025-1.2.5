<template>
  <section class="tech-stack-section relative py-20 md:py-32 overflow-hidden">
    
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="tech-grid-pattern"></div>
      <div class="floating-particles">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="section-header text-center mb-16 max-w-3xl mx-auto">
        <div class="badge-label mb-4 opacity-0">
          <span class="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-sm font-medium backdrop-blur-sm">
            💻 Tech Stack
          </span>
        </div>
        
        <h2 class="headline text-4xl md:text-5xl font-bold text-white mb-6 opacity-0">
          Teknologi yang
          <span class="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Kami Kuasai</span>
        </h2>
        
        <p class="description text-lg text-gray-400 leading-relaxed opacity-0">
          Menggunakan tools dan framework modern untuk membangun website yang powerful, scalable, dan future-proof.
        </p>
      </div>

      <!-- Category Tabs -->
      <div class="category-tabs flex flex-wrap justify-center gap-4 mb-12 opacity-0">
        <button 
          v-for="(category, index) in categories" 
          :key="index"
          @click="activeCategory = category.id"
          :class="[
            'category-tab px-6 py-3 rounded-lg font-semibold transition-all duration-300',
            activeCategory === category.id 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
              : 'bg-slate-800/40 text-gray-400 border border-slate-700 hover:border-purple-500/50 hover:text-white'
          ]"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Tech Grid -->
      <div class="tech-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        
        <div 
          v-for="(tech, index) in filteredTechs" 
          :key="index"
          class="tech-card opacity-0"
        >
          <div class="tech-wrapper group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 cursor-pointer overflow-hidden aspect-square flex flex-col items-center justify-center">
            <div class="tech-glow"></div>
            
            <!-- Tech Icon/Logo using nuxt-icon -->
            <div class="tech-icon mb-3 group-hover:scale-110 transition-transform duration-300">
              <Icon :name="tech.icon" class="w-12 h-12 md:w-14 md:h-14" :style="{ color: tech.color }" />
            </div>
            
            <!-- Tech Name -->
            <div class="tech-name text-xs md:text-sm font-semibold text-white text-center">
              {{ tech.name }}
            </div>
            
            <!-- Hover Tooltip -->
            <div class="tech-tooltip absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-purple-500/30">
              {{ tech.name }}
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const activeCategory = ref('all')

const categories = [
  { id: 'all', name: 'All Technologies' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'design', name: 'Design' },
  { id: 'tools', name: 'Tools' }
]

// Tech stack dengan icon dari Iconify (via nuxt-icon)
// Format: 'logos:technology-name' atau 'simple-icons:technology-name'
const techs = [
  // Frontend
  { name: 'Vue.js', icon: 'logos:vue', color: '#42b883', category: 'frontend' },
  { name: 'Nuxt.js', icon: 'logos:nuxt-icon', color: '#00DC82', category: 'frontend' },
  { name: 'React', icon: 'logos:react', color: '#61DAFB', category: 'frontend' },
  { name: 'Next.js', icon: 'logos:nextjs-icon', color: '#000000', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', color: '#06B6D4', category: 'frontend' },
  { name: 'JavaScript', icon: 'logos:javascript', color: '#F7DF1E', category: 'frontend' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', color: '#3178C6', category: 'frontend' },
  { name: 'HTML5', icon: 'logos:html-5', color: '#E34F26', category: 'frontend' },
  { name: 'CSS3', icon: 'logos:css-3', color: '#1572B6', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: 'logos:nodejs-icon', color: '#339933', category: 'backend' },
  { name: 'Express', icon: 'simple-icons:express', color: '#FFFFFF', category: 'backend' },
  { name: 'Laravel', icon: 'logos:laravel', color: '#FF2D20', category: 'backend' },
  { name: 'PHP', icon: 'logos:php', color: '#777BB4', category: 'backend' },
  { name: 'MongoDB', icon: 'logos:mongodb-icon', color: '#47A248', category: 'backend' },
  { name: 'MySQL', icon: 'logos:mysql-icon', color: '#4479A1', category: 'backend' },
  { name: 'PostgreSQL', icon: 'logos:postgresql', color: '#4169E1', category: 'backend' },
  { name: 'Redis', icon: 'logos:redis', color: '#DC382D', category: 'backend' },
  
  // Design
  { name: 'Figma', icon: 'logos:figma', color: '#F24E1E', category: 'design' },
  { name: 'Adobe XD', icon: 'logos:adobe-xd', color: '#FF61F6', category: 'design' },
  { name: 'Photoshop', icon: 'logos:adobe-photoshop', color: '#31A8FF', category: 'design' },
  { name: 'Illustrator', icon: 'logos:adobe-illustrator', color: '#FF9A00', category: 'design' },
  
  // Tools
  { name: 'Git', icon: 'logos:git-icon', color: '#F05032', category: 'tools' },
  { name: 'GitHub', icon: 'logos:github-icon', color: '#FFFFFF', category: 'tools' },
  { name: 'VS Code', icon: 'logos:visual-studio-code', color: '#007ACC', category: 'tools' },
  { name: 'Postman', icon: 'logos:postman-icon', color: '#FF6C37', category: 'tools' },
  { name: 'Docker', icon: 'logos:docker-icon', color: '#2496ED', category: 'tools' },
  { name: 'Firebase', icon: 'logos:firebase', color: '#FFCA28', category: 'tools' },
  { name: 'Vercel', icon: 'logos:vercel-icon', color: '#FFFFFF', category: 'tools' },
  { name: 'npm', icon: 'logos:npm-icon', color: '#CB3837', category: 'tools' },
]

const filteredTechs = computed(() => {
  if (activeCategory.value === 'all') {
    return techs
  }
  return techs.filter(tech => tech.category === activeCategory.value)
})

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

  // Animate Category Tabs
  gsap.to('.category-tabs', {
    scrollTrigger: {
      trigger: '.category-tabs',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  })

  // Animate Tech Cards with wave effect
  animateTechGrid()

  // Hover animations for tech cards
  setupCardHoverAnimations()

  // Floating particles animation
  gsap.to('.particle-1', {
    x: 100,
    y: -80,
    rotation: 360,
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.particle-2', {
    x: -120,
    y: 100,
    rotation: -360,
    duration: 25,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.particle-3', {
    x: 80,
    y: 120,
    rotation: 180,
    duration: 22,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  gsap.to('.particle-4', {
    x: -90,
    y: -110,
    rotation: -180,
    duration: 28,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  ScrollTrigger.refresh()
})

function animateTechGrid() {
  gsap.to('.tech-card', {
    scrollTrigger: {
      trigger: '.tech-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    stagger: {
      amount: 1.2,
      from: 'start',
      grid: 'auto',
      ease: 'power2.inOut'
    },
    ease: 'back.out(1.2)'
  })
}

function setupCardHoverAnimations() {
  const cards = document.querySelectorAll('.tech-wrapper')
  
  cards.forEach(card => {
    const icon = card.querySelector('.tech-icon')
    const glow = card.querySelector('.tech-glow')
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      })
      
      gsap.to(icon, {
        scale: 1.2,
        rotation: 10,
        duration: 0.4,
        ease: 'back.out(1.7)'
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
      
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'back.out(1.7)'
      })

      gsap.to(glow, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  })
}

// Re-animate when category changes
watch(activeCategory, () => {
  gsap.fromTo('.tech-card',
    { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      stagger: {
        amount: 0.8,
        from: 'start',
        grid: 'auto',
        ease: 'power2.inOut'
      },
      ease: 'back.out(1.2)',
      onComplete: () => {
        setupCardHoverAnimations()
      }
    }
  )
})
</script>

<style scoped>
.tech-stack-section {
  position: relative;
}

/* Initial states */
.badge-label,
.headline,
.description,
.category-tabs,
.tech-card {
  transform: translateY(40px);
}

.tech-card {
  transform: translateY(40px) scale(0.8);
}

/* Background Grid Pattern */
.tech-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%);
}

/* Floating Particles */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.8));
  border-radius: 50%;
  opacity: 0.6;
}

.particle-1 {
  top: 20%;
  left: 10%;
}

.particle-2 {
  top: 60%;
  right: 15%;
}

.particle-3 {
  bottom: 30%;
  left: 20%;
}

.particle-4 {
  top: 40%;
  right: 25%;
}

/* Tech Card Glow */
.tech-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3));
  border-radius: 1rem;
  opacity: 0;
  filter: blur(20px);
  z-index: -1;
  transition: opacity 0.3s ease;
}

/* Tech Wrapper */
.tech-wrapper {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.tech-wrapper:hover {
  box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);
}

/* Tech Icon */
.tech-icon {
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.3));
}

/* Category Tab Active Animation */
.category-tab {
  position: relative;
}

.category-tab::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-tab:hover::before {
  opacity: 1;
}

/* Tooltip */
.tech-tooltip {
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  
  .tech-wrapper {
    padding: 1rem;
  }
  
  .category-tabs {
    gap: 0.5rem;
  }
  
  .category-tab {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>