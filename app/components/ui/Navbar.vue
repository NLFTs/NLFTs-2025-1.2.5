<template>
  <div class="fixed top-0 left-0 w-full z-[500] px-10 pt-8 transition-all duration-500">
    <nav 
      class="max-w-7xl mx-auto flex items-center justify-between relative"
      @mouseleave="closeDropdown"
    >
      <NuxtLink to="/" class="group relative z-10 flex items-center">
        <span class="text-2xl font-black tracking-tighter text-white uppercase italic">
          NLFT<span class="text-blue-600 transition-colors group-hover:text-white">s</span>
        </span>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 z-10">
        <div 
          v-for="item in navLinks" 
          :key="item.name"
          class="relative"
          @mouseenter="openDropdown(item.name)"
        >
          <button 
            class="px-6 py-2 font-mono text-[11px] tracking-[0.25em] uppercase transition-all duration-300 relative"
            :class="activeDropdown === item.name ? 'text-white' : 'text-slate-400 hover:text-white'"
          >
            {{ item.name }}
            <div 
              v-if="activeDropdown === item.name" 
              class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"
            ></div>
          </button>
        </div>
      </div>

      <div class="relative z-10">
        <button 
          class="group relative overflow-hidden px-6 py-2 border border-white/10 hover:border-blue-500 transition-colors duration-500"
        >
          <div class="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span class="relative text-[10px] font-bold text-white uppercase tracking-[0.2em]">
            Entry.fts
          </span>
        </button>
      </div>

      <Transition @enter="onEnter" @leave="onLeave">
        <div 
          v-if="activeDropdown" 
          class="absolute top-12 left-0 w-full pt-6 pointer-events-auto"
        >
          <div class="bg-[#05070a]/95 backdrop-blur-3xl border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.7)] overflow-hidden">
            <div class="grid grid-cols-12 min-h-[300px]">
              
              <div class="col-span-4 p-10 bg-white/[0.02] border-r border-white/5 flex flex-col justify-between">
                <div>
                  <div class="text-blue-500 font-mono text-[9px] tracking-[0.4em] uppercase mb-3">System_Access</div>
                  <h3 class="text-5xl font-black italic text-white uppercase leading-none">{{ activeDropdown }}</h3>
                </div>
                <p class="text-slate-500 font-mono text-[9px] uppercase tracking-widest italic opacity-50">
                  // secure_connection_established
                </p>
              </div>

              <div class="col-span-8 p-10 grid grid-cols-2 gap-8">
                <NuxtLink 
                  v-for="sub in menuData[activeDropdown]" 
                  :key="sub.title"
                  class="group/item flex gap-5 transition-all duration-300"
                >
                  <div class="w-12 h-12 shrink-0 bg-blue-600/5 flex items-center justify-center border border-white/5 text-blue-500 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:border-blue-400 transition-all duration-500">
                    <UIcon :name="sub.icon" class="w-6 h-6" />
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-sm uppercase tracking-tight group-hover/item:text-blue-400 transition-colors">{{ sub.title }}</h4>
                    <p class="text-slate-500 text-[11px] mt-1 leading-relaxed">{{ sub.desc }}</p>
                  </div>
                </NuxtLink>
              </div>

            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeDropdown = ref(null)

const navLinks = [
  { name: 'Home' },
  { name: 'Docs' },
  { name: 'Tim' }
]

const menuData = {
  Home: [
    { title: 'Overview', desc: 'Visi teknologi masa depan NLFTs.', icon: 'i-heroicons-globe-alt' },
    { title: 'Community', desc: 'Hub kolaborasi dev Indonesia.', icon: 'i-heroicons-chat-bubble-left-right' }
  ],
  Docs: [
    { title: 'C++ Module', desc: 'Optimasi engine tingkat rendah.', icon: 'i-heroicons-command-line' },
    { title: 'Format .fts', desc: 'Struktur data eksklusif kami.', icon: 'i-heroicons-document-magnifying-glass' }
  ],
  Tim: [
    { title: 'Core Devs', desc: 'Insinyur di balik sistem.', icon: 'i-heroicons-user-group' },
    { title: 'Careers', desc: 'Bergabung dengan ekosistem kami.', icon: 'i-heroicons-briefcase' }
  ]
}

const openDropdown = (name) => {
  activeDropdown.value = name
}

const closeDropdown = () => {
  activeDropdown.value = null
}

const onEnter = async (el, done) => {
  const { default: gsap } = await import('gsap')
  gsap.fromTo(el, 
    { opacity: 0, y: 15 }, 
    { opacity: 1, y: 0, duration: 0.4, ease: 'power4.out', onComplete: done }
  )
}

const onLeave = async (el, done) => {
  const { default: gsap } = await import('gsap')
  gsap.to(el, 
    { opacity: 0, y: 10, duration: 0.2, ease: 'power2.in', onComplete: done }
  )
}
</script>