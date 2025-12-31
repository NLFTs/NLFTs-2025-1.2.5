<template>
  <Transition @enter="onEnter" @leave="onLeave">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4"
      @click.self="closeSearch"
    >
      <div class="absolute inset-0 bg-[#020617]/90 backdrop-blur-md"></div>

      <div 
        ref="modalRef"
        class="relative w-full max-w-2xl bg-[#0D1117] border border-white/10 shadow-[0_0_50px_rgba(0,85,255,0.2)] overflow-hidden"
      >
        <div class="absolute top-0 right-0 p-2 font-mono text-[10px] text-blue-500 opacity-50">SEARCH_ENGINE.fts</div>

        <div class="flex items-center px-6 py-4 border-b border-white/5">
          <UIcon name="i-heroicons-magnifying-glass" class="w-6 h-6 text-blue-500 mr-4" />
          <input 
            ref="inputRef"
            v-model="query"
            type="text"
            placeholder="Ketik perintah atau cari halaman..."
            class="w-full bg-transparent border-none text-white focus:ring-0 font-mono text-lg outline-none"
            @keydown.down.prevent="moveDown"
            @keydown.up.prevent="moveUp"
            @keydown.enter="executeSelection"
          />
          <button @click="closeSearch" class="text-slate-500 hover:text-white font-mono text-xs">ESC</button>
        </div>

        <div class="max-h-[400px] overflow-y-auto p-2 custom-scrollbar">
          <div v-if="filteredResults.length > 0">
            <div 
              v-for="(item, index) in filteredResults" 
              :key="item.path"
              :class="[
                'flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-200',
                selectedIndex === index ? 'bg-blue-600 text-white translate-x-1' : 'text-slate-400 hover:bg-white/5'
              ]"
              @mouseenter="selectedIndex = index"
              @click="goTo(item.path)"
            >
              <div class="flex items-center gap-4">
                <UIcon :name="item.icon" class="w-5 h-5" />
                <div class="flex flex-col">
                  <span class="font-bold text-sm uppercase tracking-tight">{{ item.name }}</span>
                  <span class="text-[10px] opacity-70 font-mono italic">{{ item.desc }}</span>
                </div>
              </div>
              <div v-if="selectedIndex === index" class="text-[10px] font-mono font-bold tracking-widest uppercase">ENTER_TO_RUN</div>
            </div>
          </div>
          
          <div v-else class="p-10 text-center flex flex-col items-center">
            <UIcon name="i-heroicons-exclamation-triangle" class="w-8 h-8 text-slate-700 mb-2" />
            <p class="text-slate-500 font-mono text-xs">MODUL_TIDAK_DITEMUKAN.fts</p>
          </div>
        </div>

        <div class="bg-black/40 px-6 py-3 flex justify-between items-center border-t border-white/5">
          <div class="flex gap-4 text-[9px] font-mono text-slate-500">
            <span><b class="text-slate-300">↑↓</b> NAVIGASI</span>
            <span><b class="text-slate-300">↵</b> EKSEKUSI</span>
          </div>
          <div class="text-[9px] font-mono text-blue-500 tracking-widest">NLFTS_OS_COMMANDER</div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isOpen = ref(false)
const query = ref('')
const selectedIndex = ref(0)
const inputRef = ref(null)
const modalRef = ref(null)

const results = [
  { name: 'Home', path: '/', icon: 'i-heroicons-home', desc: 'Landing Page Utama NLFTs' },
  { name: 'Documentation', path: '/docs', icon: 'i-heroicons-book-open', desc: 'Pusat Data .fts & C++/C#' },
  { name: 'Tim', path: '/tim', icon: 'i-heroicons-user-group', desc: 'Daftar Core Engineering' },
  { name: 'Komunitas', path: '/community', icon: 'i-heroicons-chat-bubble-left-right', desc: 'Programmer Hub' },
  { name: 'React Pixel', path: '/react-pixel', icon: 'i-heroicons-code-bracket', desc: 'Template React High-End' },
  { name: 'Vue Pixel', path: '/vue-pixel', icon: 'i-heroicons-fire', desc: 'Template Vue Ultra-Fast' },
]

const filteredResults = computed(() => {
  return results.filter(item => 
    item.name.toLowerCase().includes(query.value.toLowerCase())
  )
})

// Fungsi Shortcut Ctrl + K
const handleKeyDown = (e) => {
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault()
    isOpen.value = !isOpen.value
    if (isOpen.value) {
      nextTick(() => inputRef.value?.focus())
    }
  }
  if (e.key === 'Escape') closeSearch()
}

const closeSearch = () => {
  isOpen.value = false
  query.value = ''
  selectedIndex.value = 0
}

const moveDown = () => {
  if (selectedIndex.value < filteredResults.value.length - 1) selectedIndex.value++
}

const moveUp = () => {
  if (selectedIndex.value > 0) selectedIndex.value--
}

const executeSelection = () => {
  const target = filteredResults.value[selectedIndex.value]
  if (target) goTo(target.path)
}

const goTo = (path) => {
  navigateTo(path)
  closeSearch()
}

// Animasi GSAP
const onEnter = async (el, done) => {
  const { default: gsap } = await import('gsap')
  gsap.fromTo(el.querySelector('.relative'), 
    { opacity: 0, scale: 0.95, y: -20 },
    { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'expo.out', onComplete: done }
  )
}

const onLeave = async (el, done) => {
  const { default: gsap } = await import('gsap')
  gsap.to(el, { opacity: 0, duration: 0.2, onComplete: done })
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #1e40af;
}
</style>